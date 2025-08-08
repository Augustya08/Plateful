import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

type Props={
    food:any;
    onPress:()=>void;
};

const FoodCard=({food,onPress}:Props)=>{
    return(
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <Image source={{uri:food.image}} style={styles.image} resizeMode='cover'/>
            <View style={styles.info}>
        <Text style={styles.name}>{food.name}</Text>
        <Text style={styles.subtext}>🔥{food.caloriesPerServing} kcal</Text>
        <Text style={styles.price}>₹{food.price || 10}</Text>
      </View>
        </TouchableOpacity>

    );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 10,
    width: '100%',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginTop:10,

  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontFamily:"Montserrat-SemiBold",

    color: '#333',
    alignSelf:'center',
    textAlign:'center',
  },
  subtext: {
    fontSize: 13,
    fontFamily:"Montserrat-SemiBold",
    color: '#F7630C',
    marginTop: 4,
    alignSelf:'center',
  },
  price: {
    fontSize: 15,
    fontFamily:"Montserrat-SemiBold",
    color: '#00aa55',
    marginTop: 4,
    alignSelf:'center',
  },
});
export default FoodCard;