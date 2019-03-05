import React from "react";
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Image,
  Dimensions,
} from "react-native";
import ImageTextInput from "../components/ImageTextInput";
import RoundButton from "../components/RoundButton";
const { height, width } = Dimensions.get("window");

export default class OrgLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [],
      data: {
        email: null,
        password: null,
        kind: "user4"
      }
    };
  }
  _loginPress (){
    this.LoginUser().then(result => {
      if (result == 200) {
        this.myDog()
          .then(result => {
            this.setState({
              Data: result
            });
          })
          .then(() => {
            this.props.navigation.navigate("userdog", {
              data: this.state.Data,
              email: this.state.data.email,
              org: this.state.data.kind
            });
          });
      } else {
        alert("입력하신 회원정보가 올바르지 않습니다.");
      }
    });
  }

  LoginUser() {
    return fetch("http://192.168.43.166:3001/api/login", {
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

  myDog() {
    return fetch("http://192.168.43.166:3001/api/mydog", {
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
      .then(response => JSON.parse(response))
      .then(response => response.result);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/images/icLogo3.png')}/>
        <View style={styles.inputContainer}>
          <ImageTextInput
            image={require('../assets/images/icUser2x.png')}
            width="100%"
            placeholder=" ID "
            conatinerStyle={{marginBottom: 13}}
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
            image={require('../assets/images/icPassword2x.png')}
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
            title={"Log in"}
            styleContainer={{
              width: '100%',
            }}
            onPress={()=>this._loginPress()}
          />
          <RoundButton
            title={"Sign Up"}
            styleContainer={{
              marginTop: 13, 
              width: '100%', 
              backgroundColor: "#a38686"
            }}
            onPress={() => this.props.navigation.navigate("userregister")}
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
    justifyContent: "flex-start",
  },
  logo: {
    width: width * 0.6,
    height: height * 0.375,
    top: "3%",
  },
  inputContainer: {
    top: "10%",
    alignItems: "center",
    justifyContent: "center",
    width: "90%"
  },
  buttonContainer: {
    top: "17%",
    width: '90%',
    alignItems: 'center',
  }
});
