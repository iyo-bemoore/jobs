import React from "react";
import { View, Text } from "react-native";
import Slides from "../src/components/Slides";

const SLIDE_DATA = [
  { id: 1, text: "Welcome to Job App", color: "#03A9F4" },
  { id: 2, text: "Set your location and get Jobs", color: "#009688" },
  { id: 3, text: "get the most of your Job search", color: "#03A9F4" }
];
const WelcomeScreen = ({ navigation }) => {
  const onSlideComplete = () => {
    navigation.navigate("Auth");
  };
  return <Slides completed={onSlideComplete} data={SLIDE_DATA} />;
};

export default WelcomeScreen;
