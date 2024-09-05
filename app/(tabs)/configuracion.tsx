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
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2b2d42',
    marginBottom: 30,
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  header: {
    fontSize: 18,
    fontWeight: '600',
    color: '#6c757d',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#495057',
    marginBottom: 5,
  },
  button: {
    marginTop: 30,
    paddingVertical: 15,
    backgroundColor: '#ff6b6b',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#ff6b6b',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});
