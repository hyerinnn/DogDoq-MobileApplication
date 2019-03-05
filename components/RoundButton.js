import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from "react-native";
const { height, width } = Dimensions.get("window");
export default class RoundButton extends React.Component {
  render() {
    return (
      <TouchableOpacity style={[styles.container, this.props.styleContainer]} onPress={this.props.onPress}>
          <Text style={styles.login}>{this.props.title} </Text>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    borderRadius: 20, 
    height: height * 0.055,
    backgroundColor: "#f1cf81",
  },
  login: {
    color: "white",
    fontSize: 20
  }
});
