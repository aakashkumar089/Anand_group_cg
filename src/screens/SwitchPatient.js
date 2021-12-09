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
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/core';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MyDrawer from '../routes/Drawer';
import CoustomDrawer from '../routes/CustomDrawer';
import LinearGradient from 'react-native-linear-gradient';
import { useIsFocused } from '@react-navigation/native';






function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();

    return isFocused ? <StatusBar {...props} /> : null;
}

// MyCustomComponent = Animatable.createAnimatableComponent(MyCustomComponent);

export default function SwitchPatient({ navigation }) {
    // const navigation = useNavigation();

    return (
        <>
            <FocusAwareStatusBar backgroundColor="#3cb371" barStyle="Light-Content" />
            <ScrollView>
                <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                    <View style={styles.anandHead}>
                        {/* <View style={styles.HeaderContainerLeft}> */}

                        <MaterialCommunityIcons
                            style={styles.toggleDrawer}
                            name={'backburger'}
                            onPress={() => navigation.toggleDrawer('CoustomDrawer')}
                            color="black"
                            size={20}
                        />

                        <Text style={styles.HeaderTab}>Switch Patient Profile</Text>

                    </View>

                    <View style={styles.notification}>
                        <MaterialCommunityIcons
                            name="bell-ring"
                            onPress={() => alert('This is a button!')}
                            color="#fff"
                            size={26}
                        />
                    </View>

                </View>

               
                <TouchableOpacity
                    onPress={() => navigation.navigate('HomeScreen')}>
                    <Animatable.View 
                    animation="bounceInLeft"
                    iterationCount={1}
                    style={styles.selectPatient}>
                        <View style={styles.selectPatientNameArea}>
                            <Text style={styles.selectPatientName}>Rakesh Verma</Text>
                            <Text style={styles.selectPatientage}>(Male/56 yrs)</Text>
                        </View>

                        <View>
                            <Text style={styles.selectPatientCR}>
                                CR No. 223265324462361
                            </Text>
                        </View>

                    </Animatable.View>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => navigation.navigate('HomeScreen')}>
                    <Animatable.View 
                    animation="bounceInRight"
                    iterationCount={1}
                    style={styles.selectPatient}>
                        <View style={styles.selectPatientNameArea}>
                            <Text style={styles.selectPatientName}>Pooja Sharma</Text>
                            <Text style={styles.selectPatientage}>(Female/40 yrs)</Text>
                        </View>

                        <View>
                            <Text style={styles.selectPatientCR}>
                                CR No. 223265324462456
                            </Text>
                        </View>

                    </Animatable.View>
                </TouchableOpacity>

                <View style={{ flex: 2 }}>
                    {/*Patients */}
                    <View style={{ backgroundColor: '#fff' }}>


                    </View>
                </View>

                <View style={styles.hospitalService}>
                    <LinearGradient colors={['#66cdaa', '#3cb371']} style={styles.signIn}>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('AddNewMember')}>
                            <Text style={styles.textSign}> + Registration</Text>
                            <Text style={styles.textSignSmallText}>Tap here to register new patient</Text>

                        </TouchableOpacity>
                    </LinearGradient>

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

    toggleDrawer: {
        alignSelf: 'center',
        paddingRight: 20,
        paddingTop: 10,
        paddingLeft: 5,
    },

    HeaderTab: {
        fontSize: 28,
        color: 'black',
        // fontWeight: 'bold',
        marginTop: 20,
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
        // justifyContent: 'center',
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
        height: 200,
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

    selectPatient: {
        margin: 10,
        borderWidth: 1,
        marginLeft: 15,
        width: '80%',
        height: 70,
        borderRadius: 10,
        backgroundColor: '#ffe4b5',
        borderColor: 'black',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderLeftWidth: 15,
        // borderLeftColor:'white',
        borderStartColor: '#663399',



    },

    selectPatientNameArea: {
        flexDirection: 'row',
        flexWrap: 'wrap',

    },

    selectPatientName: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        fontSize: 16,
        padding: 5,
        fontWeight: 'bold'

    },

    selectPatientage: {
        fontSize: 16,
        padding: 5,
        fontWeight: 'bold'
    },
    selectPatientCR: {
        fontSize: 16,
        fontWeight: 'bold'
    },

    hospitalService: {
        justifyContent: 'center',

        // borderWidth:2,
        // backgroundColor:'green',
        marginLeft: 83,
        marginTop: 230,
        shadowOpacity: 10,

    },

    signIn: {
        width: '75%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },

    textSign: {
        justifyContent: 'center',
        // marginTop:270,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',

    },

    textSignSmallText: {
        fontSize: 11,
        fontWeight: 'bold',
    },
});