CREATE PROCEDURE [dbo].[PostPickReservation]
	@ReservationId INT,
	@CustomerId INT,
	@NumPerson INT
AS
BEGIN
	DEClARE @NumPlaceAvailable INT, 
			@NumPlaceReserved INT, 
			@Customer INT

	SELECT  @NumPlaceAvailable = NumPlaceAvailable, @NumPlaceReserved = NumPlaceReserved 
	FROM Reservation
	WHERE ReservationId = @ReservationId

	SELECT @Customer = CustomerId
	FROM [Customer]
	WHERE CustomerId = @CustomerId


	IF (@NumPlaceAvailable >= @NumPlaceReserved + @NumPerson AND @Customer is not null)
	BEGIN
		IF NOT EXISTS ( SELECT * 
						FROM PickReservation 
						WHERE CustomerId = @CustomerId 
						AND ReservationId = @ReservationId )
		BEGIN
			UPDATE Reservation
			SET NumPlaceReserved = NumPlaceReserved + @NumPerson
			FROM Reservation
			WHERE ReservationId = @ReservationId
		END

		INSERT INTO PickReservation
		VALUES(@ReservationId,@CustomerId,@NumPerson,GETDATE())
	END
END
