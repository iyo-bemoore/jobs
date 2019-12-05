import React from "react";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import WelcomeScreen from "./screens/WelcomeScreen";
import AuthScreen from "./screens/AuthScreen";
import MapScreen from "./screens/MapScreen";
import DeckScreen from "./screens/DeckScreen";
import ReviewScreen from "./screens/ReviewScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from "react-redux";
import store from "./store";
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
    screen: createMaterialBottomTabNavigator({
      map: { screen: MapScreen },
      deck: { screen: DeckScreen },
      ...stack
    })
  }
};

const mainNavigator = createMaterialBottomTabNavigator({
  Welcome: { screen: WelcomeScreen },
  Auth: { screen: AuthScreen },
  ...main
});

const App = createAppContainer(mainNavigator);

const MainApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default MainApp;
