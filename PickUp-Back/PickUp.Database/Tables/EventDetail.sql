CREATE TABLE [dbo].[EventDetail]
(
	
	[EventId] INT IDENTITY PRIMARY KEY, 
    [Name] NVARCHAR(50) NOT NULL, 
    [Description] NVARCHAR(150) NOT NULL
)
