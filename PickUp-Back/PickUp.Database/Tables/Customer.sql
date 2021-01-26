CREATE TABLE [dbo].[Customer]
(
	[CustomerId] INT NOT NULL IDENTITY PRIMARY KEY, 
    [FirstName] NVARCHAR(75) NOT NULL, 
    [LastName] NVARCHAR(75) NOT NULL, 
    [PhoneNum] NVARCHAR(50) NOT NULL, 
    [Email] NVARCHAR(320) UNIQUE NOT NULL, 
    [Password] VARBINARY(MAX) NOT NULL,
    [DeviceToken] NVARCHAR(320) NULL,
    [Url] NVARCHAR(MAX) NULL,
    [ThumbnailUrl] NVARCHAR(MAX) NULL
)
