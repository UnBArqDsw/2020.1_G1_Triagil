# UML – Diagramas Dinâmicos

## Introdução

Diagramas dinâmicos são usados ​​para descrever o comportamento para visualizar, especificar, construir e documentar aspectos internos do sistema.

## Diagrama de Sequência

## Diagrama de Estado

## Diagrama de Atividades

O objetivo do diagrama de atividades é mostrar o fluxo de atividades em um único processo. O diagrama mostra como um atividade depende uma da outra.

### Atividade do Paciente

![atv-paciente](https://southcentralus1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Funbbr-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!C6WZURgUY0-RZ8MNXWjnwvW0H_QCWdFJi-IiH8y71Ds65CVZhPRoSZVIK1LvKDXz%2Fitems%2F01KNGN7ERFK7HYO272CJAJL5PQJEOPN6XR%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvdW5iYnItbXkuc2hhcmVwb2ludC5jb21AZWMzNTliYTEtNjMwYi00ZDJiLWI4MzMtYzhlNmQ0OGY4MDU5IiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTYwMTI0MDQwMCIsImV4cCI6IjE2MDEyNjIwMDAiLCJlbmRwb2ludHVybCI6ImJyOTBJR2srOUpvRWdLMTI1dU5UU2l2NmExbjNRSUZYS3FmSDJoUjJ4KzQ9IiwiZW5kcG9pbnR1cmxMZW5ndGgiOiIxMTUiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsInZlciI6Imhhc2hlZHByb29mdG9rZW4iLCJzaXRlaWQiOiJOVEU1T1dFMU1HSXRNVFF4T0MwMFpqWXpMVGt4TmpjdFl6TXdaRFZrTmpobE4yTXkiLCJuYW1laWQiOiIwIy5mfG1lbWJlcnNoaXB8MTYwMDA2MjEwQGFsdW5vLnVuYi5iciIsIm5paSI6Im1pY3Jvc29mdC5zaGFyZXBvaW50IiwiaXN1c2VyIjoidHJ1ZSIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfDEwMDMyMDAwNDBkOTZmMzdAbGl2ZS5jb20iLCJ0dCI6IjAiLCJ1c2VQZXJzaXN0ZW50Q29va2llIjoiMiJ9.ZmRJYjRML092eFNDVGFCUlpodVhzbUN4MGt0ZEwyL2RSM0tkVVVFa2x5dz0&encodeFailures=1&srcWidth=&srcHeight=&width=401&height=753&action=Access)

!!! note ""
    **Autor(es):** Francisco Heronildo</br>
    **Data:** 26 de Setembro de 2020 </br>
    **Versão Atual:** [0.2](https://unbbr-my.sharepoint.com/:f:/g/personal/160006210_aluno_unb_br/Erh64-8onNFNof9vnhkZTAgB_Dd153nq4qfLLCu3P6SKOg?e=wofDFh)
    **Versão Anterior:** [0.1](https://unbbr-my.sharepoint.com/:i:/g/personal/160006210_aluno_unb_br/EWN5n8Kss8pClV1l5Ott_78Bqyov4rJoI7G2HxFXITjUIg?e=3EiIOo)

### Atividade da Enfermeira

![atv-enfermeira](https://southcentralus1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Funbbr-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!C6WZURgUY0-RZ8MNXWjnwvW0H_QCWdFJi-IiH8y71Ds65CVZhPRoSZVIK1LvKDXz%2Fitems%2F01KNGN7ESWQPMRRS2SKBFKQZZRQ6YDQFDH%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvdW5iYnItbXkuc2hhcmVwb2ludC5jb21AZWMzNTliYTEtNjMwYi00ZDJiLWI4MzMtYzhlNmQ0OGY4MDU5IiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTYwMTI0MDQwMCIsImV4cCI6IjE2MDEyNjIwMDAiLCJlbmRwb2ludHVybCI6ImJyOTBJR2srOUpvRWdLMTI1dU5UU2l2NmExbjNRSUZYS3FmSDJoUjJ4KzQ9IiwiZW5kcG9pbnR1cmxMZW5ndGgiOiIxMTUiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsInZlciI6Imhhc2hlZHByb29mdG9rZW4iLCJzaXRlaWQiOiJOVEU1T1dFMU1HSXRNVFF4T0MwMFpqWXpMVGt4TmpjdFl6TXdaRFZrTmpobE4yTXkiLCJuYW1laWQiOiIwIy5mfG1lbWJlcnNoaXB8MTYwMDA2MjEwQGFsdW5vLnVuYi5iciIsIm5paSI6Im1pY3Jvc29mdC5zaGFyZXBvaW50IiwiaXN1c2VyIjoidHJ1ZSIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfDEwMDMyMDAwNDBkOTZmMzdAbGl2ZS5jb20iLCJ0dCI6IjAiLCJ1c2VQZXJzaXN0ZW50Q29va2llIjoiMiJ9.ZmRJYjRML092eFNDVGFCUlpodVhzbUN4MGt0ZEwyL2RSM0tkVVVFa2x5dz0&encodeFailures=1&srcWidth=&srcHeight=&width=290&height=630&action=Access)

!!! note ""
    **Autor(es):** João Vitor</br>
    **Data:** 26 de Setembro de 2020 </br>
    **Versão:** [0.1](https://unbbr-my.sharepoint.com/:f:/g/personal/160006210_aluno_unb_br/Erh64-8onNFNof9vnhkZTAgB_Dd153nq4qfLLCu3P6SKOg?e=wofDFh)

### Geral

![atv-geral](https://southcentralus1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Funbbr-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!C6WZURgUY0-RZ8MNXWjnwvW0H_QCWdFJi-IiH8y71Ds65CVZhPRoSZVIK1LvKDXz%2Fitems%2F01KNGN7ESYMRW4KKPTGZF3IHZ3JXON3TW5%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvdW5iYnItbXkuc2hhcmVwb2ludC5jb21AZWMzNTliYTEtNjMwYi00ZDJiLWI4MzMtYzhlNmQ0OGY4MDU5IiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTYwMTI0MDQwMCIsImV4cCI6IjE2MDEyNjIwMDAiLCJlbmRwb2ludHVybCI6ImJyOTBJR2srOUpvRWdLMTI1dU5UU2l2NmExbjNRSUZYS3FmSDJoUjJ4KzQ9IiwiZW5kcG9pbnR1cmxMZW5ndGgiOiIxMTUiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsInZlciI6Imhhc2hlZHByb29mdG9rZW4iLCJzaXRlaWQiOiJOVEU1T1dFMU1HSXRNVFF4T0MwMFpqWXpMVGt4TmpjdFl6TXdaRFZrTmpobE4yTXkiLCJuYW1laWQiOiIwIy5mfG1lbWJlcnNoaXB8MTYwMDA2MjEwQGFsdW5vLnVuYi5iciIsIm5paSI6Im1pY3Jvc29mdC5zaGFyZXBvaW50IiwiaXN1c2VyIjoidHJ1ZSIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfDEwMDMyMDAwNDBkOTZmMzdAbGl2ZS5jb20iLCJ0dCI6IjAiLCJ1c2VQZXJzaXN0ZW50Q29va2llIjoiMiJ9.ZmRJYjRML092eFNDVGFCUlpodVhzbUN4MGt0ZEwyL2RSM0tkVVVFa2x5dz0&encodeFailures=1&srcWidth=&srcHeight=&width=487&height=630&action=Access)

!!! note ""
    **Autor(es):** Francisco Heronildo, João Vitor</br>
    **Data:** 26 de Setembro de 2020 </br>
    **Versão:** [0.1](https://unbbr-my.sharepoint.com/:f:/g/personal/160006210_aluno_unb_br/Erh64-8onNFNof9vnhkZTAgB_Dd153nq4qfLLCu3P6SKOg?e=wofDFh)

## Diagrama de Comunicação

---

**Histórico de versões**

|Data|Versão|Descrição|Autor(es)|
|:--:|:----:|:-------:|:-------:|
| 27/09/2020 | 1.0.0 | Criação do documento no pages | Francisco Heronildo e João Vitor |
| 27/09/2020 | 1.1.0 | Adicionado o diagrama de atividades | Francisco Heronildo e João Vitor |

## Referências Bibliográficas

SERRANO,Milene. **AULA - UML DINÂMICO**,  37 slides. 2020. Material apresentado para Disciplina de Arquitetura de Desenho de Software do curso de engenharia de software da UnB, FGA. Acesso em: 25, Setembro de 2020.

O que é um diagrama UML? . **Lucidchart**, 2020. Disponível em: <https://www.lucidchart.com/pages/pt/o-que-e-uml>. Acesso em: 26, Setembro e 2020.

O que é diagrama de atividades UML? . **Lucidchart**, 2020. Disponível em: <https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-atividades-uml#:~:text=Representa%20o%20come%C3%A7o%20de%20um,em%20um%20diagrama%20de%20atividade.&text=Indica%20as%20atividades%20que%20comp%C3%B5em,de%20um%20diagrama%20de%20atividade.>. Acesso em: 26, Setembro e 2020.
