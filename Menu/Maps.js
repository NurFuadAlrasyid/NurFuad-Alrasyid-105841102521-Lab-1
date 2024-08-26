import { StyleSheet, Text, View, Image, ScrollView, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import React, { useRef, useState } from 'react';

const gunungData = [
  {
    id: '1',
    nama: 'Carstensz Pyramid',
    gambar: require('../assets/main-menu/gunung/carstensz-pyramid.png'),
    deskripsi: 'Carstensz Pyramid, juga dikenal sebagai Puncak Jaya, adalah puncak tertinggi di Indonesia dan Oseania, dengan ketinggian 4.884 meter. Terletak di Pegunungan Sudirman, Papua, gunung ini adalah satu-satunya puncak dari Seven Summits yang tertutup salju abadi di daerah tropis. Mendaki Carstensz Pyramid menuntut keterampilan teknis pendakian, karena medan yang terjal dan berbatu.',
  },
  {
    id: '2',
    nama: 'Gunung Kerinci',
    gambar: require('../assets/main-menu/gunung/kerinci.png'),
    deskripsi: 'Gunung Kerinci, yang berdiri setinggi 3.805 meter, adalah gunung berapi tertinggi di Indonesia dan puncak tertinggi di Sumatra. Terletak di Taman Nasional Kerinci Seblat, gunung ini dikelilingi oleh hutan hujan tropis yang merupakan habitat spesies langka seperti harimau Sumatra. Dari puncaknya, pendaki dapat melihat pemandangan spektakuler termasuk Danau Gunung Tujuh yang indah.',
  },
  {
    id: '3',
    nama: 'Gunung Rinjani',
    gambar: require('../assets/main-menu/gunung/rinjani.png'),
    deskripsi: 'Gunung Rinjani, dengan ketinggian 3.726 meter, adalah gunung berapi aktif yang menjadi ikon Pulau Lombok, Nusa Tenggara Barat. Kawah Rinjani menampung Danau Segara Anak, yang dianggap sakral oleh penduduk setempat. Jalur pendakian Rinjani terkenal menantang, dengan medan yang bervariasi dari hutan lebat hingga padang pasir berbatu.',
  },
  {
    id: '4',
    nama: 'Gunung Semeru',
    gambar: require('../assets/main-menu/gunung/semeru.png'),
    deskripsi: 'Gunung Semeru, setinggi 3.676 meter, adalah gunung tertinggi di Pulau Jawa dan merupakan gunung berapi aktif. Terletak di Taman Nasional Bromo Tengger Semeru, gunung ini dikenal sebagai Mahameru, yang berarti "Gunung Agung". Pendakian ke puncaknya memerlukan kehati-hatian karena seringnya terjadi letusan kecil yang menghasilkan abu vulkanik.',
  },
  {
    id: '5',
    nama: 'Gunung Latimojong',
    gambar: require('../assets/main-menu/gunung/latimojong.png'),
    deskripsi: 'Gunung Latimojong, dengan puncak tertingginya Rante Mario yang mencapai 3.478 meter, adalah gunung tertinggi di Pulau Sulawesi. Terletak di Kabupaten Enrekang, Sulawesi Selatan, Latimojong memiliki medan yang bervariasi dari hutan hujan hingga padang rumput. Pendakian menuju Rante Mario menantang, dengan jalur yang terjal dan menembus hutan lebat.',
  },
  {
    id: '6',
    nama: 'Gunung Binaya',
    gambar: require('../assets/main-menu/gunung/binaya.png'),
    deskripsi: 'Gunung Binaiya, yang berdiri setinggi 3.027 meter, adalah puncak tertinggi di Kepulauan Maluku, terletak di Pulau Seram. Pendakian Binaiya terkenal berat, dengan jalur yang terpencil dan memerlukan waktu berhari-hari untuk mencapainya. Hutan tropis yang lebat, lembah yang dalam, dan tebing yang curam menambah tantangan dalam mendaki gunung ini.',
  },
  {
    id: '7',
    nama: 'Gunung Bukit Raya',
    gambar: require('../assets/main-menu/gunung/bukit-raya.png'),
    deskripsi: 'Gunung Bukit Raya, dengan ketinggian 2.278 meter, adalah puncak tertinggi di Kalimantan bagian Indonesia, terletak di perbatasan antara Kalimantan Tengah dan Kalimantan Barat. Gunung ini terletak di tengah hutan hujan tropis yang lebat dan merupakan bagian dari Pegunungan Schwaner. Meskipun tidak terlalu tinggi, medan yang sulit dan terpencil membuat pendakian Bukit Raya menjadi sebuah petualangan yang menantang.',
  },
  
];

const { width } = Dimensions.get('window');

const Maps = () => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollNext = () => {
    if (currentIndex < gunungData.length - 1) {
      const nextIndex = currentIndex + 1;
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }
  };

  const scrollPrev = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      flatListRef.current.scrollToIndex({ index: prevIndex, animated: true });
      setCurrentIndex(prevIndex);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.secondSection}>
      <View style={styles.secondTextContainer}>
        <Text style={styles.secondText}>{item.nama}</Text>
      </View>
      <Image source={item.gambar} style={styles.secondImage} />
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>{item.deskripsi}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('../assets/main-menu/latar.png')} 
          style={styles.photo}
        />
        <View style={styles.textContainer}>
          <Text style={styles.textTop}>THE SEVEN SUMMITS OF INDONESIA</Text>
          <Text style={styles.textBottom}>7 Puncak tertinggi di 7 pulau/kepulauan besar di Indonesia</Text>
        </View>
      </View>


      <FlatList
        ref={flatListRef}
        data={gunungData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        scrollEnabled={false} 
        showsHorizontalScrollIndicator={false}
        getItemLayout={(data, index) => (
          { length: width, offset: width * index, index }
        )}
      />


      <View style={styles.arrowContainer}>
        <TouchableOpacity onPress={scrollPrev} style={styles.arrowButton}>
          <Text style={styles.arrowText}>◄</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={scrollNext} style={styles.arrowButton}>
          <Text style={styles.arrowText}>►</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default Maps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    width: '100%',
    height: 150, 
  },
  textContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTop: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5, 
  },
  textBottom: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  secondSection: {
    alignItems: 'center',
    width: width, 
    marginBottom: 20, 
  },
  secondTextContainer: {
    marginTop: 30,
    marginBottom: 30, 
  },
  secondText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
    padding: 5,
    borderRadius: 5,
  },
  secondImage: {
    width: '100%',
    height: 250, 
  },
  descriptionContainer: {
    padding: 10,
    alignItems: 'center',
  },
  descriptionText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 1,
  },
  arrowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 1, 
  },
  arrowButton: {
    padding: 20,
  },
  arrowText: {
    fontSize: 50,
    color: 'black',
  },
});
