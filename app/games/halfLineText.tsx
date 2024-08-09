import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const HalfLineText: React.FC<{ text: string }> = ({ text }) => {
  const [containerWidth, setContainerWidth] = useState<number | null>(null);

  const splitTextIntoLines = (text: string, lineWidth: number): string[] => {
    const words = text.split(" ");
    const lines: string[] = [];
    let currentLine = "";

    words.forEach((word) => {
      if (currentLine === "") {
        currentLine = word;
      } else {
        const width = currentLine.length * 8; // Aproximación basada en el tamaño de fuente
        if (width + word.length * 8 < lineWidth) {
          currentLine += " " + word;
        } else {
          lines.push(currentLine);
          currentLine = word;
        }
      }
    });

    if (currentLine) {
      lines.push(currentLine);
    }

    return lines;
  };

  const renderText = (lines: string[]) => {
    return lines.map((line, index) => {
      return (
        <Text key={index} style={styles.textLine}>
          {line}
        </Text>
      );
    });
  };

  const handleLayout = (event: any) => {
    const { width } = event.nativeEvent.layout;
    setContainerWidth(width);
  };

  const lines = containerWidth ? splitTextIntoLines(text, containerWidth) : [];

  return (
    <View onLayout={handleLayout} style={styles.container}>
      {renderText(lines)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 25,
    overflow: "hidden",
    height: Dimensions.get("window").height / 2, // Ajusta el alto según tu necesidad
  },
  textLine: {
    fontSize: 16,
    color: "black",
    lineHeight: 24,
    overflow: "hidden",
    height: 15.5, // Muestra solo la mitad superior
  },
});

export default HalfLineText;
