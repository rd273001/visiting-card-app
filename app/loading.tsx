import { width } from '@/utils/dimension';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Image, ImageBackground, Text } from 'react-native';

const LoadingScreen: React.FC = () => {
  const router = useRouter();

  useEffect( () => {
    const timeoutId = setTimeout( () => {
      router.push( '/payment' );
    }, 2000 );
    return () => clearTimeout( timeoutId );
  }, [] );

  return (
    <View style={ styles.container }>
      <ImageBackground source={ require( '@/assets/images/razorpay-logo.png' ) } imageStyle={ styles.image } style={{alignItems: 'center', justifyContent: 'center', height:width*0.16, width: width*0.16}}>
        <ActivityIndicator size={ width * 0.223 } color='lightseagreen' />
      </ImageBackground>
      <Text style={styles.loadingTxt}>LOADING</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3E3E3E',
  },
  image: {
    backgroundColor: '#fff',
    resizeMode: 'contain',
    borderRadius: width,
    zIndex: 10
  },
  loadingTxt: {
    marginTop: width * 0.035,
    fontSize: width * 0.035,
    fontWeight: 'bold',
    color: '#fff',
  }
});

export default LoadingScreen;