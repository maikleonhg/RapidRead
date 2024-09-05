// src/screens/GamesPage.tsx
import React from 'react';
import { Pressable, Text, ScrollView, StyleSheet, Platform} from 'react-native';
import GameCard from '../Games/GameCard';
import {Link} from 'expo-router'

export default function GamesPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>Filosofia</Text>
          <ScrollView horizontal>
            <Link href="/games/exercise1LR" asChild>
              <Pressable>
                <GameCard title="Apologia de Socrates" image={require('../../../assets/games/exercise1.jpg')}/>
              </Pressable>
            </Link>
            <Link href="/games/exercise2LR" asChild>
              <Pressable>
                <GameCard title="Republica de Platon" image={require('../../../assets/games/exercise2.jpg')}/>
              </Pressable>
            </Link>
            <Link href="/games/exercise3LR" asChild>
              <Pressable>
                <GameCard title="Meditaciones de Marco Aurelio" image={require('../../../assets/games/exercise1.jpg')}/>
              </Pressable>
            </Link>
            <Link href="/games/exercise4LR" asChild>
              <Pressable>
                <GameCard title="El principe" image={require('../../../assets/games/exercise2.jpg')}/>
              </Pressable>
            </Link>
          </ScrollView>

      <Text style={styles.sectionTitle}>Biologia</Text>
        <ScrollView horizontal>
              <Link href="/games/exercise5LR" asChild>
                <Pressable>
                <GameCard title="El Gen Egoísta" image={require('../../../assets/games/exercise1.jpg')}/>
                </Pressable>
              </Link>
            <Link href="/games/exercise6LR" asChild>
              <Pressable>
                <GameCard title="Breve Historia" image={require('../../../assets/games/exercise1.jpg')}/>
              </Pressable>
            </Link>
            <Link href="/games/exercise7LR" asChild>
              <Pressable>
                <GameCard title="La Doble Hélice" image={require('../../../assets/games/exercise2.jpg')}/>
              </Pressable>
            </Link>
            <Link href="/games/exercise8LR" asChild>
              <Pressable>
                <GameCard title="El Origen (Charles Darwin)" image={require('../../../assets/games/exercise2.jpg')}/>
              </Pressable>
            </Link>
            </ScrollView>

      <Text style={styles.sectionTitle}>Ciencia</Text>
        <ScrollView horizontal>
              <Link href="/games/exercise9LR" asChild>
                <Pressable>
                <GameCard title="4 en movimiento" image={require('.../../../assets/games/exercise2.jpg')}/>
                </Pressable>
              </Link>
            <Link href="/games/exercise2LR" asChild>
              <Pressable>
                <GameCard title="El Universo Elegante" image={require('../../../assets/games/exercise2.jpg')}/>
              </Pressable>
            </Link>
              <GameCard title="El Gran Diseño" image={require('../../../assets/games/exercise1.jpg')} />
              <GameCard title="Física de lo Imposible" image={require('../../../assets/games/exercise1.jpg')} />
            </ScrollView>

      <Text style={styles.sectionTitle}>Psicologia</Text>
        <ScrollView horizontal>
              <Link href="/games/exercise1LR" asChild>
                <Pressable>
                <GameCard title="Pensar Rápido (Daniel Kahneman)" image={require('../../../assets/games/exercise1.jpg')}/>
                </Pressable>
              </Link>
            <Link href="/games/exercise2LR" asChild>
              <Pressable>
                <GameCard title="El Hombre (Viktor Frankl)" image={require('../../../assets/games/exercise2.jpg')}/>
              </Pressable>
            </Link>
              <GameCard title="Inteligencia Emocional" image={require('../../../assets/games/exercise1.jpg')} />
              <GameCard title="El Arte" image={require('../../../assets/games/exercise1.jpg')}/>
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
