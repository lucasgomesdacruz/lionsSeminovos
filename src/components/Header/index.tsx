"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import { X, Menu } from "lucide-react";
import Input from "../input";

export function Header() {
    const [top, setTop] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const scrollHandler = () => {
        if (!isOpen) {
            setTop(window.scrollY <= 10);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, [isOpen]); 

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className={`${styles.header} ${!top ? styles.fixed : styles.background}`}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.contentLogo}>
                        <Link href="/">
                            <Image src={logo} 
                                alt="Logo Lions" 
                                quality={100} 
                                priority={true} 
                            />
                        </Link>
                    </div>
                    <Input />
                    <nav className={styles.nav}>
                        <ul className={`${styles.ul} ${isOpen ? styles.open : ""}`} onClick={closeMenu}>
                            {isOpen && (
                                <button onClick={toggleMenu} className={styles.closeButton}>
                                    <X size={54} color="#fff" />
                                </button>
                            )}
                            <li><Link href="/">HOME</Link></li>
                            <li><Link href="/">SOBRE</Link></li>
                            <li><Link href="/">CONTATOS</Link></li>
                            <li><Link href="/">CORRETORES</Link></li>
                        </ul>
                    </nav>
                    <div className={styles.menu} onClick={toggleMenu}>
                        <Menu size={34} color="#fff" />
                    </div>
                </div>
            </div>
        </header>
    );
}
