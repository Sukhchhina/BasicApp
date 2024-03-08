import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  const [showFirstGif, setShowFirstGif] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirstGif(false);
    }, 10000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./background.jpg')}
        style={styles.background}
        imageStyle={{ opacity: 0.1 }}> 
        <Text style={styles.text}>Pizza Hub</Text>
        {showFirstGif ? (
          <Image
            source={require('./get-me-a-pizza-4.gif')}
            style={styles.gif}
            resizeMode="contain"
          />
        ) : (
          <Image
            source={require('./pizza.gif')}
            style={styles.gif}
            resizeMode="contain"
          />
        )}
        <TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate('Screen1')}>
  <Text style={styles.buttonText}>Order Now</Text>
</TouchableOpacity>

      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gif: {
    width: '100%',
    height: '50%', 
  },
  text: {
    fontSize: 44,
    color: 'black',
    position: 'absolute',
    top: 80,
    fontWeight: 'bold',
    fontStyle: 'italic', 
  },
  button: {
    backgroundColor: 'black', 
    padding: 10,
    borderRadius: 10,
    marginTop: 20, 
  },
  buttonText: {
    color: 'white', 
    fontSize: 20,
  },
});

export default SplashScreen;
