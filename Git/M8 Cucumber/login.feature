#language: pt

Funcionalidade: Login
    Como cliente da EBAC-SHOP
    Quero fazer o login (autenticação) na plataforma
    Para visualizar meus pedidos

Contexto: 
    Dado que eu esteja na tela de login da EBAC

Cenário: Login com sucesso
    Quando eu inserir usuario e senha válidos
        | usuario              | senha    |
        | "ebac1@email.com"    | "abc123" |
        | "ebac2@email.com.br" | "a1b2c3" |
    Entao deverá realizar login com sucesso e apresentar a tela de checkout

Esquema do cenario: Login com dados invalidos
    Quando eu inserir o <usuario>
    E a <senha>
    Entao deverá apresentar a mensagem <texto> informando ao cliente

    Exemplos:
            | usuario           | senha      | texto                          |
            | "ebac1@email.com" | "invalido" | "Usuário ou senha inválidos"   |
            | "ebac2@email.com" | abc123"    | ""Usuário ou senha inválidos"" |