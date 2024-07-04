import Image from "next/image";
import style from "./banner.module.css";
export default function Banner(){    
    return(
        <div className={style.banner}>
            <div className={style.div_info}>
                <div>
                    <a className={style.btnCategoria} href={"#categoria_2" }>
                        Front End
                    </a>
                    <h2 className={style.titulo} >SEO com React</h2>
                    <p>
                        Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"! 
                    </p>
                </div>
                <Image
                  src={"/img/banner.png"}
                  width={300} 
                  height={150}
                  alt="imagem do banner"
                />
            </div>
        </div>
    );
}