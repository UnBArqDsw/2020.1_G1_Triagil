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

![First_Thing_First](https://imgur.com/BcGrAmi.png)

### Tabela de referência dos requisitos funcionais

|Requisitos|Origem|Descrição|
|:--------:|:-------:|:------------------:|
|RF01   |BS01 |O enfermeiro deve visualizar a lista de pacientes "normal" e "preferencial" |
|RF02   |BS02|O enfermeiro deve realizar seu cadastro com a chave de acesso do hospital|
|RF03   |BS04, Q13|O enfermeiro deve ter acesso ao dados de todos os pacientes|
|RF04   |BS06, SB07|A enfermeira deve ter a opção de alterar ou confirmar a classificação do paciente feita por ela|
|RF05   |BS08|O enfermeiro deve poder corrigir a classificação do paciente em apenas 1 nível abaixo ou acima da análise que ele fez previamente|
|RF06   |BS09, Q03|O enfermeiro deve cadastrar novos pacientes|
|RF07   |BS13|O enfermeiro tem acesso à parte de priorização da triagem|
|RF08   |BS20, Q04, SB01|O paciente pode se cadastrar no aplicativo a qualquer momento|
|RF09   |BS21|O login do paciente para entrar na fila do hospital só pode ser feito ao entrar na rede de hospital|
|RF10   |BS24|O sistema Triágil deve enviar ao hospital atualização constante da fila de pacientes de acordo com os níveis de classificação|
|RF11   |ENT01|O aplicativo deve possuir uma fila|
|RF12   |ENT03|O aplicativo deve apresentar fila ou filas de triagem para o/a enfermeiro(a)|
|RF13   |ENT04|O aplicativo deve possuir uma aba com informações consideradas essenciaIs pelos profissionais da saúde|
|RF14   |ENT05|O aplicativo deve apresentar o histórico médico do paciente|
|RF15   |Q01|O enfermeiro deve realizar cadastro com vinculação de algum hospital|
|RF16   |Q02|O enfermeiro deve consultar pacientes já cadastrados|
|RF17   |Q05|O sistema deve autenticar os dados enfermeiro e do hospital|
|RF18   |SB08|O enfermeiro deve alterar a posição do paciente na fila|

---

**Histórico de versões**
|Data|Versão|Descrição|Autor(es)|
|:--:|:----:|:-------:|:-------:|
| 16/09/2020 |1.0.0 | Criação do documento na wiki  | Débora Vilela |
| 16/09/2020 |1.1.0 | Adição dos tópicos expositivos| Débora Vilela|
|17/09/2020| 1.2.0| Adição de tabelas ao documento| Débora Vilela| 


## Referências Bibliográficas

- First Things First: Prioritizing Requirements. E.Wiegers, Karl. Disponível em: https://www.processimpact.com/articles/prioritizing.pdf Acesso em 16 de setembro de 2020.
