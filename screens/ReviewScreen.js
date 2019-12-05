import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import CustomIcon from "../src/components/CustomIcon";
const ReviewScreen = () => {
  return (
    <View>
      <Text> ReviewScreen </Text>
    </View>
  );
};
const screenHeight = Dimensions.get("window").height;

ReviewScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Review Jobs",
    headerStyle: {
      height: screenHeight / 8
    },
    headerRight: () => {
      return (
        <TouchableOpacity onPress={() => navigation.navigate("settings")}>
          <CustomIcon name="cogs" type="font-awesome" color="#f50" raised />
        </TouchableOpacity>
      );
    }
  };
};

export default ReviewScreen;
