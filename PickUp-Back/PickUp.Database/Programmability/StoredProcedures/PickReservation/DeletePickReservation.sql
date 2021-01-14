CREATE PROCEDURE [dbo].[DeletePickReservation]
	@ReservationId INT,
	@CustomerId INT
AS
BEGIN
	--DELETE seulement 24h avant 
	DECLARE @ResDate DATETIME,
			@StartHour DATETIME

	SELECT @ResDate = ResDate, @StartHour = StartHour
	FROM Reservation
	WHERE ReservationId = @ReservationId

	IF (GETDATE() <  @ResDate)
	BEGIN
		IF(Convert(varchar, DATEADD(DAY, 1,GETDATE()), 101) = CONVERT(varchar, @ResDate, 101))
		BEGIN
			IF CONVERT(varchar, @StartHour, 8) > CONVERT(varchar,GetDATE(), 8) 
			BEGIN
				DELETE
				FROM PickReservation
				WHERE ReservationId = @ReservationId
				AND CustomerId = @CustomerId
			END
		END
		ELSE 
		BEGIN
			DELETE
			FROM PickReservation
			WHERE ReservationId = @ReservationId
			AND CustomerId = @CustomerId
		END
	END
END
