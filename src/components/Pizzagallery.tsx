import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


const pizzas = [
  {
    name: "MARGHERITA",
    image: "https://www.dominos.co.in/files/items/Margherit.jpg",
  },
  {
    name: "FARM HOUSE",
    image: "https://www.dominos.co.in/files/items/Farmhouse.jpg",
  },
  {
    name: "MEXICAN GREEN WAVE",
    image: "https://www.dominos.co.in/files/items/Mexican_Green_Wave.jpg",
  },
  {
    name: "PANEER MAKHANI",
    image: "https://www.dominos.co.in/files/items/Paneer_Makhni.jpg",
  },
];

const Pizzagallery = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.itemContainer}>
          <Image source={{ uri: pizzas[0].image }} style={styles.image} />
          <Text style={styles.name}>{pizzas[0].name}</Text>
        </View>
        <View style={styles.itemContainer}>
          <Image source={{ uri: pizzas[1].image }} style={styles.image} />
          <Text style={styles.name}>{pizzas[1].name}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.itemContainer}>
          <Image source={{ uri: pizzas[2].image }} style={styles.image} />
          <Text style={styles.name}>{pizzas[2].name}</Text>
        </View>
        <View style={styles.itemContainer}>
          <Image source={{ uri: pizzas[3].image }} style={styles.image} />
          <Text style={styles.name}>{pizzas[3].name}</Text>
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
    justifyContent: 'space-evenly',
    width: '100%', 
    marginBottom: 20,
  },
  itemContainer: {
    alignItems: 'center',
    width: '45%', 
  },
  image: {
    width: '100%', 
    aspectRatio: 1, 
    borderRadius: 10, 
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },
});

export default Pizzagallery;
