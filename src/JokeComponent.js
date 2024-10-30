// src/JokeComponent.js

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator, Image } from 'react-native';
import axios from 'axios';

const JokeComponent = () => {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchJoke = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('https://api.chucknorris.io/jokes/random');
      setJoke(response.data.value);
    } catch (err) {
      setError('Error fetching joke');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../kuvat/chuck.jpg')} style={styles.image} />
      </View>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <Text style={styles.joke}>{joke}</Text>
      )}
      <Button title="Generate Joke" onPress={fetchJoke} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    marginTop: 20,
    margin: 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    boxshadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 15,
    marginBottom: 20,
    boxshadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  joke: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  error: {
    marginTop: 20,
    color: 'red',
    textAlign: 'center',
  },
});

export default JokeComponent;