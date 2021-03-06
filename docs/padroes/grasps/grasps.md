# GRASPs

Para entender o que são **GRASPs**, primeiro é preciso entender o que são os padrões de projeto. Eles são soluções, princípios, práticas e costumes usados durante o desenvolvimento de um software, codificados em um formato estruturado, descrevendo o problema e a respectiva solução adotada. Ou seja, são uma série de técnicas aplicadas com o intuito de se resolver um problema. De forma bem simples, são justamente essas ações conjuntas tomadas com o objetivo de solucionar uma questão.

**GRASPs** é a sigla utilizada para se referir aos **Padrões de Software para Atribuição de Responsabilidade Geral**, tendo sua formação do inglês _"General Responsability Assignment Software Patterns"_. E o que isso quer dizer? Que são justamente os padrões adotados para delegar as responsabilidades para as classes corretas.

Assim, podemos entender qual a proposta geral dos **GRASPs**, pois são um padrão de projeto e com seu foco em atribuir as responsabilidades aos responsáveis devidos, de maneira que possa gerar organização, menor nível de acoplamento, segurança e etc. Porém, ele também se especializa dentro de sua proposta e possui alguns focos interessantes a serem destacados.

## GRASPs - Foco: Criador

O **GRASP** também pode ser feito visto em foco da visão do "Criador", visando assim a classe responsável pela criação de cada instância. Assim, é avaliado a partir desse **GRASP** qual classe deve instânciar corretamente, visto que nem sempre a classe a qual a própria instância pertence será a melhor para ser a classe criadora. Essa avaliação é realizada justamente pelo **GRASP** "Criador" que visa determinar o melhor responsável pela instanciação dentro do determinado contexto do projeto.

O **GRASP** "Criador" também precisa se atentar para as relações existentes dentro do projeto. Muito semelhante ao diagrama de classes, ele precisa analisar relações como as de TODO/PARTE, por exemplo. Respeitando essas relações as atribuições podem ser feitas de maneira mais coerentes e organizadas para promover inclusive encapsulamentos.

- Exemplo produzido pelo grupo

![Exemplo de Foco Criador](https://i.imgur.com/9OAL8bl.png)

## GRASP - Foco: Especialista

O **GRASP** Especialista é um padrão que têm seu foco e preocupação na atribuição das responsabilidades para a entidade mais especialista dentro do contexto. É literalmente atribuir a repsonsabilidade para a entidade mais específica possível. Ele se relaciona de maneira bem próxima com o **GRASP** Criador, afinal todo criador é um especialista. Porém, o contrário não é válido. Assim sendo, ao aplicar um **GRASP** Criador, também se aplicou um **GRASP** Especialista, visto que nos preocupamos em atribuir à entidade mais especializada a responsabilidade de criar as instâncias.

É a identificação da melhor classe para realizar qualquer ação, não apenas na criação de instâncias, mas de todos os aspectos do sistema.O **GRASP** Especialista é aplicado por todo o código, não somente em um momento ou local específico. Ele é aplicado em todo o código, distribuindo as ações e responsabilidades de maneira eficiente e mais eficaz. Sua utilização gera baixo acoplamento e diminui as dependências entre as classes, trazendo maior coesão. Ele também respeita as relações entre as entidades, como as citadas acima, de TODO/PARTE.

- Exemplo produzido pelo grupo

![Ex Foco Especialista](https://i.imgur.com/RibLzLO.png)

## GRASPS - Foco: Demais Padrões

Existem vários outros padrões **GRASP**. E realmente é bastante vasta a extensão que eles podem cobrir, desde sistemas específicas a soluções genéricas, existe bastante liberdade em adotar ou criar um padrão para solucionar uma questão. É o caso da Invenção Pura, que caracteriza o desenvolvimento de um novo padrão que foi aplicado para solucionar uma questão específica. Podemos exemplificar essa Invenção Pura com a criação de uma API para autenticar os usuários de um sistema. A simples necessidade de autenticação já geraria a justificativa para utilizar a Invenção Pura, que no caso se manifesta como a API. Requisitos não funcionais apoiam bastante essa prática, aqui eles dão prerrogativa para fazer o uso dessa técnica.

Ao utilizarmos **GRASPS** com a noção de especialização, geramos polimorfismos e níveis de abstração (método abstrato). As noções de herança, sobrecarga e sobrescrita começam a fazer sentido e instintivamente aparecem nas ideias dos projetos. E não é nenhuma surpresa constatarmos que Polimorfismo é outro padrão **GRASP**.

Variações Protegidas caracterizam outro padrão. É necessário uma variação entre as filhas e um encapsulamento para que exista a ideias de variação protegida. Ela vem trazer um baixo acoplamento.

- Exemplo produzido pelo grupo

![Ex Foco Demais Padroes](https://i.imgur.com/Cew2QcP.png)

## Polimorfismo

O polimorfismo é um padrão que vem da orientação a objetos, no qual ela utilizar subclasses que se originam de uma superclasse, estas subclasses podem invocar metodos da superclasse e sobreescrevelos, pois em cada subclasses ela se comporta de forma diferente. No triagil temos a classe person e suas subclasses nurse e patient, no qual as subclasses vão utilizar o método acessHospital(), porém cada um dos agentes irá utilizar esse método de forma diferente, pois os pacientes não terão o mesmo acesso que a enfermeira.

- Exemplo produzido pelo grupo

![Ex Polimorfismo](https://imgur.com/933Wovj.png)

## Baixo acoplamento 

Esse princípio oferece baixo acoplamento de classes genéricas por serem altamente reutilizadas e sugere o não acoplamento para classes instáveis que precisam ser modificadas constantemente.  Determina que as classes não devem depender de objetos concretos e sim de abstrações, para permitir que haja mudanças sem impacto. 

## Alta Coesão

Nesse princípio, é empregado que as classes devem ser manter focadas apenas nas suas próprias responsabilidades, de forma que a classe tem menos métodos, o código fica mais reutilizável e sem margens pra incompreensão.

## Controlador

Atribui a responsabilidade de lidar com os eventos do sistema para uma classe que representa um cenário de caso de uso do sistema. Essa classe fica responsável por controlar as operações e delegar ações para outros objetos, de forma a tirar o controle da interface apresentada ao usuário. 

## Fabricação/Invenção Pura

Nesse princípio, há a criação de uma classe prestadora de serviço e que não possui vínculo com o problema, é uma classe fictícia. Ao utilizar essa classe há ganho de alta coesão e baixo acoplamento das classes, o que facilita o reuso de código.

## Indireção

Utiliza um objeto intermediário entre componentes fazendo com que não estejam acoplados um ao outro. Funciona em harmonia com o Baixo Acoplamento, facilitando a reutilização.

## Variações protegidas

O padrão variações protegidas protege elementos das variações em outros elementos (objetos, sistemas, subsistemas) envolvendo o foco de instabilidade com uma interface e usando polimorfismo para criar várias implementações desta interface.

## Proposta do Grupo para implementação no Projeto

Com base em tudo isso listado acima o grupo desenvolveu também um exemplo como proposta para implesmentação no projeto Triagil. O nossos GRASP's de sujestão segue os seguintes focos:

### Especialista Criador

![Ex Sujestao](https://i.imgur.com/Cew2QcP.png)

### Polimorfismo

![Ex Sujestao 2](https://i.imgur.com/fu8HRCl.png)

---

### Histórico de versões

|Data|Versão|Descrição|Autor(es)|
|:--:|:----:|:-------:|:-------:|
| 10/10/2020 | 1.0.0 | Criação do documento no pages | Miguel Alves e Lude Ribeiro |
| 10/10/2020 | 1.1.0 | Adicionando introdução e definição dos GRASPs | Miguel Alves e Lude Ribeiro |
| 10/10/2020 | 1.2.0 | Adicionado introducao e descricao de GRASP criador |  Miguel Alves e Lude Ribeiro |
| 10/10/2020 | 1.3.0 | Adicionado descrição de GRASP Especialista |  Miguel Alves e Lude Ribeiro |
| 10/10/2020 | 1.4.0 | Adicionando outros padrões | Miguel Alves e Lude Ribeiro |
| 12/10/2020 | 1.5.0 | Adicionando exemplo do criador e do especialista | Miguel Alves e Lude Ribeiro |
| 12/10/2020 | 1.6.0 | Adicionando exemplo dos outros padrões e proposta de invenção pura | Lude Ribeiro |
| 14/10/2020 | 1.7.0 | Adicionando exemplo de proposta de polimorfismo e pequenas correções | Francisco Heronildo e João Vitor Alves |
| 15/10/2020 | 1.7.1 | Adicionando justificativa do polimorfismo | João Vitor Alves e  Francisco Heronildo |
| 16/10/2020 | 1.7.2 | Correções de português e adicionando exemplo de GRASP Polimorfismo | Lude Ribeiro e Miguel Alves |
| 24/10/2020 | 1.8.0 | Adicionando tópicos Baixo Acoplamento e Alta Coesão | Débora Vilela | 
| 24/10/2020 | 1.9.0 | Adicionando tópicos Controlador e Fabricação/Invenção Pura | Débora Vilela | 
| 24/10/2020 | 2.0.0 | Adicionando tópicos Indireção e Variações protegidas | Débora Vilela |
| 24/10/2020 | 2.1.0 | Adicionando novas referências | Débora Vilela |

## Referências

SERRANO,Milene. **AULA - GRASPs** , 64 slides. 2020. Material apresentado para Disciplina de Arquitetura de Desenho de Software do curso de engenharia de software da UnB, FGA. Acesso em: 10, Outubro de 2020.

UFU, **Padrões GRASP**, 2012. 111 slides. Disponível em: <http://www.facom.ufu.br/~bacala/ESOF/05a-Padr%C3%B5es%20GRASP.pdf>. Acesso em: 14, Outubro de 2020.

Padrões GRASP - Padrões de atribuir responsabilidades. Disponível em: <https://medium.com/@leandrovboas/padr%C3%B5es-grasp-padr%C3%B5es-de-atribuir-responsabilidades-1ae4351eb204> 
