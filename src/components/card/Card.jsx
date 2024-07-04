import style from "./card.module.css";
import Image from "next/image";

export default function Card({videoModel, corCategoria, onEdit, onDelete}){
  return (
    <div className={style.card} style={{border:`1px solid ${corCategoria}`, boxShadow: `-1px 0px 5px 2px ${corCategoria}` }} >
       <div>
         <h5 className={style.titulo}>{videoModel.titulo}</h5>
          <Image 
            width={100}
            height={100}
            src={videoModel.urlcapa}
            title={videoModel.descricao}
            alt={videoModel.descricao}
          />
        </div>
        <div className={style.acoes}>
            <button onClick={event => {onDelete(videoModel)}}><Image 
                          width={12}
                          height={12}
                          src={"/img/delete.png"}
                          title={"Apagar vídeo"}
                          alt={"Apagar vídeo"}
                        /> 
                        Deletar
            </button>
            <button onClick={event => {onEdit(videoModel)}}>
            <Image 
                          width={12}
                          height={12}
                          src={"/img/edit.png"}
                          title={"Editar vídeo"}
                          alt={"Editar vídeo"}
                        /> 
                    
              Editar
              </button>
        </div> 
    </div>
  )
}