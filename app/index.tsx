import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { height, width } from '@/utils/dimension';
import { Details } from '@/types/details';
import PaperButton from '@/components/Button';

const HomeScreen: React.FC = () => {
  const [details, setDetails] = useState<Details>( {
    name: '',
    designation: '',
    phone: '',
    email: '',
    company: '',
  } );
  const [errors, setErrors] = useState<Partial<Details>>( {} );
  const router = useRouter();

  const validateInputs = (): boolean => {
    const newErrors: Partial<Details> = {};

    if ( !details.name ) newErrors.name = 'Name is required.';
    if ( !details.designation ) newErrors.designation = 'Designation is required.';
    if ( !details.phone ) {
      newErrors.phone = 'Phone number is required.';
    } else if ( !/^\d+$/.test( details.phone ) ) {
      newErrors.phone = 'Phone number must contain only digits.';
    }
    if ( !details.email ) {
      newErrors.email = 'Email is required.';
    } else if ( !/^\S+@\S+\.\S+$/.test( details.email ) ) {
      newErrors.email = 'Invalid email format.';
    }
    if ( !details.company ) newErrors.company = 'Company name is required.';

    setErrors( newErrors );
    return Object.keys( newErrors ).length === 0;
  };

  const handleSubmit = () => {
    if ( validateInputs() ) {
      router.push( {
        pathname: '/visiting-card',
        params: details as any,
      } );
    } else {
      Alert.alert( 'Required', 'Please fix the errors before submitting.' );
    }
  };

  return (
    <View style={ styles.container }>
      <Text style={ styles.description }>
        Fill Your Details
      </Text>

      <TextInput
        value={ details.name }
        onChangeText={ ( text ) => setDetails( { ...details, name: text } ) }
        label='Name'
        mode='outlined'
        textColor='#fff'
        activeOutlineColor='#B2BAFE'
        outlineColor='#ccc'
        placeholderTextColor='#eee'
        style={ styles.input }
      />
      <Text style={ styles.errTxt }>{ errors?.name }</Text>

      <TextInput
        value={ details.designation }
        onChangeText={ ( text ) => setDetails( { ...details, designation: text } ) }
        label='Designation'
        placeholder='Designation'
        mode='outlined'
        textColor='#fff'
        activeOutlineColor='#B2BAFE'
        outlineColor='#ccc'
        style={ styles.input }
      />
      <Text style={ styles.errTxt }>{ errors?.designation }</Text>

      <TextInput
        value={ details.phone }
        keyboardType='phone-pad'
        onChangeText={ ( text ) => setDetails( { ...details, phone: text } ) }
        label='Phone'
        mode='outlined'
        textColor='#fff'
        activeOutlineColor='#B2BAFE'
        outlineColor='#ccc'
        style={ styles.input }
      />
      <Text style={ styles.errTxt }>{ errors?.phone }</Text>

      <TextInput
        value={ details.email }
        keyboardType='email-address'
        onChangeText={ ( text ) => setDetails( { ...details, email: text } ) }
        label='Email'
        mode='outlined'
        textColor='#fff'
        activeOutlineColor='#B2BAFE'
        outlineColor='#ccc'
        style={ styles.input }
      />
      <Text style={ styles.errTxt }>{ errors?.email }</Text>

      <TextInput
        value={ details.company }
        onChangeText={ ( text ) => setDetails( { ...details, company: text } ) }
        label='Company'
        mode='outlined'
        textColor='#fff'
        activeOutlineColor='#B2BAFE'
        outlineColor='#ccc'
        style={ styles.input }
      />
      <Text style={ styles.errTxt }>{ errors?.company }</Text>

      <PaperButton onPress={ handleSubmit } />
    </View>
  );
};

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: width * 0.035,
    backgroundColor: '#2E2E2E'
  },
  description: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    marginBottom: height * 0.02,
    textAlign: 'center'
  },
  input: {
    borderBottomWidth: 0,
    marginBottom: height * 0.005,
    backgroundColor: '#2E2E2E'
  },
  errTxt: {
    color: 'red',
    fontSize: 12,
    marginLeft: width * 0.02,
    marginBottom: height * 0.01,
  },
} );

export default HomeScreen;