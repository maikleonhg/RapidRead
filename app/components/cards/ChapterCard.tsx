import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

interface ChapterCardProps {
  title: string;
  wordCount: number;
  wpm: number;
  exerciseType: string;  // Tipo de ejercicio
  textContent: string;   // Contenido del texto
}

const ChapterCard = ({ title, wordCount, wpm }: ChapterCardProps) => {
  const readingTime = (wordCount / wpm).toFixed(1);

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.wpm}>Tiempo: {readingTime} minutos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("window").width - 40,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
    alignSelf: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    textAlign: "center",
  },
  wpm: {
    fontSize: 16,
    color: "#555",
  },
});

export default ChapterCard;
