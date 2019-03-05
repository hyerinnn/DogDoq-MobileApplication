import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
  Text,
  Button,
  Alert,
  Dimensions,
  ScrollView
} from "react-native";
import md5 from "react-native-md5";
import IconTextInput from "../components/IconTextInput";
const { width, height } = Dimensions.get("window");
var str = new Array();
export default class Healthcare extends React.Component {
  splitData(str, encodingvalue) {
    var string = encodingvalue;
    var data = string.split("/");
    for (var i = 0; i < data.length; i++) {
      str[i] = data[i];
      console.log(str[i]);
    }
  }
  componentWillMount() {
    const data = this.props.navigation.getParam("data");
    this.splitData(str, data);
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.view}>
            <Text style={styles.title}>건강관리문서</Text>
            <View style={styles.dogInfo}>
              <View style={styles.infotitle}>
                <Text style={styles.font}>동물 정보</Text>
              </View>

              <View style={{ flex: 4 }}>
                <View style={styles.infoinput1}>
                  <View style={styles.info1}>
                    <Text style={styles.font}>ID</Text>
                  </View>
                  <View style={{ flex: 1, paddingLeft: 5 }}>
                    <Text>{str[0]}</Text>
                  </View>
                </View>

                <View style={styles.info}>
                  <View style={styles.info1}>
                    <Text style={styles.font}>품종</Text>
                  </View>
                  <View style={{ flex: 1, paddingLeft: 5 }}>
                    <Text>{str[1]}</Text>
                  </View>
                </View>

                <View style={styles.infoinput1}>
                  <View style={styles.info2}>
                    <Text style={styles.font}>나이</Text>
                  </View>
                  <View style={styles.infinput2}>
                    <Text>{str[2]}</Text>
                  </View>

                  <View
                    style={[
                      styles.info2,
                      { borderLeftColor: "black", borderLeftWidth: 0.5 }
                    ]}
                  >
                    <Text style={styles.font}>성별</Text>
                  </View>
                  <View style={styles.infinput2}>
                    <Text>{str[3]}</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.doghealth}>
              <View style={{ alignItems: "flex-start" }}>
                <Text style={[styles.font, { padding: 6 }]}>접종내역 : </Text>
              </View>
              <View style={styles.healthInput}>
                <Text style={{ paddingLeft: 20 }}>{str[4]}</Text>
              </View>
            </View>
            <View style={styles.dogFeature}>
              <View style={{ alignItems: "flex-start" }}>
                <Text style={[styles.font, { padding: 6 }]}>특징 : </Text>
              </View>
              <View style={styles.featureInput}>
                <Text style={{ paddingHorizontal: 20 }}>{str[5]}</Text>
              </View>
            </View>
            <View style={styles.check}>
              <Text style={{ fontSize: 20 }}>작성자 : </Text>
              <Text style={[styles.font, { fontSize: 20 }]}>{str[6]}</Text>
            </View>
            <View style={styles.date}>
              <Text style={{ fontSize: 15 }}>{str[7]}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 30,
    marginTop: 20
  },
  view: {
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 30,
    height: "100%",
    width: width - 20,
    //backgroundColor:"yellow",
    borderColor: "black",
    borderWidth: 1
  },
  font: {
    fontWeight: "bold"
  },
  title: {
    height: 35,
    marginTop: 5,
    marginBottom: 10,
    fontSize: 30,
    fontWeight: "bold"
    //backgroundColor:"yellow",
  },
  dogInfo: {
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 0.5,
    width: width - 45,
    height: 150
  },
  infotitle: {
    justifyContent: "center",
    alignItems: "center",
    height: 149,
    flex: 1,
    borderRightColor: "black",
    borderRightWidth: 0.5
    //backgroundColor:"yellow",
  },
  info: {
    height: 50,
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
    borderTopColor: "black",
    borderTopWidth: 0.5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  info1: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 50,
    borderRightColor: "black",
    borderRightWidth: 0.5
    //backgroundColor:"yellow"
  },
  info2: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 50,
    borderRightColor: "black",
    borderRightWidth: 0.5
  },
  infoinput1: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    flexDirection: "row"
  },
  infinput2: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1.5,
    paddingLeft: 1
  },
  doghealth: {
    width: width - 45,
    height: 120,
    borderColor: "black",
    borderWidth: 0.5
  },
  healthInput: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: width - 60,
    height: 80,
    borderColor: "black",
    borderWidth: 0.2
    //backgroundColor:"yellow"
  },
  dogFeature: {
    width: width - 45,
    height: 120,
    borderTopWidth: 0,
    borderColor: "black",
    borderWidth: 0.5
  },
  featureInput: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: width - 60,
    height: 80,
    borderColor: "black",
    borderWidth: 0.2
    //backgroundColor:"yellow"
  },
  check: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    width: width - 45,
    //backgroundColor:"yellow",
    height: 70
  },
  date: {
    justifyContent: "center",
    alignItems: "center",
    width: width - 45,
    //backgroundColor:"red",
    height: 70
  }
});
