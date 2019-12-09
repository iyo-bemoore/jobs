import React, { useEffect } from "react";
import { View, Text, AsyncStorage, StyleSheet } from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";
import { centerItems } from "../src/styles/base";

const AuthScreen = ({ token, navigation, facebookLogin }) => {
  useEffect(() => {
    const shouldNavigate = () => {
      if (token) {
        navigation.navigate("map");
      }
    };
    facebookLogin();
    shouldNavigate();
  }, [token]);

  return (
    <View style={styles.container}>
      <Text> AuthScreen </Text>
    </View>
  );
};

const mapStateToProps = ({ auth }) => {
  return {
    token: auth.token
  };
};

const styles = StyleSheet.create({
  ...centerItems()
});
export default connect(mapStateToProps, actions)(AuthScreen);
