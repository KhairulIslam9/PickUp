CREATE PROCEDURE [dbo].[GetReservationByUser]
	@UserId Int
AS
BEGIN
	SELECT R.ReservationId, 
		  C.CustomerId, 
		  C.LastName, 
		  C.FirstName, 
		  C.Email, 
		  C.PhoneNum,
		  dbo.ConvertDate(R.ResDate) AS ResDate,
		  dbo.ConvertTime(R.StartHour) AS StartHour,
		  dbo.ConvertTime(R.EndHour) AS EndHour,
		  PR.NumPerson,
		  dbo.ConvertDate(PR.InputDate) AS InputDate
	FROM Reservation R, PickReservation PR, [Customer] C
	Where R.ReservationId = PR.ReservationId
	and C.CustomerId = PR.CustomerId
	and R.UserId = @UserId
	ORDER BY R.ResDate, R.StartHour , R.EndHour
END
