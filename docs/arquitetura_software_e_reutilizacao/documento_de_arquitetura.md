# Documento de Arquitetura do TRIAGIL

## 1 Introdução

### 1.1 Finalidade

Este documento tem como finalidade descrever a arquitetura da aplicação Triagil. Ele apresenta as decisões de arquitetura para o projeto de forma objetiva e clara e também contém informações que servem de guia para desenvolvedores compreenderem o fluxo de informações e tecnologias envolvidas.

### 1.2 Escopo

Este documento possui o objetivo de apresentar as estruturas arquiteturais que fundamentaram a construção do projeto Triagil, bem como apresentar os padrões adotados pela equipe, tecnologias escolhidas, dessa forma, auxiliando no entendimento da estrutura do projeto.

### 1.3 Definições, Acrônimos e Abreviações

* **API:** Application Programming Interface (Interface de Programação de Aplicativos).
* **MVC:** Model-View-Controller.
* **App:** Application (Aplicativo)
* **Back-end:** Possibilita o apoio e funcionamento às ações do usuário da máquina.
* **Front-end:** Parte da aplicação que interage diretamente com o usuário.
* **Triagil:** Nome dado ao aplicativo desenvolvido nesse projeto.

### 1.4 Referências

* [Design Patterns](https://refactoring.guru/design-patterns) 
* [MVC](https://www.treinaweb.com.br/blog/o-que-e-mvc/)
* [HubCare](https://cjjcastro.gitlab.io/2019-1-hubcare-docs/project/architecture-document/#1-introducao)
* [Cafofo](https://desenho-2019.github.io/Wiki/Din%C3%A2mica%20e%20Semin%C3%A1rio%20V/Documento%20de%20Arquitetura/#10-tamanho-e-desempenho)
* [React-Native](https://reactnative.dev/)
* [Qr Comer](https://fga-desenho-2019-2.github.io/Wiki/seminario5/arquitetura/)

### 1.5 Visão Geral
No presente documento serão abordadas as soluções arquiteturais  utilizadas no projeto Triagil por meio de explicações detalhadas sobre cada tecnologia utilizada,e a forma como foram aplicados os  padrões de projeto em cada elemento implementado pela equipe bem como propostas de reutilização no Triagil. Para melhor visualização, o conteúdo do documento está distribuído nos seguintes tópicos:

* Representação arquitetural;
* Metas e Restrições da Arquitetura;
* Visão de Casos de Uso;
* Visão Lógica;
* Pacotes de Design Significativos do Ponto de Vista da Arquitetura;
* Visão de Processos;
* Visão de Implantação;
* Visão de Implementação;
* Camadas;
* Visão de Dados;
* Tamanho e Desempenho;
* Qualidade.

## 2 Representação Arquitetural

### 2.1 Visão geral 
![Visao_arq](https://imgur.com/vofa7oU.png)

### **Model-View-Controller**
"O padrão de arquitetura [MVC](http://www.tiagobarros.org/docs/SMVC.pdf) _(Model-View-Controller)_ [Krasner and Pope 1998]
é bastante utilizado no desenvolvimento de aplicações para dispositivos móveis pois determina a separação de uma aplicação em três elementos. O elemento _Model_ é formado por entidades que representam os dados da aplicação. A  _View_ tem por objetivo realizar a
apresentação destes dados e capturar os eventos do usuário, sendo representada pelas 
telas. O elemento _Controller_ faz a ligação entre o _Model_ e a _View_, realizando o tratamento dos
eventos, atuando sobre a _Model_ e alterando os elementos da _View_ para representar a nova
forma dos dados."

### 2.2 Tecnologias

* Front-End:

    ![front](https://imgur.com/zHUMwoY.png)

    -  React Native: utilizada para desenvolvimento do front-end mobile do Triagil, é um _framework_ JavaScript criado para construir a interface do usuário em aplicativos para dispositivos móveis . Criado pelo Facebook baseado no React - que cria interfaces voltadas para aplicações web, o React Native é a solução para criar aplicativos nativos tanto para Android quanto para iOS; isso significa que um único código pode ser escrito e servirá tanto para Android quanto para iOS. Podemos dizer que o React Native:utiliza sintaxe declarativa, parte do processo de integração contínua é baseado em componentes, é multiplataforma.

    - Expo: _framework_ para auxiliar o desenvolvimento de aplicações em React Native para ter interação com o mobile, para _buildar_ e gerar uma versão instalável do aplicativo, desenvolver e fazer o apk para instalar no celular e _deploy_. Pode ser usado para _deploy_ contínuo. Possui códigos prontos de funções para desenvolvimento. Possui a base dele em JavaScript.

    - Yarn e NPM: gerenciador de pacotes que utilizamos. 

    - Redux: tecnologia para aplicar uma arquitetura para o React Native. _Container_ de estados que possibilita que as aplicações possam  compartilhar estados entre telas/instâncias na aplicações onde não poderia ser possível essa comunicação. Se bem utilizado participa do ciclo de vida do React Native.

    - Axios: é um cliente HTTP baseado em _Promises_ para fazer requisições. Pode ser utilizado tanto no navegador quando no Node.js.

    - CSS: _Cascading Style Sheets_ ou Folhas de Estilo em Cascata é uma linguagem de estilo usada para descrever a apresentação de um documento escrito em HTML ou em XML; descreve como elementos são mostrados na tela, no papel, na fala ou em outras mídias.


* Back-End:

    ![back](https://imgur.com/TtMRTyo.png)

    - Node.js: Node.js é uma tecnologia usada para executar código JavaScript fora do navegador. o principal bloco de construção de aplicações web com JavaScript e Node.js é o Express. 

    - Express: É com esse framework de caráter minimalista e muito simples de aprender que criamos desde web sites até APIs RESTful com JavaScript. No Triagil teve a função de conexão com as rotas em HTTP. 

    - Nodemon: atualização automática do servidor.

    - Sucrase: interpretador de diversos tipos de JavaScript para interpretar algumas notações no Node.

    - Sequelize: ORM que faz o mapeamento dos dados que cria tabelas, linhas e colunas no banco de dados. Ele pega as informações que são passadas e faz a transição para uma tabela SQL.

    - PostgreSQL: embora não tenhamos utilizado esse banco de dados diretamente, uma imagem dele foi adicionada ao Docker.

    - Docker: utilizado para orquestração de imagens em um projeto. No Triagil, fez a orquestração da imagem do PostgreSQL.

    - Bcript.js: usada para criptografar a senha para ser salva no banco de dados, de forma a proteger dados sensíveis. Nesse caso, é manipulado apenas o REST de um dado sensível, garantido a segurança da informação.


### 2.3 Arquitetura

* Front-End: _View_ do projeto

    - App.js: arquivo raiz, que chama o restante do aplicativo na parte do _front-end_. Nele há o _provider_ que recebe a _store_.

    - _Assets_: recursos que queira usar. No caso do nosso projeto, foi criada por padrão.

    - _Icons_ e _Images_: estão armazenados ícones e imagens utilizados no projeto, respectivamente.

    - _Screens_: onde as telas foram desenvolvidas. Possui na maioria das telas, o que a tela tem que conter, criar funções e fazer chamadas e imports, onde estaria a "main" da tela, onde acontece a renderização, quais componentes serão utilizados naquela tela.

    - _Utils_: onde ficam configurações que podem ser úteis e utilizáveis em várias partes do projeto (_strings_, rotas,etc)

    - Store: A _store_ é uma container/despensa onde deposita informações que são importantes do aplicativo e podem ser acessadas por todo o app. Ela que contém os estados do nosso aplicativo (states) que definimos como importantes para serem compartilhados entre as instâncias. O arquivo Store.js é onde a _store_ é criada; nela é importado o _InitialState_, que define a _Store_ e como ela vai ser de acordo com o estado inicial definido para ela; 

    - _Reducers_: parte do código  responsável por atualizar a _store_. Define como _store_ vai funcionar. Exemplo: _UserReducer_ vai atualizar o  _Store_ no objeto _User_. 

    - _Actions_: quando disparada, chama o _reducer_ e identifica o precisa ser feito. Instrução sobre qual _reducer_ deve ser ativado, e também carrega a informação que o reducer precisa. 

    - Type.js: responsável por definir o tipo da _action_. 

    - _Containers_: envelopam e contém a tela. Responsável por mapear a _store_ para uma tela específica (a partir do método _mapStateToProps_) e por disparar as _actions (mapDispatchToProps)_.

    - Comunicação com o _Back-End_: através das requisições com a API Rest. Os dados são obtidos e enviados em JSON numa requisição HTTP.

    - _Components_: componentes nativos ou desenvolvidos que podem ser usados naquele momento ou futuramente ao sobrescrever o método. Ele pode ser instanciado e tem um código onde os métodos podem ser 
    reutilizados muitas vezes. Todos os métodos  foram desenvolvidos originais específicos para o Triagil.

    ![arqfront](https://imgur.com/O3mfDWD.png)


* Back-End: _Model_ e  _Controller_ do projeto

    - Routes.js: arquivo onde estão definidas as rotas do projeto, que permitem a conexão do _front-end_ com o _back-end_.

    - Server.js: Configuração de porta para manter o servidor ativo e instancia _App_.

    - Index.js: realiza todas as conexões das models com o banco de dados.

    - App: contém _controller_ e _model_.

    - Config: configurações padrão (PostgreSQL, _localhost_, Express etc).

    - _Migrations_: código gerado pelo _Sequelize_ onde os dados são inseridos e passam por uma conversão para uma tabela SQL.

    - _Controllers_: manipula os dados e objetos para enviar para o banco de dados.

    - _Models_: onde são definidos todos os atributos das _models_, ou seja, todas as informações tidas de uma determinada tabela do banco de dados.


## 3 Metas e Restrições da Arquitetura


As restrições para o projeto Triagil são as seguintes:

- Para utilizar a aplicação é preciso ter o App instalado e ter conexão com a internet;
- Temos o objetivo de posteriormente disponibilizar a aplicação nas plataformas Apple Store e Play Store.
- Utilizamos o framework Expo na versão 3.28.2
- Para o Front end, será utilizado React-Native, na versão 0.63, que é uma biblioteca JavaScript;
- A versão do Docker-Compose 1.27;
- A equipe possui 6 integrantes;
- Tempo limitado à aproximadamente 4 meses, que é o tempo de duração da disciplina.

## 4 Visão de Casos de Uso

### 4.1 Visão de Casos de Uso
![est-l-enfemeira](https://imgur.com/1w89OCr.png)
* Mais detalhes em [Diagrama de Caso de Uso](https://github.com/UnBArqDsw/2020.1_G1_Triagil/blob/master/docs/modelagem/diagramas/dinamicos/diagrama_use_case.md)
## 5 Visão Lógica

### 5.1 Visão Geral

[Diagrama de Classes](https://github.com/UnBArqDsw/2020.1_G1_Triagil/blob/master/docs/modelagem/diagramas/estaticos/diagrama_classes.md
)
![Diagrama de Classes ](https://i.imgur.com/VyIhd2K.png)

### 5.2 Pacotes de Design Significativos do Ponto de Vista da Arquitetura

#### 5.2.1 Diagramas de Pacotes

Diagramas de pacotes são diagramas estruturais usados para mostrar, em uma forma de pacotes, a organização e disposição de vários elementos de modelos. Um pacote é um agrupamento de elementos UML relacionados, como diagramas, documentos, classes ou até mesmo outros pacotes. Na imagem abaixo, representamos o Diagrama de Pacotes Geral da aplicação Triagil:

#### Diagrama geral de pacotes

![Diagrama de Pacotes Geral](https://imgur.com/Pr0tf96.png)

* Mais detalhes e restante dos diagramas em: [Diagramas de Pacotes](https://github.com/UnBArqDsw/2020.1_G1_Triagil/blob/master/docs/modelagem/diagramas/estaticos/diagrama_pacotes.md)

## 6 Visão de Processos

### 6.1 Diagrama de Sequência

O diagrama de sequência é uma solução dinâmica de modelagem em UML bastante usada porque incide especificamente sobre linhas da vida, ou os processos e objetos que vivem simultaneamente, e as mensagens trocadas entre eles para desempenhar uma função antes do término da linha da vida.

**Diagrama de Sequência do fluxo principal do Triagil**

![Diagrama de Sequência Fluxo Principal](https://imgur.com/ay8IsKs.png)

* Mais detalhes e restante dos diagramas em: [Diagramas de Sequencia](https://github.com/UnBArqDsw/2020.1_G1_Triagil/blob/master/docs/modelagem/diagramas/dinamicos/diagrama_sequencia.md)

##  7 Visão de Implantação
O diagrama a seguir mostra como os nós físicos do sistema se comunicam.
![implantacao](https://imgur.com/Rgrkywn.png)


## 8 Visão da Implementação

### 8.1 Visão Geral
O padrão arquitetural MVC foi escolhido para ser a estrutura padrão do projeto. O projeto foi dividido em duas camadas: _Front-end e Back-end_. 

O _back-end_ do Triagil ficou composto por duas camadas: _Model_ e _Controller_; e o _front-end_ ficou como _View_ do projeto.

### 8.2 Camadas

* Front-end: 

    *   _**Screens**_: onde as telas foram desenvolvidas. Possui na maioria das telas, o que a tela tem que conter, criar funções e fazer chamadas e imports, onde estaria a "main" da tela, onde acontece a renderização, quais componentes serão utilizados naquela tela.

    - _**Utils**_: onde ficam configurações que podem ser úteis e utilizáveis em várias partes do projeto (_strings_, rotas,etc)

    - _**Reducers**_: parte do código  responsável por atualizar a _store_. Define como _store_ vai funcionar. Exemplo: _UserReducer_ vai atualizar o  _Store_ no objeto _User_. 

    - _**Actions**_: quando disparada, chama o _reducer_ e identifica o precisa ser feito. Instrução sobre qual _reducer_ deve ser ativado, e também carrega a informação que o reducer precisa. 

    - _**Containers**_: envelopam e contém a tela. Responsável por mapear a _store_ para uma tela específica (a partir do método _mapStateToProps_) e por disparar as _actions (mapDispatchToProps)_.

    - _**Components**_: componentes nativos ou desenvolvidos que podem ser usados naquele momento ou futuramente ao sobrescrever o método. Ele pode ser instanciado e tem um código onde os métodos podem ser 
    reutilizados muitas vezes. Todos os métodos  foram desenvolvidos originais específicos para o Triagil.

* Back-end: 

    - _**Controllers**_: manipula os dados e objetos para enviar para o banco de dados.

    - _**Models**_: onde são definidos todos os atributos das _models_, ou seja, todas as informações tidas de uma determinada tabela do banco de dados.


## 9 Visão de Dados 

* [Person](https://github.com/UnBArqDsw/2020.1_G1_Triagil/blob/master/Back/src/app/models/Person.js)

![Person](https://imgur.com/8gSbJ4g.png)

* [Patient](https://github.com/UnBArqDsw/2020.1_G1_Triagil/blob/master/Back/src/app/models/Patient.js)

![Patient](https://imgur.com/yXyeDdp.png)

* [Nurse](https://github.com/UnBArqDsw/2020.1_G1_Triagil/blob/master/Back/src/app/models/Nurse.js)

![Nurse](https://imgur.com/LAPK5LX.png)

* [PatientRecord](https://github.com/UnBArqDsw/2020.1_G1_Triagil/blob/master/Back/src/app/models/PatientRecord.js)

![patientrecord](https://imgur.com/Omi7OyQ.png)

* [TriageRecord](https://github.com/UnBArqDsw/2020.1_G1_Triagil/blob/master/Back/src/app/models/TriageRecord.js)

![TriageRecord](https://imgur.com/yOXv7DD.png)

## 10 Tamanho e Desempenho

O triagil é uma aplicação mobile com aproximadamente 51,1MB, que foi desenvolvida para ser eficaz e eficiente. Mesmo o produto ainda não estando em ambiente de produção ele foi estruturado para restringir o uso de memória cache, logo não ultiza muito do espaço interno do aparelho do usuário.

Além disso trabalhamos com requisições de serviços externos que realizam comunicação com o frontend da aplicação, dessa forma, podemos esperar que o desempenho e manutenibilidade sejam garantidos.

## 11 Qualidade

A arquitetura utilizada pela equipe contribui com o software em diversos aspectos, como por exemplo a escolha da tecnologia React-Native proporciona o uso enterprise, crescimento exponencial do aplicativo, performance, escalabilidade, testabilidade, interoperabilidade e usabilidade.
A separação de camadas como propõe o padrão adotado pela equipe ajuda na redução de acoplamento e promove o aumento de coesão nas classes do projeto. Assim, quando o modelo MVC é utilizado, pode facilitar em muito a manutenção do código e sua reutilização em outros projetos.

## 12 Reutilização de software

A ideia do reuso é evitar retrabalho no desenvolvimento de um novo projeto, sempre levando em consideração trabalhos anteriores, fazendo com que soluções previamente desenvolvidas sejam aproveitadas e implementadas em novos contextos além de ser considerada uma boa prática de desenvolvimento. Nosso front-end  foi desenvolvido com o propósito de ter a maior quantidade de reutilização possível. Segue abaixo alguns arquivos que foram reutilizados no front-end:

* [HospitalLineScreen.js](https://github.com/UnBArqDsw/2020.1_G1_Triagil/blob/master/TriagilApp/src/Screens/Nurse/HospitalLineScreen.js)
* [NursePatientInfoScreen.js](https://github.com/UnBArqDsw/2020.1_G1_Triagil/blob/master/TriagilApp/src/Screens/Nurse/NursePatientInfoScreen.js)
* [NurseTriagePatientScreen.js](https://github.com/UnBArqDsw/2020.1_G1_Triagil/blob/master/TriagilApp/src/Screens/Nurse/NurseTriagePatientScreen.js)
* [ConvulsionTriageScreen.js](https://github.com/UnBArqDsw/2020.1_G1_Triagil/blob/master/TriagilApp/src/Screens/Nurse/Triage/ConvulsionTriageScreen.js)
* [DiarrheaTriageScreen.js](https://github.com/UnBArqDsw/2020.1_G1_Triagil/blob/master/TriagilApp/src/Screens/Nurse/Triage/DiarrheaTriageScreen.js)
* [FaintingTriageScreen.js](https://github.com/UnBArqDsw/2020.1_G1_Triagil/blob/master/TriagilApp/src/Screens/Nurse/Triage/FaintingTriageScreen.js)
* [HeadacheTriageScreen.js](https://github.com/UnBArqDsw/2020.1_G1_Triagil/blob/master/TriagilApp/src/Screens/Nurse/Triage/HeadacheTriageScreen.js)
* [SoreThroatTriageScreen.js](https://github.com/UnBArqDsw/2020.1_G1_Triagil/blob/master/TriagilApp/src/Screens/Nurse/Triage/SoreThroatTriageScreen.js)
* [TriageClassificationScreen.js](https://github.com/UnBArqDsw/2020.1_G1_Triagil/blob/master/TriagilApp/src/Screens/Nurse/Triage/TriageClassificationScreen.js)



**Histórico de Versão**

| Data | Versão | Descrição | Autor(es) |
| --- | --- | --- | --- |
| 17/11 | 1.0.0 | Criação do documento no Pages | Francisco Heronildo|
| 18/11 | 1.1.0 | Adição do tópico finalidades | Francisco Heronildo e Débora| 
| 18/11 | 1.2.0 | Adição do tópico Escopo | Nathalia e Miguel| 
| 18/11 | 1.3.0 | Adição do tópico  1.5-Visão Geral | Francisco Heronildo e Débora| 
| 18/11 | 1.4.0 | Adição do tópico Definições, Acrônimos e Abreviações | Lude e Nathalia| 
|19/11 | 1.5.0| Adição de imagem ao tópico 2.1 | Débora Vilela, Francisco Heronildo, Vitor Alves, Miguel Alves e Lude Ribeiro |
|19/11 | 1.6.0| Adição do tópico referências | Vitor Alves e Nathalia |
|19/11 | 1.6.1| Corrigindo e adicionando referências bibliográficas| Débora Vilela |
|19/11 | 1.7.0| Acrescentando tópico de tamanho e desempenho| Francisco Heronildo e Nathalia |
|19/11 | 1.7.1| Acrescentando mais uma referência no tópico de referências| Nathalia |
|19/12 | 1.8.0| Adicionando conteúdo no subtópico Tecnologias - Front-End| Débora Vilela, Miguel Alves e Lude Ribeiro |
|19/12 | 1.9.0| Adicionando conteúdo no subtópico Tecnologias - Back-End| Débora Vilela, Francisco Heronildo e Vitor Alves |
|19/11| 1.9.1|Corrigindo versionamento| Débora Vilela |
|19/11| 2.0.0| Acrescentando tópico de qualidade| Nathalia Lorena |
|20/11| 2.1.0| Adicionando diagrama de  Casos de uso| Débora, Nathalia, Francisco, Lude, Miguel e Vitor|
|20/11| 2.2.0| Adicionando diagrama geral de pacotes| Débora, Nathalia, Francisco, Lude, Miguel e Vitor|
|20/11| 2.3.0| Adicionando Arquitetura - front-end| Miguel, Débora e Lude|
|20/11| 2.3.1| Corrigindo erros ortográficos| Débora|
|20/11| 2.4.0| Adicionando Arquitetura - back-end| Francisco, Vitor e Débora|
|20/11| 2.5.0| Adicionando tópico de visão de processos| Nathalia, Miguel, Lude, Francisco, Vitor e Débora|
|20/11| 2.6.0| Adicionando tópico de visão de dados| Nathalia, Miguel, Lude, Francisco, Vitor e Débora|
|20/11|2.6.1| Corrigindo enumeração de tópicos do documento| Débora Vilela |
|20/11| 2.7.0| Acrescentando tópico de Metas e Restrições da Arquitetura| Nathalia Lorena|
|20/11| 2.7.1| Alterando tópico de Tamanho e Desempenho| Nathalia Lorena|
|20/11|2.7.2| Corrigindo enumeração de tópicos do documento| Débora Vilela |
|20/11|2.8.0| Acrescentando tópico Visão de Implementação| Débora Vilela |
|20/11|2.9.0| Acrescentando tópico Visão de Implantação| Débora Vilela |
|20/11|3.0.0| Acrescentando diagrama no tópico 5.1| Lude Ribeiro, Nathalia Lorena, Francisco Heronildo, Miguel Alves, Vitor Alves, Débora Vilela |
|20/11|3.1.0| Acrescentando tópico de reutilização de software| Nathalia Lorena |
|20/11| 3.2.0| Adicionando imagens ao documento| Débora Vilela e Miguel |
|20/11| 3.2.1| Corrigindo tópico de Definições, Acrônimos e Abreviações | Nathalia Lorena |
|20/11| 3.2.2| Acrescentando mais uma referência no tópico de Referências| Nathalia Lorena |


## Referências Bibliográficas

BARROS, T.; SILVA, M.; ESPÍNOLA,E. **State MVC:** Estendendo o padrao MVC para uso no 
desenvolvimento de aplicações para dispositivos móveis.Recife, CE. C.E.S.A.R – Centro de Estudos e Sistemas Avanc¸ados do Recife, 2007. 

KRASNER, G. and POPE, S. (1998). **A cookbook for using the model view controller user interface paradigm in smalltalk-80** . In Journal of Object-Orientated Programming,
volume 1(3), pages 26–49.

CSS. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/CSS> Acesso em 19 de novembro de 2020.

Axios. Disponível em: <https://blog.rocketseat.com.br/axios-um-cliente-http-full-stack/>. Acesso em 19 de novembro de 2020.

Node.js. Disponível em: <https://www.devmedia.com.br/guia/node-js/40312> Acesso em 19 de novembro de 2020.





