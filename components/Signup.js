import React from "react";
import { Text, View, TouchableOpacity } from "react-native"; // corrected import
import Background from "./Background";
import { darkGreen } from "./Constants";
import Field from "./Field"; // Assuming Field and Btn components are correctly defined
import Btn from "./Btn";

const Signup = (props) => {
  return (
    <Background>
      <View style={{ alignItems: "center", width: 460 }}>
        <Text
          style={{
            color: "white",
            fontSize: 64,
            fontWeight: "bold",
            marginVertical: 10,
            marginTop: 20,
          }}
        >
          Register
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 19,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: "white",
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 50,
            alignItems: "center",
          }}
        >
          <Field placeholder="First name" />
          <Field placeholder="Last name" />
          <Field
            placeholder="Email / Username"
            keyboardType={"email-address"}
          />
          <Field placeholder="Contact Number" keyboardType={"number"} />

          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} />
          {/*
            <View
            style={{ alignItems: "flex-end", width: "78%", paddingRight: 16 }}
          >
            <TouchableOpacity>
              <Text
                style={{
                  color: darkGreen,
                  fontWeight: "bold",
                  fontSize: 16,
                  marginBottom: 160,
                }}
              >
                Forgot Password
              </Text>
            </TouchableOpacity>
          </View>
          */}
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Signup"
            Press={() => {
              alert("Account Created");
              props.navigation.navigate("Login");
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 20, // Adjusted margin top for spacing
            }}
          >
            <Text>Already have an account?</Text>

            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text
                style={{
                  color: darkGreen,
                  fontWeight: "bold",
                  fontSize: 16,
                  marginBottom: 160,
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
