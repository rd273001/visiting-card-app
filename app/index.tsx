import React from 'react';
import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CommonStyles } from '@/commons/CommonStyles';

const HomeScreen: React.FC = () => {
  return (
    <View
      style={ styles.container }
    >
      <Link href='/card' asChild>
      <TouchableOpacity style={{borderWidth: 1, padding: 10}}>
          <Text>
            Go to Visiting Card Screen
          </Text>
        </TouchableOpacity>
        </Link>
    </View>
  );
};

const styles = StyleSheet.create( {
  container: {
    ...CommonStyles.container,
  },
} );

export default HomeScreen;