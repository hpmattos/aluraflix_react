
import Conexao from "@/conexao/Conexao";
import CategoriasModel from "@/models/CategoriasModel";

export default class CategoriaServices{
    
    async get(){
        const conexao = new Conexao();
        const categorias = await   conexao.get("categorias").then(resposta=>{
            return resposta.map(item => {
                const categoria = new  CategoriasModel();
                categoria.id = item.id;
                categoria.descricao = item.descricao;
                categoria.cor = item.cor;
                return categoria;

            })
        })
        return categorias;
    }
     
}