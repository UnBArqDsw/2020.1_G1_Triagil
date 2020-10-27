import Person from '../models/Person';
import bcryptjs from 'bcryptjs';

class PersonController {
  async store(req, res) {
    const personExists = await Person.findOne({ where: { email: req.body.email } });

    if (personExists) {
      return res.status(400).json({ error: 'Person already exists.' });
    }
    const person = await Person.create(req.body);

    return res.json({
      person
    });
  }
  async show(req,res) {
    const personExists = await Person.findOne({ where: { email: req.body.email } });

    if (!personExists) {
      return res.status(400).json({ error: 'Person does not exists.' });
    }

    const personPasswordhash = personExists.password_hash;
    const checkPasswordPerson = bcryptjs.compare(req.body.password, personPasswordhash);

    if(!(await checkPasswordPerson)){
      return res.status(400).json({ error: 'Password is wrong!' });
    }

    return res.json({
      personExists
    });

  }
}

export default new PersonController();
