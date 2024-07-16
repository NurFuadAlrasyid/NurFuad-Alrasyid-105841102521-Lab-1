import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
  {
    url: require('../assets/home/tas.jpeg'),
    caption: 'Tas Mendaki',
    price: '12$',
    oldPrice: '15$',
    discount: '-20%',
    rating: 10,
    reviews: 10
  },
  {
    url: require('../assets/home/tenda.jpeg'),
    caption: 'Tenda',
    price: '19$',
    oldPrice: '22$',
    discount: '15$',
    rating: 10,
    reviews: 10
  }
];

const Home = () => {
  const slides = [];
  for (let i = 0; i < slideImages.length; i += 2) {
    slides.push(slideImages.slice(i, i + 2));
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/home/kopi.jpg')}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>Kopi Latimojong</Text>
        <View style={styles.checkButtonContainer}>
          <Text style={styles.checkButton}>Check</Text>
        </View>
      </View>
      <View style={styles.newSection}>
        <View style={styles.newSectionHeader}>
          <Text style={styles.newSectionTitle}>New</Text>
          <Text style={styles.viewAll}>View all</Text>
        </View>
        <Text style={styles.newSectionSubtitle}>You've never seen it before!</Text>
        <View style={styles.slideContainer}>
          <Slide>
            {slides.map((slideGroup, index) => (
              <View key={index} style={styles.slideGroup}>
                {slideGroup.map((slideImage, idx) => (
                  <View key={idx} style={styles.eachSlide}>
                    {slideImage.discount && (
                      <View style={styles.discountBadge}>
                        <Text style={styles.discountText}>{slideImage.discount}</Text>
                      </View>
                    )}
                    <Image source={slideImage.url} style={styles.slideImage} />
                    <View style={styles.productDetails}>
                      <Text style={styles.productName}>{slideImage.caption}</Text>
                      <View style={styles.priceContainer}>
                        {slideImage.oldPrice && (
                          <Text style={styles.oldPrice}>{slideImage.oldPrice}</Text>
                        )}
                        <Text style={styles.newPrice}>{slideImage.price}</Text>
                      </View>
                      <View style={styles.ratingContainer}>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Text key={i} style={styles.star}>
                            {i < slideImage.rating ? '★' : '☆'}
                          </Text>
                        ))}
                        <Text style={styles.reviews}>({slideImage.reviews})</Text>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            ))}
          </Slide>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 300,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  headerText: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    top: 180,
    left: 20,
  },
  checkButtonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  checkButton: {
    fontSize: 18,
    color: 'white',
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  newSection: {
    padding: 20,
  },
  newSectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  newSectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  viewAll: {
    fontSize: 16,
    color: 'gray',
  },
  newSectionSubtitle: {
    fontSize: 16,
    color: 'gray',
    marginVertical: 10,
  },
  slideContainer: {
    height: 350,
  },
  slideGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  eachSlide: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '48%',
    marginHorizontal: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'gainsboro',
  },
  slideImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  productDetails: {
    padding: 10,
    alignItems: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  oldPrice: {
    fontSize: 14,
    color: 'gray',
    textDecorationLine: 'line-through',
    marginRight: 5,
  },
  newPrice: {
    fontSize: 16,
    color: 'red',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  star: {
    fontSize: 14,
    color: 'orange',
  },
  reviews: {
    fontSize: 14,
    color: 'gray',
    marginLeft: 5,
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'red',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
  },
  discountText: {
    color: 'white',
    fontSize: 12,
  },
});