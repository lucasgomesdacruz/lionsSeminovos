"use client";
import { useState } from "react";
import styles from "./styles.module.scss"; 
import { FiSearch } from "react-icons/fi";

const Input = () => {
    const [input, setInput] = useState<string>("");

    const keyword = "fature";

    function handleSearch(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (input.toLowerCase() === keyword.toLowerCase()) {
            alert(`Palavra encontrada: ${keyword}`);
        } else {
            alert("Nenhum resultado encontrado"); 
        }
    }

    return (
        <div>
            <form onSubmit={handleSearch} className={styles.inputContainer}>
                <input 
                    type="text"
                    placeholder="Procure a palavra fature"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    className={styles.inputField}
                />
                <button type="submit" className={styles.searchButton}>
                    <FiSearch size={20} color="#d1d5db"/>
                </button>
            </form>
        </div>
    );
};

export default Input;
