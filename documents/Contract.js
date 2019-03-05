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
  Dimensions
} from "react-native";
import md5 from "react-native-md5";
import IconTextInput from "../components/IconTextInput";
const { width, height } = Dimensions.get("window");
export default class Contract extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view}>
          <Text style={styles.title}>애완동물 매매 계약서</Text>

          <View style={[styles.medical, { borderBottomWidth: 0 }]}>
            <View style={styles.medicalDetail}>
              <Text style={styles.font}>동물 ID</Text>
            </View>
            <View style={styles.medicalDetail2}>
              <Text>{this.props.data0}</Text>
            </View>
          </View>
          <View style={styles.medical}>
            <View style={styles.medicalDetail}>
              <Text style={styles.font}>매매 금액</Text>
            </View>
            <View style={styles.medicalDetail2}>
              <Text>{this.props.data1}</Text>
            </View>
          </View>
          <View style={styles.medical}>
            <View style={styles.medicalDetail}>
              <Text style={styles.font}>인도일</Text>
            </View>
            <View style={styles.medicalDetail2}>
              <Text>{this.props.data2}</Text>
            </View>
          </View>
          <View style={styles.dogInfo}>
            <View style={styles.infotitle}>
              <Text style={styles.font}>동물 정보</Text>
            </View>

            <View style={{ flex: 4 }}>
              <View style={styles.infoinput1}>
                <View style={styles.info2}>
                  <Text style={styles.font}>품종</Text>
                </View>
                <View style={styles.infinput2}>
                  <Text>{this.props.data3}</Text>
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
                  <Text>{this.props.data4}</Text>
                </View>
              </View>

              <View style={styles.infoinput1}>
                <View style={styles.info2}>
                  <Text style={styles.font}>출생</Text>
                </View>
                <View style={styles.infinput2}>
                  <Text>{this.props.data5}</Text>
                </View>

                <View
                  style={[
                    styles.info2,
                    { borderLeftColor: "black", borderLeftWidth: 0.5 }
                  ]}
                >
                  <Text style={styles.font}>모색</Text>
                </View>
                <View style={styles.infinput2}>
                  <Text>{this.props.data6}</Text>
                </View>
              </View>
              <View style={styles.infoinput1}>
                <View style={styles.info2}>
                  <Text style={styles.font}>부</Text>
                </View>
                <View style={styles.infinput2}>
                  <Text>{this.props.data7}</Text>
                </View>

                <View
                  style={[
                    styles.info2,
                    { borderLeftColor: "black", borderLeftWidth: 0.5 }
                  ]}
                >
                  <Text style={styles.font}>모</Text>
                </View>
                <View style={styles.infinput2}>
                  <Text>{this.props.data8}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.medical}>
            <View style={styles.medicalDetail}>
              <Text style={styles.font}>접종/</Text>
              <Text style={styles.font}>건강상태</Text>
            </View>
            <View style={styles.medicalDetail2}>
              <Text>{this.props.data9}</Text>
            </View>
          </View>

          <View style={styles.userInfo}>
            <View style={styles.usertitle}>
              <Text style={styles.font}>매도인</Text>
              <Text style={styles.font}>(분양인)</Text>
            </View>
            <View style={{ flex: 4 }}>
              <View style={styles.userinput1}>
                <View style={styles.user2}>
                  <Text style={styles.font}>영업</Text>
                  <Text style={styles.font}>등록번호</Text>
                </View>
                <View style={styles.userinput2}>
                  <Text>{this.props.data10}</Text>
                </View>
              </View>
              <View style={styles.userinput1}>
                <View style={styles.user2}>
                  <Text style={styles.font}>농장ID</Text>
                </View>
                <View style={styles.userinput2}>
                  <Text>{this.props.data11}</Text>
                </View>
              </View>
              <View style={[styles.userinput1, { borderBottomWidth: 0 }]}>
                <View style={styles.user2}>
                  <Text style={styles.font}>주소</Text>
                </View>
                <View style={styles.userinput2}>
                  <Text>{this.props.data12}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.userInfo, { borderTopWidth: 0 }]}>
            <View style={styles.usertitle}>
              <Text style={styles.font}>매수인</Text>
              <Text style={styles.font}>(입양인)</Text>
            </View>
            <View style={{ flex: 4 }}>
              <View style={styles.userinput1}>
                <View style={styles.user2}>
                  <Text style={styles.font}>영업</Text>
                  <Text style={styles.font}>등록번호</Text>
                </View>
                <View style={styles.userinput2}>
                  <Text>{this.props.data13}</Text>
                </View>
              </View>
              <View style={styles.userinput1}>
                <View style={styles.user2}>
                  <Text style={styles.font}>펫샵ID</Text>
                </View>
                <View style={styles.userinput2}>
                  <Text>{this.props.data14}</Text>
                </View>
              </View>
              <View style={styles.userinput1}>
                <View style={styles.user2}>
                  <Text style={styles.font}>주소</Text>
                </View>
                <View style={styles.userinput2}>
                  <Text>{this.props.data15}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.text}>
            <Text style={{ fontSize: 14 }}>
              해당 계약조항은 '계약메뉴얼'을 참조하십시오.
            </Text>
          </View>
          <View style={styles.date}>
            <Text style={{ fontSize: 15 }}>계약일</Text>
            <Text style={{ fontSize: 20 }}>{this.props.data16}</Text>
          </View>
        </View>
      </View>
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
    flex: 1,
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
    height: 120
  },
  infotitle: {
    justifyContent: "center",
    alignItems: "center",
    height: 119,
    flex: 1,
    borderRightColor: "black",
    borderRightWidth: 0.5
    //backgroundColor:"yellow",
  },
  info2: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 40,
    borderRightColor: "black",
    borderRightWidth: 0.5
  },
  infoinput1: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    flexDirection: "row",
    borderBottomColor: "black",
    borderBottomWidth: 0.5
  },
  infinput2: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1.5,
    paddingLeft: 1
  },
  medical: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: width - 45,
    height: 45,
    borderColor: "black",
    borderWidth: 0.5
    //borderBottomWidth:0,
  },
  medicalDetail: {
    justifyContent: "center",
    alignItems: "center",
    width: 73,
    height: 44,
    borderRightColor: "black",
    borderRightWidth: 0.5
  },
  medicalDetail2: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    height: 59
  },
  userInfo: {
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 0.5,
    width: width - 45,
    height: 135
  },
  usertitle: {
    justifyContent: "center",
    alignItems: "center",
    height: 134,
    flex: 1,
    borderRightColor: "black",
    borderRightWidth: 0.5
    //backgroundColor:"yellow",
  },
  user2: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 45,
    borderRightColor: "black",
    borderRightWidth: 0.5
  },
  userinput1: {
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    flexDirection: "row",
    borderBottomColor: "black",
    borderBottomWidth: 0.5
  },
  userinput2: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1.5,
    paddingLeft: 1
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    width: width - 45,
    //backgroundColor:"yellow",
    height: 40
  },
  date: {
    justifyContent: "center",
    alignItems: "center",
    width: width - 45,
    //backgroundColor:"red",
    height: 80
  }
});
