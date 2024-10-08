import React, { useState, useEffect } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

export default function Exercise3() {
  const [index, setIndex] = useState(0);
  const [wpm, setWpm] = useState(120); 
  const [running, setRunning] = useState(true);
  const text = `El comienzo del conflicto se suele situar en el 1 de septiembre de 1939, con la invasión alemana de Polonia, cuando Hitler se decidió a la incorporación de una de sus reivindicaciones expansionistas más delicadas: El Corredor Polaco, que implicaba la invasión de la mitad occidental de Polonia; la mitad oriental, junto con Estonia, Letonia y Lituania fue ocupada por la Unión Soviética, mientras que Finlandia logró mantener su independencia de los soviéticos (guerra de Invierno). El Reino Unido y Francia le declararon la guerra a Alemania, que esperaban como una repetición de la guerra de trincheras («guerra de mentira») para la que habían tomado toda clase de precauciones (línea Maginot) que demostraron ser del todo inútiles. Las maniobras espectaculares de la blitzkrieg («guerra relámpago») proporcionaron en pocos meses a Alemania el control de Noruega, Dinamarca, Países Bajos, Bélgica y la propia Francia, mientras que el ejército británico escapaba in extremis desde las playas de Dunkerque durante la batalla de Francia. La mayor parte del continente europeo estaba ocupado por el ejército alemán o por sus aliados, entre los que destacaba la Italia fascista, cuya aportación militar no fue muy significativa (batalla de los Alpes, guerra greco-italiana).`;

  const words = text.split(" ");

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    const speedInMs = 60000 / wpm; 
    if (running) {
      interval = setInterval(() => {
        if (index < words.length - 1) {
          setIndex(index + 1);
        } else {
          clearInterval(interval);
        }
      }, speedInMs);
    }

    return () => clearInterval(interval);
  }, [index, running, wpm]);

  const handleWpmChange = (value: number) => {
    setWpm(value);
  };

  const handleRestart = () => {
    setIndex(0);
    setRunning(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.cross}>X</Text>
      <View style={styles.wordContainer}>
        <View style={styles.textWrapper}>
          <Text style={styles.word}>{words[index]}</Text>
        </View>
      </View>
      <View style={styles.sliderContainer}>
        <Text style={{ textAlign: "center" }}>Velocidad: {wpm} WPM</Text>
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
  },
  wordContainer: {
    height: 50, // Altura visible de la palabra
    overflow: "hidden", // Oculta la parte inferior
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    bottom: 50, // Ajusta la posición de la palabra para que no se vea afectada por el recorte
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
    top: 240, // Ajusta la posición de la X roja para que no se vea afectada por el recorte
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
