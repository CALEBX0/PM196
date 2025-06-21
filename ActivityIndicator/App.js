import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';

export default function App() {
  const [cargando, setCargando] = useState(false);
  const [datos, setDatos] = useState('');

  const SimularCarga = () => {
    setCargando(true);
    setDatos('');

    setTimeout(() => {
      setCargando(false);
      setDatos('Datos cargados correctamente');
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>ActivityIndicator</Text>
      <Button title="Cargar Datos" onPress={SimularCarga} color="#007AFF"/>

      {cargando && <ActivityIndicator size="large" color="#007AFF" style={styles.loader} />}

      {datos !== '' && <Text>{datos}</Text>}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  titulo: {
    fontSize:24,
    fontWeight:'bold',
    marginBottom:20,
  },

  btncontainer:{
    marginVertical:10,
    width:'60%',
  },

  loader:{
    marginVertical:20,
  }
});
