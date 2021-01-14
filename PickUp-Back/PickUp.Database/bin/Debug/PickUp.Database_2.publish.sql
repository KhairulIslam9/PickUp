/*
Script de déploiement pour PickUp.Database

Ce code a été généré par un outil.
La modification de ce fichier peut provoquer un comportement incorrect et sera perdue si
le code est régénéré.
*/

GO
SET ANSI_NULLS, ANSI_PADDING, ANSI_WARNINGS, ARITHABORT, CONCAT_NULL_YIELDS_NULL, QUOTED_IDENTIFIER ON;

SET NUMERIC_ROUNDABORT OFF;


GO
:setvar DatabaseName "PickUp.Database"
:setvar DefaultFilePrefix "PickUp.Database"
:setvar DefaultDataPath "C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\"
:setvar DefaultLogPath "C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\"

GO
:on error exit
GO
/*
Détectez le mode SQLCMD et désactivez l'exécution du script si le mode SQLCMD n'est pas pris en charge.
Pour réactiver le script une fois le mode SQLCMD activé, exécutez ce qui suit :
SET NOEXEC OFF; 
*/
:setvar __IsSqlCmdEnabled "True"
GO
IF N'$(__IsSqlCmdEnabled)' NOT LIKE N'True'
    BEGIN
        PRINT N'Le mode SQLCMD doit être activé de manière à pouvoir exécuter ce script.';
        SET NOEXEC ON;
    END


GO
USE [master];


GO

IF (DB_ID(N'$(DatabaseName)') IS NOT NULL) 
BEGIN
    ALTER DATABASE [$(DatabaseName)]
    SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
    DROP DATABASE [$(DatabaseName)];
END

GO
PRINT N'Création de $(DatabaseName)...'
GO
CREATE DATABASE [$(DatabaseName)]
    ON 
    PRIMARY(NAME = [$(DatabaseName)], FILENAME = N'$(DefaultDataPath)$(DefaultFilePrefix)_Primary.mdf')
    LOG ON (NAME = [$(DatabaseName)_log], FILENAME = N'$(DefaultLogPath)$(DefaultFilePrefix)_Primary.ldf') COLLATE SQL_Latin1_General_CP1_CI_AS
GO
IF EXISTS (SELECT 1
           FROM   [master].[dbo].[sysdatabases]
           WHERE  [name] = N'$(DatabaseName)')
    BEGIN
        ALTER DATABASE [$(DatabaseName)]
            SET AUTO_CLOSE OFF 
            WITH ROLLBACK IMMEDIATE;
    END


GO
USE [$(DatabaseName)];


GO
IF EXISTS (SELECT 1
           FROM   [master].[dbo].[sysdatabases]
           WHERE  [name] = N'$(DatabaseName)')
    BEGIN
        ALTER DATABASE [$(DatabaseName)]
            SET ANSI_NULLS ON,
                ANSI_PADDING ON,
                ANSI_WARNINGS ON,
                ARITHABORT ON,
                CONCAT_NULL_YIELDS_NULL ON,
                NUMERIC_ROUNDABORT OFF,
                QUOTED_IDENTIFIER ON,
                ANSI_NULL_DEFAULT ON,
                CURSOR_DEFAULT LOCAL,
                RECOVERY FULL,
                CURSOR_CLOSE_ON_COMMIT OFF,
                AUTO_CREATE_STATISTICS ON,
                AUTO_SHRINK OFF,
                AUTO_UPDATE_STATISTICS ON,
                RECURSIVE_TRIGGERS OFF 
            WITH ROLLBACK IMMEDIATE;
    END


GO
IF EXISTS (SELECT 1
           FROM   [master].[dbo].[sysdatabases]
           WHERE  [name] = N'$(DatabaseName)')
    BEGIN
        ALTER DATABASE [$(DatabaseName)]
            SET ALLOW_SNAPSHOT_ISOLATION OFF;
    END


GO
IF EXISTS (SELECT 1
           FROM   [master].[dbo].[sysdatabases]
           WHERE  [name] = N'$(DatabaseName)')
    BEGIN
        ALTER DATABASE [$(DatabaseName)]
            SET READ_COMMITTED_SNAPSHOT OFF 
            WITH ROLLBACK IMMEDIATE;
    END


GO
IF EXISTS (SELECT 1
           FROM   [master].[dbo].[sysdatabases]
           WHERE  [name] = N'$(DatabaseName)')
    BEGIN
        ALTER DATABASE [$(DatabaseName)]
            SET AUTO_UPDATE_STATISTICS_ASYNC OFF,
                PAGE_VERIFY NONE,
                DATE_CORRELATION_OPTIMIZATION OFF,
                DISABLE_BROKER,
                PARAMETERIZATION SIMPLE,
                SUPPLEMENTAL_LOGGING OFF 
            WITH ROLLBACK IMMEDIATE;
    END


GO
IF IS_SRVROLEMEMBER(N'sysadmin') = 1
    BEGIN
        IF EXISTS (SELECT 1
                   FROM   [master].[dbo].[sysdatabases]
                   WHERE  [name] = N'$(DatabaseName)')
            BEGIN
                EXECUTE sp_executesql N'ALTER DATABASE [$(DatabaseName)]
    SET TRUSTWORTHY OFF,
        DB_CHAINING OFF 
    WITH ROLLBACK IMMEDIATE';
            END
    END
ELSE
    BEGIN
        PRINT N'Impossible de modifier les paramètres de base de données. Vous devez être administrateur système pour appliquer ces paramètres.';
    END


GO
IF IS_SRVROLEMEMBER(N'sysadmin') = 1
    BEGIN
        IF EXISTS (SELECT 1
                   FROM   [master].[dbo].[sysdatabases]
                   WHERE  [name] = N'$(DatabaseName)')
            BEGIN
                EXECUTE sp_executesql N'ALTER DATABASE [$(DatabaseName)]
    SET HONOR_BROKER_PRIORITY OFF 
    WITH ROLLBACK IMMEDIATE';
            END
    END
ELSE
    BEGIN
        PRINT N'Impossible de modifier les paramètres de base de données. Vous devez être administrateur système pour appliquer ces paramètres.';
    END


GO
ALTER DATABASE [$(DatabaseName)]
    SET TARGET_RECOVERY_TIME = 0 SECONDS 
    WITH ROLLBACK IMMEDIATE;


GO
IF EXISTS (SELECT 1
           FROM   [master].[dbo].[sysdatabases]
           WHERE  [name] = N'$(DatabaseName)')
    BEGIN
        ALTER DATABASE [$(DatabaseName)]
            SET FILESTREAM(NON_TRANSACTED_ACCESS = OFF),
                CONTAINMENT = NONE 
            WITH ROLLBACK IMMEDIATE;
    END


GO
IF EXISTS (SELECT 1
           FROM   [master].[dbo].[sysdatabases]
           WHERE  [name] = N'$(DatabaseName)')
    BEGIN
        ALTER DATABASE [$(DatabaseName)]
            SET AUTO_CREATE_STATISTICS ON(INCREMENTAL = OFF),
                MEMORY_OPTIMIZED_ELEVATE_TO_SNAPSHOT = OFF,
                DELAYED_DURABILITY = DISABLED 
            WITH ROLLBACK IMMEDIATE;
    END


GO
IF EXISTS (SELECT 1
           FROM   [master].[dbo].[sysdatabases]
           WHERE  [name] = N'$(DatabaseName)')
    BEGIN
        ALTER DATABASE [$(DatabaseName)]
            SET QUERY_STORE (QUERY_CAPTURE_MODE = ALL, DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_PLANS_PER_QUERY = 200, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 367), MAX_STORAGE_SIZE_MB = 100) 
            WITH ROLLBACK IMMEDIATE;
    END


GO
IF EXISTS (SELECT 1
           FROM   [master].[dbo].[sysdatabases]
           WHERE  [name] = N'$(DatabaseName)')
    BEGIN
        ALTER DATABASE [$(DatabaseName)]
            SET QUERY_STORE = OFF 
            WITH ROLLBACK IMMEDIATE;
    END


GO
IF EXISTS (SELECT 1
           FROM   [master].[dbo].[sysdatabases]
           WHERE  [name] = N'$(DatabaseName)')
    BEGIN
        ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
        ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
        ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
        ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
        ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
        ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
        ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
        ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
    END


GO
IF EXISTS (SELECT 1
           FROM   [master].[dbo].[sysdatabases]
           WHERE  [name] = N'$(DatabaseName)')
    BEGIN
        ALTER DATABASE [$(DatabaseName)]
            SET TEMPORAL_HISTORY_RETENTION ON 
            WITH ROLLBACK IMMEDIATE;
    END


GO
IF fulltextserviceproperty(N'IsFulltextInstalled') = 1
    EXECUTE sp_fulltext_database 'enable';


GO
PRINT N'Création de [dbo].[Customer]...';


GO
CREATE TABLE [dbo].[Customer] (
    [CustomerId]   INT             IDENTITY (1, 1) NOT NULL,
    [FirstName]    NVARCHAR (75)   NOT NULL,
    [LastName]     NVARCHAR (75)   NOT NULL,
    [PhoneNum]     NVARCHAR (50)   NOT NULL,
    [Email]        NVARCHAR (320)  NOT NULL,
    [Password]     VARBINARY (MAX) NOT NULL,
    [Url]          NVARCHAR (MAX)  NULL,
    [ThumbnailUrl] NVARCHAR (MAX)  NULL,
    PRIMARY KEY CLUSTERED ([CustomerId] ASC),
    UNIQUE NONCLUSTERED ([Email] ASC)
);


GO
PRINT N'Création de [dbo].[GetPostHash]...';


GO
CREATE FUNCTION [dbo].[GetPostHash]
(
)
RETURNS NCHAR(2048)
AS
BEGIN
	RETURN N'mWTEVHHfgf68WWtme$y?v_f7v=bWvm6zJ@4cf^@nJdeRRfMAYK%&NT6NneFVKdhWQHCAU$tJXE7_Dv^gJ?yS2_E_G5t=Grt*gXzPFj_+@U6Aqv4@pTSBAng!RLucMn#X@ZrUHSAqx%63EBc?Xn!t9p5Pa4hEXuT7VVR%s+J8%XwwSE?4gPmzUTh5XvPa^=PH^UzfP^bH#H?b$Ht6zRz--c9MErWVhUh?#grdZ8qjnpDP3?wbS_Qxub3k7cgage_gKs?Ktc@P!YZU2hvc=e99+CDfepA$VaJm+JHs8R7J2kjQsJ6Wpq2wjn5T+Bu$y8UKnLR2Kp@Vpa3A69F%-kr2QV=tak*@FSYd?q$Y=n!uny&H+$++h%D+hnBr!qjnD9sm_55PS!dj5H@!4r*F%f8FDvP6CZ6Q#tCBruK_jH8AuPB$FuG4DyNQqdwYUAgMM*%t4DyhSd8kT!J?=a3*ueY5=DqDL6$_xMqq3Fx$*bhH5+xhn2wQcvvFLCAENNF5frM$Ge#ZkRZqHdvVGUa#qpVjRa+u#f%uCZWM!Zb!w!dh4HSyy=&D-EKuQ+#qmSpj6UKMzSs?-4En+%ULjbMfGzK?T7JS3Mn&LPHaF26c66gC5?T=YzKQH5#EftvgqV2dqWZR*EXEL#CZu&sfm7X7Dt-#aR8wbyY66Y2+eA_v^4sKjzev+FAWUE84RSdB7fwjBns&MyX%8u=#uNngQe^Ca*8K@aWq$Ug45fzUM%x!Qxm=3?An*vbqySeyj5v3Pdn-?+g?aYpXfjwM^r89v@r4Zwa7mNtaAS$H6bck$k?NCaShv8Kmc^#THNpNXP_98hKQ4*Gah%vFB-!57jkmdAF8VF3V_KB=*-%&$8mdJX_AsucySsGnDF3PFHK!dm@H+Q_2gqgmJAA4gdq*xcZrCk*zBjsCqN3^2rMQS2AbT?C?%Xu4DE#dJ2rDMJxtH#Q69N2FrRxw9N_E7MZ+QrkV4Z^%enZw9!NT$csc=W37RtgRc2kd^Gq^7&g?rwRtW&MV6=rX9wfMTJ22*TgHBtxxN5!%=-^RBrGP%yYcT_ELbGf4=SfAv-HAxRAWUFfCSE*xnB5N!RpcFt-6CjbXrNY?BJsWXcsfZNmp_kztDyz-MWrK#*MJT$Af==Z#s=xKc_G8Jqhr+Y3pEUrrBh!rsqNhX8BtMWZ*KvuXtULLB9X8yUCVMqc&uejteUfQeaj=!#X3jcH-&knWaV_fKF4*ptmb!297C*AM*NLcRq%EpWnY2_s*nmw-pfdeYvbSc5@PeZcHTpn64r6tEDX@EnYwpR_6cr?CZt2xABq?Cq@K$+Z#UD+x=aNJDD5Hk&8^vE$Qr@ZZ&KE26pGbbpETyFLsam*V4Y?$+U77e4$B7gBGhpfM$e@C6R7%-uxg6&%ym3x3+$2Rd$zbbwCR7e!A+MSxAx$V#6C7_DJspsDNhNppQvnceKLM8VSDqef7K8&ELbNcfE9%rsbMM3?u^&knZ$Uf*jRHYDyHJ2Bgna&E-Gxu+cuJ*+!e!K5avFARtvj!A6AYvbNrfWrCVjgJd9tsU5xq!$W3ZD4&BT7+3=TCnxGZ$-KY%24@sRtVyn_TJPCQMdmN8^rX!t6!W^4Jn#-UP9V56s5%Pa%&fw98Dqa4hUp$FfasY9-+^hRW+BQDthqJyu+AvLxFy!W-UDzuzxZc-uMjbsskLGBXcTKDmhfQ-wZgMG#aUzLdxBzvSmBW-ahtkK4$aGVEyhxCGGf$UT2nB7WpeRJ3CfSaGcD__2^xD4?kyG?jS5_du=!YzA@d2MFeVNdtfnmm%VyTFF2UMbCasp&-7mDL4gEAvhz*P*BK55HUTa*Rmu_au+hL397g+Ap&ekAzpwVr5uaekzTz@_n+6a*zLSbxCN4exm=Ey-b+88mu^zRuHBWBaSV387m*aR%XF$xAu3j&T2@6ddX7eyNvVR_we_ERsZT_vf%%DnF5mNYVH7ttuq23rED?4R&f6Ezn_z!3qT?LTnMSe%g^ZcAf&K_Rd5BUe6dkB?cz26^a76-6tYMn3g^qZzLCebf#fBn-atN&Bmu+j$P9$KCM';
END
GO
PRINT N'Création de [dbo].[GetPreHash]...';


GO
CREATE FUNCTION [dbo].[GetPreHash]
(
)
RETURNS NCHAR(2048)
AS
BEGIN
	RETURN N'Rvd6S_Vexw8=&Zd@f&6huk-ed*TaYv%#By?vRT*=3u^?RR&w=qdK8K9M%9#6s?u?98H7MznANqz_wqATEycvqEDyFjLA$7yhX7GPw#ZpcTaGMaR45V5fPjRTJhUCYfcq4x2-K^tfZJm%=3z3F-5t32nA!ertE=yC*#9WjA^CfVbYJDwApxp=MNGv2#Rs3Jy!P3_mW-9Qs5Yq_S3!ttV6wdhKXA47yFr7YGu*tTc5v*Xayy!6s^SP8U+$-+aWBq!y@!=32?KpjP_?6C_YRv#2b8eE=!qL@&p9Uk2ng4*XsKEJyFTRWWfHxnk^&xs_&R2aKqv-4PvLJW?&=nDLHyunukXHVWhvR^2#HcDkR6?J%45cm_&CpVy+r*D$TXE7sTjLTehLN^RZjSQ4gq7h54aqTgEMD%Ej9&?Q_+PYktcTe?fwNgd^%-CwK*!^YG6K%jR!_MdybeLxEj4-VaXT*&tWURcgMgxNY^FHd5-Yr^%zxAn7AqtyKQbYP$pj^c?Z#x6tK%2r-fy+BW+v6nu^R@YUes8mh7^h%NWgMTw!5Wr6K5&5dMeG=H*&%p&AAVgVf!EnCgdy8XGhvCXMnQeqm795C-2_j?_xC#XYb=KqWzuTpP2e224ZthnWRYq#M75B^jVAH#5YjzDDrj85WJY&qF8Q_%L_*X7k?Q8JNTdS62XcZ8@GaV@Uvj!NAV?mCsjnnU-Bx6C=tjZPGFbquHXUP!bNR6qFeVyx$E3@VAdM9k9GstXJn7!%pu5fR%N5%_s4wKS!6%m@AXs_BbDR+??V!uw=jT?e2m#pqZTLgg#V^*u!zwy+UBR9^=_GE?bsdmGRpaGv!!v$V@?q4tLktLb$=HQ8UD6+4p!_UtxKUJHD%S*AP-yV$Nm3+Eu-b**e8JZVBTZ+$m7g$B&bSdTWPEj$5^g3q2=JCr!T$CuwuyW#CA*r6$rth!pqN_NNBa7f63Y!u%N+yFmCUvv!+7cN=bYKRyzbv&878b9X!NjN9GMt!TZMLuFjUVSB*L^Qm&ke%*EPW!KWGBWJJV6!bNcN5Pu=54ZsQM&4HqrX4y3?e6yLWbSzmuxD&cpAPmMQEJuumMjL7fa7%ae*Gq&5@7VA#$+K&!^wAjsNbWmW%Whw!WgSMbh6n^dRYsR-W!$QzcUF?NK+%kcuz^jDW&y^A!LVSU?YRsE^sKgt8Avp$dz?a-T7XKsSeAF48YMgaAzf=H8Y%N#bdZ8RhKp%2MeSkxk!r_3v*#mnMmq4BCFuZ3MBYE2QNGYNPHXmS%HuQPccw!8$k-RWL$2?aDndyY5yH^^w&6y#vS^FLwpPW37-6-=ch%jpBpPNpMe#Hh#uh?a=9YYpWFmMR&fK@8Hgu2GRbBeGxUZ5$a?54k+5+^gsfQh5ah=ev=YSa_D!5CaZb-e84Y8=jrU%&gj99BCn@aGpS&_3fZ^LgFg85FgJKXH7d&r9fp6b5g+T7y6TW4kc9xB%cNyKeftjbDBCvvnKBE@ZT_#J*b%pGNYv8uxe4Twg4*^g&EPVpYdKFaynnz9=4c5aY=Ms&az+!L3uwbdDD*sMu2qe&cQe_qLk736a!L=?_BY3$^kF#8egD%r?gRRkE^yKbe&GTnhYJuBHs?4+=p5aP$*bF4@dtb^YQwsMyX_UF^Czf-r6bM4Q#hnQTkeTmu#Z8chuZk9-&q_gK-95LKeAhVkk*4mj=R8vAU!ZAG&rpZ?BcBk#fgZm5w=Hcv43t?jtq*!&UkkH*f2kkB2rb-TBsf5weDVG=te=z?PG#NM3RE%G5GV6fd9*aaLQ4?dsk43cnCga2L?yYSGR6?A8s!DfSC6hDjpC_VPr3r2XEjuP&59S_#96J#3t84Q*Yr+e_+P$tzCLPUVtgqHVWcnMM3$q$2KMJ5-mrk^yTGQ!M=s?cZA+nFbJwA4XMK*Cs4dKf4gu&sF9@-aS9RDJv@!cRJXax8=PE?5r9aq9Qg+&_v@ydV8DheQv7kwx#3CcCD7UaVn++JvVEDuAPGjcs*+uHrXz3EvzM2fAyE#4YY*Q^M5&dS$Bcc4R%Y6RLyss#4%ngMJGesC#_w*bNZc5';
END
GO
PRINT N'Création de [dbo].[Login]...';


GO
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
GO
PRINT N'Création de [dbo].[Register]...';


GO
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
GO
PRINT N'Création de [dbo].[Update]...';


GO
CREATE PROCEDURE [dbo].[Update]
	@CustomerId Int,
	@FirstName NVARCHAR(50),
	@LastName NVARCHAR(50),
	@PhoneNum NVARCHAR(50),
	@Email NVARCHAR(320),
	@Url NVARCHAR(Max),
	@ThumbnailUrl NVARCHAR(Max)
AS
BEGIN
	UPDATE [Customer]
	SET [FirstName] = @FirstName,
	[LastName] = @LastName,
	[PhoneNum] = @PhoneNum,
	[Email] = @Email,
	[Url] = @Url,
	[ThumbnailUrl] = @ThumbnailUrl
	WHERE [CustomerId] = @CustomerId
END
GO
DECLARE @VarDecimalSupported AS BIT;

SELECT @VarDecimalSupported = 0;

IF ((ServerProperty(N'EngineEdition') = 3)
    AND (((@@microsoftversion / power(2, 24) = 9)
          AND (@@microsoftversion & 0xffff >= 3024))
         OR ((@@microsoftversion / power(2, 24) = 10)
             AND (@@microsoftversion & 0xffff >= 1600))))
    SELECT @VarDecimalSupported = 1;

IF (@VarDecimalSupported > 0)
    BEGIN
        EXECUTE sp_db_vardecimal_storage_format N'$(DatabaseName)', 'ON';
    END


GO
PRINT N'Mise à jour terminée.';


GO
