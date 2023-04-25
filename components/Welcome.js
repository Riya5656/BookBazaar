import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Welcome() {

return (
<View style={styles.container}>
    <Image
    source={require("../assets/welcome.jpg")}
    style={styles.background}
    />
    <Text style={styles.welcome}>Welcome to BookBazaar !</Text>
    <Icon style={styles.arrow} name="arrow-right" size={50} color="#FE654F" />
    </View>
    
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1
      },
  background:{
    height:350,
    width:380,
    marginLeft:5,
    marginTop:130,
},

welcome:{
    marginTop:70,
    marginLeft:30,
    fontSize:28,
    fontWeight:'bold',
    
},

arrow:{
    marginTop:30,
    marginLeft:160
}


});
