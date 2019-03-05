import React from "react";
import { View, TextInput, Image, StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");
export default class IconTextInput extends React.Component {
  componentDidMount() {
    //불러와서 state바꿈.
  }

  render() {
    return (
      <View
        style={[{
          flexDirection: "row",
          width: "70%",
          height: 60,
          alignItems: "center",
          justifyContent: "flex-start",
          borderColor: "#ddd",
          paddingLeft: 8,
          //backgroundColor: "red" ,
          borderRadius: 3,
          borderBottomColor: "#e5e5e5",
          borderBottomWidth: 1,
        }, this.props.conatinerStyle]}
      >
       <TextInput
          defaultValue={this.props.defaultValue}
          placeholder={this.props.placeholder}
          style={{ marginLeft: 3, width: "100%", height: 50}}
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
