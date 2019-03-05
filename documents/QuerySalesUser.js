import React from "react";
import {
    StyleSheet,
    TouchableOpacity,
    View,
    ScrollView,
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
var str = new Array();
export default class Contract extends React.Component {
    
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
        return (
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.view}>
                    <View style={styles.titleview}>
                        <Text style={styles.title}>분양 계약서</Text>
                    </View>

                    <View style={[styles.medical, { borderBottomWidth: 0 }]}>
                        <View style={styles.medicalDetail}>
                            <Text style={styles.font}>동물 ID</Text>
                        </View>
                        <View style={styles.medicalDetail2}>
                            <Text>{str[0]}</Text>
                        </View>
                    </View>
                    <View style={styles.medical}>
                        <View style={styles.medicalDetail}>
                            <Text style={styles.font}>매매 금액</Text>
                        </View>
                        <View style={styles.medicalDetail2}>
                            <Text>{str[1]}</Text>
                        </View>
                    </View>
                    <View style={styles.medical}>
                        <View style={styles.medicalDetail}>
                            <Text style={styles.font}>인도일</Text>
                        </View>
                        <View style={styles.medicalDetail2}>
                            <Text>{str[2]}</Text>
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
                                    <Text>{str[3]}</Text>
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
                                    <Text>{str[4]}</Text>
                                </View>
                            </View>

                            <View style={styles.infoinput1}>
                                <View style={styles.info2}>
                                    <Text style={styles.font}>출생</Text>
                                </View>
                                <View style={styles.infinput2}>
                                    <Text>{str[5]}</Text>
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
                                    <Text>{str[6]}</Text>
                                </View>
                            </View>
                            <View style={styles.infoinput1}>
                                <View style={styles.info2}>
                                    <Text style={styles.font}>부</Text>
                                </View>
                                <View style={styles.infinput2}>
                                    <Text>{str[7]}</Text>
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
                                    <Text>{str[8]}</Text>
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
                            <Text>{str[9]}</Text>
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
                                    <Text>{str[10]}</Text>
                                </View>
                            </View>
                            <View style={styles.userinput1}>
                                <View style={styles.user2}>
                                    <Text style={styles.font}>판매자</Text>
                                    <Text style={styles.font}>ID</Text>
                                </View>
                                <View style={styles.userinput2}>
                                    <Text>{str[11]}</Text>
                                </View>
                            </View>
                            <View style={[styles.userinput1, { borderBottomWidth: 0 }]}>
                                <View style={styles.user2}>
                                    <Text style={styles.font}>주소</Text>
                                </View>
                                <View style={styles.userinput2}>
                                    <Text>{str[12]}</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.userInfo2, { borderTopWidth: 0 }]}>
                        <View style={styles.usertitle2}>
                            <Text style={styles.font}>매수인</Text>
                            <Text style={styles.font}>(입양인)</Text>
                        </View>
                        <View style={{ flex: 4 }}>
                            <View style={styles.userinput1}>
                                <View style={styles.user2}>
                                    <Text style={styles.font}>사용자</Text>
                                    <Text style={styles.font}>ID</Text>
                                </View>
                                <View style={styles.userinput2}>
                                    <Text>{str[13]}</Text>
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
                        <Text style={{ fontSize: 20 }}>{str[14]}</Text>
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
        alignItems: "center"
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
    titleview: {
        justifyContent: "center",
        alignItems: "center",
        //backgroundColor:"yellow",
        width: width - 20,
        height: 90,
        marginBottom: 20
    },
    title: {
        fontSize: 35,
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
        height: 150
    },
    userInfo2: {
        flexDirection: "row",
        borderColor: "black",
        borderWidth: 0.5,
        width: width - 45,
        height: 50
    },
    usertitle: {
        justifyContent: "center",
        alignItems: "center",
        height: 149,
        flex: 1,
        borderRightColor: "black",
        borderRightWidth: 0.5
        //backgroundColor:"yellow",
    },
    usertitle2: {
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        flex: 1,
        borderRightColor: "black",
        borderRightWidth: 0.5
        //backgroundColor:"yellow",
    },
    user2: {
        justifyContent: "center",
        alignItems: "center",
        width: 60,
        height: 50,
        borderRightColor: "black",
        borderRightWidth: 0.5
    },
    userinput1: {
        justifyContent: "center",
        alignItems: "center",
        height: 50,
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
        height: 50
    },
    date: {
        justifyContent: "center",
        alignItems: "center",
        width: width - 45,
        //backgroundColor:"red",
        height: 80
    }
});
