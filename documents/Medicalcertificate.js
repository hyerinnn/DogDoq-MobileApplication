import React from "react";
import { StyleSheet, View, Text, Dimensions, ScrollView } from "react-native";
const { width, height } = Dimensions.get("window");
var str = new Array();
export default class Medicalcertificate extends React.Component {
  constructor(props) {
    super(props);
  }
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
            <Text style={styles.title}>예방접종 증명서</Text>
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

                <View style={styles.infoinput1}>
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
                <View style={styles.infoinput1}>
                  <View style={styles.info2}>
                    <Text style={styles.font}>몸무게</Text>
                  </View>
                  <View style={styles.infinput2}>
                    <Text>{str[4]}</Text>
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
                    <Text>{str[5]}</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.medical}>
              <View style={styles.medicalDetail}>
                <Text style={styles.font}>접종약</Text>
                <Text style={styles.font}>종류</Text>
              </View>
              <View style={styles.medicalDetail2}>
                <Text>{str[6]}</Text>
              </View>
              <View style={styles.medicalDetail}>
                <Text style={styles.font}>접종량</Text>
              </View>
              <View style={[styles.medicalDetail2, { borderRightWidth: 0 }]}>
                <Text>{str[7]}</Text>
              </View>
            </View>
            <View style={styles.medical}>
              <View style={styles.medicalDetail}>
                <Text style={styles.font}>실시방법</Text>
              </View>
              <View style={styles.medicalDetail2}>
                <Text>{str[8]}</Text>
              </View>
              <View style={styles.medicalDetail}>
                <Text style={styles.font}>면역유효</Text>
                <Text style={styles.font}>기간</Text>
              </View>
              <View style={[styles.medicalDetail2, { borderRightWidth: 0 }]}>
                <Text>{str[9]}</Text>
              </View>
            </View>
            <View style={styles.doghealth}>
              <View style={{ alignItems: "flex-start" }}>
                <Text style={[styles.font, { padding: 6 }]}>소견 : </Text>
              </View>
              <View style={styles.healthInput}>
                <Text style={{ paddingLeft: 20 }}>{str[10]}</Text>
              </View>
            </View>
            <View style={styles.hospital}>
              <View style={styles.hospital2}>
                <Text style={styles.font}>작성</Text>
                <Text style={styles.font}>병원계정</Text>
              </View>
              <View style={[styles.medicalDetail2, { borderRightWidth: 0 }]}>
                <Text>{str[11]}</Text>
              </View>
            </View>
            <View style={[styles.hospital, { borderTopWidth: 0 }]}>
              <View style={styles.hospital2}>
                <Text style={styles.font}>소재지</Text>
              </View>
              <View style={[styles.medicalDetail2, { borderRightWidth: 0 }]}>
                <Text>{str[12]}</Text>
              </View>
            </View>
            <View style={styles.hospital}>
              <View style={styles.hospital2}>
                <Text style={styles.font}>수의사 성명</Text>
              </View>
              <View style={[styles.medicalDetail2, { borderRightWidth: 0 }]}>
                <Text>{str[13]}</Text>
              </View>
            </View>
            <View style={styles.dogFeature}>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={{ padding: 6 }}>
                  수의사법 제12조 및 동법시행규칙 제10조의 규정에 의하여
                </Text>
                <Text>위와 같이 증명합니다.</Text>
              </View>
            </View>
            <View style={styles.date}>
              <Text style={{ fontSize: 15 }}>{str[14]}</Text>
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
    height: 200
  },
  infotitle: {
    justifyContent: "center",
    alignItems: "center",
    height: 199,
    flex: 1,
    borderRightColor: "black",
    borderRightWidth: 0.5
    //backgroundColor:"yellow",
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
    height: 60,
    borderColor: "black",
    borderWidth: 0.5
    //borderBottomWidth:0,
  },
  medicalDetail: {
    justifyContent: "center",
    alignItems: "center",
    width: 73,
    height: 59,
    borderRightColor: "black",
    borderRightWidth: 0.5
  },
  medicalDetail2: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    height: 59,
    borderRightColor: "black",
    borderRightWidth: 0.5
  },
  doghealth: {
    width: width - 45,
    height: 100,
    borderColor: "black",
    borderWidth: 0.5
  },
  healthInput: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: width - 60,
    height: 50
    //backgroundColor:"yellow"
  },
  dogFeature: {
    width: width - 45,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
    //backgroundColor:"yellow"
  },
  hospital: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: width - 45,
    height: 45,
    borderColor: "black",
    borderWidth: 0.5
  },
  hospital2: {
    justifyContent: "center",
    alignItems: "center",
    width: 73,
    height: 44,
    borderRightColor: "black",
    borderRightWidth: 0.5
  },
  date: {
    justifyContent: "flex-end",
    alignItems: "center",
    width: width - 45,
    //backgroundColor:"red",
    height: 90
  }
});
