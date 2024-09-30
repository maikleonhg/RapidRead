import React from 'react';
import { View, Text, StyleSheet, Dimensions, ViewStyle, TextStyle, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'; // Ahora usaremos Ionicons

interface HomeCardProps {
  title: string;
  description?: string;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  descriptionStyle?: TextStyle;
  image?: string | number;
  icon?: React.ReactElement;
  imagePosition?: 'top' | 'left';
  iconPosition?: 'top' | 'left'; 
}

const HomeCard: React.FC<HomeCardProps> = ({ 
  title, 
  description, 
  style, 
  titleStyle, 
  descriptionStyle, 
  image, 
  icon, 
  imagePosition = 'left', 
  iconPosition = 'left' 
}) => {
  return (
    <View style={[styles.card, style]}>
      {iconPosition === 'top' && icon && (
        <View style={styles.iconTopContainer}>{icon}</View>
      )}

      {imagePosition === 'top' && image && (
        <Image source={typeof image === 'string' ? { uri: image } : image} style={styles.imageTop} />
      )}

      <View style={styles.textContainer}>
        {iconPosition === 'left' && icon && (
          <View style={styles.iconLeftContainer}>{icon}</View>
        )}

        {imagePosition === 'left' && image && (
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
    height: 150,
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  textWrapper: {
    flex: 1,
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
  iconTopContainer: {
    alignItems: 'center', 
    marginBottom: 10,
  },
  iconLeftContainer: {
    marginRight: 15, 
    width: 60,
  },
});

export default HomeCard;
