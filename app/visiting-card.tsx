import React, { useCallback, useRef } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, Divider, Icon, Paragraph, Title } from 'react-native-paper';
import { useLocalSearchParams } from 'expo-router';
import { height, width } from '@/utils/dimension';
import PaperButton from '@/components/Button';
import ViewShot from 'react-native-view-shot';
import { Details } from '@/types/details';
import { handlePayment } from '@/utils/handlePayment';
import { handleShareVisitingCard } from '@/utils/handleShare';

const VisitingCardScreen: React.FC = () => {
  const params = useLocalSearchParams() as unknown as Details;
  const viewShotRef = useRef( null );

  const handleShareVisitingCardImage = useCallback( async () => {
    const status = await handlePayment( params );
    // Share Card after transaction successfull
    if ( status === 'failure' ) return;
    handleShareVisitingCard( viewShotRef, 'visiting-card', 'Check out my visiting card!' );
  }, [] );

  const contactInfo = [
    { icon: 'phone-outline', label: `Mobile Number: ${params.phone}` },
    { icon: 'email-outline', label: `Email: ${params.email}` },
    { icon: 'office-building', label: `Company Name: ${params.company}` },
  ];

  return (
    <View style={ styles.container }>
      <Text style={ [styles.description, styles.txtWhite] }>Preview Your Visiting Card</Text>

      <ViewShot ref={ viewShotRef }>
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
    backgroundColor: '#2E2E2E',
    gap: height * 0.1
  },
  description: {
    fontSize: 24,
    fontWeight: '600',
    marginVertical: height * 0.03,
    textAlign: 'center'
  },
  card: {
    width: '100%',
    backgroundColor: '#777',
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