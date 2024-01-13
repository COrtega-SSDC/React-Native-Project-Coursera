import * as React from 'react';
import { View, StyleSheet, Image, Text, TextInput, Pressable, Alert } from 'react-native';

import { validateEmail } from '../utils';

const SubscribeScreen = () => {
  const [email, onChangeEmail] = React.useState('')
  const [isEmailValid, setisEmailValid] = React.useState(false)

  React.useEffect(() => {
    setisEmailValid(validateEmail(email));
  }, [email])

  return (
    <View styles={styles.container}>
      <Image source={require('../assets/little-lemon-logo-grey.png')} style={styles.logo} />
      <Text style={styles.headerText}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>
      <TextInput
        style={styles.inputBox}
        placeholder='Type your email'
        keyboardType={'email-address'}
        value={email}
        onChangeText={onChangeEmail} />
      <Pressable
        style={[styles.button, !isEmailValid && styles.buttonDisabled]}
        onPress={() => Alert.alert("Thanks for subscribing, stay tuned!")}
        disabled={!isEmailValid}>
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
    height: 125,
    width: 300,
    resizeMode: 'contain',
    alignSelf: "center",
    marginTop: 30
  },
  button: {
    backgroundColor: '#40534B',
    borderRadius: 10,
    textAlign: "center",
    marginLeft: 19,
    marginRight: 19
  },
  buttonText: {
    textAlign: 'center',
    color: "white",
    fontSize: 17,
    margin: 10
  },
  buttonDisabled: {
    backgroundColor: "#B7B7B7"
  },
  inputBox: {
    height: 40,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    marginBottom: 30
  },
})