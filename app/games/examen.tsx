import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, Button, Alert } from "react-native";
import { texts } from '../components/textx';
import { auth, db, collection, addDoc } from '../firebase';

export default function Examen() {
    const text = texts.exam.content;
    const wordCount = 398;

    const [startTime, setStartTime] = useState<number | null>(null);
    const [ppm, setPpm] = useState<number | null>(null);

    useEffect(() => {
        // Set the start time when the component mounts
        setStartTime(Date.now());
    }, []);

    const handleFinish = async () => {
        if (startTime !== null) {
            const endTime = Date.now();
            const timeTakenInMinutes = (endTime - startTime) / 60000; 
            const calculatedPpm = wordCount / timeTakenInMinutes;
            setPpm(Number(calculatedPpm.toFixed(2)));

            // Verifica que el usuario esté autenticado antes de intentar escribir en Firestore
            const user = auth.currentUser;
            if (user) {
                try {
                    const uid = user.uid; // UID del usuario autenticado
                    const statsCollection = collection(db, "estadisticas"); // Referencia a la colección
                    await addDoc(statsCollection, {
                        uid: uid,
                        ppm: calculatedPpm,
                        timestamp: new Date(),
                    });
                    console.log("Datos guardados en Firestore");
                } catch (error) {
                    console.error("Error al guardar los datos en Firestore:", error);
                    Alert.alert("Error", "No se pudieron guardar los datos en Firestore.");
                }
            } else {
                console.log("Usuario no autenticado.");
                Alert.alert("Error", "Usuario no autenticado.");
            }
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.text}>{text}</Text>
            {ppm && (
                <Text style={styles.ppmText}>
                    Palabras por minuto: {ppm}
                </Text>
            )}
            <Button title="Fin" onPress={handleFinish} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    text: {
        fontSize: 18,
        textAlign: "justify",
        lineHeight: 28,
    },
    ppmText: {
        marginTop: 20,
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold",
    },
});
