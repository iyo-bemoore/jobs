import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";
import CustomIcon from "../components/CustomIcon";

const screenWidth = Dimensions.get("window").width;

const Slides = ({ data, completed }) => {
  const injectButton = (index, arr) => {
    if (index === arr.length - 1) {
      return (
        <TouchableOpacity onPress={completed}>
          <CustomIcon
            name="arrow-forward"
            type="material-icons"
            raised
            color="green"
            size={30}
          />
        </TouchableOpacity>
      );
    }
  };
  const renderSlides = () => {
    return data.map((slide, index) => {
      return (
        <View key={slide.id}>
          <View
            style={[styles.slideContainer, { backgroundColor: slide.color }]}
          >
            <Text style={styles.text}> {slide.text}</Text>
          </View>
          <View
            style={[styles.iconContainer, { backgroundColor: slide.color }]}
          >
            {injectButton(index, data)}
          </View>
        </View>
      );
    });
  };

  return (
    <ScrollView
      style={styles.scrollComponent}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
    >
      {renderSlides()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollComponent: {
    flex: 1
  },
  slideContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: screenWidth
  },
  text: {
    textAlign: "center",
    fontSize: 30,
    color: "#fff"
  },
  iconContainer: {
    flex: 0.5,
    alignItems: "center"
  }
});
export default Slides;
