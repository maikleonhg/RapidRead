// src/components/GameCard.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface GameCardProps {
  title: string;
  image: string; // Ruta de la imagen o URL
}

const GameCard = ({ title, image }: GameCardProps) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 100,
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
