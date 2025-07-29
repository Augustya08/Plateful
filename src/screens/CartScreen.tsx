// CartScreen.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useCartStore } from '../store/cart'; // update path if needed

const DELIVERY_CHARGE = 10;

export default function CartScreen() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCartStore();
  const subTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subTotal + DELIVERY_CHARGE;

  return (
    <View style={styles.container}><View style={styles.headinfo}>
            <Text style={styles.headTitle}>My Cart</Text>
            <TouchableOpacity ><Text style={styles.addmoreButton}>Add More</Text></TouchableOpacity>
        </View>
      <ScrollView contentContainerStyle={styles.scroll}>
        {cart.length === 0 ? (
          <><Image style={styles.emptycart} source={require('../img/emptycart.png')} /><Text style={styles.empty}>Don't let your cart (and your stomach) stay empty—great meals are just a tap away. Feed your hunger for happiness!</Text></>
        ) : (
          cart.map(item => (
            <View key={item.id} style={styles.cartItem}>
              <Image source={{ uri: item.image }} style={styles.foodImg} />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={styles.foodName}>{item.name}</Text>
                <Text style={styles.foodPrice}>₹{item.price}</Text>
                <View style={styles.qtyRow}>
                  <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity - 1)}>
                    <Ionicons name="remove-circle-outline" size={25} color="#FF6F3D" />
                  </TouchableOpacity>
                  <Text style={styles.qtyText}>{item.quantity}</Text>
                  <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity + 1)}>
                    <Ionicons name="add-circle-outline" size={25} color="#FF6F3D" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                    <Ionicons name="close" size={22} color="#bb3333" style={{ marginLeft: 12 }} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))
        )}
        {cart.length > 0 && (
          <><View style={styles.billPanel}>
                      <View style={styles.billRow}>
                          <Text style={styles.billLabel}>Items :</Text>
                          <Text style={styles.billVal}>{cart.length}</Text>
                      </View>
                      <View style={styles.billRow}>
                          <Text style={styles.billLabel}>Delivery charge :</Text>
                          <Text style={styles.billVal}>₹{DELIVERY_CHARGE}</Text>
                      </View>
                      <View style={styles.billRow}>
                          <Text style={styles.billLabel}>Sub Total :</Text>
                          <Text style={styles.billVal}>₹{subTotal}</Text>
                      </View>
                  </View><Text style={styles.quote}>“The secret of success in life is to eat what you like and let the food fight it out inside.”</Text><Text style={styles.quoteauthor}>-Mark Twain</Text></>
        )}
      </ScrollView>
      {cart.length > 0 && (
        <View style={styles.footer}>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>₹{total}</Text>
          </View>
          <TouchableOpacity
            style={styles.checkoutBtn}
            onPress={() => {
              Alert.alert('Checkout', 'Proceeding to checkout!');
              clearCart();
            }}
          >
            <Text style={styles.checkoutText}><Ionicons name="logo-paypal" size={25} color="#fff" />  Proceed to Checkout</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scroll: { padding: 16, paddingBottom: 140 },
  empty: { textAlign: "center", fontSize: 15, color: "#999", marginVertical: 50 ,fontFamily:"Montserrat-Italic",},
  cartItem: {
    flexDirection: "row",
    backgroundColor: "#FAF8F5",
    alignItems: "center",
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
    shadowColor: "#ff8630", shadowOpacity: 0.05, shadowRadius: 6, elevation: 2,
  },
  foodImg: { width: 60, height: 60, borderRadius: 18 },
  foodName: { fontSize: 16,color: "#343232", marginBottom: 4, fontFamily:"Montserrat-Bold" },
  foodPrice: { fontSize: 15, color: "#FF6F3D", marginBottom: 3,fontFamily:"Montserrat-Regular", },
  qtyRow: { flexDirection: "row", alignItems: "center", marginTop: 5 },
  qtyText: { marginHorizontal: 12, fontSize: 16, color: "#333",fontFamily:"Montserrat-Regular", },
  billPanel: {
    backgroundColor: "#FFF",
    elevation: 2,
    borderRadius: 16,
    marginTop: 12,
    padding: 16,
    shadowColor: "#fc9b59", shadowOpacity: 0.06, shadowRadius: 4,
  },
  billRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 7 },
  billLabel: { color: "#918E8B", fontSize: 15 ,fontFamily:"Montserrat-Regular",},
  billVal: { color: "#333", fontSize: 16,fontFamily:"Montserrat-Bold", },
  footer: {
    position: "absolute", left: 0, right: 0, bottom: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 24, borderTopRightRadius: 24,
    paddingHorizontal: 18, paddingTop: 10, paddingBottom: 27,
    shadowColor: "#fa8000", shadowOpacity: 0.11, shadowRadius: 8, elevation: 13,
  },
  totalRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 14 },
  totalLabel: { fontSize: 19, color: "#232323",fontFamily:"Montserrat-Bold", },
  totalValue: { fontSize: 21, color: "#FF6F3D",fontFamily:"Montserrat-Bold", },
  checkoutBtn: {
    backgroundColor: "#FF6F3D",
    borderRadius: 17,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 5,
  },
  checkoutText: { color: "#fff", fontSize: 18, letterSpacing: 0.5,fontFamily:"Montserrat-Bold", },
  
  headinfo:{
    flexDirection:'row',
    gap:185,
    margin:20,

  },
  headTitle:{
    fontFamily:"Montserrat-Bold",
    fontSize:18,
    
    color:'black',

  },
  addmoreButton:{
    fontFamily:"Montserrat-Bold",
    fontSize:18,
    alignSelf:'flex-end',
    color:'#F7630C'

  },
  emptycart:{
    marginTop:50,
    alignSelf:'center',
    width:300,
    height:370,
  },
  quote:{
    color:'#999',
    marginTop:70,
    fontFamily:"Montserrat-Italic",
    textAlign:'center',
  },
  quoteauthor:{
    color:'#999',
    fontFamily:"Montserrat-Italic",
    textAlign:'center',
  }

});
