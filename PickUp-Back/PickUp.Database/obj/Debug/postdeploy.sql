/*
Modèle de script de post-déploiement							
--------------------------------------------------------------------------------------
 Ce fichier contient des instructions SQL qui seront ajoutées au script de compilation.		
 Utilisez la syntaxe SQLCMD pour inclure un fichier dans le script de post-déploiement.			
 Exemple :      :r .\monfichier.sql								
 Utilisez la syntaxe SQLCMD pour référencer une variable dans le script de post-déploiement.		
 Exemple :      :setvar TableName MyTable							
               SELECT * FROM [$(TableName)]					
--------------------------------------------------------------------------------------
*/

insert into [User]
values('O tacos','','','Beaucoup de gras gras gras gras ','Place de la Station',24,'Namur',5000
,081261690,50.468213038565295, 4.861837781971672,3.4, 
'http://192.168.1.37:9000/images/oTacosLogo-1610444096259_full.jpg',
'http://192.168.1.37:9000/images/oTacosLogo-1610444096259_thumb.jpg');

insert into [User]
values('Quick','','','Degeu mais ya rien dautre','Chaussée de Liège',519,'Jambes',5100,081308110
,50.46444742477428, 4.898825257706169,3.7, 
'http://192.168.1.37:9000/images/QuickLogo-1610444071611_full.jpg',
'http://192.168.1.37:9000/images/QuickLogo-1610444071611_thumb.jpg');

insert into [User]
values('Pizza Hut','','','PIZZZZZZZZZZZZZZZA A AAAAAAA ZZZZZZAA','Rue Jean-Baptiste Brabant',17,'Namur',5000,081260200
,50.46559581676111, 4.872299686605619,4.3, 
'http://192.168.1.37:9000/images/PizzaHutLogo-1610444081606_full.jpg',
'http://192.168.1.37:9000/images/PizzaHutLogo-1610444081606_thumb.jpg');
insert into [User]
values('Sushi Shop','','','Sushooooooooooooooooooo oekfke ','Rue de Fer',117,'Namur',5000,081208989
,50.46763682695344, 4.865404144374133,4.6,
'http://192.168.1.37:9000/images/SushiShop1-1610444051341_full.jpg',
'http://192.168.1.37:9000/images/SushiShop1-1610444051341_thumb.jpg');
insert into [User]
values('Au Bombay','','','L inde la mere de notre patrie','Rue Rogier',60,'Namur',5000,0494540990
,50.4674617490534, 4.868281059691853,4.8, 
'http://192.168.1.37:9000/images/AuBombayLogo-1610443998115_full.jpg',
'http://192.168.1.37:9000/images/AuBombayLogo-1610443998115_thumb.jpg');
insert into [User]
values('Burger King','','','Un peu mieux que Quick mais pas trop non plus','Place de la Station',8,'Namur',5000,081229003
,50.47849692348678, 4.861385283842921,3.9,
'http://192.168.1.37:9000/images/BurgerKingLogo-1610444144273_full.jpg',
'http://192.168.1.37:9000/images/BurgerKingLogo-1610444144273_thumb.jpg');
insert into [User]
values('Cat s Corner','','','Manger des chats ?????? Non merci monsieur','Avenue du Bourgmestre Jean Materne',230,'Jambes',5100,081748331
,50.45497700163664, 4.876590286569425,4.5,
'http://192.168.1.37:9000/images/CatSCornerLogo-1610444131247_full.jpg',
'http://192.168.1.37:9000/images/CatSCornerLogo-1610444131247_thumb.jpg');
insert into [User]
values('YouWok','','','Nouille comme dans Naruto','Place de la Station',14,'Namur',5000,081748431
,50.48071021510607, 4.86011300990447,3.9,
'http://192.168.1.37:9000/images/YouWok4-1610444039470_full.jpg',
'http://192.168.1.37:9000/images/YouWok4-1610444039470_thumb.jpg');
insert into [User]
values('Mc Donalds','','','Le M c est le gout, viens comme t es gros','Avenue de la Gare',11,'Namur',5000,081748431
,50.50500017787508, 4.889816323552466,4, 
'http://192.168.1.37:9000/images/McDonalds3-1610444117718_full.jpg',
'http://192.168.1.37:9000/images/McDonalds3-1610444117718_thumb.jpg');
insert into [User]
values('Mex & Go','','','Le mexicans est bon mais le cul n aime pas trop','Rue Basse Marcelle',15,'Namur',5000,081748431
,50.473963472874246, 4.858430418478774,4.2,
'http://192.168.1.37:9000/images/MexAndGo4-1610444107368_full.jpg',
'http://192.168.1.37:9000/images/MexAndGo4-1610444107368_thumb.jpg');


insert into CategoryDetail
values('Fast Food')
insert into CategoryDetail
values('Pizza')
insert into CategoryDetail
values('Burgers')
insert into CategoryDetail
values('Japonais')
insert into CategoryDetail
values('Chinois')
insert into CategoryDetail
values('Indien')
insert into CategoryDetail
values('Grille')


insert into Category
values(1,1)
insert into Category
values(2,1)
insert into Category
values(3,1)
insert into Category
values(6,1)
insert into Category
values(7,1)
insert into Category
values(9,1)
insert into Category
values(10,1)
insert into Category
values(3,2)
insert into Category
values(2,3)
insert into Category
values(6,3)
insert into Category
values(7,3)
insert into Category
values(9,3)
insert into Category
values(4,4)
insert into Category
values(8,5)
insert into Category
values(5,6)
insert into Category
values(7,7)
insert into Category
values(10,7)


insert into EventDetail
values('Noel20', 'Un menu acheter un menu offert')
insert into EventDetail
values('BlackFriday', '25% sur les menus')
insert into EventDetail
values('Cupidon', '30% sur les menus a deux')
insert into EventDetail
values('N0', 'Un menu acheter un menu enfant offert')
insert into EventDetail
values('Pfr3', '5€ offert lors d une commande')


insert into [Event]
values(1,1)
insert into [Event]
values(1,3)
insert into [Event]
values(3,2)
insert into [Event]
values(2,4)
insert into [Event]
values(4,1)
insert into [Event]
values(3,1)
insert into [Event]
values(5,1)

GO
