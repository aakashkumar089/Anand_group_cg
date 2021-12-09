import React, {useState} from 'react';
import {StyleSheet,Text,View,Button,Platform, StatusBar} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { template } from '@babel/core';

export default function OpenCalender() {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Empty');


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();

        let fTime =  tempDate.getHours()  + ' | Hours: ' +  tempDate.getMinutes()+ ' | Minutes:';

        setText(fDate + '\n' + fTime)

        console.log(fDate + '('+ fTime + ')')
    }


    const showMode= (currentMode) =>{
        setShow(true);
        setMode(currentMode);
    }

    return(
        <View style={styles.container}>
            <StatusBar style="auto"/>
            
            <Text style={styles.timeDisplay}>{text}</Text>

            <View>
                <Button title="CalenderPicker" onPress={()=> showMode('date')}/>

                <Button title="TimePicker" onPress={()=> showMode('time')}/>

                
            </View>

            {show && (
                    <DateTimePicker
                    testID='dateTimePicker'
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display='default'
                    onChange={onChange}/>
                )}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',

    },

    timeDisplay:{
        fontWeight:'bold',
        fontSize:20,
    },
});
