import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { db, collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot } from '../firebase'; // Ajusta la ruta según corresponda

interface PPM {
  id: string;
  value: string;
}

const EstadisticasScreen: React.FC = () => {
  const [ppmList, setPpmList] = useState<PPM[]>([]);
  const [ppm, setPpm] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    const colRef = collection(db, 'ppm');
    const unsubscribe = onSnapshot(colRef, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        value: doc.data().value as string,
      } as PPM));
      setPpmList(data);
    });

    return () => unsubscribe();
  }, []);

  const handleAdd = async () => {
    if (ppm.trim()) {
      await addDoc(collection(db, 'ppm'), { value: ppm });
      setPpm('');
    }
  };

  const handleUpdate = async () => {
    if (selectedId && ppm.trim()) {
      await updateDoc(doc(db, 'ppm', selectedId), { value: ppm });
      setPpm('');
      setSelectedId(null);
    }
  };

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, 'ppm', id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estadísticas de PPM</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese el PPM"
        value={ppm}
        onChangeText={setPpm}
        keyboardType="numeric"
      />
      <Button
        title={selectedId ? 'Actualizar' : 'Agregar'}
        onPress={selectedId ? handleUpdate : handleAdd}
      />
      <FlatList
        data={ppmList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>PPM: {item.value}</Text>
            <TouchableOpacity onPress={() => {
              setPpm(item.value);
              setSelectedId(item.id);
            }}>
              <Text style={styles.button}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDelete(item.id)}>
              <Text style={styles.button}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  button: {
    color: 'blue',
  },
});

export default EstadisticasScreen;
