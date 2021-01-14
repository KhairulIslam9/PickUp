CREATE PROCEDURE [dbo].[Register]
	@FirstName NVARCHAR(50),
	@LastName NVARCHAR(50),
	@PhoneNum NVARCHAR(50),
	@Email NVARCHAR(320),
	@Password NVARCHAR(50)
AS
BEGIN
	INSERT INTO [Customer](FirstName,LastName,PhoneNum,Email,[Password])
	VALUES (@FirstName,@LastName,@PhoneNum,@Email,HASHBYTES('SHA2_512', dbo.GetPreHash() + @Password + dbo.GetPostHash()))
END
