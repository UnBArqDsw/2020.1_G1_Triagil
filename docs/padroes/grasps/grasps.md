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

Ao utilizarmos **GRASPS** com a noção de especialização, geramos polimorfismos e níveis de abstração (método abstrato0. As noções de herança, sobrecarga e sobrescrita começam a fazer sentido e instintivamente aparecem nas ideias dos projetos. E não é nenhuma surpresa constatarmos que Polimorfismo é outro padrão **GRASP**.

Variações Protegidas caracterizam outro padrão. É necessário uma variação entre as filhas E um encapsulamento para que exista a ideias de variação protegida. Ela vem trazer um baixo acoplamento.

- Exemplo produzido pelo grupo

![Ex Foco Demais Padroes](https://i.imgur.com/Cew2QcP.png)

## Proposta do Grupo para emplementação no Projeto

Com base em tudo isso listado acima o grupo desenvolveu também um exemplo como proposta para implesmentação no projeto Triagil. O nosso GRASP sujestão segue o Foco: Demais padrões, baseado em cima do invenção pura.

- Exemplo de sujestão criado pelo grupo.

![Ex Sujestao](https://i.imgur.com/Cew2QcP.png)
