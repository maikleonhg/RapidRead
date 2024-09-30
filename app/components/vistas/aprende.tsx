// src/screens/GamesPage.tsx
import React from 'react';
import { Pressable, Text, ScrollView, StyleSheet, Platform} from 'react-native';
import LectureCard from '../cards/LectureCards';
import {Link} from 'expo-router'

export default function GamesPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>Filosofia</Text>
          <ScrollView horizontal>
            <Link href="../capitulos/Estoicismo" asChild>
              <Pressable>
                <LectureCard title="Lecciones de estoicismo" image="https://tse3.mm.bing.net/th?id=OIG3.b_q2dOZJ8ZBrlb415EMS&pid=ImgGn"/>
              </Pressable>
            </Link>
            <Link href="../capitulos/Apologia" asChild>
              <Pressable>
                <LectureCard title="Apologia de Socrates"  image="https://tse1.mm.bing.net/th?id=OIG1.glLOcRsknWJGgj9QH2xh&pid=ImgGn"/>
              </Pressable>
            </Link>
            <Link href="./capitulos" asChild>
              <Pressable>
               <LectureCard title="Republica de Platon" image="https://tse2.mm.bing.net/th?id=OIG2.CrPwzg9RLMRKhPzWqwXy&pid=ImgGn"/>
              </Pressable>
            </Link>
            <Link href="./capitulos" asChild>
              <Pressable>
                <LectureCard title="Meditaciones de Marco Aurelio" image="https://tse3.mm.bing.net/th?id=OIG1.zzR.AWy0pnwy0slFZLO9&pid=ImgGn"/>
              </Pressable>
            </Link>
            <Link href="./capitulos" asChild>
              <Pressable>
                <LectureCard title="El principe" image="https://tse3.mm.bing.net/th?id=OIG3.fezu83kSnsaUED10ZUtu&pid=ImgGn"/>
              </Pressable>
            </Link>
          </ScrollView>

      <Text style={styles.sectionTitle}>Biologia</Text>
        <ScrollView horizontal>
              <Link href="./capitulos" asChild>
                <Pressable>
                <LectureCard title="El Gen Egoísta" image="https://tse2.mm.bing.net/th?id=OIG3.wAGO7SJypBKQKuAKr4bD&pid=ImgGn"/>
                </Pressable>
              </Link>
            <Link href="./capitulos" asChild>
              <Pressable>
                <LectureCard title="Breve Historia" image="https://tse3.mm.bing.net/th?id=OIG2.QIuAEVBnGyZrzogXzdo5&pid=ImgGn"/>
              </Pressable>
            </Link>
            <Link href="./capitulos" asChild>
              <Pressable>
                <LectureCard title="La Doble Hélice" image="https://tse2.mm.bing.net/th?id=OIG4.wiyigI8XLqSWXi3ab_wn&pid=ImgGn"/>
              </Pressable>
            </Link>
            <Link href="./capitulos" asChild>
              <Pressable>
                <LectureCard title="El Origen (Charles Darwin)" image="https://tse1.mm.bing.net/th?id=OIG3.QAO9kKIBYAGAb.omsXRv&pid=ImgGn"/>
              </Pressable>
            </Link>
            </ScrollView>

      <Text style={styles.sectionTitle}>Ciencia</Text>
        <ScrollView horizontal>
              <Link href="./capitulos" asChild>
                <Pressable>
                <LectureCard title="La relatividad" image="https://tse1.mm.bing.net/th?id=OIG3.qm39e.lASG0WygaC7baU&pid=ImgGn"/>
                </Pressable>
              </Link>
            <Link href="./capitulos" asChild>
              <Pressable>
                <LectureCard title="El Universo Elegante" image="https://tse1.mm.bing.net/th?id=OIG2.84HuhVBu2JdCbf6OeIAZ&pid=ImgGn"/>
              </Pressable>
            </Link>
              <LectureCard title="El Gran Diseño" image="https://tse3.mm.bing.net/th?id=OIG2.IM00l9k8bR7wF1XYYWx9&pid=ImgGn" />
              <LectureCard title="Física de lo Imposible" image="https://tse1.mm.bing.net/th?id=OIG3.gWj_1lNssArhNi5r1I3h&pid=ImgGn"/>
            </ScrollView>

      <Text style={styles.sectionTitle}>Psicologia</Text>
        <ScrollView horizontal>
              <Link href="./capitulos" asChild>
                <Pressable>
                <LectureCard title="Pensar Rápido (Daniel Kahneman)" image="https://tse3.mm.bing.net/th?id=OIG4.nhQlkJwt5Kiq._VVRFnk&pid=ImgGn"/>
                </Pressable>
              </Link>
            <Link href="./capitulos" asChild>
              <Pressable>
                <LectureCard title="El Hombre (Viktor Frankl)" image="https://tse3.mm.bing.net/th?id=OIG4.xqi69tNieN74DeqfQhm9&pid=ImgGn"/>
              </Pressable>
            </Link>
              <LectureCard title="Inteligencia Emocional" image="https://tse1.mm.bing.net/th?id=OIG4.uTHGZHO1IK1AqiEXm7im&pid=ImgGn"/>
              <LectureCard title="El Arte" image="https://tse3.mm.bing.net/th?id=OIG3.3QoEHbAkJ0BcKOKFww1i&pid=ImgGn"/>
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
