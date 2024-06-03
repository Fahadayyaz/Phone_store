import React from "react";
import { Text, View, TouchableOpacity } from "react-native"; // corrected import
import Background from "./Background";
import { darkGreen } from "./Constants";
import Field from "./Field"; // Assuming Field and Btn components are correctly defined
import Btn from "./Btn";

const Login = (props) => {
  return (
    <Background>
      <View style={{ alignItems: "center", width: 460 }}>
        <Text
          style={{
            color: "white",
            fontSize: 64,
            fontWeight: "bold",
            marginVertical: 10,
          }}
        >
          Login
        </Text>
        <View
          style={{
            backgroundColor: "white",
            height: 800,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 40, color: darkGreen, fontWeight: "bold" }}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: "grey",
              fontSize: 19,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            Login to Your Account
          </Text>
          <Field
            placeholder="Email / Username"
            keyboardType={"email-address"}
          />
          <Field placeholder="Password" secureTextEntry={true} />
          <View
            style={{ alignItems: "flex-end", width: "78%", paddingRight: 16 }}
          >
            <TouchableOpacity>
              <Text
                style={{
                  color: darkGreen,
                  fontWeight: "bold",
                  fontSize: 16,
                  marginTop: 30,
                  marginBottom: 50,
                }}
              >
                Forgot Password
              </Text>
            </TouchableOpacity>
          </View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Login"
            Press={() => {
              alert("Logged In");
              props.navigation.navigate("Main");
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 20, // Adjusted margin top for spacing
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              Don't have an account?
            </Text>

            <TouchableOpacity
              onPress={() => props.navigation.navigate("Signup")}
            >
              <Text
                style={{
                  marginLeft: 10,
                  color: darkGreen,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
