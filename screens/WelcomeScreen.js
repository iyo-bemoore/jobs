import React, { useState, useEffect } from "react";
import { centerItems } from "../src/styles/base";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  AsyncStorage
} from "react-native";
import Slides from "../src/components/Slides";
import _ from "lodash";

const SLIDE_DATA = [
  { id: 1, text: "Welcome to Job App", color: "orangered" },
  { id: 2, text: "Set your location and get Jobs", color: "#009688" },
  { id: 3, text: "get the most of your Job search", color: "#03A9F4" }
];
const WelcomeScreen = ({ navigation }) => {
  const [token, setToken] = useState(null);
  const onSlideComplete = () => {
    navigation.navigate("Auth");
  };

  useEffect(() => {
    const getToken = async () => {
      let t = await AsyncStorage.getItem("fb_token");
      setToken(t);
      if (t) {
        navigation.navigate("map");
      } else {
        setToken(false);
      }
    };
    getToken();
  }, []);

  if (_.isNull(token)) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return <Slides completed={onSlideComplete} data={SLIDE_DATA} />;
};

const styles = StyleSheet.create({
  ...centerItems()
});
export default WelcomeScreen;
