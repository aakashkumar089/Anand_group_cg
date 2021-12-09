import React from "react";
import {
  View,
  Text,
  Images,
  StyleSheet,
  ScrollView,
  StatusBar,
  Animated,
  Easing,
  TouchableOpacity,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { withRepeat } from "react-native-reanimated";

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}

export default class RegisteredNewSuccess extends React.Component {
  // export default function RegisteredNewSuccess({}){
  componentDidMount() {
    Animated.timing(this.animation.play, {
      toValue: 1,
      duration: 1000,
      speed: 1,
      loop: false,
    });
    this.animation.play();
    this.animation.play(0, 100);
  }

  render() {
    return (
      <>
        <View>
          <FocusAwareStatusBar
            backgroundColor="#800080"
            barStyle="Light-Content"
          />
          <ScrollView>
            <View style={styles.container}>
              <Text style={styles.memberStatus}>
                Member Registered Successfully
              </Text>

              <LottieView
                loop={false}
                style={{ width: 200, height: 200, marginLeft: 40 }}
                ref={(animation) => {
                  this.animation = animation;
                }}
                source={require("../../assets/Images/33337-tick-pop.json")}
              />

              <Text style={styles.memberStatusText}>
                Amit (32 Yrs/Male) is Successfully registered at AIIMS Raipur.
              </Text>

              <Text style={styles.memberStatusCR}>PRN : 2202142246454554</Text>

              <Text style={styles.memberStatusCRnotice}>
                Please note down the PR number for future reference.It will be
                used for maintaining your medical records.
              </Text>

              <TouchableOpacity onPress={() => alert("save report")}>
                <View style={styles.saveReceipt}>
                  <MaterialCommunityIcons
                    name={"file-download-outline"}
                    color="white"
                    size={25}
                  />

                  <Text style={styles.memberStatusPRsave}>Save Receipt</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.homeButton}>
                  <Text style={styles.homeButtonText}>Go To</Text>
                  <MaterialCommunityIcons
                    style={styles.homeIcon}
                    name={"home"}
                    color="white"
                    size={30}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#800080",
  },

  memberStatus: {
    color: "#fff",
    justifyContent: "center",
    textAlign: "center",
    marginTop: 20,
    fontSize: 22,
    fontWeight: "bold",
  },

  memberStatusText: {
    color: "white",
    margin: 10,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 5,
    fontSize: 15,
    marginHorizontal: 25,
    lineHeight: 28,
  },

  memberStatusCR: {
    marginHorizontal: 30,
    fontSize: 20,
    justifyContent: "center",
    textAlign: "center",
    alignSelf: "center",
    color: "white",
    marginTop: 25,
    fontWeight:'bold',
  },

  memberStatusCRnotice: {
    justifyContent: "center",
    alignSelf: "center",
    marginHorizontal: 25,
    marginVertical: 25,
    color: "white",
    fontSize: 15,
  },

  saveReceipt: {
    color: "white",
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "row",
  },
  memberStatusPRsave: {
    color: "white",
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 15,
    fontWeight: "bold",
  },

  homeButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    width: "60%",
    height: 50,
    backgroundColor: "#3cb371",
    marginBottom: 30,
    marginVertical: 35,
    borderRadius: 20,
    shadowOpacity: 0.8,
    shadowColor: "white",
    elevation: 20,
  },

  homeButtonText: {
    fontSize: 20,
    justifyContent: "center",
    fontWeight: "bold",
    marginRight: 18,
    alignSelf: "center",
    color: "white",
  },

  homeIcon: {
    alignSelf: "center",
  },
});
