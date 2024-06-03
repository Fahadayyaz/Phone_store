import React from "react";
import { View, Text } from "react-native";
import Background from "./Background";
import Btn from "./Btn";
import { darkGreen, green } from "./Constants";

const Home = (props) => {
  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
        <Text style={{ color: "white", fontSize: 24 }}>
          Your phone's next chapter starts with. . .
        </Text>
        <Text style={{ color: "white", fontSize: 64, marginBottom: 40 }}>
          MobiGO
        </Text>
        <Btn
          bgColor={green}
          textColor="white"
          btnLabel="Login"
          Press={() => props.navigation.navigate("Login")}
        />
        <Btn
          bgColor="white"
          textColor={darkGreen}
          btnLabel="Sign Up"
          Press={() => props.navigation.navigate("Signup")}
        />
      </View>
    </Background>
  );
};

export default Home;
