import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Pressable } from 'react-native';
import { Link } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons'; // Aquí usamos Ionicons
import HomeCard from '@/app/components/HomeCard';

export default function HomeScreen() {
  const [startPractice, setStartPractice] = useState(false);

  return (
    <ScrollView>
      <View style={styles.titleContainer}>
        <Link href={"/games/examen"} asChild>
          <Pressable>
            <HomeCard
              title="Examen PPM"
              description="Mide cuántas palabras lees por minuto."
              style={styles.examCard}
              icon={<Ionicons name="book" size={140} color="#4A90E2" />}
              iconPosition='top'
            />
          </Pressable>
        </Link>

        <Link href={"/components/ExerciseSecuence"} asChild>
          <Pressable>
            <HomeCard
              icon={<Ionicons name="calendar-outline" size={50} color="#50C878" />}
              title="Práctica Diaria"
              description="Realiza una sección de ejercicios."
              iconPosition='left'
            />
          </Pressable>
        </Link>

        <Link href={"/components/vistas/aprende"} asChild>
          <Pressable>
            <HomeCard
              title="Aprende algo nuevo"
              description="Aprende algo nuevo en 5 minutos."
              icon={<Ionicons name="bulb-outline" size={50} color="#FFD700" />}
              iconPosition='left'
            />
          </Pressable>
        </Link>

        <Link href={"/juegos"} asChild>
          <Pressable>
            <HomeCard
              title="Juegos / Ejercicios"
              description="Mejora en cada juego."
              icon={<Ionicons name="game-controller-outline" size={50} color="#FF6347" />}
            />
          </Pressable>
        </Link>

        <Link href={"/components/vistas/rapidread"} asChild>
          <Pressable>
            <HomeCard
              title="Agrega tu PDF"
              description="Realiza ejercicios de Lectura Rápida."
              icon={<Ionicons name="document-outline" size={50} color="#D32F2F" />}
            />
          </Pressable>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  examCard: {
    height: 250,
  }
});
