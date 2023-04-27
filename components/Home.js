import { StyleSheet, Text, View, TextInput, Image,ScrollView,TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';


export default function Home() {
  const data = [
    {
      id:1,
      image: require("../assets/book1.jpg"),
      title: 'Amalfi Coast',
      cost: 'Rs.500',
    },
    {
      id:2,
      image: require("../assets/book1.jpg"),
      title: 'Amalfi Coast',
      cost: 'Rs.500',    },
    {
      id:3,
      image: require("../assets/book1.jpg"),
      title: 'Amalfi Coast',
      cost: 'Rs.500',    },
    {
      id:4,
      image: require("../assets/book1.jpg"),
      title: 'Amalfi Coast',
      cost: 'Rs.500',    },
    {
      id:5,
      image: require("../assets/book1.jpg"),
      title: 'Amalfi Coast',
      cost: 'Rs.500',    },
  ]
  return (
    <ScrollView>
    <View style={styles.container}>
      <Ionicons style={styles.ham} name="menu-outline" size={30} color="black" />
      <Text style={styles.logo}>BookBazaar</Text>
      <Text style={styles.greet}>Hello Riya,</Text>
      <Text style={styles.find}>Find Your Book</Text>
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={30} color="grey" style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="Search books" />
        </View>
      </View>
      <View>
        <Text style={styles.popular} >Popular Books</Text>
        {data.map((item)=>{
          return(
            <TouchableOpacity >
            <View styles={styles.card} key={item.id}>
            <View style={styles.imageBox}>
              <Image style={styles.image} source={item.image}/>
            </View>
            </View>
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  logo: {
    position: 'absolute',
    top: 0,
    right: 0,
    marginTop:45,
    marginRight:20,
    color:"#FE654F",
    fontSize: 20,
    fontWeight: 'bold',
  },

  ham: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:46,
    marginLeft:20
  },

  greet:{
    position: 'absolute',
    left: 0,
    marginTop:115,
    marginLeft:20,
    fontSize: 17,
  },

  find:{
    position: 'absolute',
    left: 0,
    marginTop:160,
    marginLeft:20,
    fontSize: 18,
    fontWeight:"bold",
  },

  searchContainer: {
    alignItems: 'center',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    paddingHorizontal: 10,
    width: '80%',
    marginTop:115,
    marginRight:40,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
  },
  popular:{
    color:"#FE654F",
    fontSize: 17,
    fontWeight:"bold",
    marginTop:30,
    marginLeft:20,

  },

  // card:{
  //   marginTop:30,
  //   width:100,
  //   height:220,
  //   marginBottom:10,

  // },
  image:{
    width:100,
    height:200,
  },
  imageBox:{
    width:100,
    height:220,
    marginBottom:10,
    marginLeft:30,

  }
});
