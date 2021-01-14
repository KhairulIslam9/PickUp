CREATE TABLE [dbo].[PickReservation]
(
	[ReservationId] INT NOT NULL, 
    [CustomerId] INT NOT NULL,
    [NumPerson] INT NOT NULL,
	[InputDate] DATETIME NOT NULL, 
    PRIMARY KEY(ReservationId, CustomerId),

	CONSTRAINT [FK_PickReservation_Reservation] FOREIGN KEY ([ReservationId])
    REFERENCES [Reservation]([ReservationId]),
    CONSTRAINT [FK_PickReservation_Customer] FOREIGN KEY ([CustomerId])
    REFERENCES [Customer]([CustomerId])
)
