import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";
import reservationApi from "../../../api/reservation";
import AppActivityIndicator from "../../../components/AppActivityIndicator";
import ReservationCustomer from "../../../components/ReservationCustomer";
import useApi from "../../../hooks/useApi";
import useAuth from "../../../auth/useAuth";
import ReservationDelete from "../../../components/ReservationDelete";

const ReservationScreen = () => {
  const [reservation, setReservation] = useState([]);
  const { customer } = useAuth();
  const getReservationCustomerApi = useApi(
    reservationApi.getReservationCustomer
  );

  useEffect(() => {
    getReservationCustomer();
  }, []);

  const getReservationCustomer = async () => {
    const result = await getReservationCustomerApi.request(customer.customerId);

    if (!result.ok) {
      console.log(result);
      return null;
    }
    setReservation(
      result.data.sort(
        (a, b) =>
          new Date(b.heureDeb).getTime() - new Date(a.heureDeb).getTime()
      )
    );
  };

  return (
    <>
      <AppActivityIndicator visible={getReservationCustomerApi.loading} />
      <View style={{ padding: 10 }}>
        <FlatList
          data={reservation}
          keyExtractor={(item) => item.reservationId.toString()}
          renderItem={({ item, index }) => (
            <ReservationCustomer
              key={index}
              item={item}
              onPress={() => {
                console.log("pres");
              }}
              renderRightActions={() => (
                <ReservationDelete onPress={() => console.log("r")} />
              )}
            />
          )}
        />
      </View>
    </>
  );
};

export default ReservationScreen;
