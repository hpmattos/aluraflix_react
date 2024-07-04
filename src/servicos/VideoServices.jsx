import Conexao from "@/conexao/Conexao";
import VideoModel from "@/models/VideoModel";

export default class VideoServices
{
    _conexao = new Conexao();

    async get(){
        const videos = await   this._conexao.get("videos?_sort=categoria").then(resposta=>{
            return resposta.map(item => {
                const video = new  VideoModel();
                video.id = item.id;
                video.titulo = item.titulo;
                video.urlcapa = item.urlcapa;
                video.url = item.url;
                video.categoria = item.categoria;
                video.descricao = item.descricao;
                return video;

            })
        })
        return videos;
    }
    async novoVideo(video){
        delete(video.id);
        const videos = await   this._conexao.post("videos", JSON.stringify(video) );
        return videos;
    }
    
    async alterarVideo(video){
        const videos = await   this._conexao.put("videos",video.id, JSON.stringify(video) );
        return videos;
    }

    async apagarVideo(idvideo){
        const videos = await  this._conexao.delete("videos",idvideo );
        return videos;
    }
    

}