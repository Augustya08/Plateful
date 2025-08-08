import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/stackNavigation';
import { useCartStore } from '../store/cart';

type Props = NativeStackScreenProps<RootStackParamList, 'FoodDetail'>;

const FoodDetailScreen = ({ route}: Props) => {
  const { food } = route.params;
  const [count, setCount] = useState(1);
  const addToCart = useCartStore((s) => s.addToCart);

  const handleAddToCart = () => {
    addToCart({
      id: food.id,
      name: food.name,
      price: food.price,
      image: food.image,
      quantity: count,
    });
    Alert.alert('Added!', `${count} x ${food.name} added to cart.`);

  };

  return (
    <><ScrollView style={{ flex: 1, backgroundColor: '#FFF8F3' }}>
      <View style={styles.card}>
        <Image source={{ uri: food.image }} style={styles.foodImage} />
        <View style={styles.qtyControls}>
          <TouchableOpacity onPress={() => setCount(Math.max(0,
            count - 1))}>
            <Ionicons name="remove-circle-outline" size={30} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.qtyText}>{count}</Text>
          <TouchableOpacity onPress={() => setCount(count + 1)}>
            <Ionicons name="add-circle-outline" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.namePrice}>
          <Text style={styles.foodName}>{food.name}</Text>
          <Text style={styles.foodPrice}>₹{food.price}</Text>
        </View>


        <View style={styles.statsRow}>
          <Ionicons name="star" size={18} color="#FCB900" />
          <Text style={styles.statsText}>{food.rating || 2.6}</Text>
          <Ionicons name="flame-outline" size={16} color="#EA5649" style={styles.statsIcon} />
          <Text style={styles.statsText}>{food.caloriesPerServing || 65} Calories</Text>
          <Ionicons name="time-outline" size={16} color="#999" style={styles.statsIcon} />
          <Text style={styles.statsText}>{food.cookTime || '20–30 min'}</Text>
        </View>

        <Text style={styles.details}>{food.instructions || 'No details available.'}</Text>

        <Text style={styles.sectionTitle}>Ingredients</Text>
        <View style={styles.ingredientRow}>
          {(food.ingredients || []).map((ing: string) => (
            <View style={styles.ingredientPill} key={ing}>
              <Text style={styles.ingredientText}>{ing}</Text>
            </View>
          ))}
        </View>


      </View>
    </ScrollView><View style={styles.footer}><TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
        <Text style={styles.addButtonText}>Add to Cart · ₹{food.price * count}</Text>
      </TouchableOpacity></View></>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 30,
    margin: 24,
    shadowColor: '#FF6F3D',
    padding: 18,
    alignItems: 'center'
  },
  foodImage: {
    width: '100%',
    height: 270,
    borderRadius: 24,
    marginTop: 10,
    marginBottom: 18,

  },
  qtyControls: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft:7,
    marginBottom: 8,
    width:110,
    height:40,
    marginTop:-30,
    borderRadius:20,
    backgroundColor: '#FF6F3D',
  },
  qtyText: {
    fontSize: 18,
    color:'#fff',
    fontWeight: 'bold',
    marginHorizontal: 12,
  },
  namePrice:{
    flexDirection:'row',
    gap:60,
  },
  foodName: {
    fontFamily:"Montserrat-SemiBold",
    flexDirection:'column',
    

    width:'60%',
    fontSize: 25,
    textAlign:'left',
    color: '#2D2620',
    marginBottom: 10,
  },
  foodPrice:{
    fontSize:30,
    fontFamily:"Montserrat-SemiBold",
    color:'#00aa55',

  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    marginBottom: 9,
  },
  statsText: {
    fontSize: 15,
    fontFamily:"Montserrat-Regular",
    color: '#7D7C7A',
    marginHorizontal: 2,
  },
  statsIcon: {
    marginLeft: 8,
  },
  details: {
    fontSize: 13,
    fontFamily:"Montserrat-Regular",
    color: '#363634',
    marginBottom: 14,
  },
  sectionTitle: {
    fontFamily:"Montserrat-Bold",
    fontSize: 16,
    marginBottom: 4,
    color: '#FF6F3D',
  },
  ingredientRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 1,
    alignContent: 'center',
    marginBottom: 10
  },
  ingredientPill: {
    backgroundColor: '#FFF2EC',
    borderRadius: 12,
    paddingHorizontal: 11,
    paddingVertical: 6,
    margin: 3
  },
  ingredientText: {
    color: '#FF6F3D',
    fontFamily:"Montserrat-Regular",
    fontSize: 13
  },
  addButton: {
    backgroundColor: '#FF6F3D',
    borderRadius: 18,
    alignSelf:'center',
    width: '80%',
    padding: 14,
    alignItems: 'center',
    marginBottom:10
  },
  addButtonText: {
    color: '#fff',
    fontFamily:"Montserrat-Bold",
    fontSize: 18
  },
  footer:{
    backgroundColor:'#fff',
    
  }
});
export default FoodDetailScreen;