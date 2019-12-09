import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import WelcomeScreen from "./screens/WelcomeScreen";
import AuthScreen from "./screens/AuthScreen";
import MapScreen from "./screens/MapScreen";
import DeckScreen from "./screens/DeckScreen";
import ReviewScreen from "./screens/ReviewScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Provider } from "react-redux";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import store from "./store";
import * as Font from "expo-font";

const removeTabBar = () => {
  return {
    defaultNavigationOptions: {
      tabBarVisible: false
    }
  };
};

const stack = {
  review: {
    screen: createStackNavigator({
      review: { screen: ReviewScreen },
      settings: { screen: SettingsScreen }
    })
  }
};

const main = {
  main: {
    screen: createBottomTabNavigator({
      map: MapScreen,
      deck: DeckScreen,
      ...stack
    })
  }
};

const mainNavigator = createBottomTabNavigator(
  {
    Welcome: WelcomeScreen,
    Auth: AuthScreen,
    ...main
  },
  removeTabBar(),
  {
    lazy: true
  }
);

const App = createAppContainer(mainNavigator);

export default class MainApp extends Component {
  state = {
    isLoading: false
  };
  componentDidMount() {
    this._loadFontAsync();
  }

  _loadFontAsync = async () => {
    await Font.loadAsync({
      monserrat: require("./assets/fonts/montserrat.ttf"),
      monserratBold: require("./assets/fonts/Montserrat-Bold.ttf")
    });
    this.setState({ isLoading: true });
  };

  render() {
    if (!this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#E56818" />
        </View>
      );
    }
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1
  }
});
