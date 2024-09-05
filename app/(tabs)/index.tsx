import React, {useState} from 'react';
import { StyleSheet, Platform, View, ScrollView, Pressable } from 'react-native';
import { Link } from 'expo-router';
import HomeCard from '@/app/components/HomeCard';

export default function HomeScreen() {

  const [startPractice, setStartPractice] = useState(false);

  return (
    <ScrollView>
    <View style={styles.titleContainer}>
      <Link href={"/games/examen"} asChild>
          <Pressable>
           <HomeCard title="Examen PPM" description="Mide cuantas palabras lees por minuto." style={styles.examCard} image={require('../../assets/games/exercise1.jpg')} imagePosition="top"/>
          </Pressable>
      </Link>
      <Link href={"/components/ExerciseSecuence"} asChild>
            <Pressable>
            <HomeCard title="Practica Diaria" description="Realiza una seccion de ejercicios." image={require('../../assets/images/reloj.jpg')}/>
            </Pressable>
      </Link> 
      <Link href={"/components/vistas/aprende"} asChild>
            <Pressable>
            <HomeCard title="Aprende algo nuevo" description="Aprende algo nuevo en 5 minutos" image={require('../../assets/images/reloj.jpg')}/>
            </Pressable>
      </Link>
      <Link href={"/juegos"} asChild>
            <Pressable>
            <HomeCard title="Juegos / Ejercicios" description="Mejora en cada juego." image={require('../../assets/images/reloj.jpg')}/>
            </Pressable>
      </Link>
      <Link href={"/components/vistas/rapidread"} asChild>
            <Pressable> 
            <HomeCard title="Agrega tu PDF" description="Realiza ejercicios de Lectura Rapida." image={require('../../assets/images/reloj.jpg')}/>
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