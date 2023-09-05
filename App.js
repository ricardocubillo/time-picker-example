import { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FAB } from 'react-native-paper';
import { TimePickerModal } from 'react-native-paper-dates';
import TimeCard from "./components/TimeCard";



export default function App() {
  const [visible, setVisible] = useState(false);
  const [time, setTime] = useState({hours: undefined, minutes:undefined});

  let date = new Date();
  time.hours !== undefined && date.setHours(time.hours);
	time.minutes !== undefined && date.setMinutes(time.minutes);

  const timeFormatter = new Intl.DateTimeFormat(undefined, {
		hour: '2-digit',
		minute: '2-digit'
	});

  const onDismiss = () => {
    setVisible(false);
  };

  const onConfirm = ({ hours, minutes }) => {
    setVisible(false);
    setTime({hours, minutes});
  };

  return (
    <View style={styles.container}>
        <FAB 
        style={styles.fabView}
        icon="plus" 
        onPress={() => setVisible(true)} 
        />
        {time.hours == undefined && time.minutes == undefined ? 
          <Text style={styles.textView}>Empty tasks</Text> : 
          <TimeCard time={timeFormatter.format(date)}/>
        }
        <TimePickerModal
          visible={visible}
          onDismiss={onDismiss}
          onConfirm={onConfirm}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  fabView: {
    alignSelf:"center",
    top: 200
  },
  textView: {
    alignSelf: "center"
  }
});
