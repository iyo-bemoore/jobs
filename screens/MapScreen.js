import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { connect } from "react-redux";
import * as actions from "../actions";
import { width, height } from "../src/styles/base";
import { Button } from "react-native-elements";
const MapScreen = props => {
  const [mapDetails, setMapDetails] = useState({
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    }
  });
  const changeRegion = region => {
    setMapDetails(region);
  };
  const onSearchPress = () => {
    props.fetchJobs(mapDetails.region);
  };

  useEffect(() => {}, []);

  console.log("from screen", mapDetails.region);
  return (
    <View style={styles.mapContainer}>
      <MapView
        onRegionChangeComplete={changeRegion}
        region={mapDetails.region}
        style={styles.mapper}
      />
      <View style={styles.buttonContainer}>
        <Button
          large
          title="Search This Area"
          backGroundColor="#009688"
          icon={{ name: "search" }}
          onPress={onSearchPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: height / 14,
    left: width / 2 - width / 5
  },
  mapContainer: {
    flex: 1
  },
  mapper: {
    flex: 1
  }
});

export default connect(null, actions)(MapScreen);
