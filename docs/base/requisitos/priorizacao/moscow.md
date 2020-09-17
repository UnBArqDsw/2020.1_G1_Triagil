# MoSCoW

## Introdução

<p align="justify">É uma técnica de priorização utilizada para elencar os requisitos de um projeto de acordo com a sua criticidade e seu valor no negócio. Ajuda a priorizar o escopo de forma a dividir quais tarefas são de extrema importância para o sucesso do projeto e quais poderão ser descartadas caso o projeto sofra mudança de prazo e/ou perda de recursos.</p>   

## Sobre a técnica MoSCoW

MoSCoW é um acrônimo para as 4 (quatro) categorias de requisitos utilizados na priorização: **M** de _must have_, **S** de _should have_, **C** de _could have_ e **W** para _won't have_ ou _would like_,como comumente é usado. É importante ressaltar que os requisitos usados nessa priorização devem ser independentes, ou seja, não precisam de outros requisitos pré-existentes para serem desenvolvidos.

* **Must:** São requisitos de extrema importância para o projeto; sem essas funcionalidades, o produto perde sentido e valor. **Têm** que ser implementadas.

* **Should:** São tão importantes quanto Must, mas o nível de criticidade para o projeto é menor, ou seja, se não forem desenvolvidos não haverá perda de valor de negócio. **Devem** ser desenvolvidas posteriormente ao Must.

* **Could:** São requisitos ligados à desejos do cliente, que **poderiam**, mas não precisam ser desenvolvidos. Geralmente estão relacionados à melhora da experiência do usuário. Devem ser implementatos caso haja tempo e recurso disponíveis.

* **Won't/Would Like:** Requisitos colocados nessa categoria não são necessários para o projeto e não geram tanto valor de negócio. Serão desenvolvidos talvez em próximas versões e apenas depois de todos os requisitos das categorias acima serem desenvolvidos. Essa categoria ajuda a diminuir o escopo.

## Aplicação da técnica no projeto

Na tabela abaixo, estão ordenados os requisitos elicitados nos documentos [Brainstorming](2020.1_G1_Triagil\docs\base\requisitos\elicitacao\brainstorming.md), [Entrevista](2020.1_G1_Triagil\docs\base\requisitos\elicitacao\entrevista.md), [Questionário](2020.1_G1_Triagil\docs\base\requisitos\elicitacao\questionario.md) e [Storyboard](2020.1_G1_Triagil\docs\base\requisitos\elicitacao\storyboard.md).


## Requisitos Funcionais

|Requisitos|Origem|Descrição|Classificação MoSCoW|
|:--------:|:-------:|:------------------:|:-----|
|RF01   |BS01 |O enfermeiro deve visualizar a lista de pacientes "normal" e "preferencial" |MUST|
|RF02   |BS02|O enfermeiro deve realizar seu cadastro com a chave de acesso do hospital|MUST|
|RF03   |BS04, Q13|O enfermeiro deve ter acesso ao dados de todos os pacientes|MUST|
|RF04   |BS06, SB07|A enfermeira deve ter a opção de alterar ou confirmar a classificação do paciente feita por ela|MUST|
|RF05   |BS08|O enfermeiro deve poder corrigir a classificação do paciente em apenas 1 nível abaixo ou acima da análise que ele fez previamente|MUST|
|RF06   |BS09, Q03|O enfermeiro deve cadastrar novos pacientes|MUST|
|RF07   |BS13|O enfermeiro tem acesso à parte de priorização da triagem|MUST|
|RF08   |BS20, Q04, SB01|O paciente pode se cadastrar no aplicativo a qualquer momento|MUST|
|RF09   |BS21|O login do paciente para entrar na fila do hospital só pode ser feito ao entrar na rede de hospital|MUST|
|RF10   |BS24|O sistema Triágil deve enviar ao hospital atualização constante da fila de pacientes de acordo com os níveis de classificação|SHOULD|
|RF11   |ENT01|O aplicativo deve possuir uma fila|MUST|
|RF12   |ENT03|O aplicativo deve apresentar fila ou filas de triagem para o/a enfermeiro(a)|MUST|
|RF13   |ENT04|O aplicativo deve possuir uma aba com informações consideradas essenciaIs pelos profissionais da saúde|MUST|
|RF14   |ENT05|O aplicativo deve apresentar o histórico médico do paciente|SHOULD|
|RF15   |Q01|O enfermeiro deve realizar cadastro com vinculação de algum hospital|MUST|
|RF16   |Q02|O enfermeiro deve consultar pacientes já cadastrados|MUST|
|RF17   |Q05|O sistema deve autenticar os dados enfermeiro e do hospital|MUST|
|RF18   |SB08|O enfermeiro deve alterar a posição do paciente na fila|MUST| 


## Requisitos Não Funcionais

|Requisitos|Origem|Descrição|Classificação MoSCoW|
|:--------:|:-------:|:------------------:|:-----|
|RNF01   |BS03|O sistema Triagil deve guardar o histórico de enferemiros que realizaram a triagem do dia|SHOULD|
|RNF02   |BS05, Q06, SB05|O sistema Triagil deve classificar de acordo com o protocolo de Manchester|MUST|
|RNF03   |BS07, Q07, SB06|O sistema Tragil não deve tirar a autonomia do enfermeiro no processo de triagem|MUST|
|RNF04   |BS10|O sistema Triagil deve atender aos hospitais públicos e privados|SHOULD|
|RNF05   |BS11|Os dados da triagem devem chegar sem alteração para o médico, de forma a evitar repetição de perguntas|SHOULD|
|RNF06   |BS12|O enfermeiro deve ser o centro do sistema|MUST|
|RNF07   |BS14|O sistema Triagil deve verificar se o paciente está cadastrado no sistema|MUST|
|RNF08   |BS15, SB02, SB03|O sistema Triagil deve confirmar os dados do paciente no banco de dados|MUST|
|RNF09   |BS16, Q11|O hospital deve ter uma ligação ao banco externo do Triagil|MUST|
|RNF10   |BS17|O sistema Triágil deve verificar o vínculo entre enfermeiro e hospital|MUST|
|RNF11   |BS18|O hospital deve enviar dados dos enfermeiros para nosso sistema|MUST|
|RNF12   |BS19|O sistema deve ser unificado|SHOULD|
|RNF13   |BS22|O acesso à rede do hospital deve ser feito por um código de acesso|MUST|
|RNF14   |BS23|O sistema deve diferenciar oS acessos aS funcionalidades de acordo com o login de paciente e enfermeiro|MUST|
|RNF15   |BS25|O aplicativo pode ser customizado de acordo com o hospital|COULD|
|RNF16   |ENT02|O aplicativo deve possuir informações persistentes do paciente|MUST|
|RNF17   |ENT06, Q12|O sistema deve ser de fácil adaptação|SHOULD|
|RNF18   |Q08|O sistema deve ser seguro|MUST|
|RNF19   |Q09|O sistema deve ter uma boa usabilidade|COULD|
|RNF20   |Q10|O sistema deve ter alta disponibilidade|COULD|
|RNF21   |SB04|O Triagil deve ser associado a rede do hospital|MUST|



**Histórico de versões**

Data | Versão | Descrição | Autor(es) |
| --- | --- | --- | --- |
| 15/09/2020 |1.0.0 | Criação do documento na wiki  | Débora Vilela |
| 16/09/2020 |1.1.0 | Adição dos tópicos expositivos| Débora Vilela|
| 16/09/2020 |1.2.0 | Adição das tabelas classificadas pelo MoSCoW| Nathalia Lorena|


## Referências Bibliográficas

- Framework de priorização: MoSCoW. Disponível em: https://vidadeproduto.com.br/framework-moscow/ Acesso em 16 de setembro de 2020.

- Priorizando Backlog com a Técnica MoSCoW. Disponível em: https://cafecomscrum.com/2015/11/07/priorizando-backlog-com-a-tecnica-moscow/ Acesso em 16 de setembro de 2020. 

- Técnica MoSCoW – o que é? Vantagens e desvantagens em utilizar. Disponível em: https://www.linkedin.com/pulse/t%C3%A9cnica-moscow-o-que-%C3%A9-vantagens-e-desvantagens-em-felipe Acesso em 16 de setembro de 2020
