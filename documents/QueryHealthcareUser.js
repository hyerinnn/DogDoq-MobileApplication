import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Dimensions,
} from "react-native";

import DocumentElement from "../components/DocumentElement";
const { height, width } = Dimensions.get("window"); 
var data = new Array();


export default class QueryHealthcareUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
      packet: {},
      data: [],
      encodingvalue: null,
      hashvalue: null,
      active: true
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

  async componentWillMount() {
    data = this.props.navigation.getParam("data");
  }
  render() {
    if (this.state.active == true) {
      setTimeout(() => {
        this.setState({
          ...this.state,
          data: data,
          active: false
        });
      }, 100);
    }
    return (
      <View style={styles.container}>
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
  },

});