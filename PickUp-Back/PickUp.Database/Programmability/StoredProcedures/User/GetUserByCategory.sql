CREATE PROCEDURE [dbo].[GetUserByCategory]
	@CategoryId int
AS
BEGIN
	SELECT U.*
	FROM [V_User] U, Category C, CategoryDetail CD
	where U.UserId = C.UserId 
	and CD.CategoryDetailId = c.CategoryDetailId
	and CD.CategoryDetailId = @CategoryId
END