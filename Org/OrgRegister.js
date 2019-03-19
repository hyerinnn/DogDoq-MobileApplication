import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions
} from "react-native";
import ImageTextInput from "../components/ImageTextInput";
import RoundButton from "../components/RoundButton";
import { CheckBox } from "react-native-elements";
const { height, width } = Dimensions.get("window");
export default class OrgRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: null,
        password: null,
        ipaddress: "ipaddress",
        kind: null
      },
      checked1: false,
      checked2: false,
      checked3: false
    };
  }

  RegisterUser() {
    return fetch("http://192.168.43.185:3001/api/register", {
      method: "POST",
      body: JSON.stringify({
        ...this.state.data
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response._bodyInit)
      .then(_bodyInit => JSON.parse(_bodyInit).code);
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        backgroundColor: "#f1cf81"
      },
      headerLeft: <View />,
      headerTitle: (
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>
            DOGDOQ
          </Text>
        </TouchableOpacity>
      ),
      headerRight: <View />
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../assets/images/icLogo3.png")}
        />
        <View style={styles.checkContainer}>
          <CheckBox
            containerStyle={{
              backgroundColor: "white",
              borderColor: "white"
            }}
            textStyle={{ color: "#9a6618" }}
            uncheckedColor="#9a6618"
            checkedColor="#9a6618"
            title="펫샵"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.checked1}
            onPress={() => {
              this.state.checked2 = this.state.checked2 ? false : false;
              this.state.checked3 = this.state.checked3 ? false : false;
              this.setState({
                data: {
                  ...this.state.data,
                  kind: "user1"
                },
                checked1: !this.state.checked1
              });
            }}
          />
          <CheckBox
            containerStyle={{
              backgroundColor: "white",
              borderColor: "white"
            }}
            title="농장"
            textStyle={{ color: "#9a6618" }}
            uncheckedColor="#9a6618"
            checkedColor="#9a6618"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.checked2}
            onPress={() => {
              this.state.checked1 = this.state.checked1 ? false : false;
              this.state.checked3 = this.state.checked3 ? false : false;
              this.setState({
                data: {
                  ...this.state.data,
                  kind: "user2"
                },
                checked2: !this.state.checked2
              });
            }}
          />
          <CheckBox
            containerStyle={{
              backgroundColor: "white",
              borderColor: "white"
            }}
            style={styles.text}
            title="병원"
            textStyle={{ color: "#9a6618" }}
            uncheckedColor="#9a6618"
            checkedColor="#9a6618"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.checked3}
            onPress={() => {
              this.state.checked1 = this.state.checked1 ? false : false;
              this.state.checked2 = this.state.checked2 ? false : false;
              this.setState({
                data: {
                  ...this.state.data,
                  kind: "user3"
                },
                checked3: !this.state.checked3
              });
            }}
          />
        </View>
        <View style={styles.inputContainer}>
          <ImageTextInput
            image={require("../assets/images/icUser2x.png")}
            width="100%"
            placeholder=" ID "
            conatinerStyle={{ marginBottom: 13 }}
            onChange={text => {
              this.setState({
                data: {
                  ...this.state.data,
                  email: text
                }
              });
            }}
          />
          <ImageTextInput
            image={require("../assets/images/icPassword2x.png")}
            width="100%"
            placeholder=" PASSWORD  "
            onChange={text => {
              this.setState({
                data: {
                  ...this.state.data,
                  password: text
                }
              });
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <RoundButton
            title={"가입하기"}
            styleContainer={{
              width: "100%",
              backgroundColor: "#a38686"
            }}
            onPress={() => {
              this.RegisterUser().then(result => {
                if (result == 200) {
                  this.props.navigation.navigate("orgLogin");
                } else {
                  alert("회원가입에 실패하셨습니다.");
                }
              });
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  logo: {
    width: width * 0.6,
    height: height * 0.375,
    top: "3%"
  },
  checkContainer: {
    top: "8%",
    flexDirection: "row"
  },
  inputContainer: {
    top: "10%",
    alignItems: "center",
    justifyContent: "center",
    width: "90%"
  },
  buttonContainer: {
    top: "17%",
    width: "90%",
    alignItems: "center"
  }
});
