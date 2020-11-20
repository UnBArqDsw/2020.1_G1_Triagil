import app from './triagil';


const bodyParser = require('body-parser');
const cors = require('cors');
/*
app.use((req, res, next) => {
  res.header("Acces-Control-Allow-Origin", "*");
  res.header("Acces-Control-Allow-Methods", 'GET, PUT, POST, DELETE');
  app.use(cors());
  next();
})
app.use(bodyParser.json())
app.use(cors());
*/
app.listen(3333);
