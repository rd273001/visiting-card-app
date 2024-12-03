import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-paper';

type ErrorScreenProps = {
  error: Error;
  stack: string;
};

const ErrorScreen: React.FC<ErrorScreenProps> = ( { error, stack } ) => {
  return (
    <View style={ styles.container }>
      <Icon source='error' size={ 48 } color='#E11D48' />
      <Text style={ styles.errorText }>An error occurred:</Text>
      <Text style={ styles.errorText }>{ error.message }</Text>
      <Text style={ styles.stackText }>{ stack }</Text>
    </View>
  );
};

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#000',
  },
  errorText: {
    color: '#F37254',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  stackText: {
    color: '#fff',
    fontSize: 14,
    marginTop: 16,
  },
} );

export default ErrorScreen;