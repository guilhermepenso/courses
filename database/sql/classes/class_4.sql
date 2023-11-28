-- Aula 4 - WHERE

SELECT *
FROM AdventureWorks2017.Person.Person
WHERE LastName = 'Miller' and FirstName = 'Anna';

SELECT *
FROM AdventureWorks2017.Production.Product
WHERE Color = 'Blue' or Color = 'Black';

SELECT *
FROM AdventureWorks2017.Production.Product
WHERE listPrice > 1500 and listPrice < 5000;

SELECT *
FROM AdventureWorks2017.Production.Product
WHERE Color <> 'Black';

/* 
- DESAFIO 1
    A equipe de produção de produtos precisa do nome de todas as peças que pesam mais de 500kg mas não mais de 700kg para inspeção
*/

SELECT Name, Weight
FROM AdventureWorks2017.Production.Product
WHERE Weight > 500 and Weight <= 700;

/* 
- DESAFIO 2
    Foi pedido pelo marketing uma relação de todos os empregados que são casados e são asalariados
*/

SELECT *
FROM AdventureWorks2017.HumanResources.Employee
WHERE MaritalStatus = 'M' and SalariedFlag = 1;

/* 
- DESAFIO 3
    Um usuário chamado Peter Krebs está devendo um pagamento, consiga o email dele para que possamos enviar uma cobrança!
*/

SELECT *
FROM AdventureWorks2017.Person.EmailAddress
WHERE BusinessEntityID = '26'
