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
          width: this.props.width,
          height: height*0.065,
          alignItems: "center",
          justifyContent: "flex-start",
          borderColor: "#ddd",
          paddingLeft: 8,
          backgroundColor: this.props.backgroundColor,
          borderRadius: 3,
          borderColor: "#e5e5e5",
          borderWidth: 1,
        }, this.props.conatinerStyle]}
      >
        <Image style={{ width: "8%", height:"55%"}} source={this.props.image} />
        <TextInput
          defaultValue={this.props.defaultValue}
          placeholder={this.props.placeholder}
          style={{ marginLeft: 5, width: "80%", height: "100%" }}
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
    // flexDirection: "row",
    // width: "90%",
    // height: 50,
    // alignItems: "center",
    // justifyContent: "flex-start",
    // borderColor: "#ddd",
    // borderWidth: 0.2,
    // paddingLeft: 20
  }
});
