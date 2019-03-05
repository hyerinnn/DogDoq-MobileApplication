import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ImagePicker, Permissions } from "expo";

export default class ImageView extends React.Component {
    state = {
        hasCameraPermission: null
    };

    async componentDidMount() {
        // const { status } = await Permissions.askAsync(Permissions.CAMERA);
        // this.setState({ hasCameraPermission: status === "granted" });
        
    }


    render() {
        const { hasCameraPermission } = this.state;

        if (hasCameraPermission === null) {
            return <Text>Requesting for camera permission</Text>;
        }
        if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        }
        return (
            <View style={{ flex: 1 }}>
                {/* <ImagePicker
                    onBarCodeScanned={this.handleBarCodeScanned}
                    style={StyleSheet.absoluteFill}

                /> */}
            </View>
        );
    }

} 