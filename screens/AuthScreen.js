import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";

const AuthScreen = props => {
  useEffect(() => {
    props.facebookLogin();
  });
  return (
    <View>
      <Text> AuthScreen </Text>
    </View>
  );
};

export default connect(null, actions)(AuthScreen);
