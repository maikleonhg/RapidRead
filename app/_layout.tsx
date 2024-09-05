import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from './firebase';
import { useRouter } from 'expo-router';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const [isLayoutReady, setIsLayoutReady] = useState(false);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync().finally(() => setIsLayoutReady(true));
    }
  }, [loaded]);
  
  useEffect(() => {
    if (isLayoutReady) {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
          router.replace('/(tabs)');
        } else {
          setUser(null);
          router.replace('/auth');
        }
      });
  
      return () => unsubscribe();
    }
  }, [isLayoutReady, router]);
//    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}> Para hacer el cambio automatico de tema
  return (
    <ThemeProvider value={DefaultTheme}> 
      <Stack>
        <Stack.Screen name="auth/index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen 
        name="components/vistas/aprende" 
        options={{ 
          headerShown: true, // Asegúrate de que el encabezado se muestre
          title: '' // Cambia el título aquí
        }}/>
        <Stack.Screen 
        name="components/vistas/rapidread" 
        options={{ 
          headerShown: true, // Asegúrate de que el encabezado se muestre
          title: '' // Cambia el título aquí
        }}/>
        <Stack.Screen 
        name="games/examen" 
        options={{ 
          headerShown: true, // Asegúrate de que el encabezado se muestre
          title: '' // Cambia el título aquí
        }}/>
        <Stack.Screen 
        name="components/ExerciseSecuence" 
        options={{ 
          headerShown: true, // Asegúrate de que el encabezado se muestre
          title: '' // Cambia el título aquí
        }}/>
        <Stack.Screen 
        name="components/vistas/juegos" 
        options={{ 
          headerShown: true, // Asegúrate de que el encabezado se muestre
          title: '' // Cambia el título aquí
        }}/>
      </Stack>
    </ThemeProvider>
  );
}

