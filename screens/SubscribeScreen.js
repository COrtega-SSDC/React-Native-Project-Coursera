import * as React from 'react';
import { View, StyleSheet, Image, Text, TextInput, Pressable, Alert } from 'react-native';

const SubscribeScreen = () => {

  return (
    <View styles={styles.container}>
      <Image source={require('../assets/little-lemon-logo-grey.png')} style={styles.logo} />
      <Text style={styles.headerText}>
          Subscribe to our newsletter for our latest delicious recipes!
      </Text>
      <TextInput style={styles.inputBox}>

      </TextInput>
      <Pressable style={styles.button} onPress={()=> Alert.alert("Thanks for subscribing, stay tuned")}>
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>
    </View>
  )

};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerText: {
    padding: 40,
    fontSize: 20,
    textAlign: 'center',
  },
  logo: {
    height: 200,
    width: 300,
    resizeMode: 'contain',
    margin: 55
  },
  button: {
    backgroundColor: '#40534B',
    margin: 30,
    fontSize: 50,
    borderRadius: 16,
  },
  buttonText: {
    textAlign: 'center',
    color: "white",
    fontSize: 20,
    margin: 10
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#EDEFEE',
  },
})