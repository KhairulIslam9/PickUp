CREATE PROCEDURE [dbo].[GetAllUserAvailable]

AS
BEGIN
	SELECT U.*
	FROM [V_User] U
	WHERE U.UserId in ( SELECT R.UserId
							FROM Reservation R
							WHERE  CONVERT(varchar,GETDATE(), 8)
							BETWEEN CONVERT(varchar, R.[StartHour], 8) AND CONVERT(varchar, R.[EndHour], 8) 
							AND CONVERT(varchar, R.[ResDate], 101) = CONVERT(varchar, GETDATE(), 101))
END
