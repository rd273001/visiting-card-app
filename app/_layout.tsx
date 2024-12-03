import React from 'react';
import { Stack } from 'expo-router';

const RootLayout: React.FC = () => {
  return (
    <Stack screenOptions={ { headerShown: false } }>
      <Stack.Screen name='index' />
      <Stack.Screen name='card' />
      <Stack.Screen name='payment' />
    </Stack>
  )
};

export default RootLayout;