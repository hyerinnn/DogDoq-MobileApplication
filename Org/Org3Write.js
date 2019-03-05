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
  Foundation,
  MaterialCommunityIcons,
  Entypo,
  AntDesign
} from "@expo/vector-icons";

import uuidv1 from "uuid/v1";
import moment from "moment";
import DocumentElement from "../components/DocumentElement";
import { ImagePicker, Permissions } from "expo";
const { height, width } = Dimensions.get("window"); // 기기 크기에 맞게 width변동

export default class Org3Write extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
      data: [
        {
          key: "a",
          name: "예방접종 기록서",
          navigation: "invokemedical",
          icon: "alpha-a"
        },
        {
          key: "b",
          name: "진단영수증",
          navigation: "invokemedical",
          icon: "alpha-b"
        },
        {
          key: "c",
          name: "펫샵 계약업체",
          navigation: "invokemedical",
          icon: "alpha-c"
        },
        {
          key: "d",
          name: "농장 계약업체",
          navigation: "invokemedical",
          icon: "alpha-d"
        },
        {
          key: "e",
          name: "고객정보",
          navigation: "invokemedical",
          icon: "alpha-e"
        },
        {
          key: "f",
          name: "의료기기관련",
          navigation: "invokemedical",
          icon: "alpha-f"
        },
        {
          key: "g",
          name: "문서6",
          navigation: "invokemedical",
          icon: "alpha-g"
        }
      ]
    };
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
        >
          <Text style={{ fontSize: 20, color: '#fff', fontWeight: "bold" }} >DOGDOQ</Text>
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
      <View style={styles.container}>
          <FlatList
            contentContainerStyle={styles.flatcontainer}
            data={this.state.data}
            renderItem={({ item, index }) => (
              <DocumentElement
                name={item.name}
                IconName={item.icon}
                fontSize={20}
                onPress={() => {
                  this.props.navigation.navigate(item.navigation, {
                    org: org,
                    email: email
                  });
                }}
                key={index}
              />
            )}
          />
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
  flatcontainer: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    width: width
  },
});