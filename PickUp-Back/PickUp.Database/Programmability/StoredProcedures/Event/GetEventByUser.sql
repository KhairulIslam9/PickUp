CREATE PROCEDURE [dbo].[GetEventByUser]
	@UserId int
AS
BEGIN
	SELECT *
	FROM V_Event
	WHERE V_Event.UserId = @UserId
END