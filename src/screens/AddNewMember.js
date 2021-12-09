import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker'
import {
    View,
    Button,

    StyleSheet,
    Platform,
    Text,
    SafeAreaView,
    KeyboardAvoidingView,
    Dimensions,
    StatusBar,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RegisteredNewSuccess from '../screens/RegNewSuc';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import axios from 'axios'
import { useMutation, useQueries } from 'react-query';
import { register } from '../utils/api';
import { useNavigation } from '@react-navigation/core';
import SignInScreen from './SignInScreen';
import HomeScreen from './HomeScreen';



const AddNewMember = () => {

    const navigation = useNavigation()

    const [data, setData] = React.useState({
        Name: '',
        password: '',
        mobile: '',
        colony: '',
        house: '',
        confirm_pass: '',
        oldAddress: '',
        email: '',

        check_emailInputChange: false,
        check_nameInputChange: false,
        check_passInputChange: false,
        check_mobileInputChange: false,
        check_colonyInputChange: false,
        check_houseInputChange: false,
        check_oldaddInputChange: false,
        secureTextEntry: false,
        secureConfirm: false
    });

    const { mutate, isLoading } = useMutation(register, {
        onSuccess: (data) => {
            console.log(data)
        },
        onError: (error) => {
            console.log(error)
            Alert.alert("Registeration", error)
        }
    })


    const emailentered = (val) => {
        if (val.length !== 0) {
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

            if (reg.test(val) === false) {

                setData({ ...data, email: val, check_emailInputChange: false })
                return false;
            }
            else {
                setData({ ...data, email: val, check_emailInputChange: true })

            }
        }
        else {
            setData({
                ...data,
                email: val,
                check_emailInputChange: false
            });
        }
    }

    const handlepassword = (val) => {
        setData({
            ...data,
            password: val,

        });
    }
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });

    }
    const handleconfirmpassword = (oval) => {
        setData({
            ...data,
            confirm_pass: oval
        });
    }
    const updateconfirmTextEntry = () => {
        setData({
            ...data,
            secureConfirm: !data.secureConfirm
        });

    }

    return (


        <View style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <ScrollView>

                    <StatusBar backgroundColor='#3cb371' barStyle="Light-Content" />
                    <View style={[styles.header, { flexDirection: 'row' }]}>

                        {/* <View style={{flex:1}}>
             <Text style={styles.text_header}>Here's your first step with us!</Text>
             </View> */}
                        {/* <TouchableOpacity>
                            
                                <Image
                                    width="110%"
                                    height="110%"
                                    style={styles.logo}
                                    source={require('../../assets/Images/anand_logo.png')}
                                />

                           
                        </TouchableOpacity> */}
                    </View>
                    <View style={styles.footer}>

                        

                        <View style={styles.action}>
                            <MaterialCommunityIcons
                                name="account"
                                color="#4b0082"
                                size={30}
                            />
                            <TextInput placeholder="Name" style={styles.textInput} onChangeText={(val) => setData({ ...data, Name: val })} />
                            {data.Name.length > 0 ?
                                <Animatable.View animation="bounceIn">
                                    <Feather name="check-circle" color="green" size={15} />
                                </Animatable.View>
                                : null}
                        </View>


                        <View style={styles.action}>
                            <MaterialCommunityIcons
                                name="account-group"
                                color="#4b0082"
                                size={30}
                            />
                            <TextInput placeholder="Father's/Mother's/Spouse's Name" style={styles.textInput} onChangeText={(val) => setData({ ...data, Name: val })} />
                            {data.Name.length > 0 ?
                                <Animatable.View animation="bounceIn">
                                    <Feather name="check-circle" color="green" size={15} />
                                </Animatable.View>
                                : null}
                        </View>


                        <View style={styles.action}>
                            <MaterialCommunityIcons
                                name="cake-layered"
                                color="#4b0082"
                                size={30}
                            />
                            <TextInput placeholder="Date of Birth"
                                keyboardType="numeric"
                                style={styles.textInput} onChangeText={(val) => setData({ ...data, Name: val })} />
                            {data.Name.length > 0 ?
                                <Animatable.View animation="bounceIn">
                                    <Feather name="check-circle" color="green" size={15} />
                                </Animatable.View>
                                : null}
                        </View>


                        {/* <View style={styles.action}> */}

                        <View style={styles.pickerstyle} flexDirection="row">
                            <MaterialCommunityIcons
                                name="gender-male-female"
                                color="#4b0082"
                                size={30}
                            />


                            <Picker selectedValue={data} style={styles.states}  onValueChange={(val) => setData({ ...data, colony: val })} >
                                <Picker.Item label="Gender" value="" />
                                <Picker.Item label="Male" value="Male" />
                                <Picker.Item label="Female" value="Female" />
                                <Picker.Item label="Transgender" value="Transgender" />

                            </Picker>

                            {/* <TextInput placeholder="Gender" style={styles.textInput} onChangeText={(val) => setData({ ...data, Name: val })} />
                {data.Name.length > 0?
                    <Animatable.View animation="bounceIn">
                    <Feather name="check-circle" color="green" size={15} />
                    </Animatable.View>
                    : null} */}

                        </View>


                        <View style={styles.pickerstyle} flexDirection="row">
                            <MaterialCommunityIcons
                                name="map-marker"
                                color="#4b0082"
                                size={35}
                            />
                            <Picker selectedValue={data} style={styles.states} onValueChange={(val) => setData({ ...data, colony: val })} >
                                <Picker.Item label="Select State" value="" />
                                <Picker.Item label="Chhattisgarh" value="Chhattisgarh" />
                                <Picker.Item label="M.P" value="M.P" />
                                <Picker.Item label="Andhra Pradesh" value="Andhra Pradesh" />
                                <Picker.Item label="U.P" value="U.P" />
                                <Picker.Item label="Odisha" value="Odisha" />
                            </Picker>


                            {/* {data.colony.length !== 0?
                    <Animatable.View animation="bounceIn">
                    <Feather name="check-circle" color="green" style={{ marginTop: 15 }} size={15} />
                    </Animatable.View>
                    : null}
                     */}
                        </View>



                        <View style={styles.action}>
                            <MaterialCommunityIcons
                                name="home-city"
                                color="#4b0082"
                                size={30}
                            />
                            <TextInput placeholder="City" style={styles.textInput} onChangeText={(val) => setData({ ...data, Name: val })} />
                            {data.Name.length > 0 ?
                                <Animatable.View animation="bounceIn">
                                    <Feather name="check-circle" color="green" size={15} />
                                </Animatable.View>
                                : null}
                        </View>

                        <View style={styles.action}>

                        <MaterialCommunityIcons
                                name="email"
                                color="#4b0082"
                                size={30}
                            />

                            <TextInput placeholder="Email" style={styles.textInput} onChangeText={(val) => emailentered(val)} />
                            {data.check_emailInputChange ?
                                <Animatable.View animation="bounceIn">
                                    <Feather name="check-circle" color="green" size={15} />
                                </Animatable.View>
                                : null}
                        </View>
                        <View style={styles.action}>

                        <MaterialCommunityIcons
                                name="phone"
                                color="#4b0082"
                                size={30}
                            />

                            <TextInput placeholder="Mobile Number" keyboardType="numeric" maxLength={10} style={styles.textInput} onChangeText={(val) => setData({ ...data, mobile: val })} />
                            {data.mobile.length == 10 ?
                                <Animatable.View animation="bounceIn">
                                    <Feather name="check-circle" color="green" size={15} />
                                </Animatable.View>
                                : null}
                        </View>


                        {/* <View style={styles.pickerstyle} flexDirection="row">
                            <Picker selectedValue={data} style={{ width: 300 }} onValueChange={(val) => setData({ ...data, colony: val })} >
                                <Picker.Item label="Select Colony" value="" />
                                <Picker.Item label="Kabir Nagar" value="Kabir Nagar" />
                                <Picker.Item label="Devendra Nagar" value="Devendra Nagar" />
                                <Picker.Item label="Sunder Nagar" value="Sunder Nagar" />
                                <Picker.Item label="Shankar Nagar" value="Shankar Nagar" />
                            </Picker>
                            {data.colony.length !== 0 ?
                                <Animatable.View animation="bounceIn">
                                    <Feather name="check-circle" color="green" style={{ marginTop: 15 }} size={15} />
                                </Animatable.View>
                                : null}
                        </View> */}


                        {/* <View style={styles.action}>
                            <TextInput placeholder="House No." keyboardType="numeric" style={styles.textInput} onChangeText={(val) => setData({ ...data, house: val })} />
                            {data.house.length !== 0 ?
                                <Animatable.View animation="bounceIn">
                                    <Feather name="check-circle" color="green" size={15} />
                                </Animatable.View>
                                : null}
                        </View> */}


                        {/* <View style={styles.action}>

                            <TextInput placeholder="Password" secureTextEntry={data.secureTextEntry ? false : true} autoCapitalize="none" style={[styles.textInput]} onChangeText={(val) => handlepassword(val)} />
                            <TouchableOpacity onPress={updateSecureTextEntry}>
                                {data.secureTextEntry ?
                                    <Feather name="eye" color="grey" size={15} />
                                    :
                                    <Feather name="eye-off" color="grey" size={15} />
                                }
                            </TouchableOpacity>
                        </View> */}



                        {/* <View style={styles.action}>

                            <TextInput placeholder="Confirm Password" secureTextEntry={data.secureConfirm ? false : true} autoCapitalize="none" style={[styles.textInput]} onChangeText={(oval) => handleconfirmpassword(oval)} />
                            <TouchableOpacity onPress={updateconfirmTextEntry}>
                                {data.secureConfirm ?
                                    <Feather name="eye" color="grey" size={15} />
                                    :
                                    <Feather name="eye-off" color="grey" size={15} />
                                }
                            </TouchableOpacity>
                        </View> */}


                        {/* <View style={styles.action}>
                            <TextInput placeholder="Old Address" style={styles.textInput} onChangeText={(val) => setData({ ...data, oldAddress: val })} />
                            {data.oldAddress.length !== 0 ?
                                <Animatable.View animation="bounceIn">
                                    <Feather name="check-circle" color="green" size={15} />
                                </Animatable.View>
                                : null}
                        </View> */}


                        <View style={styles.button}>

                            <LinearGradient colors={['#66cdaa', '#3cb371']} style={styles.signIn}>
                                <TouchableOpacity onPress={() => navigation.navigate('RegisteredNewSuccess')
                                    
                                    // mutate({ name: data.Name, email: data.email, mobile_no: data.mobile, colony: data.colony, house_no: data.house, old_address: data.oldAddress, password: data.password, token: "HAMAR-SOCIETY", tag: "register", usertype: 1, firebasetoken: "" })
                                    
                                    }>
                                        <Text style={styles.textSign}> Add </Text>
                                        
                                    {/* {isLoading ? <Text style={[styles.textSign, { color: "#fff" }]}>Loading...</Text> : 
                                    <Text style={[styles.textSign, { color: "#fff" }]}>Register</Text>} */}

                                </TouchableOpacity>
                            </LinearGradient>

                        </View>

                    </View>
                    
                    {/* <View style={{ alignItems: "center", marginTop: 5, backgroundColor: "#fff" }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ backgroundColor: 'black', height: 2, flex: 1, alignSelf: 'center' }} />
                            <Text style={styles.otherMethods}>Other Methods</Text>
                            <View style={{ backgroundColor: 'black', height: 2, flex: 1, alignSelf: 'center' }} />
                        </View>
                        <View flexDirection='row'>
                            <Image style={{ height: 40, width: 40,marginRight:50,marginTop:20,marginVertical:20 }} source={require('../../assets/icons/facebook_icon.png')} />
                            <Image style={{ height: 40, width: 40,marginVertical:20}} source={require('../../assets/icons/google.png')} />
                        </View>
                    </View> */}
                </ScrollView>


            </KeyboardAvoidingView>

        </View>

    );
};

export default AddNewMember;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5fffa',
        borderRightWidth: 5,
        borderRightColor: "#f5fffa",
        borderTopRightRadius: -20,
        borderLeftColor: "#f5fffa",
        borderLeftWidth: 10
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingBottom:10,
    },
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30

    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
        paddingTop: 100
    },
    text_footer: {
        color: '#05375a'
    },
    action: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#3cb371',
        marginTop: 8,
        // paddingBottom: 5,
        marginBottom: 10,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 40,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '50%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },

    states: {
        width: 200,
        marginLeft: 20,
    },
    logoView: {
        width: 250,
        height: 250,
        marginLeft: 20,
    },

    
    logo: {
        // flex: 1,
        width: 210,
        height: 200,
        // resizeMode: 'center',
        // marginTop: 50,
        // marginLeft: 60,

    },

    // logo:{
    //     flex:1,
    //     width:250,
    //     height:250,
    //     alignSelf:'center',
    //     alignItems:'center',
    //     justifyContent:'center',
    //     marginLeft:30,

    // },

    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'#fff'
    },
    register: {
        textAlign: "center",
        alignItems: "center",
        color: "orange",
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 10,


    },
    SignUpRight: {
        height: 100,
        width: 40,
        position: "absolute",
        right: -30
    },
    pickerstyle: {

        borderColor: "#3cb371",
        borderBottomWidth: 1
    },
    otherMethods:{
        alignSelf: 'center',
        paddingHorizontal: 5, 
        color: "black", 
        fontSize: 16,
    }

   
});
