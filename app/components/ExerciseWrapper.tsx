import React from "react";
import TwoWordsExercise from "../games/twoWords";
import Exercise1 from "../games/exercise1LR";
import Exercise2 from "../games/exercise2LR";
import Exercise3 from "../games/exercise3LR";
import { View, Text } from "react-native";

type ExerciseWrapperProps = {
  exerciseType: string;
  textContent: string;
  wpm: number;
  onExerciseEnd: () => void;
};

const ExerciseWrapper = ({ exerciseType, textContent, wpm, onExerciseEnd }: ExerciseWrapperProps) => {

  switch (exerciseType) {
    case "twoWords":
      return <TwoWordsExercise textContent={textContent} wpm={wpm} onExerciseEnd={onExerciseEnd} />;
    case "exercise1":
        return <Exercise1 textContent={textContent} wpm={wpm} onExerciseEnd={onExerciseEnd} />;
    case "exercise2":
        return <Exercise2 textContent={textContent} wpm={wpm} onExerciseEnd={onExerciseEnd} />;
    case "exercise3":
        return <Exercise3 textContent={textContent} wpm={wpm} onExerciseEnd={onExerciseEnd} />;
    default:
      return <View>
                <Text>No se ha seleccionado un ejercicio válido.</Text>
            </View>;
  }
};
export default ExerciseWrapper;
