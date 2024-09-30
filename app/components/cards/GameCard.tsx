// src/components/GameCard.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

interface GameCardProps {
  title: string;
  image: string | number;
  exerciseType: string;  // Tipo de ejercicio
  textContent: string;
  onPress: () => void;   // Contenido del texto
}

const GameCard = ({ title, image, onPress }: GameCardProps) => {
  return (
    <Pressable onPress={() => {
      onPress();
    }}>
      <View style={styles.card}>
        <Image source={typeof image === 'string' ? { uri: image } : image} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </View>
      </Pressable>

  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    alignItems: 'center',
    width: 150,
    paddingHorizontal: 10,
    shadowRadius: 5,
    shadowOpacity: 0.3,
    marginHorizontal: 10,
    backgroundColor: '#0000',
    borderRadius: 10,
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GameCard;
