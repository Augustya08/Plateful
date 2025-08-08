import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet, ScrollView, Image, TextInput } from 'react-native';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FoodCard from '../components/FoodCard';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/stackNavigation';





type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

type Food = {
  id: number;
  name: string;
  image: string;
  price: number;
  [key: string]: any;
};

const HomeScreen = ({ navigation }: Props) => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState(true);


  const fetchRecipes = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/recipes');
      const data = response.data.recipes.map((item: any) => ({
        ...item,
        price: Math.floor(Math.random() * 200) + 100, // ₹100–₹300
      }));
      setFoods(data);
    } catch (error) {
      console.error('Error fetching recipes', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

    const [searchQuery, setSearchQuery] = useState('');
    const filteredFoods = foods.filter(food =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const leftColumn =filteredFoods.filter((_, index) => index % 2 === 0);
  const rightColumn =filteredFoods.filter((_, index) => index % 2 !== 0);
  


 



  return (
    <View style={styles.container}>

      {loading ? (
        <ActivityIndicator size="large" color="#00aa55" />
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContent}>
           <View style={styles.searchContainer}>
           <Ionicons
    name="search"
    size={22}
    color="#999"
    style={{ marginRight: 8 }}
  />
        <TextInput
          placeholder="Search tasty food on Plateful!"
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={styles.input}
          placeholderTextColor="#999"
           autoCorrect={false}
           autoCapitalize="none"
           clearButtonMode="while-editing"
        />
      </View>
          <View style={styles.row}>
            

            <View style={[styles.column, styles.offsetColumn]}>
              <Image style={styles.logo} source={require('../img/plateful.png')}/>
              {leftColumn.map((item) => (
                <FoodCard
                  key={item.id}
                  food={item}
                  onPress={() => navigation.navigate('FoodDetail', { food: item })}
                />
              ))}
            </View>

            <View style={[styles.column ]}>
              {rightColumn.map((item) => (
                <FoodCard
                  key={item.id}
                  food={item}
                  onPress={() => navigation.navigate('FoodDetail', { food: item })}
                />
              ))}
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6F3D',
    paddingTop:15, 
    paddingRight: 16,
    paddingLeft: 16,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#fff',

 
  },
  logo:{
    width:185,
    height:160,
    marginBottom:5,
    

  },
    scrollContent: {
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
    gap: 15,
  },
  offsetColumn: {
    marginRight: 12,
  },
    searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    height:50,
    paddingHorizontal: 12,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});

export default HomeScreen;
