import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity
} from "react-native";
import ImageTextInput from "../components/ImageTextInput";
import RoundButton from "../components/RoundButton";
const { height, width } = Dimensions.get("window");

export default class OrgRegisterDog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      json: {
        dogId: null,
        owner: null
      }
    };
  }

  RegisterOwner() {
    return fetch("http://192.168.43.166:3001/api/owner", {
      method: "POST",
      body: JSON.stringify({
        ...this.state.json
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response._bodyInit)
      .then(_bodyInit => JSON.parse(_bodyInit));
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        backgroundColor: '#fff'
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
          <Text style={{ fontSize: 20, color: '#785A5A', fontWeight: "bold" }} >DOGDOQ</Text>
        </TouchableOpacity>
      ),
      headerRight: (
        <View></View>
      ),
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/images/image2x.png')} />
        <View style={styles.inputContainer}>
          <ImageTextInput
            image={require('../assets/images/icId2x.png')}
            width="95%"
            placeholder="강아지 ID"
            conatinerStyle={{ marginBottom: 13 }}
            onChange={text => {
              this.setState({
                json: {
                  dogId: text
                }
              });
            }}
          />
          <ImageTextInput
            image={require('../assets/images/icUser2x.png')}
            width="95%"
            placeholder="주인 ID"
            onChange={text => {
              this.setState({
                json: {
                  ...this.state.json,
                  owner: text
                }
              });
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <RoundButton
            title={"등록하기"}
            styleContainer={{
              width: '95%', borderRadius: 5, backgroundColor: "#a38686",
            }}
            onPress={() => {
              this.RegisterOwner().then(result => {
                if (result.code == 200) {
                  alert("등록에 성공하였습니다!");
                } else {
                  alert(result.failed);
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
    width: width,
    height: height * 0.37,
  },
  inputContainer: {
    top: "10%",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  buttonContainer: {
    top: "13%",
    width: '90%',
    alignItems: 'center',

  },
});