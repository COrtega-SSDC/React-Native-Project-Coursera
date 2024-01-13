import * as React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
      <View style={styles.container}>
        <Image source={require('../assets/little-lemon-logo.png')} style={styles.logo} />
        <Text style={styles.headerText}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Subscribe')} >
            <Text style={styles.buttonText}>Newsletter</Text>
        </Pressable>
      </View>

  )

};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    height: 225,
    width: 325,
    resizeMode: 'contain',
    marginTop: 160,
    marginBottom: 35
  },
  headerText: {
    padding: 40,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 150
  },
  button: {
    backgroundColor: '#40534B',
    borderRadius: 10,
    paddingLeft: 130,
    paddingRight: 130
  },
  buttonText: {
    textAlign: 'center',
    color: "white",
    fontSize: 17,
    margin: 10
  }
})