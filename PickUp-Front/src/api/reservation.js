import client from "./client";

const getAllReservationUser = (index) =>
  client.get("/Reservation/All/User/" + index);

const getReservationCustomer = (index) =>
  client.get("/Reservation/Customer/" + index);

const addReservation = (reservationId, customerId, numPerson) =>
  client.post("/Reservation/PickReservation", {
    reservationId: reservationId,
    customerId: customerId,
    numPerson: numPerson,
  });

const deletePickReservation = (reservationId, customerId) =>
  client.delete(
    "/Reservation/PickReservation/Delete",
    {},
    {
      data: {
        reservationId: reservationId,
        customerId: customerId,
      },
    }
  );

export default {
  getAllReservationUser,
  getReservationCustomer,
  addReservation,
  deletePickReservation,
};
