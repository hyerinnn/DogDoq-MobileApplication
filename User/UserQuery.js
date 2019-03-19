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
import { ImagePicker, Permissions } from "expo";
import DocumentElement from "../components/DocumentElement";
const { height, width } = Dimensions.get("window"); // 기기 크기에 맞게 width변동

export default class UserQuery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
      json: {
        dogId: null,
        kind: null,
        email: null,
        function: "queryAllHealthcare"
      },
      json2: {
        dogId: null,
        kind: null,
        email: null,
        function: "queryAllDiagnostic"
      },
      json3: {
        dogId: null,
        kind: null,
        email: null,
        function: "queryBloodline"
      },
      json4: {
        dogId: null,
        kind: null,
        email: null,
        function: "querySales"
      },
      Data: [],
      data: [
        {
          key: "a",
          name: "건강관리기록",
          navigation: "queryhealthcareuser",
          icon: "alpha-a"
        },
        {
          key: "b",
          name: "예방접종기록",
          navigation: "querymedicaluser",
          icon: "alpha-b"
        },
        {
          key: "c",
          name: "출생기록서",
          navigation: "querybirthuser",
          icon: "alpha-c"
        },
        {
          key: "d",
          name: "분양계약서",
          navigation: "querysalesuser",
          icon: "alpha-d"
        },
        {
          key: "e",
          name: "문서3",
          navigation: "queryhealthcare",
          icon: "alpha-e"
        },
        {
          key: "f",
          name: "문서4",
          navigation: "queryhealthcare",
          icon: "alpha-f"
        },
        {
          key: "g",
          name: "문서5",
          navigation: "queryhealthcare",
          icon: "alpha-g"
        }
      ]
    };
  }
  queryHealth() {
    return fetch(
      "http://192.168.43.185:3001/api/" + this.state.json.kind + "/query",
      {
        method: "POST",
        body: JSON.stringify({
          ...this.state.json
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response._bodyInit)
      .then(_bodyInit => JSON.parse(_bodyInit).result)
      .then(result => JSON.parse(result));
  }
  queryMedical() {
    return fetch(
      "http://192.168.43.185:3001/api/" + this.state.json.kind + "/query",
      {
        method: "POST",
        body: JSON.stringify({
          ...this.state.json2
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response._bodyInit)
      .then(_bodyInit => JSON.parse(_bodyInit).result)
      .then(result => JSON.parse(result));
  }
  queryBirth() {
    return fetch(
      "http://192.168.43.185:3001/api/" + this.state.json.kind + "/query",
      {
        method: "POST",
        body: JSON.stringify({
          ...this.state.json3
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response._bodyInit)
      .then(_bodyInit => JSON.parse(_bodyInit).result)
      .then(result => JSON.parse(result).utf8);
  }
  querySales() {
    return fetch(
      "http://192.168.43.185:3001/api/" + this.state.json.kind + "/query",
      {
        method: "POST",
        body: JSON.stringify({
          ...this.state.json4
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response._bodyInit)
      .then(_bodyInit => JSON.parse(_bodyInit).result)
      .then(result => JSON.parse(result).utf8);
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        backgroundColor: "#f1cf81"
      },
      headerLeft: <View />,
      headerTitle: (
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>
            DOGDOQ
          </Text>
        </TouchableOpacity>
      ),
      headerRight: <View />
    };
  };
  render() {
    const org = this.props.navigation.getParam("org");
    const email = this.props.navigation.getParam("email");
    const dogId = this.props.navigation.getParam("dogId");
    if (this.state.active == true) {
      setTimeout(() => {
        this.setState({
          json: {
            ...this.state.json,
            kind: org,
            email: email,
            dogId: dogId
          },
          json2: {
            ...this.state.json2,
            kind: org,
            email: email,
            dogId: dogId
          },
          json3: {
            ...this.state.json3,
            kind: org,
            email: email,
            dogId: dogId
          },
          json4: {
            ...this.state.json4,
            kind: org,
            email: email,
            dogId: dogId
          },
          active: false
        });
      }, 100);
    }

    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.flatcontainer}
          data={this.state.data}
          renderItem={({ item, index }) => (
            <DocumentElement
              name={item.name}
              fontSize={20}
              IconName={item.icon}
              onPress={() => {
                if (item.key == "a") {
                  this.queryHealth()
                    .then(result => {
                      this.setState({
                        Data: result
                      });
                    })
                    .then(() =>
                      this.props.navigation.navigate(item.navigation, {
                        org: org,
                        email: email,
                        dogId: dogId,
                        data: this.state.Data
                      })
                    );
                } else if (item.key == "b") {
                  this.queryMedical()
                    .then(result => {
                      this.setState({
                        Data: result
                      });
                    })
                    .then(() =>
                      this.props.navigation.navigate(item.navigation, {
                        org: org,
                        email: email,
                        dogId: dogId,
                        data: this.state.Data
                      })
                    );
                } else if (item.key == "c") {
                  this.queryBirth()
                    .then(result => {
                      this.setState({
                        Data: result
                      });
                    })
                    .then(() =>
                      this.props.navigation.navigate(item.navigation, {
                        org: org,
                        email: email,
                        dogId: dogId,
                        data: this.state.Data
                      })
                    );
                } else if (item.key == "d") {
                  this.querySales()
                    .then(result => {
                      this.setState({
                        Data: result
                      });
                    })
                    .then(() =>
                      this.props.navigation.navigate(item.navigation, {
                        org: org,
                        email: email,
                        dogId: dogId,
                        data: this.state.Data
                      })
                    );
                } else {
                  alert("준비중");
                  this.props.navigation.navigate("userdog");
                }
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
    //backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    width: width
  }
});
