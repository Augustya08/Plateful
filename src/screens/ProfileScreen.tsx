import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ProfileScreen() {
  // Replace with actual user data or use context/auth state later
  const user = {
    name: 'Augustya Shukla',
    email: 'augustyashukla394@gmail.com',
    profilePic: 'https://randomuser.me/api/portraits/women/44.jpg', // placeholder avatar
  };

  return (
    <View style={styles.bg}>
      {/* Top section: avatar and user info */}
      <View style={styles.header}>
        <Image source={ require('../img/me.jpg')} style={styles.avatar} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>

      {/* Scrollable main content */}
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.actionCard}>
          <Ionicons name="fast-food-outline" size={26} color="#FF6F3D" style={styles.actionIcon} />
          <Text style={styles.actionText}>Order History</Text>
          <Ionicons name="chevron-forward" size={22} color="#BEBEBE" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionCard}>
          <Ionicons name="location-outline" size={25} color="#FF6F3D" style={styles.actionIcon} />
          <Text style={styles.actionText}>Saved Addresses</Text>
          <Ionicons name="chevron-forward" size={22} color="#BEBEBE" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionCard}>
          <Ionicons name="card-outline" size={25} color="#FF6F3D" style={styles.actionIcon} />
          <Text style={styles.actionText}>Payment Methods</Text>
          <Ionicons name="chevron-forward" size={22} color="#BEBEBE" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionCard}>
          <Ionicons name="color-palette-outline" size={25} color="#FF6F3D" style={styles.actionIcon} />
          <Text style={styles.actionText}>App Theme</Text>
          <Ionicons name="chevron-forward" size={22} color="#BEBEBE" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionCard}>
          <Ionicons name="log-out-outline" size={25} color="#FF6F3D" style={styles.actionIcon} />
          <Text style={[styles.actionText, { color: '#F4632E' }]}>Logout</Text>
        </TouchableOpacity>
        <Text style={styles.quote}>“One cannot think well, love well, sleep well, if one has not dined well.”</Text>
        <Text style={styles.quoteauthor}>-Virginia Woolf</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: '#FF6F3D', // your app's orange
  },
  header: {
    alignItems: 'center',
    paddingVertical: 32,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 7,
    shadowColor: '#FFB48A',
    shadowOpacity: 0.17,
    shadowRadius: 16,
  },
  avatar: {
    width: 104,
    height: 104,
    borderRadius: 52,
    borderWidth: 5,
    borderColor: '#FF6F3D',
    backgroundColor: '#F3F4F6',
    marginBottom: 8,
  },
  editButton: {
    position: 'absolute',
    bottom: 30,
    right: '36%',
    backgroundColor: '#FF6F3D',
    borderRadius: 16,
    padding: 7,
    zIndex: 1,
    elevation: 2,
  },
  name: {
    fontSize: 24,
    color: '#FF6F3D',
    fontFamily:"Montserrat-SemiBold",
    marginTop: 8,
  },
  email: {
    fontSize: 13,
    color: '#888',
    fontFamily:"Montserrat-Regular",
    letterSpacing: 0.2,
    marginVertical: 3,
  },
  content: {
    padding: 24,
    paddingTop: 18,
  },
  actionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginBottom: 18,
    elevation: 2,
    shadowColor: '#FFB48A',
    shadowOpacity: 0.06,
    shadowRadius: 7,
  },
  actionIcon: {
    marginRight: 14,
  },
  actionText: {
    flex: 1,
    fontSize: 16,
    fontFamily:"Montserrat-SemiBold",
    color: '#363634',
    fontWeight: '600',
  },
  quote:{
    color:'#fff',
    marginTop:30,
    fontFamily:"Montserrat-Italic",
    textAlign:'center',
  },
  quoteauthor:{
    color:'#fff',
    fontFamily:"Montserrat-Italic",
    textAlign:'center',
  }
});

