import React, { useState } from "react";
import { View, Button, Text, Modal } from "react-native";
import Exercise1 from "../games/exercise1LR"; // Importa tus ejercicios aquí
import Exercise2 from "../games/exercise2LR";
import {texts} from "../components/textx";
// Importa otros ejercicios si tienes más

export default function ExerciseSequence() {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const text = texts.text1.content;

  const exercises = [
    <Exercise1 onExerciseEnd={() => {}} wpm={250} textContent={text} />, 
    <Exercise2 onExerciseEnd={() => {}} wpm={250} textContent={text} />
  ];

  const handleNextExercise = () => {
    setShowPopup(false);
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
    } else {
      // Aquí puedes manejar el final de la secuencia
      alert("¡Has completado todos los ejercicios!");
    }
  };

  const handleExerciseEnd = () => {
    setShowPopup(true);
  };

  return (
    <View style={{ flex: 1 }}>
      {React.cloneElement(exercises[currentExercise], { onExerciseEnd: handleExerciseEnd })}
      
      <Modal
        transparent={true}
        visible={showPopup}
        animationType="slide"
        onRequestClose={() => setShowPopup(false)}
      >
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" }}>
          <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10 }}>
            <Text>¡Has completado el ejercicio {currentExercise + 1} de {exercises.length}!</Text>
            <Button title="Continuar" onPress={handleNextExercise} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
