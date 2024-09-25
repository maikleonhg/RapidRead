import React from "react";
import TwoWordsExercise from "../games/twoWords";
import Exercise1 from "../games/exercise1LR";
import { View, Text } from "react-native";

type ExerciseWrapperProps = {
  exerciseType: string;
  textContent: string;
  onExerciseEnd: () => void;
};

const ExerciseWrapper = ({ exerciseType, textContent, onExerciseEnd }: ExerciseWrapperProps) => {
  // Seleccionar el tipo de ejercicio
  switch (exerciseType) {
    case "twoWords":
      return <TwoWordsExercise textContent={textContent} onExerciseEnd={onExerciseEnd} />;
    case "exercise1":
        return <Exercise1 textContent={textContent} onExerciseEnd={onExerciseEnd} />;
    default:
      return <View>
                <Text>No se ha seleccionado un ejercicio válido.</Text>
            </View>;
  }
};
export default ExerciseWrapper;
