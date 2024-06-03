import React from "react";
import { View, Text } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

export default function Slider() {
  const images = [
    //require("./assets/image1.jpg"),
    //require("./assets/image2.jpg"),
    //require("./assets/image3.jpg"),
    //require("./assets/image4.jpg"),
    //require("./assets/image5.jpg"),
  ];

  return (
    <View>
    <Text>Slider</Text>
      <SliderBox
        images={images}
        dotColor="yellow"
        inactiveDotColor="white"
        dotStyle={{
          height: 15,
          width: 15,
          borderRadius: 50,
        }}
        imageLoadingColor="red"
        autoplay={true}
        autoplayInterval={2000}
        circleLoop={true}
        onCurrentImagePressed={(index) => alert(index + 1)}
        firstItem={4}
        paginationBoxVerticalPadding={20}
      />
    </View>
  );
}
