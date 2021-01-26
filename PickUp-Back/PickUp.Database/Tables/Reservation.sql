CREATE TABLE [dbo].[Reservation]
(
	[ReservationId] INT  IDENTITY PRIMARY KEY, 
    [ResDate] DATE NOT NULL, 
    [StartHour] TIME NOT NULL,
    [EndHour] TIME NOT NULL,
    [NumPlaceAvailable] INT CHECK(NumPlaceAvailable > 0) NOT NULL,
    [NumPlaceReserved] INT DEFAULT 0 CHECK(NumPlaceReserved <= NumPlaceAvailable) NOT NULL,
    [UserId] INT NOT NULL,

    
    CONSTRAINT [FK_Reservation_User] FOREIGN KEY ([UserId])
    REFERENCES [User]([UserId])
)
