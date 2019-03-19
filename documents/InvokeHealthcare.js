import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  Text,
  Dimensions,
  Alert
} from "react-native";
import md5 from "react-native-md5";
import IconTextInput from "../components/IconTextInput";
import moment from "moment";
const { height, width } = Dimensions.get("window");

export default class Healthcare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { key: "1", name: "강아지 ID", icon: "alpha-a" },
        { key: "2", name: "품종", icon: "alpha-b" },
        { key: "3", name: "나이", icon: "alpha-c" },
        { key: "4", name: "성별", icon: "alpha-d" },
        { key: "5", name: "접종내역", icon: "alpha-e" },
        { key: "6", name: "특이사항", icon: "alpha-f" }
      ],
      json: {
        dogId: null,
        kind: null,
        email: null,
        date: moment().format("YYYY년 MM월 DD일 a h:mm"),
        encodingvalue: null,
        hashvalue: null,
        function: "createHealthcare"
      },
      str: {},
      Deploy: false
    };
  }

  toUTF8Array(str) {
    var utf8 = [];
    for (var i = 0; i < str.length; i++) {
      var charcode = str.charCodeAt(i);
      if (charcode < 0x80) utf8.push(charcode);
      else if (charcode < 0x800) {
        utf8.push(0xc0 | (charcode >> 6), 0x80 | (charcode & 0x3f));
      } else if (charcode < 0xd800 || charcode >= 0xe000) {
        utf8.push(
          0xe0 | (charcode >> 12),
          0x80 | ((charcode >> 6) & 0x3f),
          0x80 | (charcode & 0x3f)
        );
      }
      // surrogate pair
      else {
        i++;
        charcode = ((charcode & 0x3ff) << 10) | (str.charCodeAt(i) & 0x3ff);
        utf8.push(
          0xf0 | (charcode >> 18),
          0x80 | ((charcode >> 12) & 0x3f),
          0x80 | ((charcode >> 6) & 0x3f),
          0x80 | (charcode & 0x3f)
        );
      }
    }
    return utf8;
  }
  confirmdata() {
    Alert.alert(
      "데이터 결합",
      "입력하신 정보가 맞습니까?",
      [
        { text: "예", onPress: () => this.sumdata() },
        {
          text: "아니오",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        }
      ],
      { cancelable: false }
    );
  }
  sumdata() {
    var string =
      this.state.str[0] +
      "/" +
      this.state.str[1] +
      "/" +
      this.state.str[2] +
      "/" +
      this.state.str[3] +
      "/" +
      this.state.str[4] +
      "/" +
      this.state.str[5] +
      "/" +
      this.state.json.email +
      "/" +
      moment().format("YYYY년 MM월 DD일 a h:mm");
    const encoding = this.toUTF8Array(string);
    const md5value = md5.str_md5(string);
    this.setState({
      Deploy: true,
      json: {
        ...this.state.json,
        encodingvalue: encoding,
        hashvalue: md5value
      }
    });
  }
  invokeHealthcare() {
    return fetch(
      "http://192.168.43.185:3001/api/" + this.state.json.kind + "/invoke",
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
      .then(_bodyInit => JSON.parse(_bodyInit).code);
  }
  static navigationOptions = {
    title: "DOGDOQ",
    headerTitleStyle: { flex: 1, textAlign: "center" },
    headerStyle: {
      backgroundColor: "#f1cf81"
    },
    headerTintColor: "#fff"
  };
  render() {
    const kind = this.props.navigation.getParam("org");
    const email = this.props.navigation.getParam("email");

    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={styles.documents}>
          <View style={styles.title}>
            <Text style={{ fontSize: 30 }}>건강관리문서 작성</Text>
          </View>

          <FlatList
            contentContainerStyle={styles.container}
            data={this.state.data}
            renderItem={({ item, index, data }) => (
              <View style={styles.document}>
                <View style={styles.question}>
                  <Text>{item.name} : </Text>
                </View>
                <IconTextInput
                  placeholder={item.name}
                  IconName={item.icon}
                  width="70%"
                  borderLeftWidth={0}
                  borderRightWidth={0}
                  borderTopWidth={0}
                  backgroundColor="white"
                  key={index}
                  onChange={text => {
                    this.setState({
                      str: {
                        ...this.state.str,
                        [index]: text
                      }
                    });
                    if (index == 0) {
                      this.setState({
                        json: {
                          ...this.state.json,
                          dogId: text,
                          kind: kind,
                          email: email
                        }
                      });
                    }
                    console.log(this.state.str);
                  }}
                />
              </View>
            )}
          />
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.buttonConfirm}
            value="확인"
            onPress={() => {
              // this.props.navigation.navigate("orgHome");
              this.confirmdata();
            }}
          >
            <Text style={{ fontSize: 20, color: "white" }}>확인</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonDeploy}
            value="deploy"
            disabled={!this.state.Deploy}
            onPress={() => {
              this.invokeHealthcare().then(result => {
                if (result == 200) {
                  alert("배포에 성공하였습니다!");
                  this.props.navigation.navigate("orgHome");
                } else {
                  alert("배포에 실패하셨습니다!");
                }
              });
            }}
          >
            <Text style={{ fontSize: 20, color: "white" }}>배포</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  documents: {
    flex: 2,
    width: "95%",
    borderColor: "gray",
    borderWidth: 1,
    paddingTop: 15,
    marginTop: 15
  },
  document: {
    flexDirection: "row",
    alignItems: "center"
  },
  question: {
    width: "27%",
    alignItems: "center"
  },
  buttonView: {
    flex: 1,
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
  buttonConfirm: {
    borderRadius: 10,
    backgroundColor: "#a38686",
    borderColor: "#BDBDBD",
    borderWidth: 1,
    width: width * 0.26,
    height: height * 0.13,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  buttonDeploy: {
    borderRadius: 10,
    backgroundColor: "#f1cf81",
    borderColor: "#BDBDBD",
    borderWidth: 1,
    width: width * 0.26,
    height: height * 0.13,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  }
});
