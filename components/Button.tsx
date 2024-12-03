import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { height } from '@/utils/dimension';

interface ButtonProps {
  onPress: () => void;
  label?: string;
  icon?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

const PaperButton: React.FC<ButtonProps> = ( { label = 'Submit', onPress, icon, children, ...props } ) => {
  return (
    <Button
      onPress={ onPress }
      icon={ icon }
      mode='contained'
      style={ [styles.button, props?.btnStyle] }
      labelStyle={ [styles.btnLabel, props?.labelStyle] }
    >
      { label }
      { children }
    </Button>
  );
};

const styles = StyleSheet.create( {
  button: {
    marginTop: height * 0.03,
    backgroundColor: '#B2BAFE',
  },
  btnLabel: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'indigo'
  }
} );


export default PaperButton;