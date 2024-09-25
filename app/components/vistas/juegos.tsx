// src/screens/GamesPage.tsx
import React from 'react';
import { Pressable, Text, ScrollView, StyleSheet, Platform} from 'react-native';
import GameCard from '../cards/GameCard';
import {Link} from 'expo-router'

export default function GamesPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>Precisión Ocular</Text>
          <ScrollView horizontal>
            <Link href="/games/exercise1LR" asChild>
              <Pressable>
                <GameCard title="Palabra con la X" image={require('../../../assets/games/1.jpg')}/>
              </Pressable>
            </Link>
            <Link href="/games/exercise2LR" asChild>
              <Pressable>
                <GameCard title="Sigue la X" image={require('../../../assets/games/2.jpg')}/>
              </Pressable>
            </Link>
            <Link href="/games/exercise3LR" asChild>
              <Pressable>
                <GameCard title="Palabra cortada" image={require('../../../assets/games/3.jpg')}/>
              </Pressable>
            </Link>
            <Link href="/games/exercise4LR" asChild>
              <Pressable>
                <GameCard title="Texto Cortado" image={require('../../../assets/games/3.jpg')}/>
              </Pressable>
            </Link>
          </ScrollView>

      <Text style={styles.sectionTitle}>Visión Periférica</Text>
        <ScrollView horizontal>
              <Link href="/games/exercise5LR" asChild>
                <Pressable>
                <GameCard title="2 Palabras" image={require('../../../assets/games/4.jpg')}/>
                </Pressable>
              </Link>
            <Link href="/games/exercise6LR" asChild>
              <Pressable>
                <GameCard title="2 en movimiento" image={require('../../../assets/games/5.jpg')}/>
              </Pressable>
            </Link>
            <Link href="/games/exercise7LR" asChild>
              <Pressable>
                <GameCard title="4 en movimiento" image={require('../../../assets/games/6.jpg')}/>
              </Pressable>
            </Link>
            <Link href="/games/exercise8LR" asChild>
              <Pressable>
                <GameCard title="2 Arriba abajo" image={require('../../../assets/games/7.jpg')}/>
              </Pressable>
            </Link>
            </ScrollView>

      <Text style={styles.sectionTitle}>Lectura Rápida</Text>
        <ScrollView horizontal>
              <Link href="/games/exercise9LR" asChild>
                <Pressable>
                <GameCard title="4 en movimiento" image={require('../../../assets/games/8.jpg')}/>
                </Pressable>
              </Link>
            <Link href="/games/exercise2LR" asChild>
              <Pressable>
                <GameCard title="Ejercicio" image={require('../../../assets/games/1.jpg')}/>
              </Pressable>
            </Link>
              <GameCard title="Ejercicio" image={require('../../../assets/games/2.jpg')} />
              <GameCard title="Ejercicio" image={require('../../../assets/games/3.jpg')} />
            </ScrollView>

      <Text style={styles.sectionTitle}>Apagar el Subconsciente</Text>
        <ScrollView horizontal>
              <Link href="/games/exercise1LR" asChild>
                <Pressable>
                <GameCard title="Ejercicio" image={require('../../../assets/games/1.jpg')}/>
                </Pressable>
              </Link>
            <Link href="/games/exercise2LR" asChild>
              <Pressable>
                <GameCard title="Ejercicio" image={require('../../../assets/games/3.jpg')}/>
              </Pressable>
            </Link>
              <GameCard title="Ejercicio" image={require('../../../assets/games/7.jpg')} />
              <GameCard title="Ejercicio" image={require('../../../assets/games/8.jpg')}/>
            </ScrollView>
      </ScrollView>
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
