import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image, TouchableOpacity,
  Dimensions
} from "react-native";
import ImageTextInput from "../components/ImageTextInput";
import RoundButton from "../components/RoundButton";
import Drawer from 'react-native-drawer';
const { height, width } = Dimensions.get("window");
let _this = null;
export default class UserRegister extends React.Component {
  componentDidMount() {
    _this = this;
  }
  openControlPanel() {
    this._drawer.open()
  };
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: null,
        password: null,
        kind: "user4"
      }
    };
  }

  RegisterUser() {
    return fetch("http://192.168.43.166:3001/api/register", {
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
            backgroundColor: '#f1cf81'
        },
      headerLeft: (
        <View></View>
      ),
      headerTitle: (
        <TouchableOpacity 
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}
          onPress={() => {
            _this.openControlPanel()
          }}
        >
          <Text style={{ fontSize: 20, color: '#fff' }} >DOGDOQ</Text>
        </TouchableOpacity>
      ),
      headerRight: (
        <View></View>
      ),
    };
  };
  render() {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="overlay"
        content={
          <View style={{
            height: 80, backgroundColor: "gray", alignItems: "center",
            justifyContent: "center"}}>
            <TouchableOpacity style={{ width: "40%", height: "60%", alignItems: "center", justifyContent: "center", backgroundColor:"pink"}}>
              <Text style={{fontSize:15}}>비문촬영하기</Text>
            </TouchableOpacity>
          </View>}
        tapToClose={true}
        side={"top"}
        openDrawerOffset={0.6} // 20% gap on the right side of drawer
        panCloseMask={0.6}
        //closedDrawerOffset={-3}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
          main: { opacity: (2 - ratio) / 2 }
        })}
      >
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/images/icLogo3.png')} />
        <View style={styles.inputContainer}>
          <ImageTextInput
            image={require('../assets/images/icUser2x.png')}
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
              title={"가입하기"}
            styleContainer={{
              width: '100%',
              backgroundColor: "#a38686"
            }}
            onPress={() => {
              this.RegisterUser().then(result => {
                if (result == 200) {
                  this.props.navigation.navigate("userLogin");
                } else {
                  alert("회원가입에 실패하셨습니다.");
                }
              });
            }}
          />
        </View>
      </View>
      </Drawer>
    );
  }
}
const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
  main: { paddingLeft: 3 },
};

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


