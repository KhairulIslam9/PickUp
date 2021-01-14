CREATE VIEW [dbo].[V_Event]
	AS SELECT ED.EventId, U.UserId, U.[Name], ED.[Description], U.[Url], U.ThumbnailUrl, U.Rating
	FROM [Event] E, EventDetail ED, [User] U
	WHERE E.EventId = ED.EventId
	and E.UserId = U.UserId
