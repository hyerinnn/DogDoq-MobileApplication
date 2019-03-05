import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import uuidv1 from "uuid/v1";
import ImageTextInput from "../components/ImageTextInput";
import RoundButton from "../components/RoundButton";
import { ImagePicker, Permissions } from "expo";
const { height, width } = Dimensions.get("window");

export default class OrgRegisterDog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      json: {
        dogId: null
      },
      id: null,
      Data: []
    };
  }
  async _pickImage() {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      aspect: [4, 3]
    });
    console.log(result);
    const ID = uuidv1();
    if (!result.cancelled) {
      this.setState({
        ...this.state,
        id: ID,
        json: {
          dogId: ID
        }
      });
    }
  }
  RegisterDog() {
    return fetch("http://192.168.43.166:3001/api/dog", {
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
      .then(_bodyInit => JSON.parse(_bodyInit).code);
  }
  allDog() {
    return fetch("http://192.168.43.166:3001/api/alldog", {
      method: "POST",
      body: JSON.stringify({}),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response._bodyInit)
      .then(response => JSON.parse(response))
      .then(response => response.result);
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
  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/images/image2x.png')} />
        <View style={styles.inputContainer}>
          <ImageTextInput
            image={require('../assets/images/icId2x.png')}
            width="95%"
            placeholder=" 강아지 ID "
            conatinerStyle={{ marginBottom: 13 }}
            defaultValue={this.state.id}
            onChange={text => {
              this.setState({
                json: {
                dogId: text
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
              this.RegisterDog().then(result => {
                if (result == 200) {
                  alert("등록에 성공하였습니다!");
                } else {
                  alert("등록에 실패하셨습니다!");
                }
              });
            }}
          />
          <RoundButton
            title={"비문으로 등록하기"}
            styleContainer={{ width: '95%', borderRadius: 5, backgroundColor: "#f1cf81", marginTop:8}}
            onPress={() => {
              this._pickImage().then(() => {
                console.log(this.state.id);
              });
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <TouchableOpacity
            onPress={() => {
              this.allDog()
                .then(result => {
                  this.setState({
                    Data: result
                  });
                })
                .then(() => {
                  this.props.navigation.navigate("orgcheckdog", {
                    data: this.state.Data
                  });
                });
            }}
          >
            <Text
              style={{
                fontSize: 17,
                color: "#a38686",
                textDecorationLine: "underline"
              }}>
              등록된 강아지 리스트</Text>
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
    justifyContent: "flex-start"
  },
  logo: {
    width: width,
    height: height *0.37,
  },
  inputContainer: {
    top: "10%",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  buttonContainer: {
    top: "12%",
    width: '90%',
    alignItems: 'center',

  },
  textContainer: {
    top: "17%",
    alignItems: "center",
    justifyContent: "center",
  }
});
