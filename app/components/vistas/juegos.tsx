// src/screens/GamesPage.tsx
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Platform, Button} from 'react-native';
import GameCard from '../cards/GameCard';
import ExerciseWrapper from '../ExerciseWrapper'
import { texts } from '../../components/textx';

type Exercise = {
  exerciseType: string;
  textContent: string;
};

export default function GamesPage() {

  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
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
          <Button title="Volver a los juegos" onPress={handleBackToChapters} />
      <ExerciseWrapper
          exerciseType={selectedExercise.exerciseType}
          textContent={selectedExercise.textContent}
          wpm={250}
          onExerciseEnd={() => setSelectedExercise(null)} // Resetear después de terminar el ejercicio
        />
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.sectionTitle}>Precisión Ocular</Text>
          <ScrollView horizontal>
            <GameCard
              title="Palabra con la X"
              image={require('../../../assets/games/1.jpg')}
              exerciseType="exercise1" // Tipo de ejercicio asociado
              textContent={texts.text1.content}
              onPress={() => handleExerciseSelect("exercise1", texts.text1.content)}
            />
            <GameCard
              title="X en Movimiento"
              image={require('../../../assets/games/2.jpg')}
              exerciseType="exercise2" // Tipo de ejercicio asociado
              textContent={texts.text1.content}
              onPress={() => handleExerciseSelect("exercise2", texts.text1.content)}
            />
            <GameCard
              title="Palabra cortada"
              image={require('../../../assets/games/3.jpg')}
              exerciseType="exercise3" // Tipo de ejercicio asociado
              textContent={texts.text1.content}
              onPress={() => handleExerciseSelect("exercise3", texts.text1.content)}
            />
            <GameCard
              title="2 Palabras"
              image={require('../../../assets/games/4.jpg')}
              exerciseType="twoWords" // Tipo de ejercicio asociado
              textContent={texts.text1.content}
              onPress={() => handleExerciseSelect("twoWords", texts.text1.content)}
            />
          </ScrollView>
          <Text style={styles.sectionTitle}>Precisión Ocular</Text>
          <ScrollView horizontal>
            <GameCard
              title="Palabra con la X"
              image={require('../../../assets/games/1.jpg')}
              exerciseType="exercise1" // Tipo de ejercicio asociado
              textContent={texts.text1.content}
              onPress={() => handleExerciseSelect("exercise1", texts.text1.content)}
            />
            <GameCard
              title="X en Movimiento"
              image={require('../../../assets/games/2.jpg')}
              exerciseType="exercise2" // Tipo de ejercicio asociado
              textContent={texts.text1.content}
              onPress={() => handleExerciseSelect("exercise2", texts.text1.content)}
            />
            <GameCard
              title="Palabra cortada"
              image={require('../../../assets/games/3.jpg')}
              exerciseType="exercise3" // Tipo de ejercicio asociado
              textContent={texts.text1.content}
              onPress={() => handleExerciseSelect("exercise3", texts.text1.content)}
            />
            <GameCard
              title="2 Palabras"
              image={require('../../../assets/games/4.jpg')}
              exerciseType="twoWords" // Tipo de ejercicio asociado
              textContent={texts.text1.content}
              onPress={() => handleExerciseSelect("twoWords", texts.text1.content)}
            />
          </ScrollView>
          <Text style={styles.sectionTitle}>Precisión Ocular</Text>
          <ScrollView horizontal>
            <GameCard
              title="Palabra con la X"
              image={require('../../../assets/games/1.jpg')}
              exerciseType="exercise1" // Tipo de ejercicio asociado
              textContent={texts.text1.content}
              onPress={() => handleExerciseSelect("exercise1", texts.text1.content)}
            />
            <GameCard
              title="X en Movimiento"
              image={require('../../../assets/games/2.jpg')}
              exerciseType="exercise2" // Tipo de ejercicio asociado
              textContent={texts.text1.content}
              onPress={() => handleExerciseSelect("exercise2", texts.text1.content)}
            />
            <GameCard
              title="Palabra cortada"
              image={require('../../../assets/games/3.jpg')}
              exerciseType="exercise3" // Tipo de ejercicio asociado
              textContent={texts.text1.content}
              onPress={() => handleExerciseSelect("exercise3", texts.text1.content)}
            />
            <GameCard
              title="2 Palabras"
              image={require('../../../assets/games/4.jpg')}
              exerciseType="twoWords" // Tipo de ejercicio asociado
              textContent={texts.text1.content}
              onPress={() => handleExerciseSelect("twoWords", texts.text1.content)}
            />
          </ScrollView>
          <Text style={styles.sectionTitle}>Precisión Ocular</Text>
          <ScrollView horizontal>
            <GameCard
              title="Palabra con la X"
              image={require('../../../assets/games/1.jpg')}
              exerciseType="exercise1" // Tipo de ejercicio asociado
              textContent={texts.text1.content}
              onPress={() => handleExerciseSelect("exercise1", texts.text1.content)}
            />
            <GameCard
              title="X en Movimiento"
              image={require('../../../assets/games/2.jpg')}
              exerciseType="exercise2" // Tipo de ejercicio asociado
              textContent={texts.text1.content}
              onPress={() => handleExerciseSelect("exercise2", texts.text1.content)}
            />
            <GameCard
              title="Palabra cortada"
              image={require('../../../assets/games/3.jpg')}
              exerciseType="exercise3" // Tipo de ejercicio asociado
              textContent={texts.text1.content}
              onPress={() => handleExerciseSelect("exercise3", texts.text1.content)}
            />
            <GameCard
              title="2 Palabras"
              image={require('../../../assets/games/4.jpg')}
              exerciseType="twoWords" // Tipo de ejercicio asociado
              textContent={texts.text1.content}
              onPress={() => handleExerciseSelect("twoWords", texts.text1.content)}
            />
          </ScrollView>
        </ScrollView>
      )}
      </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  exampleImage: {
    width: 50,
    height: 50,
  },
});
