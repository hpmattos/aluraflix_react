import Image from "next/image";
import style from "./footer.module.css";

export default function Footer(){
    return(
        <div className={style.footer}>
            <Image 
            src={"/img/logo.png"}
            width={200}
            height={100}
            alt="Logo"
            className={style.logo}
            />            
            <a href="/" className="btn" >Home</a>
            <a href="/novovideo" className={` ${style.novovideo}`} title="Novo vídeo" >
                <Image 
                src={"/img/novovideo.png"}
                width={32}
                height={32}
                alt="Novo vídeo"
                />            
                
            </a>
        </div>
    )
}