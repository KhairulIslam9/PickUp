export const reservationUserAction = (reservation) => {
    return{
        type : "GET_BY_USER",
        value : reservation
    }
}