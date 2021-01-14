CREATE TABLE [dbo].[Event]
(
	[EventId] INT NOT NULL , 
    [UserId] INT NOT NULL,
	PRIMARY KEY(EventId, [UserId]),

	Constraint [FK_Event_User] FOREIGN KEY ([UserId])
    REFERENCES [User]([UserId]),
    Constraint [FK_Event_EventDetail] FOREIGN KEY ([EventId])
    REFERENCES [EventDetail]([EventId])
)
