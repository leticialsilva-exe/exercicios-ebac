select * from Customer c 

--Projecao
-- LIMITE

SELECT *
FROM Customer c 
LIMIT 10

-- COUNTING
SELECT COUNT(*)
FROM Customer c 

-- SELECT
SELECT FIRSTNAME, LASTNAME, CITY
FROM Customer c 
LIMIT 10

-- ORDERING
SELECT 
	FIRSTNAME, 
	LASTNAME, 
	CITY
FROM Customer c 
ORDER BY c.FirstName 

SELECT 
	FIRSTNAME, 
	LASTNAME, 
	CITY
FROM Customer c 
ORDER BY 3 DESC 

-- APELIDOS, ALIAS (TABLES AND/OR COLLUMN NAMES)
SELECT 
	FIRSTNAME AS NOME, 
	LASTNAME AS SOBRENOME, 
	CITY AS "CIDADE DO CLIENTE"
FROM Customer c 
ORDER BY 3 DESC 

-- SELECAO FILTRO

SELECT *
FROM Album a 
WHERE a.Title = "Big Ones"

SELECT *
FROM Album a 
WHERE a.ArtistId  = 10

-- null or not null values
SELECT *
FROM Album a 
WHERE a.ArtistId  notnull

SELECT *
FROM Album a 
WHERE a.ArtistId  is null


-- Logic parameters
SELECT *
FROM Album a 
WHERE a.ArtistId  > 100

SELECT *
FROM Album a 
WHERE a.ArtistId  >= 100

SELECT *
FROM Album a 
WHERE a.ArtistId between 10 and 30

SELECT *
FROM Album a 
WHERE a.AlbumId >= 100
	and a.ArtistId = 22
	
SELECT *
FROM Album a 
WHERE a.AlbumId >= 100
	or a.ArtistId = 22

-- Usando like
SELECT *
FROM Album a 
WHERE a.Title like "b%"

select *
from Artist a 
where a.Name like "AC_DC"

-- MANIPULACAO DE DADOS (CRUD)
select *
FROM GENRE
LIMIT 10

INSERT INTO GENRE (NAME) VALUES ('MPB')

-- JUNCAO 

