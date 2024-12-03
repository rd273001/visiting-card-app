import { CommonStyles } from '@/commons/CommonStyles';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PaymentScreen: React.FC = () => {

  console.log( 'Payment Screen opened!' );

  return (
    <View style={ styles.container }>
      <Text style={ { fontSize: 24, color: '#14a', fontWeight: '700' } }>RazorPay Payment Screen</Text>
    </View>
  )
};

const styles = StyleSheet.create( {
  container: {
    ...CommonStyles.container,
  },
} );

export default PaymentScreen;