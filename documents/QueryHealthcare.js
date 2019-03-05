import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
  Text,
  Button,
  Dimensions
} from "react-native";
import ImageTextInput2 from "../components/ImageTextInput2";
import { AntDesign } from '@expo/vector-icons';
import DocumentElement from "../components/DocumentElement";
const { height, width } = Dimensions.get("window");
export default class QueryHealthcare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      packet: {},
      data: [],
      json: {
        dogId: null,
        kind: null,
        email: null,
        function: "queryAllHealthcare"
      },
      str: {},
      encodingvalue: null,
      hashvalue: null
    };
  }

  queryHealthcare() {
    return fetch(
      "http://192.168.43.166:3001/api/" + this.state.json.kind + "/query",
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
    const kind = this.props.navigation.getParam("org");
    const email = this.props.navigation.getParam("email");

    return (
      <View style={styles.container}>
        <View style={styles.inputView}>
          <ImageTextInput2
            image={require('../assets/images/icId2x.png')}
            width="95%"
            conatinerStyle={{ marginBottom: 13 }}
            defaultValue={this.state.id}
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
            onPress={() => {
              this.queryHealthcare().then(result => {
                this.setState({
                  data: result
                });
              });
            }}
          >
          <Text style={{ color: "white" }}>검색</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { mariginLeft: 2, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }]}
          >
            <AntDesign name={"printer"} size={30} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: "70%",
            alignItems: "center"
          }}
        >
          <FlatList
            contentContainerStyle={styles.flatcontainer}
            data={this.state.data}
            keyboardShouldPersistTaps="always"
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <DocumentElement
                name={item.Record.date}
                fontSize={20}
                onPress={() => {
                  this.props.navigation.navigate("healthcare", {
                    data: item.Record.utf8
                  });
                }}
                key={index}
              />
            )}
          />
        </View>
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
    marginRight:4,
  },
  inputView: {
    height:height*0.075,
    flexDirection: "row",
    justifyContent: "center",
    //backgroundColor:"yellow"
  },
  flatcontainer: {
    marginTop: 30,
    //backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    width: width
  },
});
