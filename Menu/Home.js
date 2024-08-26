import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('../assets/main-menu/kopi.jpg')} 
          style={styles.photo}
        />
        <Text style={styles.textOverlay}>Kopi Latimojong</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Selamat Datang di Aplikasi Kopi Latimojong!</Text>
        <Text style={styles.contentText}>
          Halo, pada aplikasi ini kamu dapat menemukan berbagai macam peralatan mendaki dan juga dapat melihat Seven Summits yang ada di Indonesia.
        </Text>
        <Text style={styles.subtitle}>Fitur Utama:</Text>
        <View style={styles.featureItem}>
          <Image 
            source={require('../assets/main-menu/shop_aktif.jpg')} // Ganti dengan path file ikon Anda
            style={styles.icon}
          />
          <Text style={styles.featureText}>Peralatan Mendaki Terlengkap</Text>
        </View>
        <View style={styles.featureItem}>
          <Image 
            source={require('../assets/main-menu/maps-aktif.jpg')} // Ganti dengan path file ikon Anda
            style={styles.icon}
          />
          <Text style={styles.featureText}>Informasi Seven Summits Indonesia</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
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
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  contentText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 50,
    lineHeight: 22,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  featureText: {
    fontSize: 16,
    color: '#555',
  },
})
