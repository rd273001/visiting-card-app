import React, { useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
import { Button, Card, TextInput } from 'react-native-paper';
import { CheckoutOptionsProps } from '@/types/CheckOutOption';

const PaymentScreen: React.FC = () => {
  const [mobileNumber, setMobileNumber] = useState<string>( '' );
  const params = useLocalSearchParams();
  const router = useRouter();

  const handlePaymentPress = async () => {
    const options: CheckoutOptionsProps = {
      name: params.company as string,
      description: 'Visiting Card Payment',
      image: 'https://cdn.razorpay.com/logos/FEGTddBjjleAkf_medium.png',
      currency: 'INR',
      key: process.env.EXPO_PUBLIC_RAZORPAY_TEST_API_KEY as string,
      amount: 100 * 100,  // convert Paise to Rupees
      order_id: '',
      prefill: {
        email: params.email as string,
        contact: mobileNumber || params.mobileNumber as string,
        name: params.name as string,
      },
      theme: { color: '#EC0BAE' as string },
    };

    try {
      await RazorpayCheckout.open( options );
      // Navigate to the Visiting Card screen after successful payment
      router.push( '/visiting-card' );
    } catch ( error: any ) {
      console.error( 'Error processing payment:', error );
      // Navigate to the Error screen
      router.push( { pathname: '/error', params: { error, stack: error.stack } } );
    }
  };

  return (
    <View style={ styles.container }>
      <Card style={[styles.card, styles.paymentCard]}>
        <Card.Content>
          <TextInput
            label="Mobile Number"
            value={mobileNumber}
            onChangeText={setMobileNumber}
            keyboardType="phone-pad"
            style={styles.input}
          />
          <Button mode="contained" onPress={handlePaymentPress} style={styles.paymentButton}>
            Pay ₹100
          </Button>
        </Card.Content>
      </Card>
    </View>
  )
};

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    maxWidth: 400,
    marginVertical: 8,
  },
  paymentCard: {
    backgroundColor: '#121212',
  },
  input: {
    marginVertical: 8,
  },
  paymentButton: {
    marginVertical: 8,
  },
} );

export default PaymentScreen;