import TriageRecord from '../models/TriageRecord';

class TriageRecordController {
  async store(req, res) {


    let teste = req.body;
    let  objectExemplo = {};

    if(teste.headache){

      objectExemplo.estadoMentalAlterado = teste.estadoMentalAlterado;
      objectExemplo.estadoMentalAlteradoNotes = teste.estadoMentalAlteradoNotes;
      objectExemplo.sinaisDeChoque_headache = teste.sinaisDeChoque_headache;
      objectExemplo.sinaisDeChoqueNotes_headache = teste.sinaisDeChoqueNotes_headache;
      objectExemplo.convulsion_headache = teste.convulsion_headache;
      objectExemplo.sinaisNeurologicosFocais_headache = teste.sinaisNeurologicosFocais_headache;
      objectExemplo.sinaisNeurologicosFocaisNotes_headache = teste.sinaisNeurologicosFocaisNotes_headache;
      objectExemplo.aumentoSubitoDaDor = teste.aumentoSubitoDaDor;
      objectExemplo.aumentoSubitoDaDorNotes = teste.aumentoSubitoDaDorNotes;
      objectExemplo.perdaAgudaCompletaVisao = teste.perdaAgudaCompletaVisao;
      objectExemplo.menigismo_headache = teste.menigismo_headache;
      objectExemplo.menigismoNotes_headache = teste.menigismoNotes_headache;
      objectExemplo.pain_headache = teste.pain_headache;
      objectExemplo.temperature_headache = teste.temperature_headache;
      objectExemplo.inconsciencia_headache = teste.inconsciencia_headache;
      objectExemplo.inconscienciaNotes_headache = teste.inconscienciaNotes_headache;
      objectExemplo.diminuicaoVisao = teste.diminuicaoVisao;
      objectExemplo.nauseaEVomito = teste.nauseaEVomito;

      if(objectExemplo.estadoMentalAlterado || objectExemplo.sinaisDeChoque_headache
         || objectExemplo.convulsion_headache || objectExemplo.sinaisNeurologicosFocais_headache ||
         objectExemplo.aumentoSubitoDaDor){
          teste.manchesterPriority = 5;
      } else if(objectExemplo.perdaAgudaCompletaVisao ||  objectExemplo.menigismo_headache || objectExemplo.pain_headache >= 7){
        teste.manchesterPriority = 4;
      } else if((objectExemplo.temperature_headache >= 35.00 && objectExemplo.temperature_headache <= 37.8) || objectExemplo.inconsciencia_headach ||
          objectExemplo.diminuicaoVisao || (objectExemplo.pain_headache >= 4 && objectExemplo.pain_headache <= 6) ||
          objectExemplo.nauseaEVomito){
            teste.manchesterPriority = 3;
      } else if(objectExemplo.pain_headache >= 1 && objectExemplo.pain_headache <= 3){
            teste.manchesterPriority = 2;
      } else {
            teste.manchesterPriority = 1;
      }

    }
    // else if(teste.soreThroat){
    //     vetorExemplo.push(teste.soreThroatSigns);
    //     delete teste.soreThroatSigns;
    // } else if(teste.convulsion){
    //     vetorExemplo.push(teste.convulsionSigns);
    //     delete teste.convulsionSigns;
    // } else if(teste.fainting){
    //     vetorExemplo.push(teste.faintingSigns);
    //     delete teste.faintingSigns;
    // } else if(teste.diarrhea){
    //     vetorExemplo.push(teste.diarrheaSigns);
    //     delete teste.diarrheaSigns;
    // }

      return res.json({
        teste
    });
  }

  async show(req,res) {
    return res.json({
        triageRecord
    });
  }
}

export default new TriageRecordController();
