import styles from "./styles.module.scss"
import { BsCashCoin } from "react-icons/bs";
import { FaHouseUser } from "react-icons/fa";
import { GiCash } from "react-icons/gi";

const BenefitsTwo = () => {
    return(
        <section className={styles.benefits}>
            <div className={styles.containers}>
                <BsCashCoin className={styles.icon} size={50} color="#fff"/>
                <h2>Diversas estratégias de vendas</h2>
            </div>

            <div className={styles.containers}>
                <FaHouseUser className={styles.icon} size={50} color="#fff"/>
                <h2>Possuímos a melhor comissão</h2>
            </div>

            <div className={styles.containers}>
                <GiCash className={styles.icon} size={50} color="#fff"/>
                <h2>Treinamento contínuo</h2>
            </div>
        </section>
    )
}
export default BenefitsTwo;