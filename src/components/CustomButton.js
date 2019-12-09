import React from "react";
import { Button } from "react-native-elements";

const CustomButton = ({ title, type, icon, ev }) => {
  return <Button type={type} title={title} icon={icon} onPress={ev} />;
};

export default CustomButton;
