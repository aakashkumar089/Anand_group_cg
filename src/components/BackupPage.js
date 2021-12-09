import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
  Show,
} from "react-native";
// import CalenderItem from './Calender';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Picker } from "@react-native-picker/picker";

import { useNavigation } from "@react-navigation/core";
import { Card } from "react-native-paper";
import { SliderBox } from "react-native-image-slider-box";
import { useIsFocused } from "@react-navigation/native";

// import {userhome} from '../utils/api';
// import {useQuery} from 'react-query';
// import {useSelector} from 'react-redux';

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}

const Appointment = ({ navigation }) => {
  // const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  // const {password, email} = useSelector(state => ({
  //   password: state?.auth?.user?.password,
  //   email: state?.auth?.user?.email,
  // }));
  // const {data, error, status} = useQuery(
  //   ['userhome', email, password],
  //   userhome,
  // );
  // const navigation = useNavigation();
  // if (status == 'loading') {
  //   return (
  //     <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
  //       <ActivityIndicator size="large" color="black" />
  //     </View>
  //   );
  // }

  // if (status === 'error') {
  //   return (
  //     <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
  //       <Text>{error.message}</Text>
  //     </View>
  //   );
  // }
  // const Stack = createStackNavigator();
  // // const service = data.data.data[0].serv;
  // // const banner = data.data.data[2];
  // // const activity = data.data.data[3];
  // // const event = data.data.data[1];

  // console.log(data);

  const [selectedValue, setSelectedValue] = useState("Select Pateint Name");

  return (
    <>
      <FocusAwareStatusBar backgroundColor="#3cb371" barStyle="Light-Content" />
      <StatusBar backgroundColor="#3cb371" barStyle="Light-Content" />

      <ScrollView>
        {/* Top body Part */}

        <View style={{ flex: 1, backgroundColor: "#ffffff" }}>


          <View style={styles.patientPicker}>
            <Picker
              selectedValue={selectedValue}
              style={styles.pickerItems}
              onValueChange={(value, index) => setSelectedValue(value)}
            >
              <Picker.Item label="Select Pateint Name" value="0"></Picker.Item>
              <Picker.Item label="Rakesh Verma" value="100"></Picker.Item>
              <Picker.Item label="Ramesh" value="200"></Picker.Item>
              <Picker.Item label="Abhishek" value="300"></Picker.Item>
            </Picker>
          </View>
        </View>

        <View style={styles.specialistsDept}>
          <View style={styles.generalSection}>
            <Text style={styles.generalSectionText}>General</Text>
            <View style={styles.generalSectionImage}>
              <TouchableOpacity
                onPress={() => navigation.navigate("BookAppointment")}
              >
                <View style={styles.generalSingleImage}>
                  <Image
                    style={styles.sectionImage}
                    source={require("../../assets/Images/ayurveda.jpg")}
                  />
                  <Text style={styles.microSectionText}>Ayurveda</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.generalSingleImage}>
                  <Image
                    style={styles.sectionImage}
                    source={require("../../assets/Images/physician.jpg")}
                  />
                  <Text style={styles.microSectionText}>Physician</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.generalSingleImage}>
                  <Image
                    style={styles.sectionImage}
                    source={require("../../assets/Images/pedia.jpg")}
                  />

                  <Text style={styles.microSectionText}>Child Specialists</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.generalSingleImage}>
                  <Image
                    style={styles.sectionImage}
                    source={require("../../assets/Images/ortho.jpg")}
                  />
                  <Text style={styles.microSectionText}>Orthopedic</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.generalSingleImage}>
                  <Image
                    style={styles.sectionImage}
                    source={require("../../assets/Images/eyeDoctor.jpg")}
                  />
                  <Text style={styles.microSectionText}>Ophthalmologist</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.generalSingleImage}>
                  <Image
                    style={styles.sectionImage}
                    source={require("../../assets/Images/dietician.jpg")}
                  />
                  <Text style={styles.microSectionText}>Dietitian</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.generalSingleImage}>
                  <Image
                    style={styles.sectionImage}
                    source={require("../../assets/Images/depression.jpg")}
                  />
                  <Text style={styles.microSectionText}>Mental Welness</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.generalSingleImage}>
                  <Image
                    style={styles.sectionImage}
                    source={require("../../assets/Images/physiothearapy.jpg")}
                  />
                  <Text style={styles.microSectionText}>Physiotherapist</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.generalSingleImage}>
                  <Image
                    style={styles.sectionImage}
                    source={require("../../assets/Images/mens_health.jpg")}
                  />
                  <Text style={styles.microSectionText}>Men's Health</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.specialistsSection}>
            <Text style={styles.generalSectionText}>Specialization</Text>

            <View style={styles.generalSectionImage}>
              <TouchableOpacity>
                <View style={styles.generalSingleImage}>
                  <Image
                    style={styles.sectionImage}
                    source={require("../../assets/Images/ayurveda.jpg")}
                  />
                  <Text style={styles.microSectionText}>Ayurveda</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.generalSingleImage}>
                  <Image
                    style={styles.sectionImage}
                    source={require("../../assets/Images/ortho.jpg")}
                  />
                  <Text style={styles.microSectionText}>Orthopedic</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.generalSingleImage}>
                  <Image
                    style={styles.sectionImage}
                    source={require("../../assets/Images/eyeDoctor.jpg")}
                  />
                  <Text style={styles.microSectionText}>Ophthalmologist</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.generalSingleImage}>
                  <Image
                    style={styles.sectionImage}
                    source={require("../../assets/Images/ortho.jpg")}
                  />
                  <Text style={styles.microSectionText}>Orthopedic</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.generalSingleImage}>
                  <Image
                    style={styles.sectionImage}
                    source={require("../../assets/Images/eyeDoctor.jpg")}
                  />
                  <Text style={styles.microSectionText}>Ophthalmologist</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* <View >
            
            <CalenderItem/>
          </View> */}
        </View>

        {/* --------------------End middle body--------------------------- */}
      </ScrollView>
    </>
  );
};

export default Appointment;

const styles = StyleSheet.create({
  Category: { color: "grey", fontSize: 22, paddingTop: 15, paddingLeft: 15 },

  HeaderTab: { fontSize: 24, color: "#fff", fontWeight: "bold" },
  services: { width: 30, height: 30, alignSelf: "center" },
  serviceContainer: {
    height: 70,
    justifyContent: "center",
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
  },
  ServiceName: { fontSize: 14, color: "grey" },
  ImageSliders: { height: 180, width: "100%", alignSelf: "center" },
  anandHead: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#3cb371",
    shadowColor: "#30C1DD",
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    marginBottom: 10,
    // paddingLeft: 18,
    // marginTop:2,
    flexWrap: "wrap",
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },

  hairline: {
    backgroundColor: "#dcdcdc",
    height: 2,
    width: "120%",
    marginTop: 10,
    marginRight: 16,
  },

  pickerItems: {},

  specialistsDept: {
    backgroundColor: "white",
    marginTop: 10,
    margin: 5,
  },

  generalSection: {
    margin: 5,
  },

  specialistsSection: {
    margin: 5,
  },

  generalSectionText: {
    margin: 5,
    marginLeft: 10,
    fontSize: 20,
  },

  generalSectionImage: {
    margin: 3,
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  generalSingleImage: {
    justifyContent: "center",
    textAlign: "center",
    padding: 3,
    alignItems: "center",
    paddingVertical: 10,
    flexWrap: "wrap",
  },

  sectionImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },

  microSectionText: {
    paddingVertical: 8,
    flexWrap: "wrap",
    fontWeight: "bold",
    flexDirection: "row",
  },

  HeaderTabName: {
    flexDirection: "row",
    marginTop: 20,
    letterSpacing: 3,
    justifyContent: "center",
    marginBottom: 18,
    marginRight: 30,
  },

  HeaderTabStatusPage: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#d2691e",
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

  patientPicker: {
    margin: 10,
  },
  notification: {
    marginTop: 30,
    marginLeft: 30,
  },
});
