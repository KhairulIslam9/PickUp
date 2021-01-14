CREATE PROCEDURE [dbo].[Update]
	@CustomerId Int,
	@Url NVARCHAR(Max),
	@ThumbnailUrl NVARCHAR(Max)
AS
BEGIN
	UPDATE [Customer]
	SET 
	[Url] = @Url,
	[ThumbnailUrl] = @ThumbnailUrl
	WHERE [CustomerId] = @CustomerId
END
