-- Aula 5 - Count

SELECT count(*)
FROM AdventureWorks2017.Person.Person;

SELECT count(Title)
FROM AdventureWorks2017.Person.Person;

SELECT count(DISTINCT Title)
FROM AdventureWorks2017.Person.Person;

/* 
- DESAFIO 1
    eu quero saber quantos produtos temos cadastrados em nossa tabela de produtos
*/

SELECT count(*)
FROM AdventureWorks2017.Production.Product;

/* 
- DESAFIO 2
    eu quero saber quantos tamanhos de produtos temos cadastrado em nossa tabela
*/

SELECT count(Size)
FROM AdventureWorks2017.Production.Product;

/* 
- DESAFIO 3
    eu quero saber quantos tamanhos diferentes de produtos eu tenho cadastrado em nossa tabela de produtos
*/

SELECT count(DISTINCT Size)
FROM AdventureWorks2017.Production.Product;
