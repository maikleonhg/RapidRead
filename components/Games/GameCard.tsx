// src/components/GameCard.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface GameCardProps {
  title: string;
  image: string | number;
}

const GameCard = ({ title, image }: GameCardProps) => {
  return (
    <View style={styles.card}>
      <Image source={typeof image === 'string' ? { uri: image } : image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
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
    marginRight: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GameCard;
