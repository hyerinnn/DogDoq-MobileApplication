import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import Icon from "./Icon";

export default class IconTextInput extends React.Component {
  componentDidMount() {
    //불러와서 state바꿈.
  }

  render() {
    return (
      <View
        style={[{
          flexDirection: "row",
          width: this.props.width,
          height: 50,
          alignItems: "center",
          justifyContent: "flex-start",
          borderColor: "#ddd",
          paddingLeft: 20,
          backgroundColor: this.props.backgroundColor,
          borderColor: "#e5e5e5",
          borderBottomWidth: 1,
        }, this.props.conatinerStyle]}
      >
        <Icon name={this.props.IconName} />
        <TextInput
          defaultValue={this.props.defaultValue}
          placeholder={this.props.placeholder}
          style={{ marginLeft: 5, width: "90%", height: 50 }}
          onChangeText={text => {
            this.props.onChange && this.props.onChange(text);
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "90%",
    height: 50,
    alignItems: "center",
    justifyContent: "flex-start",
    borderColor: "#ddd",
    borderWidth: 0.2,
    paddingLeft: 20
  }
});
