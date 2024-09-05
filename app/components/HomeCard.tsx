import React from 'react';
import { View, Text, StyleSheet, Dimensions, ViewStyle, TextStyle, Image } from 'react-native';

interface HomeCardProps {
  title: string;
  description?: string;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  descriptionStyle?: TextStyle;
  image: string | number;
  imagePosition?: 'top' | 'left'; // Nuevo prop
}

const HomeCard: React.FC<HomeCardProps> = ({ title, description, style, titleStyle, descriptionStyle, image, imagePosition = 'left' }) => {
  return (
    <View style={[styles.card, style]}>
      {imagePosition === 'top' && (
        <Image source={typeof image === 'string' ? { uri: image } : image} style={styles.imageTop} />
      )}
      <View style={styles.textContainer}>
        {imagePosition === 'left' && (
          <Image source={typeof image === 'string' ? { uri: image } : image} style={styles.imageLeft} />
        )}
        <View style={styles.textWrapper}>
          <Text style={[styles.title, titleStyle]}>{title}</Text>
          {description && <Text style={[styles.description, descriptionStyle]}>{description}</Text>}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get('window').width - 40,
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
    alignSelf: 'center',
  },
  imageTop: {
    width: '100%',
    height: 150, // Ajustado para no ocupar demasiado espacio
    borderRadius: 10,
    marginBottom: 10,
  },
  imageLeft: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  textContainer: {
    flexDirection: 'row', // Para la imagen y el texto en la misma fila
    alignItems: 'center',
  },
  textWrapper: {
    flex: 1, // Para ocupar el resto del espacio disponible
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default HomeCard;
