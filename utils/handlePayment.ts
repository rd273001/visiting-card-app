import { Details } from '@/types/details';
import { ToastAndroid } from 'react-native';
import RazorpayCheckout, { CheckoutOptions, ErrorResponse } from 'react-native-razorpay';
import { height } from './dimension';

export const handlePayment = async ( details: Details ) => {
  const { email, phone, name } = details;

  // Options to be passed for transaction
  const options: CheckoutOptions = {
    name: 'Visiting Card Payment',
    description: 'Visiting Card Payment',
    image: 'https://cdn.razorpay.com/logos/FEGTddBjjleAkf_medium.png',
    currency: 'INR',
    key: process.env.EXPO_PUBLIC_RAZORPAY_TEST_API_KEY as string,
    amount: 100 * 100,  // 10000 Paise = 100 Rs
    order_id: '',
    prefill: {
      email: email,
      // contact: phone,
      name: name,
    },
    modal: {
      animation: true,
    },
    redirect: true,
    timeout: 10,
    theme: { color: '#EC0BAE' },
  };

  /* loads and start transaction process */
  try {
    const data = await RazorpayCheckout.open( options )
    // handle success
    ToastAndroid.showWithGravity( `Success: ${data.razorpay_payment_id}`, ToastAndroid.SHORT, height * 0.1 );
  } catch ( error: ErrorResponse | any ) {
    // handle failure
    ToastAndroid.showWithGravity( `Error: ${error.description}`, ToastAndroid.SHORT, height * 0.1 );
  }

  // Share Card after transaction
  // handleShare();
};