import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, FlatList,
  ActivityIndicator, StyleSheet, StatusBar
} from 'react-native';
import MovieCard from '../components/MovieCard';
import { searchMovies } from '../api/tmdb';

export default function HomeScreen() {
  const [query, setQuery] = useState('');
  const [exact, setExact] = useState(false);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);
    const MIN_LOADING_TIME = 1000;
    const start = Date.now();
    const results = await searchMovies(query, exact);
    const elapsed = Date.now() - start;
    const delay = MIN_LOADING_TIME - elapsed;

    if (delay > 0) {
      setTimeout(() => {
        setMovies(results);
        setLoading(false);
      }, delay);
    } else {
      setMovies(results);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Text style={styles.title}>🎬 Buscador de Películas</Text>
      <TextInput
        placeholder="Escribe el nombre de la película..."
        value={query}
        onChangeText={setQuery}
        style={styles.input}
        placeholderTextColor="#aaa"
      />
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => { setExact(false); handleSearch(); }}>
          <Text style={styles.buttonText}>APROXIMADA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => { setExact(true); handleSearch(); }}>
          <Text style={styles.buttonText}>EXACTA</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#FFD700" style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <MovieCard movie={item} />}
          style={styles.list}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  title: { color: '#FFD700', fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#FFD700',
    borderRadius: 10,
    padding: 10,
    color: 'white',
    backgroundColor: '#1e1e1e',
    marginBottom: 15
  },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '48%',
    alignItems: 'center'
  },
  buttonText: { color: '#121212', fontWeight: 'bold' },
  list: { marginTop: 10 }
});
