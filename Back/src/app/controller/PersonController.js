import Person from '../models/Person';

class PersonController {
  async store(req, res) {
    // const personExists = await Person.findOne({ where: { email: req.body.email } });

    // if (personExists) {
    //   return res.status(400).json({ error: 'Person already exists.' });
    // }
    const person = await Person.create(req.body);

    return res.json({
      person
    });
  }
}

export default new PersonController();
