# GOF's - Comportamentais
## Introdução

<p>Padrões de projeto são soluções típicas para problemas comuns em projeto de software.
<p>Padrões de projeto diferem por sua complexidade,
nível de detalhe e grau de aplicabilidade. Além
disso, eles podem ser categorizados por seu
propósito e divididos em três grupos: criacionais, estruturais e comportamentais.

## GOF's Comportamentais

<p>Os padrões de comportamento se concentram nos algoritmos e atribuições de responsabilidades entre os objetos. Eles não descrevem apenas padrões de objetos ou de classes, mas também os padrões de comunicação entre os objetos. Os padrões comportamentais de classes utilizam a herança para distribuir o comportamento entre classes, e os padrões de comportamento de objeto utilizam a composição de objetos em contrapartida a herança.

<p>Segue abaixo uma breve explicação dos padrões comportamentais:

- O _**Chain of Responsibility**_ : permite que você passe pedidos por uma corrente de handlers. Ao receber um pedido, cada handler decide se processa o pedido ou o passa adiante para o próximo handler na corrente.

- O _**Iterator**_ : permite a você percorrer elementos de uma coleção sem expor as representações dele (lista, pilha, árvore, etc.)

- O _**Command**_ : transforma um pedido em um objeto independente que contém toda a informação sobre o pedido. Essa transformação permite que você parametrize métodos com diferentes pedidos, atrase ou coloque a execução do pedido em uma fila, e suporte operações que não podem ser feitas.

- O _**Mediator**_ : permite que você reduza as dependências caóticas entre objetos. O padrão restringe comunicações diretas entre objetos e os força a colaborar apenas através do objeto mediador.

- O _**Memento**_ : permite que você salve e restaure o estado anterior de um objeto sem revelar os detalhes de sua implementação.

- O _**Observer**_ : permite que você defina um mecanismo de assinatura para notificar múltiplos objetos sobre quaisquer eventos que aconteçam com o objeto que eles estão observando.

- O _**State**_ : permite que um objeto altere seu comportamento quando seu estado interno muda. Parece como se o objeto mudasse de classe.

- O _**Strategy**_ : permite que você defina uma família de algoritmos, coloque-os em classes separadas, e faça os objetos deles intercambiáveis.

- O _**Template Method**_ : define o esqueleto de um algoritmo na superclasse mas deixa as subclasses sobrescreverem etapas específicas do algoritmo sem modificar sua estrutura.

- O _**Visitor**_ : que permite que você separe algoritmos dos objetos nos quais eles operam.

**Diagramas e trechos de códigos não abordados nesse documento podem ser encontrados no seguinte link:** 
[Toys](https://unbarqdsw.github.io/2020.1_G1_Triagil/padroes/toys/gofsComportamentais/)


**Histórico de Versão**

| Data | Versão | Descrição | Autor(es) |
| --- | --- | --- | --- |
| 11/10/2020 | 1.0.0 | Criação do documento no pages |  Débora Vilela  |
| 12/10/2020 | 1.1.0 | Adição dos tópicos Introdução e GOF's comportamentais ao documento |  Débora Vilela  |
| 12/10/2020 | 1.2.0 | Criação do tópico Proposta de aplicação no projeto e adição de referências |  Débora Vilela  |
| 26/10/2020 | 1.3.0 | Acrescentando rastros para toys | Nathalia Lorena |


## Referências

- Padrões de projetos comportamentais. Disponível em: https://refactoring.guru/pt-br/design-patterns/behavioral-patterns. Acesso em 11 de outubro de 2020.

- Padrões de Projetos GoF: Dicas de Memorização e Questões de Concursos. Disponível em: https://blog.grancursosonline.com.br/padroes-de-projetos-gof-dicas-de-memorizacao-e-questoes-de-concursos/. Acesso em 12 de outubro de 2020.