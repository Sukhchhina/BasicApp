
import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Screen2 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Screen2')}>
        <Text style={styles.buttonText}>Pizza Gallery</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Checkbox')}>
        <Text style={styles.buttonText}>Toppings</Text>
        </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Pizzadropdown')}>
        <Text style={styles.buttonText}>Pizza Type</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Screen2')}>
        <Text style={styles.buttonText}>Radiobutton</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  buttonContainer: {
    marginHorizontal: 10,
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
});

export default Screen2;
