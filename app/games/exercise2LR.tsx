import React, { useState, useEffect } from "react";
import { Text, View, Button, StyleSheet, Dimensions } from "react-native";
import Slider from "@react-native-community/slider";

// Definir las propiedades que el componente va a aceptar
interface Exercise2Props {
  textContent: string;
  wpm: number;
  onExerciseEnd: () => void;
}

export default function Exercise2({ textContent, wpm, onExerciseEnd }: Exercise2Props) {
  const [index, setIndex] = useState(0);
  const [wpmx, setWpm] = useState(wpm); 
  const [running, setRunning] = useState(false);
  const [countdown, setCountdown] = useState(3); // Nuevo estado para el contador
  const [countdownStarted, setCountdownStarted] = useState(false);
  const words = textContent.split(" ");

  // Grid configuration
  const rows = 4;
  const cols = 3;
  const totalCells = rows * cols;

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height * 0.72;

  useEffect(() => {
    if (!countdownStarted) {
      // Comienza la cuenta regresiva cuando el componente se monta
      setCountdownStarted(true);
      const countdownInterval = setInterval(() => {
        setCountdown((prev) => {
          if (prev > 1) return prev - 1;
          clearInterval(countdownInterval);
          setRunning(true); // Inicia el ejercicio después de la cuenta regresiva
          return 0;
        });
      }, 1000);
    }
  }, [countdownStarted]);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    const speedInMs = 60000 / wpmx; 

    if (running) {
      interval = setInterval(() => {
        if (index < words.length - 1) {
          setIndex(index + 1);
        } else {
          clearInterval(interval);
          if (onExerciseEnd) onExerciseEnd(); // Llamar a onExerciseEnd cuando el ejercicio termine
        }
      }, speedInMs);
    }

    return () => clearInterval(interval);
  }, [index, running, wpmx]);

  const handleWpmChange = (value: number) => {
    setWpm(value);
  };

  const handleRestart = () => {
    setIndex(0);
    setCountdown(3);
    setRunning(false);
    setCountdownStarted(false);
  };

  const getGridPosition = (idx: number) => {
    const gridIndex = idx % totalCells; // Index dentro del ciclo de celdas
    const row = Math.floor(gridIndex / cols);
    const col = gridIndex % cols;

    return {
      top: (row * screenHeight) / rows,
      left: (col * screenWidth) / cols,
    };
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {countdown > 0 ? (
        // Mostrar el contador de 3 segundos antes de comenzar el ejercicio
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 80, color: "green" }}>{countdown}</Text>
        </View>
      ) : (
      <View style={styles.gridContainer}>
        <View style={[styles.gridItem, getGridPosition(index)]}>
          <Text style={styles.cross}>X</Text>
          <Text style={styles.word}>{words[index]}</Text>
        </View>
      </View>
      )}

      <View style={styles.sliderContainer}>
        <Text style={styles.sliderLabel}>Velocidad: {wpmx} WPM</Text>
        <Slider
          minimumValue={60}
          maximumValue={600}
          step={10}
          value={wpmx}
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
