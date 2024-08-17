import React, { useCallback, useState } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';
import { TimePickerModal } from 'react-native-paper-dates';
import { Icon } from '../components/Icon';

interface ChooseDate {
  hours: number ;
  minutes: number ;
}

export const Reserve = () => {
  const [visible, setVisible] = useState(false)

   const onDismiss = useCallback(() => {
    setVisible(false)
  }, [setVisible])

  const onConfirm = useCallback(
    ({ hours, minutes }: ChooseDate) => {
      setVisible(false);
      console.log({ hours, minutes });
    },
    [setVisible]
  );
  return (
    <>
    <Text style={styles.warning}>La reserva está sujeta a previa aprobación, se debe realizar con 24 horas de antelación.</Text>
    <Text style={styles.hour}>Horario</Text>
    <View style={styles.dateContainer}>
      <Text style={styles.range}>Domingo a Miercoles</Text>
      <Text style={styles.data}>18:00 23:30</Text>
    </View>
    <View style={styles.dateContainer}>
      <Text style={styles.range}>Jueves</Text>
      <Text style={styles.data}>18:00 24:00</Text>
    </View>
    <View style={styles.dateContainer}>
      <Text style={styles.range}>Viernes, Sabados Vispera de festivos</Text>
      <Text style={styles.data}>18:00 01:30</Text>
    </View>
    <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
        
        <Button onPress={() => setVisible(true)} uppercase={false} mode="outlined">
          Pick time
        </Button>
        <TimePickerModal
          visible={visible}
          onDismiss={onDismiss}
          onConfirm={onConfirm}
          hours={12}
          minutes={14}
        />
      </View>
        <Button 
          style={styles.button} 
          icon={() => <Icon name='send' />}  
          uppercase={false} mode="outlined"
        >
            Enviar
        </Button>
      </>
  );
};


const styles = StyleSheet.create({
  warning: {
    textAlign: "center",
    fontSize: 24,
    color: "#969393"
  },
  hour: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    color: "#f49230"
  },
  range: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#f49230"
  },
  data: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    color: "#969393"
  },
  dateContainer: {
    borderColor: "#f49230",
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 5,
    marginBottom: 5,
  },
  button: {
    paddingVertical: 5,
  }
})