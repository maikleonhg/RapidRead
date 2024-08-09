import React, { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";
import Slider from "@react-native-community/slider";

export default function Exercise8() {
  const [index, setIndex] = useState(0);
  const [wpm, setWpm] = useState(120); 
  const [running, setRunning] = useState(true);

  // 50 palabras aleatorias
  const text = `manzana plátano naranja mango fresa sandía piña uvas durazno pera limón lima aguacate kiwi cereza arándano frambuesa mora albaricoque ciruela nectarina maracuyá papaya granada pitahaya guayaba jackfruit lichis coco higo dátil caqui grosella arándano cereza mandarina calabacín pepino tomate pimiento zanahoria papa cebolla ajo brócoli espinaca col rizada lechuga repollo`;


  const words = text.split(" ");

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    const speedInMs = 60000 / wpm; 
    if (running) {
      interval = setInterval(() => {
        if (index < words.length - 2) {
          setIndex(index + 2);
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
        <Text style={{ fontSize: 24, textAlign: "center", marginTop: 10 }}>
          {words[index]}
        </Text>
        <Text style={{ fontSize: 50, color: "red" }}>X</Text>
        <Text style={{ fontSize: 24, textAlign: "center", marginTop: 10 }}>
          {words[index + 1]}
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
