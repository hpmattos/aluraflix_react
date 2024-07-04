"use client"
import { useEffect, useState } from "react";
import style from "./listavideos.module.css";
import CategoriaServices from "@/servicos/CategoriaServices";
import VideoServices from "@/servicos/VideoServices";
import Card from "../card/Card";
import EditVideo from "../editVideo/EditVideo";

export default function ListaVideos(){
  const [videos, setVideos] = useState();
  const categoriaServices = new CategoriaServices();
  const videoServices = new VideoServices();
  const [categorias, setCategorias] = useState(new Array() );
  const [modalEdit, setModalEdit] = useState();

  useEffect(()=>{
    categoriaServices.get().then(resposta => setCategorias(resposta));
    videoServices.get().then(resposta =>{
        setVideos(resposta);
    });

  },[]);

  function deletaVideo(video){
    if (! confirm("Tem certeza que deseja apagar esse vídeo?")) return;
    videoServices.apagarVideo(video.id);
    location.reload();
  }
  
  function editaVideo(video){
    setModalEdit((<EditVideo videoModel={video} onClose={fechaEdit} />));
  }
  function fechaEdit(){
    setModalEdit(null);
  }

  return (
            <div className={style.lisaVideos}>
                {modalEdit}
                {categorias && categorias.map(categoria =>{
                    return (
                        <div id={"categoria_"+categoria.id} key={categoria.id}>
                            <div>
                                <span className={style.categoria} style={ {"backgroundColor": categoria.cor}} >{categoria.descricao } </span>
                            </div>
                            <div className={style.listaVideos}>
                                {videos && videos.filter(video => video.categoria == categoria.id).map(video =>{
                                    return (<Card 
                                                   videoModel={video} 
                                                   corCategoria={categoria.cor} 
                                                   key={video.id}
                                                   onEdit={editaVideo}
                                                   onDelete={deletaVideo}
                                                   />)
                                }) }
                            </div>
                        </div>
                    )


                    
                })}
            </div>)


}