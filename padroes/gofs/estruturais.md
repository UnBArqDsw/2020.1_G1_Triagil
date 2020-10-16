# GOFs Estruturais

## Introdução

A adoção de padrões pode trazer inúmeros benefícios para um projeto de desenvolvimento de  software. Um dos principais benefícios é que um padrão de projeto é algo que já foi utilizado inúmeras vezes na solução de um determinado tipo de problema e, devido a isso, o padrão já foi submetido à uma grande variedade de testes e, se ele se tornou um padrão de projeto, é porque foi aprovado nesses testes.

Outro benefício da utilização dos padrões é a facilidade de entendimento e manutenção do código-fonte. A padronização contribui diretamente para a redução do acoplamento e para o aumento da coesão de nossas classes, proporcionando uma redução de custo e tempo em nossas futuras manutenções.

## Gof's Estruturais

Os padrões estruturais vão se preocupar em como as classes e objetos são compostos, ou seja, como é a sua estrutura. O objetivo destes padrões e facilitar o design do sistema identificando maneiras de realizar o relacionamento entre as entidades, deixando o desenvolvedor livre desta preocupação.

Os padrões com escopo de classe utilizam a herança para compor implementações ou interfaces. O padrão Adapter, por exemplo, pode definir uma nova interface para adaptar duas outras já existentes, assim uma nova classe é criada para adaptar uma interface a outra. Os padrões com escopo de objeto utilizam a composição de objetos para definir uma estrutura. Por exemplo, o padrão Composite define (explicitamente) uma estrutura de hierárquica para classes primitivas e compostas em um objeto.

### Adapter

O Adapter é um padrão de projeto estrutural que permite objetos com interfaces incompatíveis colaborarem entre si.

![Adapter_login](https://imgur.com/H5EDEW5.png)

### Bridge

O Bridge é um padrão de projeto estrutural que permite que você divida uma classe grande ou um conjunto de classes intimamente ligadas em duas hierarquias separadas—abstração e implementação—que podem ser desenvolvidas independentemente umas das outras.

### Composite

O Composite é um padrão de projeto estrutural que permite que você componha objetos em estruturas de árvores e então trabalhe com essas estruturas como se elas fossem objetos individuais.

### Decorator

O Decorator é um padrão de projeto estrutural que permite que você acople novos comportamentos para objetos ao colocá-los dentro de invólucros de objetos que contém os comportamentos.

### Facade

O Facade é um padrão de projeto estrutural que fornece uma interface simplificada para uma biblioteca, um framework, ou qualquer conjunto complexo de classes.

### Flyweight

O Flyweight é um padrão de projeto estrutural que permite a você colocar mais objetos na quantidade de RAM disponível ao compartilhar partes comuns de estado entre os múltiplos objetos ao invés de manter todos os dados em cada objeto.

### Proxy

O Proxy é um padrão de projeto estrutural que permite que você forneça um substituto ou um espaço reservado para outro objeto. Um proxy controla o acesso ao objeto original, permitindo que você faça algo ou antes ou depois do pedido chegar ao objeto original.



### Proposta do Grupo para implementação no Projeto
Após estudar os GoFs estruturais, selecionamos alguns dos modelos para propor sugestões as quais possamos aplicar em nosso projeto. 

##### **FACADE**
A ideia é utilizarmos um FACADE para que a questão de organizar e priorizar a fila de pacientes possa desfrutar dos benefícios de tal técnica, como a agilidade, desacoplamento e rapidez. 
![Facade_OrdenadorPrioridade](https://i.imgur.com/1Vr2XX5.jpg) 

#### Histórico de Versão

| Data | Versão | Descrição | Autor(es) |
| --- | --- | --- | --- |
| 10/10/2020 | 1.0.0 | Criação do documento no pages | Nathalia Lorena |
| 10/10/2020 | 1.1.0 | Adicionado Introdução ao documento | Nathalia Lorena |
| 10/10/2020 | 1.2.0 | Acrescentando novos tópicos | Nathalia Lorena |
| 12/10/2020 | 1.3.0 | Adicionando exemplo Adapter no login | Débora Vilela |
| 14/10/2020 | 1.4.0 | Adicionando Referências| Nathalia Lorena |
| 16/10/2020 | 1.5.0 | Adicionando Proposta de aplicação no projeto | Miguel Alves e Lude Ribeiro |

## Refêrencias

SERRANO,Milene. AULA - GOFS ESTRUTURAIS, 71 slides. 2020. Material apresentado para Disciplina de Arquitetura de Desenho de Software do curso de engenharia de software da UnB, FGA. Acesso em: 10, Outubro de 2020.

Padrões de projeto Estruturais . Refactoring.Guru, 2020. Disponível em: [https://refactoring.guru/pt-br/design-patterns/structural-patterns](https://refactoring.guru/pt-br/design-patterns/structural-patterns). Acesso em: 10, Outubro de 2020.
