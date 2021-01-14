CREATE PROCEDURE [dbo].[Login]
	@Email NVARCHAR(320),
	@Password NVARCHAR(50)
AS
BEGIN
	SELECT C.[CustomerId], C.[FirstName], C.[LastName], C.[PhoneNum], 
	C.[Email], C.[Url], C.[ThumbnailUrl]
	FROM [Customer] C
	WHERE [Email] = @Email 
	and [Password] = HASHBYTES('SHA2_512', dbo.GetPreHash() + @Password + dbo.GetPostHash());
END