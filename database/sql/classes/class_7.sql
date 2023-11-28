-- Aula 7 - ORDER BY

SELECT listPrice, Size, Weight, DaysToManufacture, Color
FROM AdventureWorks2017.Production.Product
WHERE listPrice > 500 and listPrice < 1000
ORDER BY listPrice ASC, Color ASC, Size ASC;

SELECT listPrice
FROM AdventureWorks2017.Production.Product
WHERE listPrice > 500 and listPrice < 1000
ORDER BY listPrice DESC;

/* 
- DESAFIO 1 
    Obter o ProductID dos 10 produtos mais caros cadastrados no sistema, listando do mais caro para o mais barato
*/

SELECT TOP 10 ProductID
FROM AdventureWorks2017.Production.Product
ORDER BY listPrice DESC;

/* 
- DESAFIO 2 
    Obter o nome e numero do produto que tem o ProductID entre 1~4
*/

SELECT TOP 4 Name, ProductNumber
FROM AdventureWorks2017.Production.Product
ORDER BY ProductID ASC;
