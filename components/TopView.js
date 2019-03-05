import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Platform,
  ScrollView,
  AsyncStorage,
  TouchableOpacity,
  FlatList,
  Image
} from "react-native";
import {
  MaterialCommunityIcons,
  Entypo
} from "@expo/vector-icons";
const { height, width } = Dimensions.get("window");

export default class UserDogMain extends React.Component {
  render() {
    return (
      <View style={styles.topview}>
        <TouchableOpacity>
          <Entypo
            name={"menu"}
            size={30}
            //color={"#23A41A"}
            style={{ marginTop: 10, marginLeft: 20 }}
            onPress={() => {
              this.props.navigation.navigate("orgHome");
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 40,
            color: "white",
            marginTop: 5,
            fontStyle: "italic"
          }}
        >
          DogDoq
        </Text>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name={"dog"}
            size={30}
            //color={"#23A41A"}
            style={{ marginTop: 10, marginRight: 20 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topview: {
    height: 110,
    width: width,
    //backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
