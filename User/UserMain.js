import React, { PureComponent } from "react";
import {
  Text,
  Dimensions,
  Image,
  StyleSheet,
  View,
  AsyncStorage,
  TouchableOpacity,
  FlatList
} from "react-native";
import uuidv1 from "uuid/v1";
import { ImagePicker, Permissions } from "expo";
import Drawer from 'react-native-drawer';

let _this = null;
export const { width, height } = Dimensions.get("window");

var data = new Array();

export default class UserMain extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      image: {},
      data: null,
      active: true
    };
  }
  openControlPanel() {
    this._drawer.open()
  };
  loadImage = async () => {
    try {
      const images = await AsyncStorage.getItem("image"); //"AsyncStorage.getItem("Dogs");"가 끝나기를 기다리도록 await써줌.안그러면 에러뜰수있음
      const parsedImages = JSON.parse(images); //string으로 변환한 toDos를 다시 오브젝트화 시켜줌.
      this.setState({ loadDog: true, image: parsedImages }); //디스크에서 가져온 데이터를 state의 toDos에 넣어줌
    } catch (err) {
      console.log(err);
    }
  };

  async _pickImage1(index) {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 4]
    });
    if (!result.cancelled) {
      this.setState({
        data: {
          ...this.state.data
        },
        image: {
          ...this.state.image,
          [index]: result.uri
        }
      });
    }

    AsyncStorage.setItem("image", JSON.stringify(this.state.image));
  }
  async _pickImage2() {
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
      alert(ID);
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        backgroundColor: '#FFB85A'
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
          <Text style={{ fontSize: 20, color: '#fff', fontWeight: "bold" }} >DOGDOQ</Text>
        </TouchableOpacity>
      ),
      headerRight: (
        <View></View>
      ),
    };
  };

  async componentWillMount() {
    _this = this;
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    data = this.props.navigation.getParam("data");
    this.loadImage();
  }

  render() {
    const org = this.props.navigation.getParam("org");
    const email = this.props.navigation.getParam("email");
    if (this.state.active == true) {
      setTimeout(() => {
        this.setState({
          ...this.state,
          data: data,
          actvie: false
        });
      }, 100);
    }
    let { image } = this.state;
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="overlay"
        content={
          <View style={{
            height: 100, alignItems: "center",
            justifyContent: "center"
          }}>
            <TouchableOpacity
              style={{
                width: "30%", height: "100%",
                alignItems: "center", justifyContent: "center"
              }}
              onPress={() => {
                this._pickImage2().then(() => {
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
        openDrawerOffset={0.6} 
        panCloseMask={0.6}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
          main: { opacity: (2 - ratio) / 2 }
        })}
      >
        <View style={styles.container}>
          <View style={styles.container2}>
            <FlatList
              data={this.state.data}
              horizontal={true}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={styles.flatContainer}
                  onPress={() => {
                    this.props.navigation.navigate("userquery", {
                      org: org,
                      email: email,
                      dogId: item.id
                    });
                  }}
                >
                  <View style={styles.cardContainer}>
                    <Image style={{ width: "30%", height: "28%", alignSelf: "center" }} source={require('../assets/images/icLogo2x.png')} />
                    <TouchableOpacity
                      style={styles.img}
                      onPress={() => {
                        this._pickImage1(item.id);
                      }}
                    >
                      {image && (
                        <Image
                          style={styles.img} source={{ uri: image[item.id] }}
                          style={{
                            resizeMode: "contain",
                            width: "100%",
                            height: "100%"
                          }}
                        />
                      )}
                    </TouchableOpacity>
                    <View style={styles.imgtext}>
                      <Text style={styles.text}>{item.id}</Text>
                    </View>
                </View>
              </TouchableOpacity>
              )}
            />
          </View>
        </View>
        <Image style={{ width: width, alignSelf: "flex-end" }} source={require('../assets/images/ads.png')} />
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
    justifyContent: "center"
  },
  container2: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 57,
    paddingRight: 60,
    height:height*0.6
  },
  flatContainer: {
    width: width * 0.71,
    height: height * 0.55,
    backgroundColor: "#f1cf81",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "gray",
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderRadius: 15,
    alignSelf:"center"
  },
  cardContainer: {
    height: "83%",
    width: "90%",
    alignItems: "center",
    borderColor: "#fff",
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  img: {
    width: "67%",
    height: "50%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#a38686",
    borderWidth: 1,
    borderRadius: 40,
    marginTop: 0,
    overflow: "hidden"
  },
  imgtext: {
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 13,
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    color: "#785A5A"
  }
});
