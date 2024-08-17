/* eslint-disable react-hooks/exhaustive-deps */
import { type RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import {ScrollView, Text, Image, StyleSheet} from 'react-native';
import type { RootStackParams } from '../routes/StackNavigator';
import { getItemById } from '../service/getItemById';
import { DocumentData } from 'firebase/firestore';
import boardImage from '../assets/board-image.jpg';
import HTMLView from 'react-native-htmlview';



export const Game = () => {

  const param = useRoute<RouteProp<RootStackParams>>().params;
  const navigation = useNavigation();
  const [dataGame, setDataGame] = useState<DocumentData | undefined>();
  const [isLoad, setIsLoad] = useState(true);
  const descriptionRef = useRef(null);

  useEffect(() => {

    getItemById(param?.paramURL).then(setDataGame);
    setIsLoad(false);

  },[]);

  useEffect(() => {

    navigation.setOptions({
      headerShown: true,
      title: dataGame?.title,
    });

    //console.log("1111111",descriptionRef)

  },[dataGame]);

  if (isLoad) {
   return  <Text>cargando...</Text>;
  }else{
    return (
      <ScrollView style={styles.container}>
        <Image source={dataGame?.image ? {  uri:  dataGame?.image  } : boardImage} style={styles.image} />
        <Text style={styles.title}>{dataGame?.title}</Text>
        <HTMLView
          value={dataGame?.description}
          stylesheet={styles}
        />
        <Text style={styles.detailLabel}>Jugadores maximo: {dataGame?.maxplayers}</Text>
        <Text style={styles.detailLabel}>Jugadores minimos: {dataGame?.minplayers}</Text>
        <Text style={styles.margin}>Tiempo de juego: {dataGame?.playingtime} minutos</Text>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  detailValue: {
    fontSize: 16,
    marginBottom: 8,
  },
  margin: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 40,
  }
});
