import React,{useState} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  RefreshControl,
  
} from "react-native";

import {Picker} from '@react-native-picker/picker'
import DatePicker from 'react-native-datepicker';

const InputScreen = () => {
  const [selectedValue, setSelectedValue] = useState("Road");
  const [date, setDate] = useState("2022-01-01");
  return (
    <View style={styles.container}>
      
      <DatePicker
        style={{width:'80%'}}
        date={date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2000-01-01"
        maxDate="2100-12-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {setDate(date)}}
      ></DatePicker>
      <Picker
         selectedValue={selectedValue}
         style={styles.input}
         onValueChange={(itemValue) => setSelectedValue(itemValue)}
         
      >
         <Picker.Item label="Road" value="Road" />
        <Picker.Item label="Eat" value="Eat" />
         <Picker.Item label="Rest" value="Rest" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Amount (AZN)"
        placeholderTextColor="grey"
        textAlign="center"
      ></TextInput>
      <TouchableOpacity style={styles.button}>
        <Text style={{color:'white'}}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};
export default InputScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-around',
    alignItems: "center",
    backgroundColor: "white",
    padding: 20, ex
  },
  button: {
    alignItems: "center",
    backgroundColor: "green",
    padding: '5%',
    width: '40%',
    borderRadius:20,
  },
  input: {
    width: '80%',
    height: '7%',
    borderColor: "black",
    borderRadius: 20,
    borderStyle: "solid",
    borderWidth: 1,
  },
});
