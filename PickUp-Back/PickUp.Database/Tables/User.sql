CREATE TABLE [dbo].[User]
(
	[UserId] INT IDENTITY PRIMARY KEY, 
    [Name] NVARCHAR(75) NOT NULL, 
    [Email] NVARCHAR(150) NULL,
    [Password] NVARCHAR(50),
    [Description] NVARCHAR(500) NOT NULL, 
    [AdresseStreet] NVARCHAR(500) NOT NULL, 
    [AdresseNum] INT NOT NULL,
    [AdresseCity] NVARCHAR(75) NOT NULL,
    [AdresseZip] INT NOT NULL, 
    [PhoneNum] NVARCHAR(50) NOT NULL, 
    [Latitude] DECIMAL(11, 7) NOT NULL, 
    [Longitude] DECIMAL(11, 7) NOT NULL, 
    [Rating] DECIMAL(5, 2)  NULL, 
    [Url] NVARCHAR(MAX) NOT NULL,
    [ThumbnailUrl] NVARCHAR(MAX) NULL
)
