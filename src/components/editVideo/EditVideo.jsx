import CategoriaServices from "@/servicos/CategoriaServices";
import VideoServices from "@/servicos/VideoServices";
import { useEffect, useState } from "react";
import style from "./editvideo.module.css"

export default function EditVideo({videoModel, onClose}){
   
    const [categorias, setCategorias] = useState( );
    const [video, setVideo] = useState(videoModel);
    const categoriaService = new CategoriaServices();
    const videoService = new VideoServices();

    useEffect(()=>{
        categoriaService.get().then(categoriasModel =>{
            setCategorias(categoriasModel);
        }) 
    },[]);

    function limpar(){
       for(let elemento of document.getElementsByTagName("input") ){
        elemento.defaultValue = "";
       }    
       document.getElementsByTagName("textarea")[0].defaultValue = "";
       document.getElementsByTagName("select")[0].defaultValue = "-1";
       document.getElementsByTagName("input")[0].focus();
    }
    
    function onChangeInput(target){
        setVideo({...video,[target.name] : target.value});        
    }

    function gravar(){
        const videos = videoService.alterarVideo(video);
        if( videos !== false){
            alert("Video salvo com sucesso");
            location.href = "/";
        }
    }

    return(
        <div className={style.editvideo}>
            
            <div className={style.formulario}>
                <div className={style.div_titulo}>
                    <h2>EDITAR CARD</h2>           
                    <span className={style.fechar} title="Fechar" onClick={event =>{onClose()}} >X</span>     
                </div>
                <div>                
                    <div className={style.grupo_input}>
                        <label htmlFor="titulo">Título</label>
                        <input type="text" name="titulo" placeholder="Título" defaultValue={video.titulo} autoFocus onChange={event => {onChangeInput(event.target)}} />
                    </div>
                    <div className={style.grupo_input}>
                        <label htmlFor="categoria">Categoria</label>
                        <select name="categoria" 
                                placeholder="Selecione a categoria"                                 
                                onChange={event => {onChangeInput(event.target)}}>
                            <option defaultValue={-1} key={0}>Selecione uma categoria</option>
                            {categorias && categorias.map(categoria =>{
                                return (<option defaultValue={categoria.id} 
                                                key={categoria.id}
                                                selected={categoria.id == video.categoria}
                                                >{categoria.descricao}</option>)
                            })}
                        </select>
                    </div>
                </div>
                <div>
                    <div className={style.grupo_input}>
                        <label htmlFor="urlcapa">Imagem</label>
                        <input type="text" name="urlcapa" 
                                defaultValue={video.urlcapa}
                               placeholder="URL Imagem" 
                               onChange={event => {onChangeInput(event.target)}} />
                    </div>
                    <div className={style.grupo_input}>
                        <label htmlFor="url">URL Vídeo</label>
                        <input type="text" name="url" 
                                defaultValue={video.url}
                               placeholder="URL Vídeo" 
                               onChange={event => {onChangeInput(event.target)}}/>
                    </div>
                </div>
                <div>
                    <div className={style.grupo_input}>
                        <label htmlFor="descricao">Descrição</label>
                        <textarea name="descricao"  defaultValue={video.descricao} placeholder="Sobre o que é esse vídeo?" onChange={event => {onChangeInput(event.target)}}></textarea>
                    </div>
                </div>
                <div className={style.div_botoes_acao}>
                    <button className="btn" onClick={gravar}>Guardar</button>
                    <button className="btn" onClick={limpar}>Limpar</button>
                </div>
            </div>
        </div>
    );

}