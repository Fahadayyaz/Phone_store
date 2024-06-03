import React from "react";
import { View, ImageBackground, StyleSheet, StatusBar } from "react-native";

const Background = ({ children }) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/ph.jpg")}
        style={{ height: "100%" }}
      >
        <View>{children}</View>
      </ImageBackground>
      <StatusBar />
    </View>
  );
};

export default Background;
