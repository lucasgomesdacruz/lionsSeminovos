import styles from "./styles.module.scss"

import Image from "next/image";
import imgBanner from "@/assets/images/bannerLions.webp"
import { ImWhatsapp } from "react-icons/im";

const Hero = () => {
    return(
        <section className={styles.section}>
            <div className={styles.containerHero}>
                <h1 className={styles.title}>Fature muito com a melhor concessionária de seminovos do Brasil</h1>

                <a 
                    href="https://api.whatsapp.com/send?phone=5521970951262&text=Ol%C3%A1,%20gostaria%20de%20entrar%20em%20contato."
                    target="blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                >
                    <ImWhatsapp className={styles.icon} size={24} color="" /> Quero saber mais
                </a>
            </div>

            <div className={styles.contentBanner}>
                <Image 
                    className={styles.banner}
                    alt="imagem da loja lions seminovos"
                    src={imgBanner}
                    priority={true}
                    quality={100}
                    fill={true}
                />
            </div>
        </section>
    )
}
export default Hero