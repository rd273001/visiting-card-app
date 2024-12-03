import React from 'react';
import { Stack } from 'expo-router';

const RootLayout: React.FC = () => {
  return (
    <Stack screenOptions={ { headerShown: false } }>
      <Stack.Screen name='index' />
      <Stack.Screen name='visiting-card' />
      <Stack.Screen name='payment' />
      <Stack.Screen name='loading' />
      <Stack.Screen name='error' />
    </Stack>
  )
};

export default RootLayout;