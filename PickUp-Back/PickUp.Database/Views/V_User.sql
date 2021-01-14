CREATE VIEW [dbo].[V_User]
	AS SELECT U.UserId, U.[Name], U.[Description], 
	U.PhoneNum, U.AdresseStreet, U.AdresseNum,
	U.AdresseCity, U.AdresseZip, U.Latitude, 
	U.Longitude, U.Rating, U.[Url], U.ThumbnailUrl
	FROM [User] U
