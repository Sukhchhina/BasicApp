import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import PickerSelect from 'react-native-picker-select';

const pizzas = [
  {
    label: 'Pepperoni',
    value: 'pepperoni',
    image: require('./pepperoni.png'), // Make sure the path is correct
  },
  {
    label: 'Farm Fresh',
    value: 'farmfresh',
    image: require('./farmfresh.png'), // Make sure the path is correct
  },
  {
    label: 'Margherita',
    value: 'margherita',
    image: require('./margherita.png'), // Make sure the path is correct
  },
];

const Pizzadropdown = () => {
  const [selectedPizza, setSelectedPizza] = React.useState(pizzas[0].value);

  const selectedPizzaObj = pizzas.find(pizza => pizza.value === selectedPizza);

  return (
    <View style={styles.container}>
      <PickerSelect
        value={selectedPizza}
        onValueChange={(value) => setSelectedPizza(value)}
        items={pizzas.map((pizza) => ({
          label: pizza.label,
          value: pizza.value,
        }))}
        placeholder={{
          label: 'Select a pizza',
          value: null,
        }}
        style={pickerSelectStyles}
        
      />
      {selectedPizzaObj && (
        <Image source={selectedPizzaObj.image} style={styles.pizzaImage} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  pizzaImage: {
    width: 200, 
    height: 200, 
    marginTop: 20,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    backgroundColor: '#fafafa',
    padding: 10,
    borderRadius: 20,
  },
  inputAndroid: {
    backgroundColor: '#fafafa',
    padding: 10,
    borderRadius: 10,
  },
});

export default Pizzadropdown;
