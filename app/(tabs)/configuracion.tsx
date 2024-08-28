import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useRouter } from 'expo-router';

export default function ConfiguracionScreen() {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // Redirigir al usuario a la pantalla de autenticación después de cerrar sesión
      router.replace('/auth');
    } catch (error) {
      Alert.alert('Error', 'No se pudo cerrar sesión. Inténtalo de nuevo.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuración</Text>
      <View style={styles.section}>
        <Text style={styles.header}>Cuenta</Text>
        <Text style={styles.text}>Nombre de usuario: UsuarioEjemplo</Text>
        <Text style={styles.text}>Correo electrónico: usuario@example.com</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>Notificaciones</Text>
        <Text style={styles.text}>Recibir notificaciones: Sí</Text>
        <Text style={styles.text}>Notificaciones por correo electrónico: Sí</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>Privacidad</Text>
        <Text style={styles.text}>Datos compartidos: Solo con proveedores de servicios</Text>
        <Text style={styles.text}>Perfil visible: Solo para contactos</Text>
      </View>
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#e63946',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
