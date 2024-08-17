/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { IconButton, TextInput } from 'react-native-paper';
import { Icon } from '../components/Icon';
import { gptConsult, GptResponse } from '../api/chatGPT';
import { sendMessage } from '../service/messages';
import { getMessageRT } from './onSnapshot';
import { serverTimestamp } from 'firebase/firestore';
interface Message {
  message: string;
  isUser: boolean;
}

export const ChatScreen = () => {

  const [text, setText] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const flatListRef = useRef(null);

  useEffect(() => {
    const unsub = getMessageRT(setMessages);
    return unsub;
  },[]);

  useEffect(() => {
    if (messages.length > 0) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  return (
    <>

        <View style={styles().chatContainer}>

            <FlatList
              ref={flatListRef}
              data={messages}
              renderItem={({item}) => (
                <View>
                  <Text style={styles(item.isUser).cloudStyle}>{item.message}</Text>
                </View>
              )}
            />



        </View>
      <View style={styles().writeBox}>
          <TextInput
            outlineColor="#f49230"
            onChangeText={setText}
            value={text}
            style={{width:'90%'}}
          />
          <IconButton
            icon={() => <Icon name="send" />}
            onPress={ async () => {
              const aux = text;
              setText('');
              if (aux !== '') {

                try {

                  sendMessage({message: aux, isUser: true, date: serverTimestamp()});
                  const res = await gptConsult(aux);
                  sendMessage({message: res.text, date: serverTimestamp(), isUser: false, iaResponse: true});

                } catch (error) {

                  sendMessage({
                    message: 'Ha ocurrido un error intentelo mas tarder',
                    isUser: false,
                    date: serverTimestamp(),
                    iaResponse: false,
                    errMessage: error.toString(),
                  });

                }

              }
            }}
          />
      </View>
    </>
  );
};


const styles = (isUser?: boolean) => (
  StyleSheet.create({
    chatContainer: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column-reverse',
      justifyContent: 'flex-start',
      alignContent: 'flex-end',
    },
    writeBox: {
      display:'flex',
      flexWrap: 'nowrap',
      flexDirection: 'row',
    },
    cloudStyle: {
      alignSelf: isUser ? 'flex-end' : 'flex-start',
      paddingVertical: 2,
      paddingHorizontal: 8,
      maxWidth: 450,
      backgroundColor: isUser ? '#f49230' : 'green',
      color: 'white',
      marginHorizontal: 5,
      marginVertical: 5,
      borderRadius: 5,
    },
  })
);
