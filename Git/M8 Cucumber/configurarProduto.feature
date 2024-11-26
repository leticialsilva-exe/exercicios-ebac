#language: pt

Funcionalidade: Configurar Produto 
    Como cliente da EBAC-SHOP
    Quero configurar meu produto de acordo com meu tamanho e gosto
    E escolher a quantidade
    Para depois inserir no carrinho

Contexto: 
    Dado que eu esteja na tela de detalhes do produto

Esquema do Cenário: Validar campos obrigatórios
    Quando eu nao selecionar a <caracteristica> do produto
    E clicar no botao comprar
    Entao deve apresentar a mensagem <texto> informando ao cliente que o campo é obrigatorio

    Exemplos:
            | caracteristica | texto                              |
            | "cor"          | "O campo COR é obrigatorio"        |
            | "tamanho"      | "O campo TAMANHO é obrigatorio"    |
            | "quantidade"   | "O campo QUANTIDADE é obrigatorio" |

Esquema do Cenario: Validar quantidade permitida de venda
    Quando eu preencher os campos obrigatorios
    E selecionar quantidade <qtd> do produto
    Entao deve apresentar a mensagem <texto> de sucesso

    Exemplos:
            | qtd  | texto                                        |
            | "9"  | "Produto adicionado ao carrinho"             |
            | "10" | "Produto adicionado ao carrinho"             |
            | "11" | "Quantidade maxima de 10 produtos por venda" |

Cenário: Validar botao limpar
    Quando eu clicar no botao limpar
    Entao todas as caracteristicas devem voltar ao estado original


