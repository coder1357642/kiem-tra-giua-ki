import React from 'react';
import { StyleSheet, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

// Đường dẫn tới ảnh nền trong thư mục assets
const backgroundImage = require('./assets/8140 1.png'); 
const carrot = require('./assets/carrot.png');
const text = require('./assets/text.png');
const text2 = require('./assets/text2.png');
const nhanh = require('./assets/nhanh ca rot.png');
const button = require('./assets/button.png');

export default function App() {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.upperContainer}>
        </View>
        <View style={styles.lowerContainer}>
          <Image source={nhanh} style={styles.nhanhImage} />
          <Image source={carrot} style={styles.carrotImage} />
          <Image source={text} style={styles.textImage} />
          <Image source={text2} style={styles.textImage2} />
          <Image source={button} style={styles.button} />
        </View>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Hoặc 'contain', tùy thuộc vào cách bạn muốn ảnh được hiển thị
  },
  container: {
    flex: 1,
    flexDirection: 'column', // Đặt các phần tử con theo chiều dọc
  },
  upperContainer: {
    flex: 1, // Chiếm nửa trên của màn hình
    justifyContent: 'center', // Canh giữa theo chiều dọc
    alignItems: 'center', // Canh giữa theo chiều ngang
  },
  lowerContainer: {
    flex: 1, // Chiếm nửa dưới của màn hình
    justifyContent: 'flex-start', // Đặt các phần tử ở trên cùng
    alignItems: 'center', // Canh giữa theo chiều ngang
    position: 'relative', // Đặt vị trí tuyệt đối cho các phần tử con
  },
  nhanhImage: {
    position: 'absolute', // Đặt vị trí tuyệt đối
  },
  carrotImage: {
    marginTop: 20, // Khoảng cách từ trên cùng của lowerContainer
  },
  textImage: {
    marginTop: 20, // Khoảng cách từ trên cùng của lowerContainer
    width: 253,
    height: 90,
  },
  textImage2: {
    marginTop: 20,
    width: 295,
    height: 15,
  },
  button: {
    marginTop: 20,
  }

});
