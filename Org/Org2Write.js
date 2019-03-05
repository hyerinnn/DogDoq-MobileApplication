import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image
} from "react-native";

import DocumentElement from "../components/DocumentElement";
const { height, width } = Dimensions.get("window");

export default class Org2Write extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
      data: [
        {
          key: "a",
          name: "출생기록서",
          navigation: "invokebirth",
          icon: "alpha-a"

        },
        {
          key: "b",
          name: "거래계약서",
          navigation: "invokecontract",
          icon: "alpha-b"
        },
        {
          key: "c",
          name: "펫샵관련문서",
          navigation: "invokecontract",
          icon: "alpha-c"
        },
        {
          key: "d",
          name: "월튼블록체인",
          navigation: "invokecontract",
          icon: "alpha-d"
        },
        {
          key: "e",
          name: "000계약서",
          navigation: "invokecontract",
          icon: "alpha-e"
        },
        {
          key: "f",
          name: "강아지정보",
          navigation: "invokecontract",
          icon: "alpha-f"
        },
        {
          key: "g",
          name: "외주업체",
          navigation: "invokecontract",
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
