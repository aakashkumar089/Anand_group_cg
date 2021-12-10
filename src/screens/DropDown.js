import React, { useState, Component } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "",
      level: "",
      Hospital:"",
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.pickerstyle} flexDirection="row">
          <MaterialCommunityIcons
            style={{ marginTop: 8 }}
            name="hospital-building"
            color="#4b0082"
            size={30}
          />
          <Picker
            selectedValue={this.state.Hospital}
            style={styles.states}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ Hospital: itemValue })
            }
          >
            <Picker.Item label="Anand Hospital Raipur" value="Anand Hospital Raipur" />
            <Picker.Item label="Anand Hospital Palari" value="Anand Hospital Palari" />
            <Picker.Item label="Anand Hospital Baloda Bazar" value="Anand Hospital Baloda Bazar" />
          </Picker>
        </View>

        <View style={styles.pickerstyle} flexDirection="row">
          <MaterialCommunityIcons
            style={{ marginTop: 8 }}
            name="gender-male-female"
            color="#4b0082"
            size={30}
          />
          <Picker
            selectedValue={this.state.language}
            style={styles.states}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })
            }
          >
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
            <Picker.Item label="Other" value="Other" />
          </Picker>
        </View>

        <View style={styles.pickerstyleLocate} flexDirection="row">
          <MaterialCommunityIcons
            name="map-marker"
            color="#4b0082"
            size={35}
            style={{ marginTop: 8 }}
          />

          <Picker
            selectedValue={this.state.level}
            style={styles.states}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ level: itemValue })
            }
          >
            <Picker.Item label="Chhattisgarh" value="Chhattisgarh" />
            <Picker.Item label="M.P" value="M.P" />
            <Picker.Item label="Andhra Pradesh" value="Andhra Pradesh" />
            <Picker.Item label="U.P" value="U.P" />
            <Picker.Item label="Odisha" value="Odisha" />
          </Picker>
        </View>
      </View>
    );
  }
}

export default DropDown;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
  },

  pickerstyle: {
    borderColor: "#3cb371",
    borderBottomWidth: 1,
  },

  pickerstyleLocate: {
    borderColor: "#3cb371",
    borderBottomWidth: 1,
  },

  states: {
    width: '80%',
    marginLeft: 20,
    backgroundColor: "white",
    // { height: 50, width: "100%" }
  },
});
