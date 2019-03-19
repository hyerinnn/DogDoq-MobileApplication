import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
  Text,
  Button,
  ScrollView,
  Dimensions
} from "react-native";
import Sales from "./Sales";
import { AntDesign } from "@expo/vector-icons";
import ImageTextInput2 from "../components/ImageTextInput2";
const { height, width } = Dimensions.get("window");

export default class QuerySales extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      json: {
        dogId: null,
        kind: null,
        email: null,
        function: "querySales"
      },
      str: {},
      encodingvalue: null,
      hashvalue: null
    };
  }
  fromUTF8Array(data) {
    // array of bytes
    var str = "",
      i;

    for (i = 0; i < data.length; i++) {
      var value = data[i];

      if (value < 0x80) {
        str += String.fromCharCode(value);
      } else if (value > 0xbf && value < 0xe0) {
        str += String.fromCharCode(
          ((value & 0x1f) << 6) | (data[i + 1] & 0x3f)
        );
        i += 1;
      } else if (value > 0xdf && value < 0xf0) {
        str += String.fromCharCode(
          ((value & 0x0f) << 12) |
            ((data[i + 1] & 0x3f) << 6) |
            (data[i + 2] & 0x3f)
        );
        i += 2;
      } else {
        // surrogate pair
        var charCode =
          (((value & 0x07) << 18) |
            ((data[i + 1] & 0x3f) << 12) |
            ((data[i + 2] & 0x3f) << 6) |
            (data[i + 3] & 0x3f)) -
          0x010000;

        str += String.fromCharCode(
          (charCode >> 10) | 0xd800,
          (charCode & 0x03ff) | 0xdc00
        );
        i += 3;
      }
    }

    return str;
  }
  splitData(encodingvalue) {
    // var str = this.fromUTF8Array(encodingvalue);
    var str = encodingvalue;
    var data = str.split("/");
    for (var i = 0; i < data.length; i++) {
      this.setState({
        str: {
          ...this.state.str,
          [i]: data[i]
        }
      });
      console.log(this.state.str[i]);
    }
  }
  queryContract() {
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
    const kind = this.props.navigation.getParam("org");
    const email = this.props.navigation.getParam("email");

    return (
      <View style={styles.container}>
        <View style={styles.inputView}>
          <ImageTextInput2
            placeholder={"강아지 id를 입력해주세요"}
            onChange={text => {
              this.setState({
                json: {
                  ...this.state.json,
                  dogId: text,
                  kind: kind,
                  email: email
                }
              });
            }}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              this.queryContract().then(result => {
                this.setState({
                  hashvalue: result.hashvalue,
                  encodingvalue: result.utf8
                });

                this.splitData(result.utf8);
              })
            }
          >
            <Text style={{ color: "white" }}>검색</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              {
                mariginLeft: 2,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff"
              }
            ]}
          >
            <AntDesign name={"printer"} size={30} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <Sales
            data0={this.state.str[0]}
            data1={this.state.str[1]}
            data2={this.state.str[2]}
            data3={this.state.str[3]}
            data4={this.state.str[4]}
            data5={this.state.str[5]}
            data6={this.state.str[6]}
            data7={this.state.str[7]}
            data8={this.state.str[8]}
            data9={this.state.str[9]}
            data10={this.state.str[10]}
            data11={this.state.str[11]}
            data12={this.state.str[12]}
            data13={this.state.str[13]}
            data14={this.state.str[14]}
          />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    borderRadius: 10,
    backgroundColor: "#a38686",
    borderColor: "#BDBDBD",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "90%",
    width: "13%",
    marginTop: 6,
    marginRight: 4
  },
  inputView: {
    height: height * 0.075,
    flexDirection: "row",
    justifyContent: "center"
  }
});
