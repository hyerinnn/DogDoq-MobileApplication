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

import DocumentElement from "../components/DocumentElement";

const { height, width } = Dimensions.get("window"); // 기기 크기에 맞게 width변동

export default class Org1Write extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
      data: [
        {
          key: "a",
          name: "건강관리기록",
          navigation: "invokehealthcare",
        },
        {
          key: "b",
          name: "분양계약서",
          navigation: "invokesales",
        },
        {
          key: "c",
          name: "농장관련문서",
          navigation: "invokehealthcare",
        },
        {
          key: "d",
          name: "000계약서",
          navigation: "invokehealthcare",
        },
        {
          key: "e",
          name: "강아지정보문서",
          navigation: "invokehealthcare",
        },
        {
          key: "f",
          name: "월튼블록체인",
          navigation: "invokehealthcare",
        },
        {
          key: "g",
          name: "문서6",
          navigation: "invokehealthcare",
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
    marginTop:30,
    //backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    width: width
  },

});
