import styles from "./styles.module.scss"
import { BsCashCoin } from "react-icons/bs";
import { FaHouseUser } from "react-icons/fa";
import { GiCash } from "react-icons/gi";

const Benefits = () => {
    return(
        <section className={styles.benefits}>
            <div className={styles.containers}>
                <BsCashCoin size={50} color="#fff"/>
                <h2>Ganhe uma renda extra</h2>
            </div>

            <div className={styles.containers}>
                <FaHouseUser size={50} color="#fff"/>
                <h2>Trabalhe de onde quiser</h2>
            </div>

            <div className={styles.containers}>
                <GiCash size={50} color="#fff"/>
                <h2>Lucro alto</h2>
            </div>
        </section>
    )
}

export default Benefits;