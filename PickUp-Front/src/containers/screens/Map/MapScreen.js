import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { connect } from "react-redux";
import { listProAction } from "../../../store/actions/listProAction";
import { detailProAction } from "../../../store/actions/detailProAction";
import routes from "../../../config/routes";

const MapScreen = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        showUserLocation={true}
        initialRegion={{
          latitude: 50.44403693337853,
          longitude: 4.856551486599281,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {props.listPro?.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            // title={marker.name}
            // description={marker.description}
          >
            <Callout
              tooltip
              style={{ flex: 1 }}
              onPress={() => {
                props.detailProAction(marker),
                  props.navigation.navigate(routes.USER_PROFILE_SCREEN, {
                    userId: marker.id,
                  });
              }}
            >
              <View
                style={{
                  flex: 1,
                  textAlign: "center",
                  flexDirection: "row",
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  paddingHorizontal: 10,
                }}
              >
                <Image
                  style={{ width: 75, height: 75 }}
                  source={{ uri: marker.url }}
                />
                <View
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    backgroundColor: "#fff",
                    borderRadius: 10,
                    paddingHorizontal: 10,
                  }}
                >
                  <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                    {marker.name}
                  </Text>
                  <Text style={{ textAlign: "center" }}>
                    {marker.adresseStreet} {marker.adresseNum}
                  </Text>
                  <Text style={{ textAlign: "center" }}>
                    {marker.adresseZip} {marker.adresseCity}
                  </Text>
                </View>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};
const mapStateToProps = (state) => ({
  listPro: state.pro.listPro,
});
const mapDispatchToProps = {
  listProAction,
  detailProAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
