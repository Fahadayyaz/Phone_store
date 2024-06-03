import React from "react";
import { TextInput } from "react-native";
import { darkGreen } from "./Constants";

const Field = (props) => {
  return (
    <TextInput
      {...props}
      style={{
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 100,
        color: darkGreen,
        paddingHorizontal: 20,
        width: "70%",
        backgroundColor: "rgb(220, 220, 220)",
      }}
      placeholderTextColor={darkGreen}
    ></TextInput>
  );
};

export default Field;
