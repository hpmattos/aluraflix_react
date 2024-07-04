"use client";
import CategoriaServices from "@/servicos/CategoriaServices";
import { useEffect, useState } from "react";
import style from "./novovideo.module.css";
import CategoriasModel from "@/models/CategoriasModel";
import VideoModel from "@/models/VideoModel";
import VideoServices from "@/servicos/VideoServices";

export default function NovoVideo(){
    const [categorias, setCategorias] = useState( );
    const [video, setVideo] = useState(new VideoModel());

    const categoriaService = new CategoriaServices();
    const videoService = new VideoServices();

    useEffect(()=>{
        categoriaService.get().then(categoriasModel =>{
            setCategorias(categoriasModel);
        }) 
    },[]);

    function limpar(){
       for(let elemento of document.getElementsByTagName("input") ){
        elemento.value = "";
       }    
       document.getElementsByTagName("textarea")[0].value = "";
       document.getElementsByTagName("select")[0].value = "-1";
       document.getElementsByTagName("input")[0].focus();
    }
    
    function onChangeInput(target){
        setVideo({...video,[target.name] : target.value});        
    }

    function gravar(){
        for(let element of document.getElementsByTagName("input") ){
            if (element.value.trim() == ""){
                element.className += style.requerido;
            }
        }

        if (document.getElementsByClassName(style.requerido).length > 0){
            alert("Existem campos não preenchidos");
            return;
        }
        const videos = videoService.novoVideo(video);
        if( videos !== false){
            alert("Video salvo com sucesso");
            location.href = "/";
        }
    }

    return(
        <div className={style.novovideo}>
            <div>
                <h2>Novo vídeo</h2>
                <h5>Complete o formulário para criar um novo card de vídeo</h5>

            </div>
            <h3>Criar card</h3>
            <div className={style.formulario}>
                <div>                
                    <div className={style.grupo_input}>
                        <label htmlFor="titulo">Título</label>
                        <input type="text" name="titulo" placeholder="Título" autoFocus onChange={event => {onChangeInput(event.target)}} />
                    </div>
                    <div className={style.grupo_input}>
                        <label htmlFor="categoria">Categoria</label>
                        <select name="categoria" placeholder="Selecione a categoria" onChange={event => {onChangeInput(event.target)}}>
                            <option value={-1} key={0}>Selecione uma categoria</option>
                            {categorias && categorias.map(categoria =>{
                                return (<option value={categoria.id} key={categoria.id} >{categoria.descricao}</option>)
                            })}
                        </select>
                    </div>
                </div>
                <div>
                    <div className={style.grupo_input}>
                        <label htmlFor="urlcapa">Imagem</label>
                        <input type="text" name="urlcapa" placeholder="URL Imagem" onChange={event => {onChangeInput(event.target)}} />
                    </div>
                    <div className={style.grupo_input}>
                        <label htmlFor="url">URL Vídeo</label>
                        <input type="text" name="url" placeholder="URL Vídeo" onChange={event => {onChangeInput(event.target)}}/>
                    </div>
                </div>
                <div>
                    <div className={style.grupo_input}>
                        <label htmlFor="descricao">Descrição</label>
                        <textarea name="descricao" placeholder="Sobre o que é esse vídeo?" onChange={event => {onChangeInput(event.target)}}></textarea>
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