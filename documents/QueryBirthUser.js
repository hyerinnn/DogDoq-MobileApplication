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
    ScrollView,
    Dimensions,
    Image
} from "react-native";
import md5 from "react-native-md5";
import IconTextInput from "../components/IconTextInput";
const { width, height } = Dimensions.get("window");
var str = new Array();
export default class Birth extends React.Component {
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
                        <Text style={styles.title}>출 생 증 명 서</Text>
                    </View>
                    <View style={{ flex: 1 }}>
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
                                        <Text style={styles.font}>출생일</Text>
                                    </View>
                                    <View style={{ flex: 1, paddingLeft: 5 }}>
                                        <Text>{str[1]}</Text>
                                    </View>
                                </View>

                                <View style={styles.infoinput1}>
                                    <View style={styles.info2}>
                                        <Text style={styles.font}>품종</Text>
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

                        <View style={styles.dogInfo2}>
                            <View style={styles.infotitle2}>
                                <Text style={styles.font}>부모정보</Text>
                            </View>

                            <View style={{ flex: 4 }}>
                                <View style={styles.infoinput1}>
                                    <View style={styles.info1}>
                                        <Text style={styles.font}>모견</Text>
                                    </View>
                                    <View style={{ flex: 1, paddingLeft: 5 }}>
                                        <Text>{ str[4]}</Text>
                                    </View>
                                </View>

                                <View style={[styles.info, { borderBottomWidth: 0 }]}>
                                    <View style={styles.info1}>
                                        <Text style={styles.font}>부견</Text>
                                    </View>
                                    <View style={{ flex: 1, paddingLeft: 5 }}>
                                        <Text>{str[5]}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.check}>
                            <Text style={{ fontSize: 20, color: "gray" }}>
                                위와 같이 출생하였음을 증명합니다
              </Text>
                        </View>
                        <View style={styles.check2}>
                            <Text style={[styles.font, { fontSize: 20 }]}>
                                {str[6]}
                            </Text>
                        </View>
                        <View style={styles.dateview}>
                            <View style={styles.date}>
                                <Text style={{ fontSize: 15 }}>{ str[7]}</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Image
                                    source={require("../assets/images/foot.png")}
                                    style={{
                                        resizeMode: "contain",
                                        width: "80%",
                                        height: "80%"
                                    }}
                                />
                            </View>
                        </View>
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
        paddingTop: 20,
        paddingBottom: 20
    },
    view: {
        justifyContent: "flex-start",
        alignItems: "center",
        height: height - 40,
        width: width - 20,
        //backgroundColor:"yellow",
        borderColor: "black",
        borderWidth: 1
    },
    titleview: {
        justifyContent: "center",
        alignItems: "center",
        //backgroundColor:"yellow",
        width: width - 20,
        height: 100,
        marginBottom: 20
    },
    font: {
        fontWeight: "bold"
    },
    title: {
        marginBottom: 10,
        fontSize: 35,
        fontWeight: "bold"
        //backgroundColor:"yellow",
    },
    dogInfo: {
        flexDirection: "row",
        borderColor: "black",
        borderWidth: 0.5,
        width: width - 45,
        height: 180
    },
    dogInfo2: {
        flexDirection: "row",
        borderColor: "black",
        borderWidth: 0.5,
        width: width - 45,
        height: 120
    },
    infotitle: {
        justifyContent: "center",
        alignItems: "center",
        height: 179,
        flex: 1,
        borderRightColor: "black",
        borderRightWidth: 0.5
        //backgroundColor:"yellow",
    },
    infotitle2: {
        justifyContent: "center",
        alignItems: "center",
        height: 119,
        flex: 1,
        borderRightColor: "black",
        borderRightWidth: 0.5
        //backgroundColor:"yellow",
    },
    info: {
        height: 60,
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
        height: 60,
        borderRightColor: "black",
        borderRightWidth: 0.5
        //backgroundColor:"yellow"
    },
    info2: {
        justifyContent: "center",
        alignItems: "center",
        width: 60,
        height: 60,
        borderRightColor: "black",
        borderRightWidth: 0.5
    },
    infoinput1: {
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        flexDirection: "row"
    },
    infinput2: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1.5,
        paddingLeft: 1
    },
    parents: {
        backgroundColor: "red",
        width: width - 45,
        height: 60,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    check: {
        justifyContent: "flex-end",
        alignItems: "center",
        width: width - 45,
        //backgroundColor:"pink",
        flex: 0.7,
        paddingBottom: 25
    },
    check2: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        width: width - 45,
        //backgroundColor:"gray",
        flex: 0.4
    },
    dateview: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: width - 45,
        //backgroundColor:"yellow",
        flex: 0.5,
        paddingBottom: 20
    },
    date: {
        width: 300,
        //backgroundColor:"pink",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 80
    }
});
