import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { getHeaderTitle } from '@react-navigation/elements';
import Appointment from '../screens/Appointment';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RootStackScreen from '../routes/RootStackScreen';
import SignInScreen from '../screens/SignInScreen';
import CoustomDrawer from './CustomDrawer';
import AboutPage from '../screens/AboutPage';
import Logout from '../screens/Logout';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { color } from 'react-native-reanimated';
import SwitchPatient from '../screens/SwitchPatient';


const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CoustomDrawer {...props} />}
            screenOptions={{
                drawerActiveBackgroundColor: '#3cb371',
                // drawerActiveTintColor:'#fff',

                drawerLabelStyle:
                {
                    marginLeft: -10,
                    fontFamily: 'Roboto-Medium',
                    fontSize: 16,
                    color: 'black'
                },
                headerShown: false,
                drawerStyle: {
                    backgroundColor: 'white',
                    width: 230,

                }
            }}
            shifting={false}
            initialRouteName="anand"
            activeColor=""
        >

            <Drawer.Screen name="Home" component={HomeScreen}

                options={{

                    drawerIcon: ({ }) => (
                        <MaterialCommunityIcons
                            name={'home-outline'}
                            color="black"
                            size={28} />
                    )
                }}

            />
            <Drawer.Screen name="Profile" component={ProfileScreen}
                options={{

                    drawerIcon: ({ }) => (
                        <MaterialCommunityIcons
                            name={'account-outline'}
                            color="black"
                            size={28} />
                    )
                }}
            />


            <Drawer.Screen name="Switch Patient Profile" component={SwitchPatient}
                options={{

                    drawerIcon: ({ }) => (
                        <MaterialCommunityIcons
                            name={'account-switch-outline'}
                            color="black"
                            size={28} />
                    )
                }}
            />

            <Drawer.Screen name="About" component={AboutPage}
                options={{

                    drawerIcon: ({ }) => (
                        <MaterialCommunityIcons
                            name={'information-outline'}
                            color="black"
                            size={28} />
                    )
                }}

            />


            <Drawer.Screen name="Logout" component={Logout}
                options={{

                    drawerIcon: ({ }) => (
                        <MaterialCommunityIcons
                            name={'logout'}
                            color="black"
                            size={28} />

                    )
                }}


            //     <Button
            //   title="Logout"
            //   onPress={() => {
            //     dispatch(logout());

            //     setTimeout(() => {
            //       navigation.navigate('SignInScreen');
            //     }, 100);
            //   }}
            //   />
            />


        </Drawer.Navigator>
    )
}

export default MyDrawer;

const styles = StyleSheet.create({
    headerStyle: {
        // innerHeight:20,
    }
})