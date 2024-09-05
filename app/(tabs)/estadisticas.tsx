import React, { useEffect, useState } from 'react';
import { ScrollView, Text, StyleSheet, View, ActivityIndicator } from 'react-native';
import { getDocs, query, where, collection } from 'firebase/firestore';
import { db, auth } from '../firebase'; // Asegúrate de importar tu configuración de Firebase
import { Table, Row, Rows } from 'react-native-table-component';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import Svg, { Circle, Line, Text as SvgText } from 'react-native-svg';

interface Statistics {
  ppm: number;
  timestamp: Date;
}

export default function Estadisticas() {
  const [statistics, setStatistics] = useState<Statistics[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUserStatistics = async () => {
      const user = auth.currentUser;
      const uid = user?.uid;

      if (!uid) {
        console.error("El usuario no está autenticado");
        return;
      }

      const q = query(collection(db, "estadisticas"), where("uid", "==", uid));
      const querySnapshot = await getDocs(q);

      const statsArray: Statistics[] = querySnapshot.docs.map((doc) => ({
        ppm: doc.data().ppm,
        timestamp: doc.data().timestamp.toDate(),
      }));

      setStatistics(statsArray);
      setLoading(false);
    };

    fetchUserStatistics();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Cargando estadísticas...</Text>
      </View>
    );
  }

  const sortedStatistics = statistics.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());

  const chartData = {
    labels: statistics.map(stat => new Date(stat.timestamp).toLocaleDateString()),
    datasets: [
      {
        data: statistics.map(stat => stat.ppm)
      }
    ]
  };

  const meanPpm = 220; // Media global de ppm
  const lastPpm = statistics.length ? statistics[statistics.length - 1].ppm : meanPpm;
  const heightMultiplier = 100;

  const createGaussianData = () => {
    const width = Dimensions.get('window').width - 94;
    const height = 220;
    const numPoints = 80;
    const data = [];
    const stdDev = 50; // Desviación estándar arbitraria
    const mean = meanPpm;
    const step = width / numPoints;

    for (let i = 0; i < numPoints; i++) {
      const x = (i * (meanPpm + 3 * stdDev)) / numPoints;
      const y = (1 / (stdDev * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2));
      data.push({ x: i * step, y: y * height * heightMultiplier});
    }

    return data;
  };

  const gaussianData = createGaussianData();
  const lastPointX = (Dimensions.get('window').width - 94) * (lastPpm / (meanPpm + 3 * 50)); // Normalizado
  const lastPointY = (1 / (50 * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((lastPpm - meanPpm) / 50, 2)) * 220 * heightMultiplier;


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Estadísticas del Usuario</Text>

      {statistics.length === 0 ? (
        <Text style={styles.noStatsText}>Aún no hay estadísticas disponibles.</Text>
      ) : (
        <View style={styles.statItem}>
          <Table>
            <Row data={['Fecha', 'PPM']} style={{ height: 40, backgroundColor: '#f1f8ff' }} textStyle={styles.statText} />
            <Rows data={sortedStatistics.map(stat => [new Date(stat.timestamp).toLocaleDateString(), stat.ppm])} textStyle={styles.statText} />
          </Table>
        </View>
      )}

      <View style={styles.statItem}>
        <LineChart
          data={chartData}
          width={Dimensions.get('window').width - 40}
          height={220}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726'
            }
          }}
          bezier
        />
      </View>

      <View style={styles.statItem}>
          <Text style={styles.statText}>PPM en el mundo</Text>
      <Svg width={Dimensions.get('window').width - 40} height={220}>
    {/* Línea horizontal de base */}
    <Line
      x1="0"
      y1={220}
      x2={Dimensions.get('window').width - 40}
      y2={220}
      stroke="lightgray"
      strokeWidth="1"
    />
    {/* Línea vertical en el medio (220 ppm) */}
    <Line
      x1={(Dimensions.get('window').width - 40) / 2}
      y1="0"
      x2={(Dimensions.get('window').width - 40) / 2}
      y2="220"
      stroke="lightgray"
      strokeWidth="1"
    />
    {/* Datos de la campana de Gauss */}
    {gaussianData.map((point, index) => (
      <Circle
        key={index}
        cx={point.x}
        cy={220 - point.y}
        r="2"
        fill="rgba(134, 65, 244, 0.5)"
      />
    ))}
    {/* Punto rojo del último dato */}
    <Circle
      cx={lastPointX}
      cy={220 - lastPointY}
      r="6"
      fill="green"
    />
    {/* Línea punteada desde el punto rojo hacia abajo */}
    <Line
      x1={lastPointX}
      y1={220 - lastPointY}
      x2={lastPointX}
      y2={220}
      stroke="green"
      strokeWidth="1"
      strokeDasharray="4, 4"
    />
    {/* Texto del último dato */}
    <SvgText
      x={lastPointX}
      y={220 - lastPointY - 10}
      fill="black"
      fontSize="12"
      textAnchor="middle"
    >
      {lastPpm} ppm
    </SvgText>
    {/* Texto de la media */}
    <SvgText
      x={(Dimensions.get('window').width - 40) / 2}
      y={220 - 10}
      fill="black"
      fontSize="12"
      textAnchor="middle"
    >
      {meanPpm} ppm
    </SvgText>
  </Svg>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  noStatsText: {
    fontSize: 18,
    color: 'gray',
    marginTop: 20,
  },
  statItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  statText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
