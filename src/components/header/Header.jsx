import Image from "next/image";
import style from "./header.module.css";

export default function Header(){
    return (
        <header className={style.header}>
            <nav className={style.nav} aria-label="Global">
                <div className={style.logo}>
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Aluraflix</span>
                        <Image 
                        className="" 
                        src="/img/logo.png" 
                        alt="Logo"
                        height={80}
                        width={150}
                        />
                    </a>
                </div>
                <div className={style.menu}>
                <a href="/" className="btn" >Home</a>
                <a href="/novovideo" className="btn">Novo vídeo</a>
                </div>
               </nav> 
            </header>

    );
}