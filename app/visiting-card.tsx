import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, Divider, Icon, Paragraph, Title } from 'react-native-paper';
import { shareAsync } from 'expo-sharing';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { height, width } from '@/utils/dimension';
import PaperButton from '@/components/Button';
import ViewShot from 'react-native-view-shot';

const VisitingCardScreen: React.FC = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const viewShotRef = useRef( null );

  useEffect( () => {
    const timeoutId = setTimeout( () => {
      router.push( { pathname: '/loading', params } );
    }, 5000 );
    return () => clearTimeout( timeoutId );
  }, [] );

  const handleShareVisitingCardImage = async () => {
    try {
      const uri = await viewShotRef.current?.capture();
      console.log( 'URI => ', uri );

      if ( uri ) {
        console.log( 'Captured...' );
        // Share the captured image
        await shareAsync( uri, {
          mimeType: 'image/jpeg',
          dialogTitle: 'Share image',
          UTI: 'public.jpeg',
        } );
      }
    } catch ( err: Error | any ) {
      console.log( 'Error in sharing => ', err );
    }
  };

  const contactInfo = [
    { icon: 'phone-outline', label: `Mobile Number: ${params.phone}` },
    { icon: 'email-outline', label: `Email: ${params.email}` },
    { icon: 'office-building', label: `Company Name: ${params.company}` },
  ];

  return (
    <View style={ styles.container }>
      <Text style={ [styles.description, styles.txtWhite] }>Preview Your Visiting Card</Text>

        <ViewShot ref={ viewShotRef } options={ { format: 'jpg', quality: 1 } }>
          <Card style={ styles.card }>
            <Card.Content>
              <Title style={ [styles.title, styles.txtWhite] }>{ params.name }</Title>
              <Paragraph style={ [styles.designation, styles.txtWhite] }>{ params.designation }</Paragraph>
              <Divider style={ styles.divider } />
              { contactInfo.map( ( info, index ) => (
                <View key={ index } style={ styles.row }>
                  <Icon source={ info.icon } color='#fff' size={ 24 } />
                  <Paragraph style={ [styles.txtWhite, styles.infoTxt] }>{ info.label }</Paragraph>
                </View>
              ) ) }
            </Card.Content>
          </Card>
        </ViewShot>

      <PaperButton icon='share-variant' onPress={ handleShareVisitingCardImage } label='Share Visiting Card' btnStyle={ { marginBottom: height * 0.03, alignSelf: 'center', width: '85%' } } />

    </View>
  );
};

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: width * 0.035,
    backgroundColor: '#2E2E2E'
  },
  description: {
    fontSize: 24,
    fontWeight: '600',
    marginVertical: height * 0.03,
    textAlign: 'center'
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    width: '100%',
    marginVertical: height * 0.02,
    backgroundColor: '#777'
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
  },
  designation: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: height * 0.01
  },
  divider: {
    height: height * 0.003
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: height * 0.02
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.02,
    marginTop: height * 0.01,
  },
  txtWhite: {
    color: '#fff',
  },
  infoTxt: {
    fontWeight: '500'
  },
} );

export default VisitingCardScreen;