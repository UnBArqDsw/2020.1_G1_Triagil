// Ao realizar o commit, comente a linha abaixo. Quando estiver desenvolvendo
// ou testando, coloque o IP da máquina onde a API está rodando e retire o
//comentário
const IP = '192.168.42.94';
const SERVER = `http://${IP}:3333`;

const LOGIN = `${SERVER}/login`;

const SIGNIN = `${SERVER}/patient`;

const HOSPITALLINE = `${SERVER}/patientRecord`;

const TRIAGEPATIENT = `${SERVER}/triageRecord`;

export {
  LOGIN,
  SIGNIN,
  HOSPITALLINE,
  TRIAGEPATIENT
};