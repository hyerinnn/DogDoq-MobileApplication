import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";

var { height, width } = Dimensions.get("window");
const isWidePhone = width > 350;

export default class Alarm extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={{ marginTop: 25 }}
          onPress={this.props.onPress}
        >
          <Text
            style={{
              fontSize: 14,
              color: "#17d",
              textDecorationLine: "underline"
            }}
          >
            회원가입 하시겠어요?
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 15
  },
  link: {
    textDecorationLine: "underline",
    color: "black",
    fontSize: 16
  }
});
