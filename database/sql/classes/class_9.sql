-- Aula 9 - IN

SELECT *
FROM AdventureWorks2017.Production.Product
WHERE 'Black' IN (Color);

SELECT *
FROM AdventureWorks2017.Person.Person
WHERE BusinessEntityID IN (2, 7, 13);

SELECT *
FROM AdventureWorks2017.Person.Person
WHERE BusinessEntityID NOT IN (2, 7, 13);