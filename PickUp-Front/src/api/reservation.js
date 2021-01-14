import client from "./client";

const getAllReservationUser = (index) =>
  client.get("/Reservation/All/User/" + index);

const getReservationCustomer = (index) =>
  client.get("/Reservation/Customer/" + index);

const addReservation = (reservationId, userId, numPerson) =>
  client.post("/Reservation/PickReservation", {
    id: reservationId,
    userId: userId,
    dateInput: new Date(),
    numPerson: numPerson,
  });

export default {
  getAllReservationUser,
  getReservationCustomer,
  addReservation,
};
