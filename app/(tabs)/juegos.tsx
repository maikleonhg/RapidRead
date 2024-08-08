// src/screens/GamesPage.tsx
import React from 'react';
import { Pressable, Text, ScrollView, StyleSheet, Platform} from 'react-native';
import GameCard from '../../components/Games/GameCard';
import {Link} from 'expo-router'

export default function GamesPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>Precisión Ocular</Text>
          <ScrollView horizontal>
            <Link href="/games/exercise1LR" asChild>
              <Pressable>
              <GameCard title="Solo la X" image={require('../../assets/games/exercise1.jpg')}/>
              </Pressable>
            </Link>
          <Link href="/games/exercise2LR" asChild>
            <Pressable>
              <GameCard title="Sigue la X" image={require('../../assets/games/exercise2.jpg')}/>
            </Pressable>
          </Link>
            <GameCard title="Ejercicio 3" image={require('../../assets/games/exercise2.jpg')}/>
            <GameCard title="Ejercicio 4" image={require('../../assets/games/exercise1.jpg')} />
          </ScrollView>

      <Text style={styles.sectionTitle}>Visión Periférica</Text>
        <ScrollView horizontal>
              <Link href="/games/exercise1LR" asChild>
                <Pressable>
                <GameCard title="Solo la X" image={require('../../assets/games/exercise1.jpg')}/>
                </Pressable>
              </Link>
            <Link href="/games/exercise2LR" asChild>
              <Pressable>
                <GameCard title="Sigue la X" image={require('../../assets/games/exercise2.jpg')}/>
              </Pressable>
            </Link>
              <GameCard title="Ejercicio 3" image={require('../../assets/games/exercise2.jpg')} />
              <GameCard title="Ejercicio 4" image={require('../../assets/games/exercise2.jpg')}/>
            </ScrollView>

      <Text style={styles.sectionTitle}>Lectura Rápida</Text>
        <ScrollView horizontal>
              <Link href="/games/exercise1LR" asChild>
                <Pressable>
                <GameCard title="Solo la X" image={require('../../assets/games/exercise1.jpg')}/>
                </Pressable>
              </Link>
            <Link href="/games/exercise2LR" asChild>
              <Pressable>
                <GameCard title="Sigue la X" image={require('../../assets/games/exercise2.jpg')}/>
              </Pressable>
            </Link>
              <GameCard title="Ejercicio 3" image={require('../../assets/games/exercise2.jpg')} />
              <GameCard title="Ejercicio 4" image={require('../../assets/games/exercise1.jpg')} />
            </ScrollView>
      <Text style={styles.sectionTitle}>Apagar el Subconsciente</Text>
        <ScrollView horizontal>
              <Link href="/games/exercise1LR" asChild>
                <Pressable>
                <GameCard title="Solo la X" image={require('../../assets/games/exercise1.jpg')}/>
                </Pressable>
              </Link>
            <Link href="/games/exercise2LR" asChild>
              <Pressable>
                <GameCard title="Sigue la X" image={require('../../assets/games/exercise2.jpg')}/>
              </Pressable>
            </Link>
              <GameCard title="Ejercicio 3" image={require('../../assets/games/exercise1.jpg')} />
              <GameCard title="Ejercicio 4" image={require('../../assets/games/exercise2.jpg')}/>
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
