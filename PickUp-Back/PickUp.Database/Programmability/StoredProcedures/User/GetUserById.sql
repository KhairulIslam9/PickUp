CREATE PROCEDURE [dbo].[GetUserById]
	@UserId INT
AS
BEGIN
	SELECT U.*
	FROM [V_User] U
	WHERE U.UserId = @UserId
END
