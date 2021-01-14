CREATE TABLE [dbo].[Category]
(
	[CategoryId] INT IDENTITY PRIMARY KEY,
	[UserId] INT NOT NULL , 
    [CategoryDetailId] INT NOT NULL, 

    CONSTRAINT [FK_Category_User] FOREIGN KEY ([UserId])
    REFERENCES [User]([UserId]),
    CONSTRAINT [FK_Category_CategoryDetail] FOREIGN KEY ([CategoryDetailId])
    REFERENCES [CategoryDetail]([CategoryDetailId])
)
