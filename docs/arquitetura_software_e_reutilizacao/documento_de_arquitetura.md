# Documento de Arquitetura do TRIAGIL

## 1 Introdução

### 1.1 Finalidade

Este documento tem como finalidade descrever a arquitetura da aplicação Triagil. Ele apresenta as decisões de arquitetura para o projeto de forma objetiva e clara e também contém informações que servem de guia para desenvolvedores compreenderem o fluxo de informações e tecnologias envolvidas.

### 1.2 Escopo

Este documento possui o objetivo de apresentar as estruturas arquiteturais que fundamentaram a construção do projeto Triagil, bem como apresentar os padrões adotados pela equipe, tecnologias escolhidas, dessa forma, auxiliando no entendimento da estrutura do projeto.

### 1.3 Definições, Acrônimos e Abreviações

API: Application Programming Interface (Interface de Programação de Aplicativos)
MVC: Model-View-Controller
App: Application (Aplicativo)
Backend: Possibilita o apoio e funcionamento às ações do usuário da máquina.
Frontend: Parte da aplicação que interage diretamente com o usuário.
Triagil: Nome dado ao aplicativo desenvolvido nesse projeto.

### 1.4 Referências

* [Design Patterns](https://refactoring.guru/design-patterns) 
* [MVC](https://www.treinaweb.com.br/blog/o-que-e-mvc/)
* [HubCare](https://cjjcastro.gitlab.io/2019-1-hubcare-docs/project/architecture-document/#1-introducao)
* [Cafofo](https://desenho-2019.github.io/Wiki/Din%C3%A2mica%20e%20Semin%C3%A1rio%20V/Documento%20de%20Arquitetura/#10-tamanho-e-desempenho)

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

### 2.2.1  Tecnologias 

### 2.3 Arquitetura

## 3 Metas e Restrições da Arquitetura

## 4 Visão de Casos de Uso

### 4.1 Visão de Casos de Uso

## 5 Visão Lógica

### 5.1 Visão Geral

### 5.2 Pacotes de Design Significativos do Ponto de Vista da Arquitetura

## 6 Visão de Processos

## 7 Visão de Implantação

## 8 Visão da Implementação

### 8.1 Visão Geral

### 8.2 Camadas

## 9 Visão de Dados (opcional)

## 10 Tamanho e Desempenho

O triagil é uma aplicação mobile com aproximadamente "X" MB, que foi desenvolvida para ser eficaz e eficiente. Mesmo o produto ainda não estando em ambiente de produção ele foi estruturado para restringir o uso de memória cache, logo não ultiza muito do espaço interno do aparelho do usuário.

Além disso trabalhamos com requisições de serviços externos que realizam comunicação com o frontend da aplicação, dessa forma, podemos esperar que o desempenho e manutenibilidade sejam garantidos.

## 11 Qualidade

**Histórico de Versão**

| Data | Versão | Descrição | Autor(es) |
| --- | --- | --- | --- |
| 17/11 | 1.0.0 | Criação do documento no Pages | Francisco Heronildo|
| 18/11 | 1.1.0 | Adição do tópico finalidades | Francisco Heronildo e Débora| 
| 18/11 | 1.2.0 | Adição do tópico Escopo | Nathalia e Miguel| 
| 18/11 | 1.3.0 | Adição do tópico  1.5-Visão Geral | Francisco Heronildo e Débora| 
| 18/11 | 1.4.0 | Adição do tópico Definições, Acrônimos e Abreviações  | Lude e Nathalia| 
|19/11 | 1.5.0| Adição de imagem ao tópico 2.1 | Débora Vilela, Francisco Heronildo, Vitor Alves, Miguel Alves e Lude Ribeiro |
|19/11 | 1.6.0| Adição do tópico referências | Vitor Alves e Nathalia |
|19/11 | 1.6.1| Corrigindo e adicionando referências bibliográficas| Débora Vilela |
|19/11 | 1.7.0| Acrescentando tópico de tamanho e desempenho| Francisco Heronildo e Nathalia |



## Referências Bibliográficas
BARROS, T.; SILVA, M.; ESPÍNOLA,E. **State MVC:** Estendendo o padrao MVC para uso no 
desenvolvimento de aplicações para dispositivos móveis.Recife, CE. C.E.S.A.R – Centro de Estudos e Sistemas Avanc¸ados do Recife, 2007. 

KRASNER, G. and POPE, S. (1998). **A cookbook for using the model view controller user interface paradigm in smalltalk-80** . In Journal of Object-Orientated Programming,
volume 1(3), pages 26–49.
