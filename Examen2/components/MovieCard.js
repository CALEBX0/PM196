import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function MovieCard({ movie }) {
  const renderStars = (rating) => {
    const stars = Math.round(rating / 2);
    let starIcons = '';
    for (let i = 0; i < 5; i++) {
      starIcons += i < stars ? '⭐' : '☆';
    }
    return starIcons;
  };

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w200${movie.poster_path}` }}
        style={styles.image}
      />
      <View style={styles.details}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text>Año: {movie.release_date?.split('-')[0] || 'N/A'}</Text>
        <Text>Rating: {movie.vote_average} {renderStars(movie.vote_average)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 150,
  },
  details: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 7,
  },
});