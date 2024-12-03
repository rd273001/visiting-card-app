import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native'

const CardScreen: React.FC = () => {
  const router = useRouter();

  useEffect( () => {
    const timeoutId = setTimeout( () => {
      router.push( '/payment' );
    }, 3000 );
    return () => clearTimeout( timeoutId );
  }, [] );

  return (
    <View style={ styles.container }>
      <Text style={ { fontSize: 24, color: '#14a', fontWeight: '700' } }>Visiting Card Screen</Text>
    </View>
  )
};

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
} );

export default CardScreen;