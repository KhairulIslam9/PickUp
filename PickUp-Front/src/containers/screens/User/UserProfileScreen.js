import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Modal, Portal, Provider } from "react-native-paper";
import { connect } from "react-redux";
import { Agenda } from "react-native-calendars";

import { reservationProAction } from "../../../store/actions/reservationProAction";
import AppActivityIndicator from "../../../components/AppActivityIndicator";
import ReservationCard from "../../../components/ReservationCard";
import reservationApi from "../../../api/reservation";
import UploadScreen from "../UploadScreen";
import useAuth from "../../../auth/useAuth";
import useApi from "../../../hooks/useApi";
import AppButton from "../../../components/AppButton";
import AppText from "../../../components/AppText";
import colors from "../../../config/colors";
import routes from "../../../config/routes";
import NumberSpinner from "../../../components/NumberSpinner";

function UserProfileScreen(props) {
  const [visible, setVisible] = useState(false);
  const modalClose = () => setVisible(false);
  const [reservations, setReservtions] = useState({});
  const [numPerson, setNumPerson] = useState(1);
  const [reservationId, setReservtionId] = useState(-1);
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const today = new Date();
  const date = today.toISOString().split("T")[0];
  const time = today.toTimeString().split(" ")[0];
  const { customer } = useAuth();
  const getReservationApi = useApi(reservationApi.getAllReservationUser);

  useEffect(() => {
    getReservationPro(props.route.params.userId);
  }, []);

  useEffect(() => {
    getData();
  }, [props.listReservationPro]);

  const getReservationPro = async (id) => {
    const result = await getReservationApi.request(id.toString());
    if (!result.ok) {
      console.log(result);
      return null;
    }
    props.reservationProAction(result.data);
  };

  const addPickReservation = async (reservationId, userId, numPerson) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await reservationApi.addReservation(
      reservationId,
      userId,
      numPerson,
      (progress) => setProgress(progress)
    );

    // DB renvoie -1 quand il y a une erreur
    if (!result.ok || result.data < 0) {
      setUploadVisible(false);
      return alert("Vous ne pouvez pas reserver cette reservation");
    }
    props.navigation.navigate(routes.USER_SCREEN);
  };

  const getData = () => {
    // Met la date dans le bon format
    const mappeData = props.listReservationPro.map((post) => {
      const newDate = new Date(post.resDate);
      const date = newDate.toISOString().split("T")[0];
      return {
        ...post,
        resDate: date,
      };
    });
    // Met l'iteams dans le bon format pour le calendrier item={"date":
    //                                                                [{name:""}]}
    const reduced = mappeData.reduce((accumulator, currentItem) => {
      const { resDate, ...reste } = currentItem;

      if (!accumulator[resDate]) {
        accumulator[resDate] = [];
      }
      accumulator[resDate].push(reste);

      return accumulator;
    }, {});

    setReservtions(reduced);
  };
  const renderItem = (item, index) => {
    return (
      <ReservationCard
        key={index}
        onPress={() => {
          setReservtionId(item.reservationId);
          setVisible(true);
        }}
        duration={item.endHour - item.startHour}
        starthour={item.startHour}
        endHour={item.endHour}
        numberAvailable={item.numPlaceAvailable}
      />
    );
  };

  return (
    <>
      <Provider>
        <UploadScreen
          onDone={() => setUploadVisible(false)}
          progress={progress}
          visible={uploadVisible}
        />
        <AppActivityIndicator visible={getReservationApi.loading} />
        <View style={styles.container}>
          <Agenda
            items={reservations}
            minDate={date}
            maxDate={"2021-05-10"}
            pastScrollRange={1}
            futureScrollRange={1}
            selected={date}
            renderItem={renderItem}
          />
          <Portal>
            <Modal
              contentContainerStyle={styles.modal}
              animationType="slide"
              transparent={true}
              onDismiss={modalClose}
              visible={visible}
              onRequestClose={() => {
                alert("Modal has been closed.");
              }}
            >
              {!customer && (
                <>
                  <AppText style={styles.text}>Veuillez vous connecter</AppText>
                  <AppButton
                    title="Se connecter"
                    onPress={() => {
                      modalClose();
                      props.navigation.navigate(routes.LOGIN_SCREEN);
                    }}
                  ></AppButton>
                </>
              )}
              {customer && (
                <View style={styles.detailsContainer}>
                  <AppText style={styles.text}>Nombre de personne :</AppText>
                  <NumberSpinner
                    value={numPerson}
                    onChange={(num) => setNumPerson(num)}
                  />
                  <AppButton
                    title="Valider"
                    onPress={() => {
                      modalClose();
                      addPickReservation(
                        reservationId,
                        customer.customerId,
                        numPerson
                      );
                    }}
                  />
                </View>
              )}
            </Modal>
          </Portal>
        </View>
      </Provider>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  proProfile: state.proProfile,
  listReservationPro: state.reservation.listReservationPro,
});

const mapDispatchToProps = {
  reservationProAction,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: colors.light,
    padding: 20,
    marginHorizontal: 20,
  },
  text: {
    textAlign: "center",
    fontSize: 24,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileScreen);
