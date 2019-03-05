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
import Drawer from 'react-native-drawer';
import { ImagePicker, Permissions } from "expo";
let _this = null;
const { height, width } = Dimensions.get("window");

export default class OrgMain extends React.Component {
  async _pickImage() {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      aspect: [4, 4]
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
      alert(ID);
    }
  }
  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  }
  componentDidMount() {
    _this = this;
    
  }
  openControlPanel() {
    this._drawer.open()
  };
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
          <Text style={{ fontSize: 20, color: '#785A5A', fontWeight:"bold" }} >DOGDOQ</Text>
        </TouchableOpacity>
      ),
      headerRight: (
        <View></View>
      ),
    };
  };

  render() {
    const org = this.props.navigation.getParam("org");
    const email = this.props.navigation.getParam("email");

    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="overlay"
        content={
          <View style={{
            height: 100,  alignItems: "center",
            justifyContent: "center"
          }}>
            <TouchableOpacity 
              style={{
                width: "30%", height: "100%", 
                alignItems: "center", justifyContent: "center"}}
              onPress={() => {
                this._pickImage().then(() => {
                  console.log(this.state.id);
                });
              }}  
            >
              <Image
                source={require("../assets/images/dogface.png")}
                style={{ resizeMode: "contain", width: "40%", height: "40%" }}
              />
              <Text>비문촬영</Text>
            </TouchableOpacity>
          </View>}
        tapToClose={true}
        side={"top"}
        openDrawerOffset={0.6} // 20% gap on the right side of drawer
        panCloseMask={0.6}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
          main: { opacity: (2 - ratio) / 2 }
        })}
      >
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/images/image2x.png')} />
          <View style={{ height: height * 0.4, justifyContent: "space-between",}}>
          <View style={styles.buttonview}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  if (org == "user1")
                    this.props.navigation.navigate("org1Write", {
                      org: org,
                      email: email
                    });
                  else if (org == "user2")
                    this.props.navigation.navigate("org2Write", {
                      org: org,
                      email: email
                    });
                  else if (org == "user3")
                    this.props.navigation.navigate("org3Write", {
                      org: org,
                      email: email
                    });
                  else alert("느려");
                }}
              >
              <Image
                source={require("../assets/images/icEdit3x.png")}
                style={{
                  width: "70%",
                  height: "70%"
                }}
              />
                <Text style={styles.text}>문서 작성</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  if (org == "user1")
                    this.props.navigation.navigate("org1Search", {
                      org: org,
                      email: email
                    });
                  else if (org == "user2")
                    this.props.navigation.navigate("org2Search", {
                      org: org,
                      email: email
                    });
                  else if (org == "user3")
                    this.props.navigation.navigate("org3Search", {
                      org: org,
                      email: email
                    });
                  else alert("느려");
                }}
              >
              <Image
                source={require("../assets/images/icSearch3x.png")}
                style={{
                  width: "70%",
                  height: "70%"
                }}
              />
                <Text style={styles.text}>문서 검색</Text>
              </TouchableOpacity>
            </View>
          <View style={styles.buttonview}>
              <TouchableOpacity 
                style={styles.button}
                onPress={() => {
                  if (org == "user1")
                    this.props.navigation.navigate("orgregisterowner", {
                      org: org,
                      email: email
                    });
                  else if (org == "user2")
                    this.props.navigation.navigate("orgregisterdog", {
                      org: org,
                      email: email
                    });
                  else alert("권한없음");
                }}>
              <Image
                source={require("../assets/images/icAdd3x.png")}
                style={{
                  width: "70%",
                  height: "70%"
                }}
              />
                <Text style={styles.text}>강아지 등록</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>서비스예정</Text>
              </TouchableOpacity>
            </View>
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
    justifyContent: "flex-start"
  },
  logo: {
    width: width,
    height: height * 0.37,
  },

  buttonview: {
    top: "15%",
    width: width * 0.78,
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
    height: height * 0.18,
    width: width * 0.32,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    //marginBottom:25,
  },
  text: {
    fontSize: 18,
    color:"#fff"
  }
});
