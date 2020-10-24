# GOF's – Criacionais

## Introdução

Antes de entendermos o que é GOF, temos que entender o que é padrões de projeto, que são soluções típicas para problemas comuns em projeto de software. Cada padrão é como uma planta de construção que você pode customizar para resolver um problema de projeto particular em seu código.

GOF é uma abreviação da palavra _Gang of Four_ que são padrões de projetos que busca uma solução consolidada para um problema recorrente no desenvolvimento e manutenção de software orientado a objetos.

E nesse caso será apresentado os padrões **GOF's – Criacionais** que tem como objetivo definir qual classe concreta deve ser utilizada para criar tal, como os objetos devem ser criados e como eles se relacionam com outros objetos do sistema, assim, aumentando a flexibilidade e reutilização de código já existente no software.

## Factory Method

O Factory Method é um padrão criacional de projeto que fornece uma interface para criar objetos em uma superclasse, mas permite que as subclasses alterem o tipo de objetos que serão criados.

<div align="center"><img width="300px" height="200px" src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Factory_Method_UML_class_diagram.png"/></div>

O padrão Factory Method sugere que você substitua chamadas diretas de construção de objetos (usando o operador **new**) por chamadas para um método fábrica especial. Não se preocupe: os objetos ainda são criados através do operador **new**, mas esse está sendo chamado de dentro do método fábrica. Objetos retornados por um método fábrica geralmente são chamados de _produtos_.

### Objetivo

Com o objetivo de evitar acoplamentos firmes entre o criador e os produtos concretos utilizaremos o padrão de projeto Factory Method. Ele utiliza o princípio de responsabilidade única, além de poder mover o código de criação do produto para um único local do programa, facilitando a manutenção do código.

### Exemplo produzido pelo Grupo :

![FactoryMethod](https://imgur.com/SWS9q2J.png)

~~~javascript

class ManagePerson {
    factoryMethod(){
        let person = new Person();
        return person;
    }
}

class ManagePatient extends ManagePerson {
    factoryMethod(fullName, email, password) {
        let patient = new Patient(fullName, email, password);
        return patient;
    }
}

class ManageNurse extends ManagePerson {
    factoryMethod(fullName, email, password) {
        let nurse = new Nurse(fullName, email, password);
        return nurse;
    }
}

 class Person {
    constructor(fullName, email, password){
        this.fullName = fullName;
        this.email = email;
        this.password = password;
    }
 }

function createPerson(type, fullName, email, password) {
    if (type == 'patient') {
        let patient = new ManagePatient();
        patient.factoryMethod(fullName, email, password);
        return patient;
    }
    else {
        let nurse = new ManageNurse();
        nurse.factoryMethod(fullName, email, password);
        return nurse;
    }
}

module.export = {
    ManagePerson,
    ManagePatient,
    ManageNurse,
    Person,
    createPerson,
};

~~~

## Singleton

O Singleton é um padrão de projeto criacional que permite a você garantir que uma classe tenha apenas uma instância, enquanto provê um ponto de acesso global para essa instância.

<div align="center"><img width="300px" height="200px" src="https://refactoring.guru/images/patterns/diagrams/singleton/structure-pt-br.png"/></div>

### Objetivo

* **Garantir que uma classe tenha apenas uma única instância**. Por que alguém iria querer controlar quantas instâncias uma classe tem? A razão mais comum para isso é para controlar o acesso a algum recurso compartilhado—por exemplo, uma base de dados ou um arquivo.

* **Fornece um ponto de acesso global para aquela instância**. Se lembra daquelas variáveis globais que você (tá bom, eu) usou para guardar alguns objetos essenciais? Embora sejam muito úteis, elas também são muito inseguras uma vez que qualquer código pode potencialmente sobrescrever os conteúdos daquelas variáveis e quebrar a aplicação.

### Exemplo produzido pelo Grupo :

~~~javascript

// Uma única conexão com o bancos de dados.

getConnection: function() {
    let app = common.model.connections.App.getInstance();
    if(!app.connection.isConnected()){
       app.connection.connect();
    }
    return app.connection;
}

~~~

## Builder

O Builder é um padrão de projeto criacional que permite  construir objetos complexos passo a passo. O padrão permite que você produza diferentes tipos e representações de um objeto usando o mesmo código de construção.

## Prototype

Prototype é um padrão que faz parte do grupo de padrões Criacionais e que permite a criação de novos objetos a partir de um modelo original, ou como o próprio nome indica, um protótipo, que é clonado.



**Histórico de Versão**

| Data | Versão | Descrição | Autor(es) |
| --- | --- | --- | --- |
| 10/10 | 1.0.0 | Criação do documento | Francisco Heronildo e João Vitor |
| 12/10 | 1.1.0 | Criação do tópico de Objetivo |João Vitor e Francisco Heronildo |
| 12/10 | 1.2.0 | Criação do tópico de exemplo | João Vitor e Francisco Heronildo |
| 12/10 | 1.3.0 | Adicionando introdução do Singleton | Francisco Heronildo e João Vitor |
| 12/10 | 1.4.0 | Adicionando objetivo e um exemplo no Singleton | Francisco Heronildo |
| 23/10 | 1.5.0 | Adicionando introdução do Builder | Nathalia Lorena Cardoso |
| 23/10 | 1.6.0 | Adicionando introdução do Prototype | Nathalia Lorena Cardoso |


## Referências

SERRANO,Milene. **AULA - GOFS CRIACIONAIS**, 64 slides. 2020. Material apresentado para Disciplina de Arquitetura de Desenho de Software do curso de engenharia de software da UnB, FGA. Acesso em: 10, Outubro de 2020.

Padrões de projeto criacionais . **Refactoring.Guru**, 2020. Disponível em: <https://refactoring.guru/pt-br/design-patterns/creational-patterns>. Acesso em: 10, Outubro de 2020.
