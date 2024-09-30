import React, { useState } from "react";
import { Pressable, Text, ScrollView, StyleSheet, View, Button } from "react-native";
import ChapterCard from "../cards/ChapterCard";
import Slider from "@react-native-community/slider";
import { texts } from "../textx";
import ExerciseWrapper from "../ExerciseWrapper"; // El componente que renderiza el ejercicio

// Define el tipo de selectedExercise
type Exercise = {
  exerciseType: string;
  textContent: string;
};

export default function Capitulos() {
  const [wpm, setWpm] = useState(250);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const time = (14205/wpm).toFixed(1);

  const handleWpmChange = (value: number) => {
    setWpm(value);
  };

  const handleExerciseSelect = (exerciseType: string, textContent: string) => {
    setSelectedExercise({ exerciseType, textContent });
  };
  const handleBackToChapters = () => {
    setSelectedExercise(null); // Volver a los capítulos
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {selectedExercise ? (
        <View style={{ flex: 1, width: '100%' }}>
          <Button title="Volver a los capítulos" onPress={handleBackToChapters} />
        <ExerciseWrapper 
          exerciseType={selectedExercise.exerciseType}
          textContent={selectedExercise.textContent}
          wpm={wpm}
          onExerciseEnd={() => setSelectedExercise(null)} // Regresar al selector de capítulos cuando termine
        />
        </View>
      ) : (
        // Si no hay ejercicio seleccionado, mostramos los capítulos
        <ScrollView contentContainerStyle={styles.container}>
          <View style={{ position: "absolute", width: "110%"}}>
            <Text style={{ textAlign: "center" }}>Velocidad: {wpm} WPM {"     "}Timepo: {time}</Text>
            <Slider 
              minimumValue={60}
              maximumValue={600}
              step={10}
              value={wpm}
              onValueChange={handleWpmChange}
            />
          </View>
          <Text style={styles.sectionTitle}>Lecciones de Estoicismo</Text>
          <ScrollView>
            <Pressable onPress={() => handleExerciseSelect("twoWords", texts.PrologoF1.content)}>
              <ChapterCard
                title="Prologo"
                wordCount={texts.PrologoF1.wordCount}
                wpm={wpm}
                exerciseType="twoWords"
                textContent={texts.PrologoF1.content}
              />
            </Pressable>
            <Pressable onPress={() => handleExerciseSelect("exercise1", texts.Capitulo1F1.content)}>
              <ChapterCard
                title="Capitulo 1"
                wordCount={texts.Capitulo1F1.wordCount}
                wpm={wpm}
                exerciseType="exercise1"
                textContent={texts.Capitulo1F1.content}
              />
            </Pressable>
            <Pressable onPress={() => handleExerciseSelect("exercise2", texts.Capitulo2F1.content)}>
              <ChapterCard
                title="Capitulo 2"
                wordCount={texts.Capitulo2F1.wordCount}
                wpm={wpm}
                exerciseType="exercise2"
                textContent={texts.Capitulo2F1.content}
              />
            </Pressable>
            <Pressable onPress={() => handleExerciseSelect("exercise3", texts.Capitulo3F1.content)}>
              <ChapterCard
                title="Capitulo 3"
                wordCount={texts.Capitulo3F1.wordCount}
                wpm={wpm}
                exerciseType="exercise3"
                textContent={texts.Capitulo3F1.content}
              />
            </Pressable>
            <Pressable onPress={() => handleExerciseSelect("twoWords", texts.Capitulo4F1.content)}>
              <ChapterCard
                title="Capitulo 4"
                wordCount={texts.Capitulo4F1.wordCount}
                wpm={wpm}
                exerciseType="twoWords"
                textContent={texts.Capitulo4F1.content}
              />
            </Pressable>
            <Pressable onPress={() => handleExerciseSelect("twoWords", texts.Capitulo5F1.content)}>
              <ChapterCard
                title="Capitulo 5"
                wordCount={texts.Capitulo5F1.wordCount}
                wpm={wpm}
                exerciseType="twoWords"
                textContent={texts.Capitulo5F1.content}
              />
            </Pressable>
            <Pressable onPress={() => handleExerciseSelect("twoWords", texts.Capitulo6F1.content)}>
              <ChapterCard
                title="Capitulo 6"
                wordCount={texts.Capitulo6F1.wordCount}
                wpm={wpm}
                exerciseType="twoWords"
                textContent={texts.Capitulo6F1.content}
              />
            </Pressable>
            <Pressable onPress={() => handleExerciseSelect("twoWords", texts.Capitulo7F1.content)}>
              <ChapterCard
                title="Capitulo 7"
                wordCount={texts.Capitulo7F1.wordCount}
                wpm={wpm}
                exerciseType="twoWords"
                textContent={texts.Capitulo7F1.content}
              />
            </Pressable>
            <Pressable onPress={() => handleExerciseSelect("twoWords", texts.EpilogoF1.content)}>
              <ChapterCard
                title="Epilogo"
                wordCount={texts.EpilogoF1.wordCount}
                wpm={wpm}
                exerciseType="twoWords"
                textContent={texts.EpilogoF1.content}
              />
            </Pressable>
          </ScrollView>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
});
