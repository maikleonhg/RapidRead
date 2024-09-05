import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import * as DocumentPicker from 'expo-document-picker'; // Dependencia para subir PDF
import RapidRead from "../../games/rapidreadexe"; // Importar el componente RapidReadExe

export default function AgregaTuPDF() {
  const [inputText, setInputText] = useState(""); // Texto que se pega en el input
  const [uploadedFile, setUploadedFile] = useState<DocumentPicker.DocumentPickerResult | null>(null);
  const [showRapidRead, setShowRapidRead] = useState(false); // Estado para mostrar el componente RapidReadExe

  // Función para abrir el picker de documentos
  const handleUploadPDF = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
    });

    // Verifica si el usuario canceló la selección
    if (result && !result.canceled) {
      setUploadedFile(result); // Guardamos el archivo subido
      console.log("Uploaded file:", result);
    } else {
      console.log("El usuario canceló la selección");
    }
  };

  // Función para iniciar el RapidRead con el texto
  const handleRapidRead = () => {
    if (inputText.trim()) { // Verificar que el texto no esté vacío
      setShowRapidRead(true); // Cambia el estado para mostrar RapidReadExe
    } else {
      console.log("Por favor, ingresa un texto válido.");
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {showRapidRead ? (
        // Renderizar el componente RapidReadExe cuando showRapidRead sea true
        <RapidRead text={inputText} onExerciseEnd={() => setShowRapidRead(false)} />
      ) : (
        // Mostrar el formulario de subida de PDF y input de texto si no estamos en RapidReadExe
        <>
          {/* Botón para subir un PDF */}
          <TouchableOpacity
            onPress={handleUploadPDF}
            style={{
              backgroundColor: "#007bff",
              padding: 15,
              borderRadius: 5,
              marginBottom: 20,
            }}
          >
            <Text style={{ color: "#fff", textAlign: "center" }}>Subir PDF</Text>
          </TouchableOpacity>

          {/* Cuadro de texto */}
          <Text style={{ fontSize: 18, marginBottom: 10 }}>Pega tu texto aquí:</Text>
          <TextInput
            style={{
              height: 150,
              borderColor: "gray",
              borderWidth: 1,
              padding: 10,
              marginBottom: 20,
              textAlignVertical: "top",
            }}
            multiline
            placeholder="Pega aquí el texto que deseas leer rápidamente..."
            value={inputText}
            onChangeText={(text) => setInputText(text)}
          />

          {/* Botón RapidRead */}
          <Button title="RapidRead" onPress={handleRapidRead} />
        </>
      )}
    </View>
  );
}
