import React from 'react';
import {
    View,
    Button,
    StyleSheet,
    Text,
    Dimensions,
    Image,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor='#f7d383' barStyle="light-content"/>
           <View style={styles.header}>
            <Animatable.Image animation="bounceIn" duration={1500} style={styles.logo} source={require('../../assets/Images/RegisterPage.png')}/>
            
           </View>
           <Animatable.View animation="fadeInUp" style={styles.footer}>
               <Text style={styles.title}>Stay connected with us </Text>
            <Text style={styles.text}>Sign in with Account</Text>
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
                <LinearGradient colors={['#f3c184','orange']} style={styles.signIn}>
                    <Text style={styles.textSign}>Get Started</Text>
                    <MaterialIcons 
                    name="navigate-next"
                    color="#fff"
                    size={20} 
                    />
                </LinearGradient>
            </TouchableOpacity>
            </View>
           </Animatable.View>
        </View>
    );
};

export default SplashScreen;
const {height} =Dimensions.get("screen");
const height_logo =height * 0.28;
const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f7d383'
    },
    header:{
        flex:2,
        alignItems:'center',
        justifyContent:'center',
        
    },
    footer:{
        flex:1,
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:30,
        paddingVertical:50
    },
    logo:{
        width:height_logo,
        height:height_logo
    },
    title:{
        color:'#05375a',
        fontSize:30,
        fontWeight:'bold'
    },
    text:{
        color:'grey',
        marginTop:5
    },
    button:{
        alignItems:'flex-end',
        marginTop:30
    },
    signIn:{
        width:150,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        flexDirection:'row',
   
    },
    textSign:{
        color:'#fff',
        fontWeight:'bold'
    }
});
