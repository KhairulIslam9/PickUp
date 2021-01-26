CREATE PROCEDURE [dbo].[GetAllUserAvailable]

AS
BEGIN
	SELECT U.*
	FROM [V_User] U
	WHERE U.UserId in ( SELECT DISTINCT R.UserId
						FROM Reservation R
						WHERE dbo.ConvertTime(GETDATE())
						BETWEEN dbo.ConvertTime(R.[StartHour]) AND dbo.ConvertTime(R.[EndHour]) 
						AND dbo.ConvertDate(R.[ResDate]) = dbo.ConvertDate(GETDATE()))
END