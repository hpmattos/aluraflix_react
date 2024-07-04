//import { errorToJSON } from "next/dist/server/render";

export default class Conexao{
  _host = "http://localhost:3000/";

  async processaRequisicao(verbo, servico, dados){
    var myInit = {
        method: verbo,
        mode: "cors",
        cache: "default",
        body: dados
      };
    return await fetch(this._host+servico, myInit).then(resposta => resposta.json()).catch(erro =>{
  //      console.log(errorToJSON(erro));
        alert("Ocorreu um erro");
    })
  }

  async get(servico){
    return await this.processaRequisicao("GET",servico,null);
  }

  async post(servico, dados){
    return await this.processaRequisicao("POST",servico,dados);
  }

  async put(servico, id, dados){
    return await this.processaRequisicao("PUT",servico+"/"+id,dados);
  }
  
  async delete(servico, id){
    return await this.processaRequisicao("DELETE",servico+"/"+id,null);
  }
  

}