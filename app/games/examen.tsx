import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, Button, View} from "react-native";


export default function Examen() {
    const text = `La lectura rápida es una habilidad que ofrece múltiples beneficios, tanto a nivel personal como profesional. Uno de los principales beneficios es el aumento en la eficiencia del tiempo. En una sociedad donde el tiempo es un recurso valioso, ser capaz de leer y comprender grandes cantidades de información en menos tiempo es una ventaja significativa. La lectura rápida permite a las personas absorber material de manera más eficiente, lo cual es especialmente útil para estudiantes y profesionales que necesitan mantenerse al día con grandes volúmenes de lectura. Además, la capacidad de procesar información rápidamente también ayuda a reducir el estrés asociado con la acumulación de tareas de lectura.

    Otro beneficio importante de la lectura rápida es la mejora en la concentración y la atención. Cuando se aprende a leer más rápido, también se desarrolla una mayor capacidad para concentrarse en el contenido, evitando distracciones que pueden interferir con la comprensión. Esta habilidad no solo mejora la retención de la información, sino que también promueve una lectura más activa y comprometida. Los lectores rápidos tienden a ser más críticos y selectivos con la información que consumen, lo que les permite captar las ideas principales y los detalles importantes de manera más efectiva.

    La lectura rápida también puede contribuir a un mejor rendimiento académico y profesional. Al poder leer y comprender más rápidamente, los estudiantes pueden estudiar de manera más efectiva, lo que se traduce en mejores calificaciones y un aprendizaje más profundo. En el ámbito profesional, la lectura rápida puede ser una herramienta clave para mantenerse competitivo, permitiendo a los trabajadores revisar informes, correos electrónicos y otros documentos esenciales con mayor rapidez. Esto no solo mejora la productividad, sino que también puede llevar a una toma de decisiones más informada y oportuna.

    Finalmente, la lectura rápida fomenta una mayor curiosidad y amor por el aprendizaje. Al reducir el tiempo necesario para leer, las personas pueden explorar una gama más amplia de temas e intereses, lo que enriquece su conocimiento general y estimula el pensamiento creativo. Este acceso rápido a la información permite a los lectores exponerse a diferentes perspectivas y expandir su comprensión del mundo, lo cual es fundamental en un entorno globalizado. Además, al sentir menos frustración por la lentitud en la lectura, los individuos están más motivados para continuar aprendiendo y explorando nuevos conocimientos, lo que en última instancia contribuye a su desarrollo personal y profesional.`;

    const wordCount = 398;

    const [startTime, setStartTime] = useState<number | null>(null);
    const [ppm, setPpm] = useState<number | null>(null);


    useEffect(() => {
        // Set the start time when the component mounts
        setStartTime(Date.now());
    }, []);

    const handleFinish = () => {
        if (startTime !== null) { // Verificamos que startTime no sea null
            const endTime = Date.now();
            const timeTakenInMinutes = (endTime - startTime) / 60000; // Convert time to minutes
            const calculatedPpm = wordCount / timeTakenInMinutes;
            setPpm(Number(calculatedPpm.toFixed(2))); // Convertimos a número y fijamos los decimales
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
             <Button title="Fin" onPress={handleFinish}/>
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