import React, { useState } from 'react';
import { View, Text, ScrollView, StatusBar, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
// import CalendarPicker from 'react-native-calendar-picker';
import OpenCalender from '../screens/OpenCalender';
import MaterialCommunityIcons from 'react-native-vector-icons';
import { useIsFocused } from '@react-navigation/core';
import DateTimePicker from '@react-native-community/datetimepicker';
import { template } from '@babel/core';

function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();

    return isFocused ? <StatusBar {...props} /> : null;
}



export default function BookAppointment() {
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

        let fTime = tempDate.getHours() + 'Hours: ' + tempDate.getMinutes() + ' | Minutes:';

        setText(fDate + '\n' )
        // setText(fTime)

        console.log(fDate + '(' + fTime + ')')
    }


    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            {/* <Text style={styles.timeDisplay}>{text}</Text>

            <View>
                <Button title="CalenderPicker" onPress={() => showMode('date')} />

                <Button title="TimePicker" onPress={() => showMode('time')} />


            </View>

            {show && (
                <DateTimePicker
                    testID='dateTimePicker'
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display='default'
                    onChange={onChange} />
            )} */}


            <View>
                <TouchableOpacity
                    onPress={() => showMode('date')}>
                    <View style={styles.selectDateText} >


                        <Text style={styles.dateText}>
                            Select your Appointment Date
                        </Text>


                        <Image
                            style={styles.calenderIcon}
                            source={require('../../assets/icons/calendar.png')} />
                    </View>

                    {/* <View style={styles.Timepicker}>
                        <Button title="TimePicker" onPress={() => showMode('time')} />
                    </View> */}

                    {/* <View style={styles.appointmentTime}>
                        <Text style={styles.timeDisplay}></Text>
                    </View> */}
                </TouchableOpacity>


                <View style={styles.dateCard}>

                    <Text style={{fontWeight:'bold',fontSize:20,color:'#663399',marginTop:5,}}> Your Appointment is on </Text>
                    <Text style={styles.timeDisplay}>

                   
                    {show && (
                        <DateTimePicker
                            testID='dateTimePicker'
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display='default'
                            onChange={onChange} />
                    )}{text}
                    </Text>

                </View>
            </View>
        </View >

    )
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },

    appointmentTime: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    timeDisplay: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop:10,
        marginLeft:20,
        color:'#dc143c',
    },


    HeaderTab: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
    },

    anandHead: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#3cb371',
        shadowColor: '#30C1DD',
        shadowRadius: 10,
        shadowOpacity: 0.6,
        elevation: 20,
        shadowOffset:
        {
            width: 0,
            height: 4
        },
        marginBottom: 10,
        // paddingLeft: 18,
        // marginTop:2,
        flexWrap: 'wrap',
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,

    },

    hairline: {
        backgroundColor: '#dcdcdc',
        height: 2,
        width: '120%',
        marginTop: 10,
        marginRight: 16,
    },

    HeaderTabName: {
        flexDirection: 'row',
        marginTop: 20,
        letterSpacing: 3,
        justifyContent: 'center',
        marginBottom: 18,
        marginRight: 30,


    },

    dateCard:{
        width:'80%',
        height:80,
        border:2,
        borderRadius:10,
        backgroundColor:'#ffe4b5',
        marginLeft:35,
        borderLeftWidth:10,
        borderLeftColor:'#663399',

    },

    HeaderTabStatusPage: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#d2691e',
    },

    selectDateText: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 10,
        // marginTop:30,
        justifyContent: 'center',
        marginTop: 20,
        borderColor: 'black',
        border: 2,

    },

    dateText: {
        fontSize: 18,
        marginBottom:30,
    },

    calenderIcon: {
        width: 30,
        height: 30,
        marginHorizontal: 10,
    },
});





