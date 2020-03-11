import { AsyncStorage } from "react-native";
import * as Facebook from "expo-facebook";
import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from "./types";
import { FB_APP_ID, FB_APP_SECRET } from "react-native-dotenv";

const PROFILE = "public_profile";
const FB_TOKEN = "fb_token";

export const facebookLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem(FB_TOKEN);
  if (token) {
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  } else {
    doLoginWithFB(dispatch);
  }
};

const doLoginWithFB = async dispatch => {
  await Facebook.initializeAsync();
  let { type, token } = await Facebook.logInWithReadPermissionsAsync(
    FB_APP_ID,
    {
      permissions: [PROFILE]
    }
  );
  if (type === "cancel") {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }
  await AsyncStorage.setItem(FB_TOKEN, token);
  dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};
