import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-paper';

type ErrorScreenParams = {
  error: Error;
};

const ErrorScreen: React.FC = () => {
  const params = useLocalSearchParams() as unknown as ErrorScreenParams;
  const { error } = params;

  return (
    <View style={ styles.container }>
      <Icon source='error' size={ 48 } color='#E11D48' />
      <Text style={ styles.errorText }>An error occurred:</Text>
      <Text style={ styles.errorText }>{ error.message }</Text>
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