import Image from "next/image";
import logo from "@/assets/images/logo.png";
import styles from "./styles.module.scss"
import { CiLinkedin, CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { TfiAlarmClock } from "react-icons/tfi";
import { MdOutlineEmail } from "react-icons/md";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__contact}>
                <div className={styles.footer__contact__item}>
                    <CiLocationOn fontSize={50} className={styles.footer__icon}/>
                    <div>
                        <h3 className={styles.footer__title}>Endereço</h3>
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Av.+Brasil,+20384+-+Coelho+Neto,+Rio+de+Janeiro+-+RJ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.footer__text}
                        >
                             <p className={styles.footer__text}>Av. Brasil, 20384 - Coelho Neto, Rio de Janeiro - RJ</p>
                        </a>
                    </div>
                </div>
                <div className={styles.footer__contact__item}>
                    <FaPhoneAlt fontSize={40} className={styles.footer__icon}/>
                    <div>
                        <h3 className={styles.footer__title}>Telefone</h3>
                        <a href="tel:08004540505">
                            <p className={styles.footer__text}>0800 454 0505</p>
                        </a>
                    </div>
                </div>
                <div className={styles.footer__contact__item}>
                    <TfiAlarmClock fontSize={40} className={styles.footer__icon}/>
                    <div>
                        <h3 className={styles.footer__title}>Horário de funcionamento</h3>
                        <p className={styles.footer__text}>Segunda a sexta de 07:30 as 18:00</p>
                    </div>
                </div>
                <div className={styles.footer__contact__item}>
                    <MdOutlineEmail fontSize={40} className={styles.footer__icon}/>
                    <div>
                        <h3 className={styles.footer__title}>Email</h3>
                        <a href="mailto:contato@lionsseminovos.com.br">
                            <p className={styles.footer__text}>contato@lionsseminovos.com.br</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.footer__logo__section}>
                <Image 
                    src={logo}
                    alt="Logo Lions" 
                    quality={100} 
                    priority={true}
                    className={styles.footer__logo}
                />
                <p className={styles.footer__copyright}>©2024 por Lions Seminovos Comércio de Automóveis LTDA.</p>
                <div className={styles.footer__social}>
                <ul className={styles.footer__social__list}>
                    <li className={styles.footer__social__item}>
                        <a href="https://www.youtube.com/@lionsseminovos" target="_blank" rel="noopener noreferrer">
                            <FiYoutube fontSize={30} color="#fff"/>
                        </a>
                    </li>
                    <li className={styles.footer__social__item}>
                        <a href="https://www.facebook.com/lionsseminovos/" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF fontSize={30} color="#fff"/>
                        </a>
                    </li>
                    <li className={styles.footer__social__item}>
                        <a href="https://www.instagram.com/lionsseminovos/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram fontSize={30} color="#fff"/>
                        </a>
                    </li>
                    <li className={styles.footer__social__item}>
                        <a href="https://www.linkedin.com/company/lions-seminovos/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                            <CiLinkedin fontSize={30} color="#fff"/>
                        </a>
                    </li>
                </ul>
        </div>
            </div>
        </footer>
    )
}
export default Footer;
