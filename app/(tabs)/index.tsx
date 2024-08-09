import React from 'react';
import { StyleSheet, Platform, View, ScrollView, Pressable } from 'react-native';
import { Link } from 'expo-router';
import HomeCard from '@/components/HomeCard';

export default function HomeScreen() {
  return (
    <ScrollView>
    <View style={styles.titleContainer}>
      <Link href={"/games/examen"} asChild>
          <Pressable>
           <HomeCard title="Examen PPM" description="Mide cuantas palabras lees por minuto." style={styles.examCard} image={require('../../assets/games/exercise1.jpg')} imagePosition="top"/>
          </Pressable>
      </Link>
            <HomeCard title="Practica Diaria" description="Realiza una seccion de ejercicios." image={require('../../assets/images/reloj.jpg')}/>
            <HomeCard title="10 Minuos diarios" description="Realiza una seccion de ejercicios." image={require('../../assets/images/reloj.jpg')}/>
            <HomeCard title="Ejercicios de Lectura Rapida" description="Realiza ejercicios de Lectura Rapida." image={require('../../assets/images/reloj.jpg')}/>
            <HomeCard title="Ejercicios de Precision Ocular" description="Realiza una seccion de ejercicios oculares." image={require('../../assets/images/reloj.jpg')}/>
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