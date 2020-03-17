import Expo from "expo";
import * as ExpoPixi from "expo-pixi";
import React, { useState } from "react";
import {
  ImageBackground,
  Button,
  Platform,
  AppState,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

const isAndroid = Platform.OS === "android";

export default () => {
  const [key, setKey] = useState(0);

  return (
    <>
      <ImageBackground
        source={{ uri: "https://source.unsplash.com/random?cars" }}
        style={{ width: "100%", height: "100%" }}
        key={key}
      >
        <ExpoPixi.Sketch
          ref={ref => (this.sketch = ref)}
          style={{ width: "100%", height: "100%" }}
          strokeColor={0xff0000ff}
          strokeWidth={10}
          strokeAlpha={1}
        />
        <TouchableOpacity
          style={{
            zIndex: 100,
            position: "absolute",
            top: 100,
            left: "10%",
            width: "80%",
            backgroundColor: "#EDEDED",
            height: 80,
            opacity: 0.5,
            borderRadius: 20,
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={() => {
            setKey(previous => previous + 1);
          }}
        >
          <Text style={{ fontWeight: "800", fontSize: 30 }}>Refresh Image</Text>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
};
