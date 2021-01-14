CREATE PROCEDURE [dbo].[GetReservationByCustomer]
	@CustomerId int = 0
AS
Begin
	SELECT R.ReservationId,
		   U.UserId, 
		   U.[Name], 
		   dbo.ConvertDate(R.ResDate) AS ResDate,
		   dbo.ConvertTime(R.StartHour) AS StartHour,
		   dbo.ConvertTime(R.EndHour) AS EndHour, 
		   PR.NumPerson,
		   R.NumPlaceAvailable-R.NumPlaceReserved as NumPlaceAvailable, 
		   U.[Url]
	From Reservation R, PickReservation PR, [User] U
	Where R.UserId = U.UserId
	and R.ReservationId = PR.ReservationId
	and PR.CustomerId = @CustomerId
	ORDER BY ResDate, StartHour , EndHour
End
