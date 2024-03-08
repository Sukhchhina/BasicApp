import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { CheckBox } from 'react-native-elements'; 

const pizzaToppings = [
  { name: 'Pepperoni', id: 1, checked: false },
  { name: 'Mushrooms', id: 2, checked: false },
  { name: 'Onions', id: 3, checked: false },
  { name: 'Sausage', id: 4, checked: false },
  { name: 'Bacon', id: 5, checked: false },
];

const Checkboxlayout = () => {
  const [toppings, setToppings] = useState(pizzaToppings);

  const handleChange = (id) => {
    setToppings(
      toppings.map((topping) =>
        topping.id === id ? { ...topping, checked: !topping.checked } : topping
      )
    );
  };

  return (
    <View style={styles.container}>
    
        <Text style={styles.title}>Select your toppings:</Text>
        {toppings.map((topping) => (
          <View style={styles.checkboxContainer} key={topping.id}>
            <CheckBox
              checked={topping.checked}
              onPress={() => handleChange(topping.id)}
            />
            <Text style={styles.checkboxText}>{topping.name}</Text>
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxText: {
    fontSize:20,
    fontWeight: 'bold'
  },
});

export default Checkboxlayout;
