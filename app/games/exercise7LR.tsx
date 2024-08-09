import React, { useState, useEffect } from "react";
import { Text, View, Button, StyleSheet, Dimensions } from "react-native";
import Slider from "@react-native-community/slider";

export default function Exercise4() {
  const [index, setIndex] = useState(0);
  const [wpm, setWpm] = useState(120); 
  const [running, setRunning] = useState(true);

 const text = "futbol coche calle mesa nubes bosque dulce queso amigo tabla ciudad playa libros trenes verde frutas tierra radio arte vida coches fiesta noche padres mundo barco gente campo juegos pena zona cielo casa alma letra guitarra humo casa sueño grupo calle oro oro tabla fiesta banco parque juego piedras palabras verano salidas clavo hoja";


  const words = text.split(" ");
  
  // Grid configuration
  const rows = 4;
  const cols = 3;
  const totalCells = rows * cols;

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height * 0.72;

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    const speedInMs = 60000 / (wpm / 4); // Ajusta el tiempo basado en el hecho de que mostramos 4 palabras a la vez

    if (running) {
      interval = setInterval(() => {
        setIndex(prevIndex => {
          const nextIndex = prevIndex + 4;

          // Si el siguiente índice excede el total de palabras, detener la animación
          if (nextIndex >= words.length) {
            clearInterval(interval);
            setRunning(false);
            return prevIndex; // Mantener en la última posición
          }

          return nextIndex;
        });
      }, speedInMs);
    }

    return () => clearInterval(interval);
  }, [wpm, running]);

  const handleWpmChange = (value: number) => {
    setWpm(value);
  };

  const handleRestart = () => {
    setIndex(0);
    setRunning(true);
  };

  const getGridPosition = (idx: number) => {
    const gridIndex = Math.floor(idx / 4) % totalCells; // Index dentro del ciclo de celdas
    const row = Math.floor(gridIndex / cols);
    const col = gridIndex % cols;
    return {
      top: (row * screenHeight) / rows,
      left: (col * screenWidth) / cols,
    };
  };

  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>
        <View style={[styles.gridItem, getGridPosition(index)]}>
            <View style={styles.firstRow}>
                <Text style={styles.word}>{words[index]}</Text>
                <Text style={styles.word}>{words[index + 1]}</Text>
            </View>
          <View style={styles.middleRow}>
            <Text style={styles.cross}>X</Text>
          </View>
            <View style={styles.lastRow}>
                <Text style={styles.word}>{words[index + 2]}</Text>
                <Text style={styles.word}>{words[index + 3]}</Text>
            </View>
        </View>
      </View>

      <View style={styles.sliderContainer}>
        <Text style={styles.sliderLabel}>Velocidad: {wpm} WPM</Text>
        <Slider
          minimumValue={60}
          maximumValue={600}
          step={10}
          value={wpm}
          onValueChange={handleWpmChange}
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button title="Reiniciar" onPress={handleRestart} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fff',
  },
  gridContainer: {
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  gridItem: {
    position: 'absolute',
    width: `${100 / 3}%`,
    height: `${100 / 4}%`,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  middleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  firstRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
lastRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    },
  word: {
    fontSize: 24,
    textAlign: 'center',
    width: `${100 / 3}%`,
  },
  cross: {
    fontSize: 50,
    color: "red",
    width: `${100 / 3}%`,
    textAlign: 'center',
  },
  sliderContainer: {
    position: "absolute",
    bottom: 100,
    width: "80%",
  },
  sliderLabel: {
    textAlign: "center",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    width: "80%",
  },
});
