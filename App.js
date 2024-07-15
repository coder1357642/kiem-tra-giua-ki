import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Image, TouchableOpacity, StatusBar, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Đường dẫn tới ảnh nền trong thư mục assets
const backgroundImage = require('./assets/8140 1.png'); 
const carrot = require('./assets/carrot.png');
const text = require('./assets/text.png');
const text2 = require('./assets/text2.png');
const nhanh = require('./assets/nhanh ca rot.png');
const button = require('./assets/button.png');

const backgroundImage2 = require('./assets/background.png');
const status = require('./assets/Status Bar.png');
const text3 = require('./assets/text3.png');
const phone = require('./assets/phone.png');
const text4 = require('./assets/text4.png');
const google = require('./assets/google.png');
const facebook = require('./assets/facebook.png');
const nghieng = require('./assets/nghieng.png');

// Lấy chiều rộng màn hình
const { width, height } = Dimensions.get('window');

export default function App() {
  // State để quản lý việc hiển thị các phần giao diện
  const [showFirstSection, setShowFirstSection] = useState(true);

  // Hàm xử lý khi nhấn vào button
  const handleButtonClick = () => {
    setShowFirstSection(false);
  };

  return (
    <View style={styles.container}>
      {showFirstSection ? (
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
          <View style={styles.container}>
            <View style={styles.upperContainer}></View>
            <View style={styles.lowerContainer}>
              <Image source={nhanh} style={styles.nhanhImage} />
              <Image source={carrot} style={styles.carrotImage} />
              <Image source={text} style={styles.textImage} />
              <Image source={text2} style={styles.textImage2} />
              <TouchableOpacity onPress={handleButtonClick}>
                <Image source={button} style={styles.button} />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      ) : (
        <>
          <ImageBackground source={backgroundImage2} style={styles.topContainer}>
            <Image source={status} style={styles.StatusBar} />
          </ImageBackground>
          <View style={styles.bottomContainer}>
            <Image source={text3} style={styles.text3} />
            <Image source={phone} style={styles.phone} />
            <Image source={text4} style={styles.text4} />
            <Image source={google} style={styles.google} />
            <Image source={facebook} style={styles.facebook} />
          </View>
          <Image source={nghieng} style={styles.nghieng} />
        </>
      )}
    </View>
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
  },
  topContainer: {
    flex: 0.417, // 41.7% chiều dọc màn hình
  },
  bottomContainer: {
    flex: 0.583, // 58.3% chiều dọc màn hình
    padding: width * 0.1,
  },
  StatusBar: {
    margin: 0,
    padding: 0,
    width: width,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  text3: {
    marginTop: height * 0.05,
    width: width * 0.53,
    height: height * 0.07,
    resizeMode: 'contain',
  },
  phone: {
    marginTop: height * 0.05,
    alignSelf: 'center',
    width: width * 0.8,
    resizeMode: 'contain',
  },
  text4: {
    marginTop: height * 0.05,
    alignSelf: 'center',
    width: width * 0.457,
    resizeMode: 'contain',
  },
  google: {
    marginTop: height * 0.05,
    alignSelf: 'center',
    width: width * 0.8,
    resizeMode: 'contain',
  },
  facebook: {
    marginTop: height * 0.02,
    alignSelf: 'center',
    width: width * 0.8,
    resizeMode: 'contain',
  },
  nghieng: {
    position: 'absolute',
    top: height * 0.01,
    right: width * 0.15, // 10% chiều ngang từ bên phải
    resizeMode: 'contain',
  },
});
