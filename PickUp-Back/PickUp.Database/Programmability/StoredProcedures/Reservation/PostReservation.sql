CREATE PROCEDURE [dbo].[PostReservation]
	@ResDate NVARCHAR(50) ,
	@StartHour NVARCHAR(50),
    @EndHour NVARCHAR(50),
    @NumPlaceAvailable INT,
    @UserId INT
AS
BEGIN
	INSERT INTO Reservation 
    VALUES(CONVERT(date, @ResDate),CONVERT(time, @StartHour), CONVERT(time, @EndHour), @NumPlaceAvailable, 0, @UserId)
END