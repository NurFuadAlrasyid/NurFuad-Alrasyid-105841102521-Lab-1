import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

const items = [
  { photo: require('../assets/main-menu/shop/tas-gunung.png'), name: 'Tas Gunung', price: 'Rp 200.000' },
  { photo: require('../assets/main-menu/shop/sleeping-bag.png'), name: 'Sleeping Bag', price: 'Rp 70.000' },
  { photo: require('../assets/main-menu/shop/tenda.png'), name: 'Tenda', price: 'Rp 400.000' },
  { photo: require('../assets/main-menu/shop/alat-masak.png'), name: 'Alat Masak', price: 'Rp 150.000' },
]

const additionalItems = [
  { photo: require('../assets/main-menu/shop/sepatu.png'), name: 'Sepatu', price: 'Rp 250.000' },
  { photo: require('../assets/main-menu/shop/jaket.png'), name: 'Jaket', price: 'Rp 200.000' },
  { photo: require('../assets/main-menu/shop/celana.png'), name: 'Celana', price: 'Rp 100.000' },
  { photo: require('../assets/main-menu/shop/baju.png'), name: 'Baju', price: 'Rp 80.000' },
  { photo: require('../assets/main-menu/shop/topi.png'), name: 'Topi', price: 'Rp 50.000' },
  { photo: require('../assets/main-menu/shop/sarung tangan.png'), name: 'Sarung Tangan', price: 'Rp 40.000' },
]

const Shop = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('../assets/main-menu/kopi.jpg')}
          style={styles.photo}
        />
        <Text style={styles.textOverlay}>Toko</Text>
      </View>
      <View style={styles.textSection}>
        <Text style={styles.infoText}>
          {'Alat yang wajib kamu miliki !'}
        </Text>
      </View>
      <View style={styles.itemsContainer}>
        <View style={styles.row}>
          {items.slice(0, 2).map((item, index) => (
            <View key={index} style={styles.item}>
              <Image source={item.photo} style={styles.itemPhoto} />
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
          ))}
        </View>
        <View style={styles.row}>
          {items.slice(2).map((item, index) => (
            <View key={index} style={styles.item}>
              <Image source={item.photo} style={styles.itemPhoto} />
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.additionalTextSection}>
        <Text style={styles.additionalText}>
          {'Alat tambahan yang bisa kamu gunakan !'}
        </Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.additionalItemsContainer}>
        {additionalItems.map((item, index) => (
          <View key={index} style={styles.additionalItem}>
            <Image source={item.photo} style={styles.additionalItemPhoto} />
            <Text style={styles.additionalItemName}>{item.name}</Text>
            <Text style={styles.additionalItemPrice}>{item.price}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default Shop

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    position: 'relative',
  },
  photo: {
    width: '100%',
    height: 100,
  },
  textOverlay: {
    position: 'absolute',
    bottom: 10, 
    left: 10, 
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  textSection: {
    padding: 20,
  },
  infoText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  itemsContainer: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  item: {
    width: '48%', 
    alignItems: 'center',
  },
  itemPhoto: {
    width: '100%',
    height: 150,
    marginBottom: 5,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 14,
    color: '#888',
  },
  additionalTextSection: {
    padding: 20,
  },
  additionalText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  additionalItemsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  additionalItem: {
    width: 150,
    marginRight: 10,
    alignItems: 'center',
  },
  additionalItemPhoto: {
    width: '100%',
    height: 120,
    marginBottom: 5,
  },
  additionalItemName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  additionalItemPrice: {
    fontSize: 12,
    color: '#888',
  },
})
