import React, { useState, useEffect } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

type Exercise3Props = {
  textContent: string;
  wpm: number;
  onExerciseEnd: () => void;
};

export default function Exercise1({ textContent, wpm, onExerciseEnd }: Exercise3Props) {
  const [index, setIndex] = useState(0);
  const [wpmx, setWpm] = useState(wpm); 
  const [running, setRunning] = useState(false);
  const [countdown, setCountdown] = useState(3); // Nuevo estado para el contador
  const [countdownStarted, setCountdownStarted] = useState(false);
  const words = textContent.split(" ");

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

  return (
    <View style={styles.container}>
      {countdown > 0 ? (
        // Mostrar el contador de 3 segundos antes de comenzar el ejercicio
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 80, color: "green" }}>{countdown}</Text>
        </View>
      ) : (
        // Contenedor para la X y la palabra
        <View style={styles.wordWrapper}>
          <Text style={styles.cross}>X</Text>
          <View style={styles.wordContainer}>
            <View style={styles.textWrapper}>
              <Text style={styles.word}>{words[index]}</Text>
            </View>
          </View>
        </View>
      )}
  
      <View style={styles.sliderContainer}>
        <Text style={{ textAlign: "center" }}>Velocidad: {wpmx} WPM</Text>
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
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    wordWrapper: {
      position: "relative", // Relativa para que la "X" y la palabra se alineen
      justifyContent: "center",
      alignItems: "center",
      height: 20, // Altura suficiente para contener la "X" y la palabra
    },
    wordContainer: {
      height: 50, // Altura visible de la palabra
      overflow: "hidden", // Oculta la parte inferior de la palabra
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    textWrapper: {
      height: 100, // Altura del contenedor de texto para permitir recorte
      justifyContent: "center",
      alignItems: "center", // Centra la palabra horizontalmente
    },
    word: {
      fontSize: 24,
      textAlign: "center",
      marginTop: 40, // Desplaza hacia arriba para mostrar solo la mitad superior
    },
    cross: {
      fontSize: 50,
      color: "red",
      position: "absolute",
      top: -40, // Ajusta la posición para que esté justo encima de la palabra
      zIndex: 1, // Asegura que la "X" esté encima de la palabra
    },
    sliderContainer: {
      position: "absolute",
      bottom: 100,
      width: "80%",
    },
    buttonContainer: {
      position: "absolute",
      bottom: 50,
      width: "80%",
    },
  });
  