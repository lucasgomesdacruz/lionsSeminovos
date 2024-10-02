import styles from "./styles.module.scss"

import Image from "next/image";
import imgBanner from "@/assets/images/categories.jpg"
import imgBronze from "@/assets/images/bronze.png"
import imgPrata from "@/assets/images/prata.png"
import imgOuro from "@/assets/images/ouro.png"

import { ImWhatsapp } from "react-icons/im";
import { FaCheck } from "react-icons/fa";


const Categories = () => {
    return(
        <section className={styles.section}>
            <div className={styles.containerHero}>
                <h2 className={styles.title}>Oportunidade única para quem deseja realmente mudar de vida.</h2>

                <p className={styles.subtitle}>Conheça nossas categorias.</p>

                <div className={styles.categories__containers}>
                    <div className={styles.categories__item}>
                        <div>
                            <Image
                                className={styles.imgMedalha}
                                alt="imagem da medalha de bronze"
                                src={imgBronze}
                                priority={true}
                                quality={100}
                                width={60}
                            />
                        </div>
                        <h3 className={styles.categories__name}>BRONZE</h3>
                        <div className={styles.categories__content}>
                            <p className={styles.categories__description}><FaCheck fontSize={20} color="#000000"/>Suporte via chat</p>
                            <p className={styles.categories__description}><FaCheck fontSize={20} color="#000000"/>Acesso a treinamentos</p>
                            <p className={styles.categories__description}><FaCheck fontSize={20} color="#000000"/>Comissão básica garantida</p>
                        </div>
                        <a 
                            href="https://api.whatsapp.com/send?phone=5521970951262&text=Ol%C3%A1,%20gostaria%20de%20entrar%20em%20contato."
                            target="blank"
                            rel="noopener noreferrer" 
                            className={styles.categories__button}>
                            <ImWhatsapp className={styles.categories__icon} size={24} color="#fff" /> 
                            Quero saber mais
                        </a>
                    </div>

                    <div className={styles.categories__item}>
                        <div>
                            <Image
                                className={styles.imgMedalha}
                                alt="imagem da medalha de prata"
                                src={imgPrata}
                                priority={true}
                                quality={100}
                                width={60}
                            />
                        </div>
                        <h3 className={styles.categories__name}>PRATA</h3>
                        <div className={styles.categories__content}>
                            <p className={styles.categories__description}><FaCheck fontSize={20} color="#000000"/>Comissão superior</p>
                            <p className={styles.categories__description}><FaCheck fontSize={20} color="#000000"/>Acesso a estratégias</p>
                            <p className={styles.categories__description}><FaCheck fontSize={20} color="#000000"/>Suporte personalizado</p>
                        </div>
                        <a 
                            href="https://api.whatsapp.com/send?phone=5521970951262&text=Ol%C3%A1,%20gostaria%20de%20entrar%20em%20contato."
                            target="blank"
                            rel="noopener noreferrer" 
                            className={styles.categories__button}>
                            <ImWhatsapp className={styles.categories__icon} size={24} color="#fff" /> 
                            Quero saber mais
                        </a>
                    </div>

                    <div className={styles.categories__item}>
                        <div>
                            <Image
                                className={styles.imgMedalha}
                                alt="imagem da medalha de Ouro"
                                src={imgOuro}
                                priority={true}
                                quality={100}
                                width={60}
                            />
                        </div>
                        <h3 className={styles.categories__name}>OURO</h3>
                        <div className={styles.categories__content}>
                            <p className={styles.categories__description}><FaCheck fontSize={20} color="#000000"/>Comissão máxima</p>
                            <p className={styles.categories__description}><FaCheck fontSize={20} color="#000000"/>Acesso exclusivo a leads</p>
                            <p className={styles.categories__description}><FaCheck fontSize={20} color="#000000"/>Prioridade em campanhas</p>
                        </div>
                        <a 
                            href="https://api.whatsapp.com/send?phone=5521970951262&text=Ol%C3%A1,%20gostaria%20de%20entrar%20em%20contato."
                            target="blank"
                            rel="noopener noreferrer" 
                            className={styles.categories__button}>
                            <ImWhatsapp className={styles.categories__icon} size={24} color="#fff" /> 
                            Quero saber mais
                        </a>
                    </div>

                    
                </div>
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
export default Categories;