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

import uuidv1 from "uuid/v1";
import moment from "moment";
import { ImagePicker, Permissions } from "expo";
import DocumentElement from "../components/DocumentElement";
const { height, width } = Dimensions.get("window"); // 기기 크기에 맞게 width변동

export default class Org3Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
      data: [
        {
          key: "a",
          name: "예방접종기록",
          navigation: "querymedical",
          icon: "alpha-a"
        },
        {
          key: "b",
          name: "건강관리기록",
          navigation: "queryhealthcare",
          icon: "alpha-b"
        },
        {
          key: "c",
          name: "문서2",
          navigation: "querymedical",
          icon: "alpha-c"
        },
        {
          key: "d",
          name: "문서3",
          navigation: "querymedical",
          icon: "alpha-d"
        },
        {
          key: "e",
          name: "문서4",
          navigation: "querymedical",
          icon: "alpha-e"
        },
        {
          key: "f",
          name: "문서5",
          navigation: "querymedical",
          icon: "alpha-f"
        },
        {
          key: "g",
          name: "문서6",
          navigation: "querymedical",
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