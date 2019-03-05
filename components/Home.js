import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";

const { height, width } = Dimensions.get("window");

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'DOGDOQ',
    headerTitleStyle: { flex: 1, textAlign: 'center' },
    headerStyle: {
      backgroundColor: '#f1cf81'
    },
    headerTintColor: '#fff'
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/images/icLogo3.png')} />
        <View style={styles.buttonview}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("orgLogin");
            }}
          >
            <Image
              source={require("../assets/images/icCompany2x.png")}
              style={{
                width: "70%",
                height: "70%"
              }}
            />
            <Text style={styles.text}>기관</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#f1cf81" }]}
            onPress={() => {
              this.props.navigation.navigate("userLogin");
            }}
          >
            <Image
              source={require("../assets/images/icPerson2x.png")}
              style={{
                width: "70%",
                height: "70%"
              }}
            />
            <Text style={styles.text}>개인</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  logo: {
    width: width * 0.6,
    height: height * 0.375,
    top: "7%",
  },
  buttonview: {
    top: "32%",
    width:width*0.78,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    //backgroundColor: "yellow",
  },
  button: {
    borderRadius: 10,
    backgroundColor: "#a38686",
    borderColor: "#BDBDBD",
    borderWidth: 1,
    height: height*0.19,
    width: width*0.32,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  text: {
    fontSize: 20,
    color: "#fff"
  }
});
