#language: pt

Funcionalidade: Tela de cadastro
    Como cliente da EBAC-SHOP
    Quero fazer concluir meu cadastro
    Para finalizar minha compra

Contexto: 
    Dado que eu esteja na tela de Checkout

Esquema do Cenário: Validar campos obrigatórios
    Quando eu nao informar o campo <campo>
    E clicar no botao Finalizar Compra
    Entao deverá apresentar a mensagem <mensagemCampoObrigatorio> informando o usuário

    Exemplos: 
            | campo                | mensagemCampoObrigatorio               |
            | "Nome"               | "Campo Nome obrigatório"               |
            | "Sobrenome"          | "Campo Sobrenome obrigatório"          |
            | "País"               | "Campo País obrigatório"               |
            | "Endereço"           | "Campo Endereço obrigatório"           |
            | "Cidade"             | "Campo Cidade obrigatório"             |
            | "CEP"                | "Campo CEP obrigatório"                |
            | "Telefone"           | "Campo Telefone obrigatório"           |
            | "Endereço de e-mail" | "Campo Endereço de e-mail obrigatório" |

Esquema do Cenário: Validar campos email
    Quando eu preencher o campo email <email> com um formato invalido
    Entao deverá apresentar a mensagem <mensagemEmailInvalido> informando o usuário

    Exemplos: 
            | email        | mensagemEmailInvalido       |
            | "email"      | "Formato de email inválido" |
            | "email.com"  | "Formato de email inválido" |
            | "email@.com" | "Formato de email inválido" |

Esquema do Cenário: Validar campos email

Cenário: Validar cadastro com sucesso
    Quando eu preencher todos os campos conforme os dados
            | nome    | sobrenome | pais     | endereco        | cidade    | cep        | telefone       | email               |
            | "Maria" | "Santos"  | "Brasil" | "Rua Damaceno"  | "Barueri" | "09876320" | "119997615151" | "email@outlook.com" |
            | "Lucas" | "Santos"  | "Brasil" | "Rua Professor" | "Osasco"  | "09876381" | "129765326172" | "email@gmail.com.br" |
    Entao deverá ser efetuado o cadastro com sucesso
