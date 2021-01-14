CREATE PROCEDURE [dbo].[GetAllReservationByUser]
	@UserId INT
AS
BEGIN
	-- Format 8 => HH:mm:SS
	-- Format 101 => DD/MM/YYYY
	-- DATEADD va lire la doc
	SELECT  R.ReservationId, 
	dbo.ConvertDate(R.ResDate) AS ResDate,
	dbo.ConvertTime(R.StartHour) AS StartHour,
	dbo.ConvertTime(R.EndHour) AS EndHour,
	R.NumPlaceAvailable-R.NumPlaceReserved as NumPlaceAvailable
	FROM Reservation R
	WHERE R.UserId = @UserId
	AND R.ResDate > DATEADD(DAY, -1, GETDATE())
	AND R.NumPlaceReserved < R.NumPlaceAvailable
	EXCEPT 
	SELECT R.ReservationId, 
	dbo.ConvertDate(R.ResDate) AS ResDate,
	dbo.ConvertTime(R.StartHour) AS StartHour,
	dbo.ConvertTime(R.EndHour) AS EndHour,
	R.NumPlaceAvailable - R.NumPlaceReserved as NumPlaceAvailable
	FROM Reservation R
	WHERE R.UserId = @UserId
	AND dbo.ConvertTime(EndHour) <  dbo.ConvertTime(GETDATE()) 
	AND dbo.ConvertDate(R.ResDate) = dbo.ConvertDate(GETDATE())
	ORDER BY ResDate, StartHour , EndHour
END

