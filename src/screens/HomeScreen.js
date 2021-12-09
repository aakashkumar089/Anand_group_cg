import React from "react";
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
} from "react-native";
import Unorderedlist from "react-native-unordered-list";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as Animatable from "react-native-animatable";
import LinearGradient from "react-native-linear-gradient";
import { getHeaderTitle } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/core";
import { Card } from "react-native-paper";
import { SliderBox } from "react-native-image-slider-box";
import { useIsFocused } from "@react-navigation/native";
import LabReportsAnand from "../screens/LabReportsAnand";
import CoustomDrawer from "../routes/CustomDrawer";
//t { userhome } from '../utils/api';
//import { useQuery } from 'react-query';
import { color } from "react-native-reanimated";
function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}

const sliderImage = [
  require("../../assets/Images/doctors_operation.jpg"),
  require("../../assets/Images/pregnant.jpg"),
  require("../../assets/Images/hospital_bed.jpg"),
  require("../../assets/Images/gyney.jpeg"),
  require("../../assets/Images/doctors_tech.jpg"),
  require("../../assets/Images/goodluck_doctor.jpg"),
];

// header:({navigation, route})

// const sliderImage = [
//   require('../../assets/Images/banner.jpg'),
//   require('../../assets/Images/shield.png'),
//   require('../../assets/Images/delivery-truck.png'),
//   require('../../assets/Images/cleaning-service.png'),
//   require('../../assets/Images/customer-service.png'),
//   require('../../assets/Images/cleaning.png'),
// ];

export default function HomeScreen() {
  const navigation = useNavigation();
  //  const {data, error, status} = useQuery('userhome', userhome);
  //   const navigation = useNavigation();
  //   if (status == 'loading') {
  //     return (
  //       <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
  //         <ActivityIndicator size="large" color="black" />
  //       </View>
  //     );
  //   }

  //   if (status === 'error') {
  //     return (
  //       <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
  //         <Text>{error.message}</Text>
  //       </View>
  //     );
  //   }

  return (
    <>
      <FocusAwareStatusBar backgroundColor="#3cb371" barStyle="Light-Content" />

      <StatusBar backgroundColor="#3cb371" barStyle="Light-Content" />

      <ScrollView>
        <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
          <View style={styles.anandHead}>
            <View style={styles.hairline}></View>

            <MaterialCommunityIcons
              style={styles.toggleDrawer}
              name={"backburger"}
              onPress={() => navigation.toggleDrawer("CoustomDrawer")}
              color="black"
              size={20}
            />

            <View style={styles.HeaderTabName}>
              <Text style={styles.HeaderTabFirstName}>anand</Text>
              <Text style={styles.HeaderTabMiddleName}>group</Text>
              <Text style={styles.HeaderTabLastName}>cg</Text>
            </View>
            <View style={styles.notification}>
              <MaterialCommunityIcons
                name="bell-outline"
                onPress={() => alert("Notification !")}
                color="#fff"
                size={28}
              />
            </View>
          </View>
          {/* <View style={styles.HeaderContainerRight}> */}

          {/* </View> */}
        </View>
        {/* </View> */}

        {/* Middle body Part */}
        <View style={{ flex: 2 }}>
          {/*Patients */}
          <View style={{ backgroundColor: "#fff" }}>
            <View style={styles.patientDetails}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.patientlogo}>
                  <MaterialCommunityIcons
                    name="account-outline"
                    color="#fff"
                    size={20}
                  />
                </View>

                <Text style={styles.patient}>Patient Name:</Text>
                <Text style={styles.patientName}>Rakesh Verma</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={styles.patientlogoNo}>
                  <MaterialCommunityIcons
                    name="card-account-details-outline"
                    color="#fff"
                    size={20}
                  />
                </View>

                <Text style={styles.patientCr}>CR No:</Text>
                <Text style={styles.patientNo}>123456789101112</Text>
              </View>
            </View>

            {/* ---------------------Start Slider----------------------------- */}
            <View style={styles.sliderPics}>
              <Card
                borderRadius={100}
                style={{
                  padding: 10,
                  // margin: 5,

                  backgroundColor: "white",
                }}
              >
                <SliderBox
                  images={sliderImage}
                  sliderBoxHeight={200}
                  sliderBoxWidth={180}
                  ImageComponentStyle={{
                    // borderRadius: 15,
                    width: "100%",
                    // height:'100%',
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 5,
                    marginRight: 50,
                    borderTopLeftRadius: 20,
                  }}
                  resizeMode={"cover"}
                  resizeMethod={"scale"}
                  circleLoop={true}
                  autoplay
                />
              </Card>
            </View>
            {/* ---------------------End Slider----------------------------- */}

            <View style={styles.hospitalService}>
              <TouchableOpacity
                onPress={() => navigation.navigate("TeleconsultDetail")}
              >
                <Animatable.View
                  animation="bounceIn"
                  style={styles.teleService}
                >
                  <Image
                    style={styles.teleServicepic}
                    source={require("../../assets/icons/smartphone_main.png")}
                  />

                  <Text style={styles.teleServiceText}>Teleconsultancy</Text>
                </Animatable.View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("Appointment")}
              >
                <Animatable.View
                  animation="bounceIn"
                  style={styles.teleService}
                >
                  <Image
                    style={styles.teleServicepic}
                    source={require("../../assets/icons/appointment.png")}
                  />

                  <Text style={styles.teleServiceText}>Appointment</Text>
                </Animatable.View>
              </TouchableOpacity>

              <TouchableOpacity>
                <Animatable.View
                  animation="bounceIn"
                  style={styles.teleService}
                >
                  <Image
                    style={styles.teleServicepic}
                    source={require("../../assets/icons/smartphone.png")}
                  />

                  <Text style={styles.teleServiceText}>Request Status</Text>
                </Animatable.View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("LabReportsAnand")}
              >
                <Animatable.View
                  animation="bounceIn"
                  style={styles.teleService}
                >
                  <Image
                    style={styles.teleServicepic}
                    source={require("../../assets/icons/report.png")}
                  />

                  <Text style={styles.teleServiceText}>Lab Reports</Text>
                </Animatable.View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("BloodBank")}
              >
                <Animatable.View
                  animation="bounceIn"
                  style={styles.teleService}
                >
                  <Image
                    style={styles.teleServicepicaddUser}
                    source={require("../../assets/icons/blood-bank.png")}
                  />

                  <Text style={styles.teleServiceText}>Blood Bank</Text>
                </Animatable.View>
              </TouchableOpacity>

              <TouchableOpacity>
                <Animatable.View
                  animation="bounceIn"
                  style={styles.teleService}
                >
                  <Image
                    style={styles.teleServicepicaddUser}
                    source={require("../../assets/icons/ambulance.png")}
                  />

                  <Text style={styles.teleServiceText}>Ambulance Service</Text>
                </Animatable.View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("AddNewMember")}
              >
                <Animatable.View
                  animation="bounceIn"
                  style={styles.teleService}
                >
                  <Image
                    style={styles.teleServicepicaddUser}
                    source={require("../../assets/icons/add_user.png")}
                  />

                  <Text style={styles.teleServiceTextAddUser}>Add User</Text>
                </Animatable.View>
              </TouchableOpacity>
            </View>

            <View style={styles.button}>
              <LinearGradient
                colors={["#66cdaa", "#3cb371"]}
                style={styles.signIn}
              >
                <TouchableOpacity
                  onPress={
                    () => navigation.navigate("SignInScreen")

                    // mutate({ name: data.Name, email: data.email, mobile_no: data.mobile, colony: data.colony, house_no: data.house, old_address: data.oldAddress, password: data.password, token: "HAMAR-SOCIETY", tag: "register", usertype: 1, firebasetoken: "" })
                  }
                >
                  <Text style={styles.textSign}>Sign Out</Text>

                  {/* {isLoading ? <Text style={[styles.textSign, { color: "#fff" }]}>Loading...</Text> : 
  <Text style={[styles.textSign, { color: "#fff" }]}>Register</Text>} */}
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </View>
        {/* --------------------end service-------------------------------- */}

        {/* ---------------Events--------------------------- */}
        {/* <View style={{ backgroundColor: '#fff' }}>
            <Text style={styles.Category}>Events </Text>
          </View>
          <ScrollView horizontal={true}>
            <View
              style={styles.eventBox}>
              <View style={{ flexDirection: 'row' }}>
                <View flex={1}>
                  <Image
                    style={styles.festival}
                    source={require('../../assets/Images/Festival.png')}
                  />
                </View>
                <View style={styles.EventText}>
                  <Text style={styles.mainText}>Diwali events</Text>
                  <Unorderedlist bulletUnicode={0x2022} color="green">
                    <Text style={styles.colorText}>Online Event</Text>
                  </Unorderedlist>
                  <Text style={styles.dateText}>Clebrate diwali with us..</Text>
                  <Text
                    style={{
                      color: 'orange',
                      alignSelf: 'flex-end',
                      marginLeft: 0,
                    }}>
                    11-Sep-2021
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={styles.eventBox}>
              <View style={{ flexDirection: 'row' }}>
                <View flex={1}>
                  <Image
                    style={styles.festival}
                    source={require('../../assets/Images/Festival.png')}
                  />
                </View>
                <View style={styles.EventText}>
                  <Text style={styles.mainText}>Diwali events</Text>
                  <Unorderedlist bulletUnicode={0x2022} color="green">
                    <Text style={styles.colorText}>Online Event</Text>
                  </Unorderedlist>
                  <Text style={styles.dateText}>Clebrate diwali with us..</Text>
                  <Text
                    style={{
                      color: 'orange',
                      alignSelf: 'flex-end',
                      marginLeft: 0,
                    }}>
                    11-Sep-2021
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={styles.eventBox}>
              <View style={{ flexDirection: 'row' }}>
                <View flex={1}>
                  <Image
                    style={styles.festival}
                    source={require('../../assets/Images/Festival.png')}
                  />
                </View>
                <View style={styles.EventText}>
                  <Text style={styles.mainText}>Diwali events</Text>
                  <Unorderedlist bulletUnicode={0x2022} color="green">
                    <Text style={styles.colorText}>Online Event</Text>
                  </Unorderedlist>
                  <Text style={styles.dateText}>Clebrate diwali with us..</Text>
                  <Text
                    style={{
                      color: 'orange',
                      alignSelf: 'flex-end',
                      marginLeft: 0,
                    }}>
                    11-Sep-2021
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={styles.eventBox}>
              <View style={{ flexDirection: 'row' }}>
                <View flex={1}>
                  <Image
                    style={styles.festival}
                    source={require('../../assets/Images/Festival.png')}
                  />
                </View>
                <View style={styles.EventText}>
                  <Text style={styles.mainText}>Diwali events</Text>
                  <Unorderedlist bulletUnicode={0x2022} color="green">
                    <Text style={styles.colorText}>Online Event</Text>
                  </Unorderedlist>
                  <Text style={styles.dateText}>Clebrate diwali with us..</Text>
                  <Text
                    style={{
                      color: 'orange',
                      alignSelf: 'flex-end',
                      marginLeft: 0,
                    }}>
                    11-Sep-2021
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={styles.eventBox}>
              <View style={{ flexDirection: 'row' }}>
                <View flex={1}>
                  <Image
                    style={styles.festival}
                    source={require('../../assets/Images/Festival.png')}
                  />
                </View>
                <View style={styles.EventText}>
                  <Text style={styles.mainText}>Diwali events</Text>
                  <Unorderedlist bulletUnicode={0x2022} color="green">
                    <Text style={styles.colorText}>Online Event</Text>
                  </Unorderedlist>
                  <Text style={styles.dateText}>Clebrate diwali with us..</Text>
                  <Text
                    style={{
                      color: 'orange',
                      alignSelf: 'flex-end',
                      marginLeft: 0,
                    }}>
                    11-Sep-2021
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
          <View style={{ backgroundColor: '#fff' }}></View> */}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  Category: {
    color: "black",
    fontSize: 22,
    paddingTop: 15,
    paddingLeft: 15,
  },
  HeaderContainerRight: {
    flex: 1,
    marginLeft: 5,
    paddingTop: 10,
  },
  HeaderContainerLeft: {
    flex: 2,
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 14,
  },

  toggleDrawer: {
    alignSelf: "center",
    paddingRight: 20,
    paddingTop: 10,
    paddingLeft: 5,
  },

  HeaderTabName: {
    flexDirection: "row",
    marginTop: 20,
    letterSpacing: 3,
    justifyContent: "center",
    marginBottom: 18,
    marginRight: 30,
  },

  HeaderTabFirstName: {
    fontSize: 30,
    letterSpacing: 3,
    color: "#d2691e",
    fontWeight: "bold",
  },

  HeaderTabMiddleName: {
    fontSize: 30,
    letterSpacing: 3,
    fontWeight: "bold",
  },

  HeaderTabLastName: {
    fontSize: 30,
    letterSpacing: 3,
    fontWeight: "bold",
    color: "#a52a2a",
  },

  HeaderTab: {
    fontSize: 26,
    color: "#ffffff",
    flexDirection: "row",
    fontWeight: "bold",
    marginTop: 30,

    flexWrap: "wrap",
    marginLeft: 16,
    justifyContent: "center",
    marginBottom: 15,
    letterSpacing: 3,
  },

  notification: {
    marginTop: 30,
    // marginLeft: 5,
  },

  signIn: {
    width: "50%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },

  textSign: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },

  patientDetails: {
    // margin: 5,
    marginLeft: 10,
    width: "95%",
    height: 85,
    borderColor: "#191970",
    borderWidth: 2,
    backgroundColor: "black",
    justifyContent: "center",
    padding: 5,
    alignItems: "center",
    // flexWrap:'wrap',
    borderRadius: 10,
    elevation: 20,
  },

  patientlogo: {
    marginTop: 2,
    paddingRight: 5,
    lineHeight: 20,
    paddingBottom: 10,
  },

  patient: {
    marginRight: 10,
    // marginLeft:10,
    padding: 2,
    paddingLeft: 5,
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "bold",
  },

  patientlogoNo: {
    marginTop: 2,
    paddingRight: 5,
    paddingLeft: 16,
  },

  patientCr: {
    marginRight: 30,
    marginLeft: 5,
    padding: 2,
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "bold",
  },

  patientName: {
    marginTop: 3,
    marginHorizontal: 14,
    flexWrap: "wrap",
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },

  patientNo: {
    marginLeft: 44,
    marginTop: 3,
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "bold",
  },

  hospitalService: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 5,
    margin: 25,
    elevation: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    elevation: 20,
  },

  teleService: {
    width: 140,
    height: 140,
    marginTop: 16,
    borderWidth: 2,
    marginLeft: 6,
    // borderColor: '#3cb371',
    borderColor: "#fff",
    margin: 2,
    justifyContent: "center",
    borderRadius: 12,
    // shadowRadius:20,
  },

  teleServicepicaddUser: {
    width: 75,
    height: 75,
    marginVertical: 18,
    marginLeft: 32,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  services: {
    width: 45,
    height: 45,
    marginVertical: 18,
    marginLeft: 10,
    marginBottom: 10,
  },

  teleServicepic: {
    width: 75,
    height: 75,
    marginVertical: 18,
    marginLeft: 26,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginHorizontal: 40,
  },

  teleServiceText: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
  },

  teleServiceTextAddUser: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  serivcesOutline: { flexDirection: "row", flexWrap: "wrap", margin: 5 },

  serviceContainer: {
    backgroundColor: "yellow",
    height: 70,
    justifyContent: "center",
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  ServiceName: {
    fontSize: 14,
    color: "grey",
    textAlign: "center",
    marginBottom: 20,
    marginLeft: 28,
    margin: 5,
  },

  ImageSliders: { height: 180, width: "100%", alignSelf: "center" },
  UserResponse: {
    padding: 10,
    flex: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderColor: "grey",
    alignItems: "center",
  },

  societyCorner: {},

  colorText: {
    color: "green",
    fontSize: 12,
  },
  mainText: {
    fontSize: 14,
  },
  EventText: {
    marginTop: 130,
    fontSize: 14,
    alignSelf: "flex-start",
    marginRight: 40,
  },

  societyOptions: {
    flexWrap: "wrap",
    flexDirection: "row",
    // alignItems:'center',
    marginLeft: 8,
  },

  serviceMatter: {
    alignItems: "center",
    flexWrap: "wrap",
  },
  festival: {
    height: 128,
    width: 220,
    justifyContent: "center",
  },
  Health: {
    fontSize: 14,
    color: "grey",
    textAlign: "center",
    marginBottom: 20,
    marginLeft: 28,
    margin: 5,
  },

  Market: {
    fontSize: 14,
    color: "grey",
    textAlign: "center",
    marginBottom: 20,
    marginLeft: 44,
    margin: 5,
  },

  Amenities: {
    fontSize: 14,
    color: "grey",
    textAlign: "center",
    marginBottom: 20,
    marginLeft: 40,
    margin: 5,
  },

  HomeService: {
    fontSize: 14,
    color: "grey",
    textAlign: "center",
    marginBottom: 20,
    marginLeft: 22,
    margin: 5,
  },

  eventBox: {
    borderLeftColor: "#0d46a1",
    margin: 10,
    backgroundColor: "white",
    width: 220,
    height: 210,
  },

  notice: {
    marginTop: 20,
    backgroundColor: "#b0c4de",
  },
  noticebox: {
    margin: 10,
    // padding:5,
    backgroundColor: "white",
    width: 180,
    height: 100,
    borderRadius: 15,
    elevation: 10,
  },
  noticedate: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 12,
  },
  noticeheadline: {
    fontWeight: "bold",
    margin: 10,
  },
  noticedetail: {
    marginLeft: 10,
    fontSize: 12,
  },

  noticeSeeall: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignSelf: "flex-end",
    marginLeft: 150,
    color: "green",
  },
  propertNearby: {
    paddingTop: 15,
    paddingLeft: 15,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  propertNearbyHeadline: {
    fontSize: 22,
  },

  sale: {
    width: 140,
    height: 200,
    borderColor: "#f5f5f5",
    borderWidth: 2,
    margin: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: "center",

    // shadowOpacity:0.34,
    // shadowColor:'black',
    // shadowOffset:{
    //     width:0,
    //     height:5,
    // },
    // shadowRadius:6.27,
    // elevation:10,
  },

  anandHead: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#3cb371",
    elevation: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    marginBottom: 10,
    flexWrap: "wrap",
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },

  sliderPics: {
    margin: 5,
    elevation: 10,
    // borderTopLeftRadius:10,
  },

  proprtiespic: {
    margin: 0,
    width: 140,
    height: 140,
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    borderRadius: 10,
    marginTop: -2,
    alignSelf: "center",
  },

  proprtiesonSale: {
    flexDirection: "row",
    justifyContent: "flex-end",
    color: "green",
    fontSize: 12,
  },

  proprtiespicRs: {
    // marginBottom: 10,
    alignSelf: "center",
    fontWeight: "bold",
  },

  proprtiespicOwner: {
    alignSelf: "center",
    fontSize: 13,
  },
  button: {
    alignItems: "center",
    marginTop: 20,
    borderWidth: 2,
    alignSelf: "center",
    marginLeft: 5,
    width: "70%",
    borderRadius: 10,
    borderColor: "#fff",
    marginBottom: 20,
  },

  buttonText: {
    textAlign: "center",
    margin: 5,
    padding: 5,
    color: "green",
  },

  forumShortcut: {
    fontSize: 22,
    // marginTop:10,
    elevation: 10,
    shadowOpacity: 0.75,
  },

  forumShortcuthead: {
    fontSize: 22,
    marginTop: 10,
  },

  Forumicon: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: 5,
  },

  ForumMemberName: {
    marginTop: 15,
    marginLeft: 5,
  },
  ForumMemberWing: {
    marginLeft: 55,
    fontSize: 10,
    fontWeight: "bold",
    color: "green",
  },
  ForumMemberIssue: {
    fontWeight: "bold",
    marginLeft: 55,
    // marginBottom:40,
  },
  ForumMemberIssueDetail: {
    marginLeft: 55,
    marginBottom: 5,
  },
  ForumMemberLike: {
    marginLeft: 55,
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 15,
  },

  Forumdigit: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
  },
  ForumMemberResponse: {
    // flexDirection:'row',
    // flexWrap:'wrap',
    marginLeft: 20,
    marginTop: 8,
  },
  ForumMemberDate: {
    marginTop: 15,
    marginLeft: 90,
    fontSize: 12,
    color: "grey",
  },

  hairline: {
    backgroundColor: "#dcdcdc",
    height: 2,
    width: "120%",
    marginTop: 5,
    marginRight: 16,
  },
});
