import React from "react";
import { TouchableOpacity, View, StyleSheet, Text, Dimensions,} from "react-native";
const { height, width } = Dimensions.get("window");

export default class DocumentElement extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <View style={{ width:"90%"}}>
            <Text style={[styles.documentName, { fontSize: this.props.fontSize }]}>
              {this.props.name}
            </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: height*0.08,
    flexDirection: "row",
    backgroundColor: "#a38686",
    justifyContent: "center",
    alignItems: "center",
    marginBottom:20,
    borderRadius: 10,
  },
  documentName: {
    color: "#fff",
    width: "100%",
    textAlign: "center"
  }
});
