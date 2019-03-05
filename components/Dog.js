import React, { PureComponent } from "react";
import {
  Text,
  Dimensions,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList
} from "react-native";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { ImagePicker, Permissions } from "expo";
const { width, height } = Dimensions.get("window");
export default class Icon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };
  }
  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  }
  render() {
    let { image } = this.state;
    return (
      <TouchableOpacity style={styles.child}>
        <View style={styles.img}>
          {image && (
            <Image
              source={{ uri: image }}
              style={{
                resizeMode: "contain",
                width: "100%",
                height: "100%"
              }}
            />
          )}
          <TouchableOpacity
            style={{ width: "100%", height: "100%" }}
            onPress={this._pickImage}
          >
            {/* <MaterialCommunityIcons
              onPress={this._pickImage}j
              name={"image-plus"}
              size={50}
            /> */}
          </TouchableOpacity>
        </View>
        <View style={styles.imgtext}>
          <Text style={styles.text}>{this.props.id}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });
    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(240,238,220)",
    alignItems: "center",
    justifyContent: "center"
  },
  top: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 30
  },
  child: {
    height: 320,
    width: width - 100,
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    width: width - 130,
    height: 200,
    //backgroundColor:"gray",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1
  },
  imgtext: {
    width: width - 130,
    //backgroundColor: "yellow",
    marginTop: 13,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  text: {
    fontSize: 50,
    textAlign: "center"
  }
});
