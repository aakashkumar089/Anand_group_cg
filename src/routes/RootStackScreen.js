import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignUpScreen from "../screens/SignUpScreen";
import SignInScreen from "../screens/SignInScreen";
import Tabs from "./Tabs";
import TestScreen from "../screens/TestScreen";
import DirectoryScreen from "../screens/DirectoryScreen";
import PersonalComplaint from "../screens/PersonalComplaint";
import DynamicScreen from "../screens/DynamicScreen";
import HomeScreen from "../screens/HomeScreen";
import LabReportsAnand from "../screens/LabReportsAnand";
import TeleconsultDetail from "../screens/TeleconsultDetail";
import BloodBank from "../screens/BloodBank";
import Appointment from "../screens/Appointment";
import BookAppointment from "../screens/BookAppointment";
import MyDrawer from "../routes/Drawer";
import AddNewMember from "../screens/AddNewMember";
import RegisteredNewSuccess from "../screens/RegNewSuc";
import { useSelector } from "react-redux";

const RootStack = createNativeStackNavigator();

const RootStackScreen = ({}) => {
  const state = useSelector((state) => ({ state: state }));

  // console.log(state);

  const { isLoggedIn } = useSelector((state) => ({
    isLoggedIn: state.auth.isLoggedIn,
  }));
  return (
    <RootStack.Navigator
      initialRouteName={isLoggedIn ? "Amenities" : "SignInScreen"}
      screenOptions={{
        headerShown: false,
      }}
    >
      {isLoggedIn ? (
        <>
          <RootStack.Screen
            name="PersonalComplaint"
            component={PersonalComplaint}
          />
          {/* <RootStack.Screen name="Amenities" component={Amenities} />
          <RootStack.Screen name="SplashScreen" component={SplashScreen} />
          <RootStack.Screen name="Test" component={TestScreen} />
          <RootStack.Screen name="Dynamic" component={DynamicScreen} />
          <RootStack.Screen name="Tabs" component={Tabs} />
          <RootStack.Screen name="ServiceScreen" component={ServiceScreen} /> */}
        </>
      ) : (
        <>
          {/* <RootStack.Screen name="SplashScreen" component={SplashScreen} /> */}
          {/* <RootStack.Screen name="SignInScreen" component={SignInScreen} 
          options={{headerShown:false}}
          /> */}
          <RootStack.Screen name="MyHome" component={MyDrawer} />

          {/* <RootStack.Screen name="Drawer" component={MyDrawer} /> */}

          <RootStack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          />

          <RootStack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={{
              title: "Sign Up",
              headerStyle: {
                backgroundColor: "#3cb371",
              },
              headerShown: true,
            }}
          />

          <RootStack.Screen
            name="LabReportsAnand"
            component={LabReportsAnand}
            options={{
              title: "Lab Reports",
              headerStyle: {
                backgroundColor: "#3cb371",
              },
              // headerTintColor:'#d2691e',
              headerShown: true,
            }}
          />

          <RootStack.Screen
            name="TeleconsultDetail"
            component={TeleconsultDetail}
            options={{
              title: "Teleconsultancy",
              headerStyle: {
                backgroundColor: "#3cb371",
              },
              // headerTintColor:'#d2691e',
              // headerTitleStyle:{
              //   // fontWeight:'bold',
              // },
              headerShown: true,
            }}
          />

          <RootStack.Screen
            name="BloodBank"
            component={BloodBank}
            options={{ headerShown: true }}
          />

          <RootStack.Screen
            name="Appointment"
            component={Appointment}
            options={{
              headerStyle: {
                backgroundColor: "#3cb371",
              },
              // headerTintColor:'#d2691e',
              headerShown: true,
            }}
          />

          <RootStack.Screen
            name="BookAppointment"
            component={BookAppointment}
            options={{
              title: "Book Appointment",
              headerStyle: {
                backgroundColor: "#3cb371",
              },
              headerShown: true,
            }}
          />

          <RootStack.Screen
            name="AddNewMember"
            component={AddNewMember}
            options={{
              title: "Add Member",
              headerStyle: {
                backgroundColor: "#3cb371",
              },
              headerShown: true,
            }}
          />

          <RootStack.Screen
            name="RegisteredNewSuccess"
            component={RegisteredNewSuccess}
            options={{
              title: "Patient Registered Successfully",
              headerStyle: {
                backgroundColor: "#3cb371",
              },
              headerShown: false,
            }}
          />
        </>
      )}
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
