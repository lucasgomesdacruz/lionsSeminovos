import styles from "./styles.module.scss"

import Image from "next/image";
import imgBanner from "@/assets/images/bannerSupport.jpg"

const Support = () => {
    return(
        <section className={styles.section}>
            <div className={styles.containerHero}>
                <h2 className={styles.title}>Nossos parceiros possuem todo suportenecessário para alcançar o sucesso nas vendas</h2>

                <p className={styles.subtitle}>Contamos com uma equipe totalmente especializada em vendas que acompanha cada etapa para a realização de sua venda.</p>

                
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
export default Support