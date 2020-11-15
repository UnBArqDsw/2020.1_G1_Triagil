# TRIAGIL - Backend da Aplicação

![contributor](https://img.shields.io/badge/all%20contributors-6-brightgreen)

## Sobre

<div align="center"><img width="300px" height="175px" src="https://imgur.com/yBMVGy9.png"/></div>

Triagil trata-se de uma aplicação que tem como objetivo auxiliar os profissionais da saúde no processo de triagem de maneira mais rápida e ágil.

## Instalação

**Linguagens**: JavaScript<br>
**Tecnologias**: PostgreSQL, Node JS<br>
<img width="55px" height="50px" src="https://imgur.com/wVQA02I.png"/> <img width="75px" height="50px" src="https://imgur.com/g75zlLp.gif"/> <img width="70px" height="50px" src="https://i.imgur.com/6wEVcni.png"/> <img width="70px" height="50px" src="https://imgur.com/UWlGuMy.gif"/>

### Passos em processo de desenvolvimento:

- Clone o repositorio: `git clone https://github.com/UnBArqDsw/2020.1_G1_Triagil.git`

- Acesse a o diretório do Backend `cd 2020.1_G1_Triagil/Back/`

- Execute o banco de dados: `sudo docker-compose up`

- Instale as dependencias em sua máquina: `yarn add sucrase nodemon -D`
                                          `yarn add sequelize`
                                          `yarn add sequelize-cli -D`
                                          `yarn add bcryptjs`
- Instale as dependencias do Postegres: `yarn add pg`
                                        `yarn add pg-hstore`

- Faça as migrações das tabeladas para banco de dados: `yarn sequelize db:migrate`

- Execute a API Node: `yarn dev`

- Para visualizar as tabelas no DB recomenda-se usar o software [PostBird](https://www.electronjs.org/apps/postbird)

- Para injeção de dados recomenda-se usar o software software [Insomnia](https://insomnia.rest/)

## Outros

### Contribuindo

Certifique-se de ler o [Guia de Contribuição](https://github.com/UnBArqDsw/2020.1_G1_Triagil/blob/master/CONTRIBUTING.md) antes de fazer um _Pull Request_.

### Playlist recomendada pela equipe Triagil para melhor Produtividade

<iframe src="https://open.spotify.com/embed/playlist/3UofgfCHHvuv6PTXDOlxNj" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

<div align="center"><footer>&copy; Copyright 2020 TRIAGIL</footer></div>
