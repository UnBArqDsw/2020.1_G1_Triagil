# First Thing First

## Introdução
É uma técnica de priorização onde há um levantamento de dados de benefícios, custos e riscos relacionados a cada requisito.

## Sobre a técnica First Thing First
Nessa prática de priorização, é construída uma tabela de forma que equilibre os posionamentos do cliente e do desenvolvedor. Para isso, devem ser seguidos 8 (oito) passos: 

**Passo 1:** Listar todos os requisitos em uma tabela, retirando aqueles dependentes de outro requisito. 

**Passo 2:** Estimar o benefício relativo que cada recurso fornece ao cliente ou ao negócio de 1 a 9, em que 1 é o menos significativo e 9 o mais significativo.

**Passo 3:** Estimar a penalidade que o negócio sofreria, se o recurso não fosse incluído, de 1 a 9, em que 1 é o com menor penalidade e 9 maior penalidade.

**Passo 4:** A Coluna valor total é a soma do (Benefício Relativo * Peso Relativo + Penalidade Relativa * Peso Relativo), o peso relativo utilizado nesse caso foi de 1.

**Passo 5:** Estimar o custo relativo de implementação de cada requisito, de 1 a 9.

**Passo 6:** Estimar o grau relativo ao risco a cada requisito de uma escala de 1 a 9.

**Passo 7:** Calcular a prioridade para cada requisito usando: valor % / (custo % * Peso custo + risco % * Peso Risco). O Peso custo e risco aqui utilizados foram iguais a 1.

**Passo 8:** Ordenar a lista em ordem decrescente de prioridade.

## Aplicação da técnica no projeto

Para esse método de priorização, utilizamos os requisitos elicitados nos documentos de [Brainstorming](2020.1_G1_Triagil\docs\base\requisitos\elicitacao\brainstorming.md), [Entrevista](2020.1_G1_Triagil\docs\base\requisitos\elicitacao\entrevista.md), [Questionário](2020.1_G1_Triagil\docs\base\requisitos\elicitacao\questionario.md) e [Storyboard](2020.1_G1_Triagil\docs\base\requisitos\elicitacao\storyboard.md).



**Histórico de versões**
Data | Versão | Descrição | Autor(es) |
| --- | --- | --- | --- |
| 16/09/2020 |1.0.0 | Criação do documento na wiki  | Débora Vilela |
| 16/09/2020 |1.1.0 | Adição dos tópicos expositivos| Débora Vilela|


## Referências Bibliográficas

- First Things First: Prioritizing Requirements. E.Wiegers, Karl. Disponível em: https://www.processimpact.com/articles/prioritizing.pdf Acesso em 16 de setembro de 2020.

- First Thing First. Disciplina Requisitos de Software 2019.2, grupo Shazam. Disponível em: https://requisitos-de-software.github.io/2019.2-Shazam/priorizacao/firstThingFirst/ Acesso em 16 de setembro de 2020.