import React, { useState, useEffect } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import reservationApi from "../../../api/reservation";
import AppActivityIndicator from "../../../components/AppActivityIndicator";
import ReservationCustomer from "../../../components/ReservationCustomer";
import useApi from "../../../hooks/useApi";
import useAuth from "../../../auth/useAuth";
import ReservationDelete from "../../../components/ReservationDelete";
import UploadScreen from "../UploadScreen";
import colors from "../../../config/colors";

const ReservationScreen = () => {
  const [reservation, setReservation] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const { customer } = useAuth();
  const getReservationCustomerApi = useApi(
    reservationApi.getReservationCustomer
  );
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const today = new Date();
  const date = today.toISOString().split("T")[0];
  const time = today.toTimeString().split(" ")[0];

  useEffect(() => {
    getReservationCustomer();
  }, [deletePickReservation]);

  const getReservationCustomer = async () => {
    const result = await getReservationCustomerApi.request(customer.customerId);

    if (!result.ok) {
      console.log(result);
      const data = getStoreData();
      return setReservation(data);
    }
    storeData(result.data);

    setReservation(
      result.data.sort(
        (a, b) =>
          new Date(b.heureDeb).getTime() - new Date(a.heureDeb).getTime()
      )
    );
  };

  const deletePickReservation = async (reservationId, customerId) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await reservationApi.deletePickReservation(
      reservationId,
      customerId,
      (progress) => setProgress(progress)
    );
    // DB renvoie -1 quand il y a une erreur
    if (!result.ok || result.data < 0) {
      setUploadVisible(false);
      return alert(
        "Vous ne pouvez suprimer une reservation que minimum 24h avant "
      );
    }
    setUploadVisible(false);
    alert("Reservation suprimer");
    console.log(result.data);
  };

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@storage_Key", jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const getStoreData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@storage_Key");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <AppActivityIndicator visible={getReservationCustomerApi.loading} />
      <View style={{ padding: 10 }}>
        <FlatList
          refreshing={refreshing}
          onRefresh={() => {
            getReservationCustomer();
          }}
          contentContainerStyle={{ paddingBottom: 140 }}
          ListHeaderComponent={
            <>
              <Text style={styles.text}>En cours:</Text>
              <FlatList
                data={reservation}
                keyExtractor={(item) => item.reservationId.toString()}
                renderItem={({ item, index }) => {
                  const itemDate = new Date(item.resDate);
                  if (itemDate.toISOString().split("T")[0] >= date) {
                    if (itemDate.toISOString().split("T")[0] == date) {
                      if (item.endHour.slice(0, 2) > time.slice(0, 2)) {
                        return (
                          <ReservationCustomer
                            key={index}
                            item={item}
                            onPress={() => {
                              console.log("pres");
                            }}
                            renderRightActions={() => (
                              <ReservationDelete
                                onPress={() =>
                                  deletePickReservation(
                                    item.reservationId,
                                    customer.customerId
                                  )
                                }
                              />
                            )}
                          />
                        );
                      }
                    } else {
                      return (
                        <ReservationCustomer
                          key={index}
                          item={item}
                          onPress={() => {
                            console.log("pres");
                          }}
                          renderRightActions={() => (
                            <ReservationDelete
                              onPress={() =>
                                deletePickReservation(
                                  item.reservationId,
                                  customer.customerId
                                )
                              }
                            />
                          )}
                        />
                      );
                    }
                  }
                }}
              />
            </>
          }
          ListFooterComponent={
            <>
              <Text style={styles.text}>Terminer:</Text>
              <FlatList
                data={reservation}
                keyExtractor={(item) => item.reservationId.toString()}
                renderItem={({ item, index }) => {
                  const itemDate = new Date(item.resDate);
                  if (itemDate.toISOString().split("T")[0] <= date) {
                    if (itemDate.toISOString().split("T")[0] == date) {
                      if (item.endHour.slice(0, 2) <= time.slice(0, 2)) {
                        return (
                          <ReservationCustomer
                            key={index}
                            item={item}
                            backgroundColor={colors.primary}
                            onPress={() => {
                              console.log("pres");
                            }}
                          />
                        );
                      }
                    } else {
                      return (
                        <ReservationCustomer
                          key={index}
                          item={item}
                          backgroundColor={colors.primary}
                          onPress={() => {
                            console.log("pres");
                          }}
                        />
                      );
                    }
                  }
                }}
              />
            </>
          }
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ReservationScreen;
