import { captureRef } from 'react-native-view-shot';
import { shareAsync } from 'expo-sharing';
import React from 'react';

export const handleShareVisitingCard = async (ref: React.RefObject<any>, fileName: string, dialogTitle: string) => {
  try {
    const uri = await captureRef( ref, {
      format: 'jpg',
      fileName: fileName,
      quality: 1.0
    } );
    // Share the captured image
    await shareAsync( uri, {
      mimeType: 'image/jpeg',
      dialogTitle: dialogTitle,
    } );
  } catch ( err: Error | any ) {
    console.log( 'Error while Sharing => ', err.message );
  }
};