import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Services1 from '../screens/ServiceScreen';
import Profile1 from '../screens/ProfileScreen';


const Tab = createMaterialBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      shifting={false}
      initialRouteName="Home"
      activeColor="orange"
      inactiveColor="#3e2465"
      barStyle={{backgroundColor: '#ffffff'}}>

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      
      

      
      
    </Tab.Navigator>
  );
}

// function HomeScreen() {
//   return <HomeScreen />;
// }

function ForumScreen() {
  return <Forum1 />;
}
// function SocietyDirectory() {
//   return (
//     <View>
//       <SocietyDirectory />
//     </View>
//   );
// }
function ServiceScreen() {
  return (
    <>
      <StatusBar backgroundColor="orange" barStyle="Light-Content" />
      <Services1 />
    </>
  );
}
function ProfileScreen() {
  return <Profile1 />
}

const styles = StyleSheet.create({
  Category: {color: 'grey', fontSize: 22, paddingTop: 15, paddingLeft: 15},
  HeaderContainerRight: {flex: 1, right: -20, paddingTop: 30},
  HeaderContainerLeft: {flex: 2, paddingLeft: 20, paddingTop: 20},
  HeaderTab: {fontSize: 24, color: '#fff', fontWeight: 'bold'},
  services: {width: 30, height: 30, alignSelf: 'center'},
  serviceContainer: {
    height: 70,
    justifyContent: 'center',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
  },
  ServiceName: {fontSize: 14, color: 'grey'},
  ImageSliders: {height: 180, width: '100%', alignSelf: 'center'},
  UserResponse: {
    padding: 10,
    flex: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderColor: 'grey',
    alignItems: 'center',
  },
});

//export default App;
