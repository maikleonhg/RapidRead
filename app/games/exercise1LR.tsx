import React, { useState, useEffect } from "react";
import { Text, View, Button, Animated } from "react-native";
import Slider from "@react-native-community/slider";

type ExerciseProps = {
  textContent: string;
  wpm: number;
  onExerciseEnd: () => void;
};

export default function Exercise1({ textContent, wpm, onExerciseEnd }: ExerciseProps) {
  const [index, setIndex] = useState(0);
  const [wpmx, setWpm] = useState(wpm);
  const [running, setRunning] = useState(false); // No comienza inmediatamente
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

  // Animación del contador (puedes cambiar el estilo según lo que prefieras)
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {countdown > 0 ? (
        // Mostrar el contador de 3 segundos antes de comenzar el ejercicio
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 80, color: "green" }}>{countdown}</Text>
        </View>
      ) : (
        // Una vez que la cuenta regresiva llega a 0, mostrar las palabras del ejercicio
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 50, color: "red" }}>X</Text>
          <Text style={{ fontSize: 24, textAlign: "center", marginTop: 10 }}>
            {words[index]}
          </Text>
        </View>
      )}

      <View style={{ position: "absolute", bottom: 100, width: "80%" }}>
        <Text style={{ textAlign: "center" }}>Velocidad: {wpmx} WPM</Text>
        <Slider
          minimumValue={60}
          maximumValue={600}
          step={10}
          value={wpmx}
          onValueChange={handleWpmChange}
        />
      </View>
      <View style={{ position: "absolute", bottom: 50, width: "80%" }}>
        <Button title="Reiniciar" onPress={handleRestart} />
      </View>
    </View>
  );
}
