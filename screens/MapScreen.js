import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Button } from "react-native-elements";
import MapView from "react-native-maps";
import { connect } from "react-redux";
import * as actions from "../actions";

class MapScreen extends Component {
  state = {
    mapLoaded: false,
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    }
  };

  onRegionChangeComplete = region => {
    this.setState({ region });
  };
  componentDidMount() {
    this.setState({ mapLoaded: true });
  }

  onButtonPress = () => {
    this.props.fetchJobs(this.state.region);
  };

  render() {
    if (!this.state.mapLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" color="orangered" />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <MapView
          region={this.state.region}
          onRegionChangeComplete={this.onRegionChangeComplete}
          style={{ flex: 1 }}
        />
        <View style={styles.buttonContainer}>
          <Button
            large
            title="Search this area"
            backgroundColor="#009688"
            icon={{ name: "search", color: "#FFF" }}
            onPress={this.onButtonPress}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    left: 6,
    right: 6
  }
};

export default connect(null, actions)(MapScreen);
