// Ao realizar o commit, comente a linha abaixo. Quando estiver desenvolvendo
// ou testando, coloque o IP da máquina onde a API está rodando e retire o
//comentário
const IP = '192.168.42.221';
const SERVER = `http://${IP}:3333`;

const LOGIN = `${SERVER}/login`;

const SIGNIN = `${SERVER}/patient`;

const HOSPITALLINE = `${SERVER}/patientRecord`;

export {
  LOGIN,
  SIGNIN,
  HOSPITALLINE
};