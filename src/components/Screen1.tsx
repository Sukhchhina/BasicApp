import React from 'react';
import { View, Text, StyleSheet,Button, TextInput,Image,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Screen1 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require('./Pizzahub.webp')}
        style={styles.background}></Image>
      <TextInput
        style={styles.input}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
      />
      <TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate('Screen2')}>
  <Text style={styles.buttonText}>Sign In</Text>
</TouchableOpacity>
<TouchableOpacity
  style={styles.button}>
  <Text style={styles.buttonText}>Register</Text>
</TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  background: {
    marginBottom: 20,
    width: 200,
    height: 200
  },
  button: {
    backgroundColor: 'black', 
    padding: 10,
    borderRadius: 10,
    marginTop: 10, 
  },
  buttonText: {
    color: 'white', 
    fontSize: 20,
  },
  input:{
    height: 40,
    width: 250,
    borderWidth: 1.2,
    marginBottom:20,
    padding: 10,
  }
});

export default Screen1;
