import React, {useState} from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView, ActivityIndicator, Image, Alert, FlatList } from 'react-native';
import { useEffect } from "react";

export default function App() {
  


  return(
  <View style={styles.container}>
    <Text style={styles.titulo}>Pokemon</Text>
  </View>

  );

}



const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    },
    titulo: {
      color: 'black',
      size: 20,
      textAlign: 'center'
    }
  });





45




































  import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
  Alert
} from 'react-native';

const API_KEY = 'TU_API_KEY'; // ← Reemplaza con tu API key de OpenWeatherMap

export default function App() {
  const [ciudad, setCiudad] = useState('');
  const [climas, setClimas] = useState([]);
  const [cargando, setCargando] = useState(false);

  const obtenerClima = async () => {
    if (!ciudad.trim()) {
      Alert.alert('Campo vacío', 'Ingresa una ciudad válida');
      return;
    }

    setCargando(true);

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`;
      const res = await fetch(url);
      const data = await res.json();

      if (data.cod !== 200) {
        Alert.alert('Ciudad no encontrada', data.message);
      } else {
        const nuevaCiudad = {
          id: Date.now().toString(),
          nombre: data.name,
          temp: data.main.temp,
          descripcion: data.weather[0].description,
          icono: data.weather[0].icon
        };
        setClimas([...climas, nuevaCiudad]);
        setCiudad('');
      }
    } catch (error) {
      Alert.alert('Error de conexión', 'No se pudo obtener el clima');
    } finally {
      setCargando(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🌤️ Clima por ciudades</Text>

      <TextInput
        placeholder="Ingresa una ciudad"
        value={ciudad}
        onChangeText={setCiudad}
        style={styles.input}
      />

      <Button title="Buscar clima" onPress={obtenerClima} />

      {cargando && <ActivityIndicator size="large" color="blue" style={styles.cargando} />}

      <FlatList
        data={climas}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingVertical: 20 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.temperatura}>{item.temp}°C</Text>
            <Image
              source={{ uri: `https://openweathermap.org/img/wn/${item.icono}@2x.png` }}
              style={{ width: 50, height: 50 }}
            />
            <Text style={styles.descripcion}>{item.descripcion}</Text>
          </View>
        )}
      />
    </View>
  );
}
