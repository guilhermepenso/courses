-- Aula 8 - BETWEEN

SELECT *
FROM AdventureWorks2017.Production.Product
WHERE listPrice BETWEEN 1000 AND 1500
ORDER BY listPrice ASC;

SELECT * 
FROM AdventureWorks2017.Production.Product
WHERE listPrice NOT BETWEEN 1000 AND 1500
ORDER BY listPrice ASC;

SELECT *
FROM AdventureWorks2017.HumanResources.Employee
WHERE HireDate BETWEEN '2009/01/01' AND '2010/01/01'
ORDER BY HireDate ASC;