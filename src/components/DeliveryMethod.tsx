import React, { useState } from 'react';
import { View, Text, Button, TextInput, Alert, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

const DeliveryMethod = () => {
  const [deliveryMethod, setDeliveryMethod] = useState('Pickup');
  const [address, setAddress] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleConfirm = () => {
    if (deliveryMethod === 'Delivery') {
      if (address.trim() === '') {
        Alert.alert('Please enter your address.');
      } else {
        Alert.alert(
          'Confirm Delivery',
          'Are you sure you want to confirm delivery?',
          [
            { text: 'Cancel', style: 'cancel' },
            {
              text: 'Confirm',
              onPress: () => {
                setShowSuccessMessage(true);
                setAddress('');
              },
            },
          ]
        );
      }
    } else {
      Alert.alert('Order confirmed successfully!');
      setShowSuccessMessage(true);
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Delivery Method:</Text>
      <View style={styles.optionContainer}>
        <RadioButton.Android
          value="Pickup"
          status={deliveryMethod === 'Pickup' ? 'checked' : 'unchecked'}
          onPress={() => setDeliveryMethod('Pickup')}
          color="blue"
        />
        <Text style={styles.optionText}>Pickup</Text>
      </View>
      <View style={styles.optionContainer}>
        <RadioButton.Android
          value="Delivery"
          status={deliveryMethod === 'Delivery' ? 'checked' : 'unchecked'}
          onPress={() => setDeliveryMethod('Delivery')}
          color="blue"
        />
        <Text style={styles.optionText}>Delivery</Text>
      </View>
      {deliveryMethod === 'Delivery' && (
        <TextInput
          style={styles.addressInput}
          placeholder="Enter your address"
          value={address}
          onChangeText={setAddress}
        />
      )}
      <Button title="Confirm" onPress={handleConfirm} />
      {showSuccessMessage && (
        <Text style={styles.successMessage}>Order confirmed successfully!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 10,
    fontSize: 18,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
  },
  addressInput: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  successMessage: {
    marginTop: 20,
    fontSize: 16,
    color: 'green',
  },
});

export default DeliveryMethod;
