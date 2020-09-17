# Brainstorming

## Introdução

Mais do que uma técnica, é uma atividade desenvolvida individualmente ou em grupo que visa explorar toda a capacidade criativa e intelectual. Essa "tempestade de ideias" acontece com objetivos já bem definidos. A ideia é dar espaço para a diversidade de pensamentos e experiências e extrair as melhores ideias a partir de ponto de vista diferentes. Após as ideias, visões e possibilidades, cabe a equipe encontrar o denominador comum. Ao contrário do que se costuma pensar, o Brainstorming não deve ser realizado como um bate-papo, no qual as ideias simplesmente podem “surgir do nada”. É importante ter um ambiente propício para que as contribuições dos participantes aconteçam, sendo melhor executado quando há um roteiro mediado por um coordenador e a divisão do processo entre etapas. Dessa forma, um Brainstorming bem construído é uma técnica útil em agregar conhecimento para os participantes e auxiliar na gestão de problemas.

## Dados da reunião

A reunião de equipe foi realizada no dia 03/09/2020 com início às 17:00 e término às 20:16. O Brainstorming teve como base os [Rich Pictures](https://unbarqdsw.github.io/2020.1_G1_Triagil/base/requisitos/pre-rastriabilidade/rp/) desenvolvidos pela equipe. Esses Rich Pictures foram desenvolvidos por pares e após explanação das idéias,foram discutidas soluções para o projeto. A reunião, realizada e gravada no MS Teams foi, posteriormente, auscutada e redigida neste documento.</p>

  |Nome do integrante|Abreviação| Rich Picture responsável|
  |:--:|:----:|:----:|
  |Débora Vilela|DV|Paciente|
  |Francisco Heronildo|FH| Sistema|
  |Lude Ribeiro|LR|Enfermeiro|
  |Miguel Alves|MA|Enfermeiro e Geral|
  |Nathália Lorena|NL|Paciente|
  |Vitor Alves|VA|Sistema|

## Contribuições dos membros durante o Brainstorming

* **MA/LR:** <p align="justify">O enfermeiro realiza o cadastro com a chave de acesso do hospital, permitindo registro de quem realizou a triagem. O enfermeiro visualiza a lista de pacientes (normal e preferencial); ao escolher o paciente ela visualiza os dados do paciente e faz a triagem, enviando os dados para o Triagil,que classificará de acordo com o protocolo de Manchester. Esses dados são retornados para a enfermeira que decide se vai alterar a classificação ou cofirmar a classificação feita por ela. O nosso sistema não deve retirar a autonomia do enfermeiro no processo de triagem, pois o sistema não tem a sensibilidade na visualização do paciente. Todavia, em caso de correção, o enfermeiro só poderá mudar em 1 nível a classificação do paciente.Ex: se o Triagil retornou que o paciente tem a classificação laranja, a enfermeira tem autonomia para mudar a classificação apenas pra amarelo ouvermelho (1 nível abaixo e 1 nível acima, respectivamente). Ao finalizar essa triagem, ela passa para outro paciente.Em caso do paciente não ter cadastro no sistema ou não tiver um aplicativo, deve haver uma opção para a enfermeira de "criar paciente", para identificação básica do paciente para início do processo de triagem.</p>

* **NL/DV:** <p align="justify">O sistema deve ser pensado para hospitais públicos e privados, de forma que seja um serviço mais geral. O fluxo seria parecido com o proposto pelo Miguel e Lude, mas enfatizando que os dados da triagem cheguem ao médico, evitando a repetição de perguntas que já foram feitas na triagem.</P>

* **FH/VA:** <p align="justify"> A enfermeira é o centro do sistema do aplicativo; ela tem acesso ao app na parte de priorização da triagem e de dados dos paciente.O sistema deve verificar se o paciente está cadastrado e caso não esteja, a enfermeira deve ter a possibilidade de cadastrar o paciente no sistema do Triagil. O sistema também deve confirmar os dados do paciente com os dados do banco de dados.O sistema deve ter uma ligação entre o banco externo do Triagil e o hospital. O sistema Triagil deve serguir o padrão de Manchester para classificação
na triagem do paciente.O triágil deve verificar o vínculo do enfermeiro com o hospital de forma a garantir que o aplicativo não será usado para fins ilícitos.</p>

* **LR:** <p align="justify">Unificação dos sistemas, de forma que agilize a triagem independente do ambiente ser público ou privado.
O cadastro do paciente no app pode ser feito em qualquer lugar, porém o login para entrar na fila de triagem deve ser feito apenas ao entrar na rede do hospital(acesso com o código de acesso passado pelo hospital).</p>

* **MA:** <p align="justify">Ao invés de pegar senha, solicita o código para colocar no aplicativo; assim que o código for inserido, o paciente já é colocado na fila normal/preferencial e a enfermeira já tem acesso às informações do paciente.
O sistema diferenciará funcionalidades disponíveis no aplicativo por meio do login de paciente ou enfermeiro.
Após a classificação da triagem, o sistema Triagil deve enviar para o hospital a fila de atendimento dos pacientes de acordo com a classificação dos mesmos, de forma que seja sempre atualizada de acordo com pacientes que estão chegando.
O hospital deve enviar para o nosso sistema dados dos enfermeiros.</p>

* **VA:** <p align="justify">Customizar o processo de entrada de acordo com o hospital.</p>

## Requisitos Elicitados

|Requisito|Descrição| Tipo|
|:--:|:----:|:----:|
|BS01|O enfermeiro deve visualizar a lista de pacientes "normal" e "preferencial"| RF01|
|BS02|O enfermeiro deve realizar seu cadastro com a chave de acesso do hospital| RF02|
|BS03|O sistema Triagil deve guardar o histórico de enfermeiros que realizaram a triagem do dia| RNF01|
|BS04|O enfermeiro deve escolher um paciente para poder visualizar os dados dele| RF03|
|BS05|O sistema Triagil deve classificar de acordo com o protocolo de Manchester| RNF02|
|BS06|A enfermeira deve ter a opção de alterar ou confirmar a classificação do paciente feita por ela| RF04|
|BS07|O sistema Triagil não deve tirar a autonomia do enfermeiro no processo de triagem| RNF03|
|BS08|O enfermeiro deve poder corrigir a classificação do paciente em apenas 1 nível abaixo ou acima da análise que ele fez previamente| RF05|
|BS09|O enfermeiro deve ter a opção de "criar paciente"|RF06|
|BS10|O sistema Triagil deve atender aos hospitais públicos e privados|RNF04|
|BS11|Os dados da triagem devem chegar sem alteração para o médico, de forma a evitar repetição de perguntas|RNF05|
|BS12|O enfermeiro deve ser o centro do sistema|RNF06|
|BS13|O enfermeiro tem acesso à parte de priorização da triagem|RF07|
|BS14|O sistema triágil deve verificar se o paciente está cadastrado no sistema|RNF07|
|BS15|O sistema Triágil deve confirmar os dados do paciente no banco de dados|RNF08|
|BS16|O hospital deve ter uma ligação ao banco externo do Triágil|RNF09|
|BS17|O sistema Triágil deve verificar o vínculo entre enfermeiro e hospital|RNF10|
|BS18|O hospital deve enviar dados dos enfermeiros para nosso sistema|RNF11|
|BS19|O sistema deve ser unificado|RNF12|
|BS20|O paciente pode se cadastrar no aplicativo a qualquer momento|RF08|
|BS21|O login do paciente para entrar na fila do hospital só pode ser feito ao entrar na rede de hospital|RF09|
|BS22|O acesso à rede do hospital deve ser feito por um código de acesso|RNF13|
|BS23|O sistema deve diferenciar o acessos a funcionalidades de acordo com o login de paciente e enfermeiro|RNF14|
|BS24|O sistema Triágil deve enviar ao hospital atualização constante da fila de pacientes de acordo com os níveis de classificação|RF1O|
|BS25|O aplicativo pode ser customizado de acordo com o hospital|RNF15|

---

|Data | Versão | Descrição | Autor(es) |
| --- | --- | --- | --- |
| 10/09/2020 | 0.1 | Criação do documento na wiki  | Débora Vilela |
| 10/09/2020 | 0.1 | Adicionando rastreamento e retirando sumário  | Débora Vilela |

## Referências Bibliográficas

SERRANO, Maurício; SERRANO, Milene. Requisitos - Aula 07. 1º/2019. 50 slides. Material apresentado para a disciplina de Requisitos de Software no curso de Engenharia de Software da UnB, FGA.

Tutorial: Como fazer Brainstorming Passo a Passo. Disponível em: <https://www.siteware.com.br/metodologias/como-fazer-brainstorming-passo-a-passo/>. Acesso em: 05, Setembro de 2020.
