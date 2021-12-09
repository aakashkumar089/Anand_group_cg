import React from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    StatusBar,
    TouchableOpacity,
    FlatList,
    Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useIsFocused } from '@react-navigation/native';

function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();

    return isFocused ? <StatusBar {...props} /> : null;
}


export default function TeleconsultDetail() {
    // const navigation = useNavigation();

    return (
        <>
            <FocusAwareStatusBar backgroundColor="#3cb371" barStyle="Light-Content" />
            <ScrollView>
                <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                    

                    <View style={styles.notification}>
                        <MaterialCommunityIcons
                            name="bell-ring"
                            onPress={() => alert('This is a button!')}
                            color="#fff"
                            size={26}
                        />
                    </View>

                </View>

                <View style={{ flex: 2 }}>
                    {/*Patients */}
                    <View style={{ backgroundColor: '#fff' }}>

                        <View style={styles.patientDetails}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.patient}>
                                    Patient Name:
                                </Text>
                                <Text style={styles.patientName}>Rakesh Verma</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.patient}>
                                    CR No:
                                </Text>
                                <Text style={styles.patientNo}>123456789101112</Text>
                            </View>

                        </View>
                    </View>
                </View>

                <View style={styles.hospitalService}>


                    <Text style={styles.LabReports}>Teleconsultation : </Text>

                    <TouchableOpacity
                        onPress={() => alert('Reports')}>
                        <View style={styles.teleService}>
                            <Image
                                style={styles.teleServicepic}
                                source={require('../../assets/icons/customer-service.png')}
                            />

                            {/* <Text style={styles.teleServiceText}>Reports</Text> */}

                        </View>
                    </TouchableOpacity>



                </View>


            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    Category: {
        color: 'black',
        fontSize: 22,
        paddingTop: 15,
        paddingLeft: 15,
    },
    HeaderContainerRight: {
        flex: 1,
        // right: -46,
        // paddingTop: 50,
    },
    HeaderContainerLeft: {
        flex: 2,
        paddingLeft: 20,
        // paddingTop: 20,
        // paddingBottom: 14,
    },
    HeaderTab: {
        fontSize: 28,
        color: 'black',
        // fontWeight: 'bold',
        marginTop: 32,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 4,
        justifyContent: 'center',
        marginBottom: 10,

    },

    notification: {
        // marginTop: 36,
        // marginLeft: 30,

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
        // marginBottom: 10,
        paddingLeft: 18,

    },

    patientDetails: {
        // margin: 5,
        marginLeft: 18,
        width: '90%',
        height: 80,
        borderColor: '#191970',
        borderWidth: 2,
        backgroundColor: 'black',
        justifyContent: 'center',
        // padding: 5,
        alignItems: 'center',
        // flexWrap:'wrap',
        borderRadius: 10,
        elevation: 20,

    },

    patient: {
        marginRight: 30,
        padding: 2,
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },

    patientName: {
        marginTop: 3,
        marginHorizontal: 14,
        flexWrap: 'wrap',
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },

    patientNo: {
        marginLeft: 50,
        marginTop: 3,
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },

    hospitalService: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 5,
        margin: 25,
        elevation: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',

    },

    // teleService: {
    //     width: 140,
    //     height: 150,
    //     marginTop: 16,
    //     borderWidth: 2,
    //     marginLeft: 13,

    //     borderColor: '#ffffff',
    //     margin: 2,
    //     justifyContent: 'center',
    //     borderRadius: 12,
    //     // shadowRadius:20,    

    // },

    LabReports: {
        fontSize: 22,
        fontWeight: 'bold',
        marginRight: 50,

    },

    teleServicepicaddUser: {
        width: 88,
        height: 88,
        // marginVertical: 18,
        marginLeft: 32,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    services: {
        width: 45,
        height: 45,
        marginVertical: 18,
        marginLeft: 10,
        marginBottom: 10,

    },

    teleServicepic: {
        width: 88,
        height: 88,
        // marginVertical: 18,
        // marginLeft: 18,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        marginLeft: 90,


    },


    teleServiceText: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',

    },
    serivcesOutline: { flexDirection: 'row', flexWrap: 'wrap', margin: 5 },

    serviceContainer: {
        backgroundColor: 'yellow',
        height: 70,
        justifyContent: 'center',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    ServiceName: {
        fontSize: 14,
        color: 'grey',
        textAlign: 'center',
        marginBottom: 20,
        marginLeft: 28,
        margin: 5,
    },

    ImageSliders: { height: 180, width: '100%', alignSelf: 'center' },
    UserResponse: {
        padding: 10,
        flex: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderColor: 'grey',
        alignItems: 'center',
    },

    societyCorner: {},

    colorText: {
        color: 'green',
        fontSize: 12,
    },
    mainText: {
        fontSize: 14,
    },
    EventText: {
        marginTop: 130,
        fontSize: 14,
        alignSelf: 'flex-start',
        marginRight: 40,
    },

    societyOptions: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        // alignItems:'center',
        marginLeft: 8,
    },

    serviceMatter: {
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    festival: {
        height: 128,
        width: 220,
        justifyContent: 'center',
    },
    Health: {
        fontSize: 14,
        color: 'grey',
        textAlign: 'center',
        marginBottom: 20,
        marginLeft: 28,
        margin: 5,
    },

    Market: {
        fontSize: 14,
        color: 'grey',
        textAlign: 'center',
        marginBottom: 20,
        marginLeft: 44,
        margin: 5,
    },

    Amenities: {
        fontSize: 14,
        color: 'grey',
        textAlign: 'center',
        marginBottom: 20,
        marginLeft: 40,
        margin: 5,
    },

    HomeService: {
        fontSize: 14,
        color: 'grey',
        textAlign: 'center',
        marginBottom: 20,
        marginLeft: 22,
        margin: 5,
    },

    eventBox: {

        borderLeftColor: '#0d46a1',
        margin: 10,
        backgroundColor: 'white',
        width: 220,
        height: 210,

    },
});