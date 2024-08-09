import React from "react";
import { View, ScrollView } from "react-native";
import HalfLineText from "./halfLineText"; // Asegúrate de que la ruta es correcta

export default function GamePage() {
  const text = "La lectura rápida es una habilidad que ofrece múltiples beneficios, tanto a nivel personal como profesional. Uno de los principales beneficios es el aumento en la eficiencia del tiempo. En una sociedad donde el tiempo es un recurso valioso, ser capaz de leer y comprender grandes cantidades de información en menos tiempo es una ventaja significativa. La lectura rápida permite a las personas absorber material de manera más eficiente, lo cual es especialmente útil para estudiantes y profesionales que necesitan mantenerse al día con grandes volúmenes de lectura. Además, la capacidad de procesar información rápidamente también ayuda a reducir el estrés asociado con la acumulación de tareas de lectura.";

  return (
    <ScrollView>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <HalfLineText text={text} />
    </View>
    </ScrollView>
  );
}
