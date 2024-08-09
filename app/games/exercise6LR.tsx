import React, { useState, useEffect } from "react";
import { Text, View, Button, StyleSheet, Dimensions } from "react-native";
import Slider from "@react-native-community/slider";

export default function Exercise2() {
  const [index, setIndex] = useState(0);
  const [wpm, setWpm] = useState(120); 
  const [running, setRunning] = useState(true);

  const text = `El comienzo del conflicto se suele situar en el 1 de septiembre de 1939, con la invasión alemana de Polonia, cuando Hitler se decidió a la incorporación de una de sus reivindicaciones expansionistas más delicadas: El Corredor Polaco, que implicaba la invasión de la mitad occidental de Polonia; la mitad oriental, junto con Estonia, Letonia y Lituania fue ocupada por la Unión Soviética, mientras que Finlandia logró mantener su independencia de los soviéticos (guerra de Invierno). El Reino Unido y Francia le declararon la guerra a Alemania, que esperaban como una repetición de la guerra de trincheras («guerra de mentira») para la que habían tomado toda clase de precauciones (línea Maginot) que demostraron ser del todo inútiles. Las maniobras espectaculares de la blitzkrieg («guerra relámpago») proporcionaron en pocos meses a Alemania el control de Noruega, Dinamarca, Países Bajos, Bélgica y la propia Francia, mientras que el ejército británico escapaba in extremis desde las playas de Dunkerque durante la batalla de Francia. La mayor parte del continente europeo estaba ocupado por el ejército alemán o por sus aliados, entre los que destacaba la Italia fascista, cuya aportación militar no fue muy significativa (batalla de los Alpes, guerra greco-italiana).`;

  const words = text.split(" ");
  
  // Grid configuration
  const rows = 4;
  const cols = 3;
  const totalCells = rows * cols;

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height * 0.72;

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    const speedInMs = 60000 / (wpm/2); // 2 palabras por iteración 

    if (running) {
        interval = setInterval(() => {
          setIndex(prevIndex => {
            const nextIndex = prevIndex + 2;
  
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
    const gridIndex = Math.floor(idx / 2) % totalCells; // Index dentro del ciclo de celdas
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
          <Text style={styles.cross}>X</Text>
          <Text style={styles.word}>
            {words[index] + ' ' + words[index + 1]}
          </Text>
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
  },
  word: {
    fontSize: 24,
    textAlign: 'center',
  },
  cross: {
    fontSize: 50,
    color: "red",
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