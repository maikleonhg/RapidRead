import React, { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";
import Slider from "@react-native-community/slider";
import {texts} from '../../components/textx';

export default function Exercise1() {
  const [index, setIndex] = useState(0);
  const [wpm, setWpm] = useState(120); 
  const [running, setRunning] = useState(true);
  const text = texts.text1;

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
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 50, color: "red" }}>X</Text>
        <Text style={{ fontSize: 24, textAlign: "center", marginTop: 10 }}>
          {words[index]}
        </Text>
      </View>
      <View style={{ position: "absolute", bottom: 100, width: "80%" }}>
        <Text style={{ textAlign: "center" }}>Velocidad: {wpm} WPM</Text>
        <Slider
          minimumValue={60}
          maximumValue={600}
          step={10}
          value={wpm}
          onValueChange={handleWpmChange}
        />
      </View>
      <View style={{ position: "absolute", bottom: 50, width: "80%" }}>
        <Button title="Reiniciar" onPress={handleRestart} />
      </View>
    </View>
  );
}
