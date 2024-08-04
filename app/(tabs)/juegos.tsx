// src/screens/GamesPage.tsx
import React from 'react';
import { Pressable, Text, ScrollView, StyleSheet } from 'react-native';
import GameCard from '../../components/Games/GameCard';
import {Link} from 'expo-router'

export default function GamesPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>Precisión Ocular</Text>
      <ScrollView horizontal>
        <Link href="/games/exercise1LR" asChild>
          <Pressable>
          <GameCard title="Ejercicio 1" image="https://example.com/image1.png" />
          </Pressable>
        </Link>
      <Link href="/games/exercise2LR" asChild>
      <Pressable>
       <GameCard title="Ejercicio 2" image="https://example.com/image2.png" />
       </Pressable>
       </Link>
      <GameCard title="Ejercicio 3" image="https://example.com/image3.png" />
      <GameCard title="Ejercicio 4" image="https://example.com/image4.png" />
      </ScrollView>

      <Text style={styles.sectionTitle}>Visión Periférica</Text>
      <GameCard title="Ejercicio 2" image="https://example.com/image2.png" />

      <Text style={styles.sectionTitle}>Lectura Rápida</Text>
      <GameCard title="Ejercicio 3" image="https://example.com/image3.png" />

      <Text style={styles.sectionTitle}>Apagar el Subconsciente</Text>
      <GameCard title="Ejercicio 4" image="https://example.com/image4.png" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
