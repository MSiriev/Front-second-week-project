// import React from "react";
import styles from "../Header/Header.module.css";
// import logotip from "../../assets/log4.png";
import { motion } from "framer-motion";
import { forwardRef, useRef } from "react";
import { Link } from "react-router-dom";

const Header = forwardRef(() => {

  const textAnimation = {
    hidden: (custom) => ({
      y: 100,
      opacity: 0,
    }),
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {linear: custom * 3}
    })
  }

  //   const icon = {
  //   hidden: (custom) => ({
  // 	delay: custom * 1,
  //     z: 1000,
  //     opacity: 0,
  //     transition: {
  //     },
  //   }),
  //   visible: (custom) => ({
  //     z: 0,
  //     opacity: 1,
  //     transition: {
  //       delay: custom * 1,
  //     },
  //   }),
  // };
  return (
    <>
      <motion.div viewport={{amount: 0.2, once: true}} custom={3} initial="hidden" whileInView="visible" variants={textAnimation} className={styles.mainDiv}>
        <header>
          <div className={styles.leftMenu}>
            <ul>
              <li>
                <Link to={"/"}>Купить</Link>
              </li>
              <li>
                <Link to={"/"}>Снять</Link>
              </li>
              <li>
                <Link to={"/"}>Продать</Link>
              </li>
              <li className={styles.lastLi}>
                <Link to={"/"}>Сдать</Link>
              </li>
            </ul>
          </div>
          <div className={styles.logoPlace}>
            <img alt="" width={130} height={60} />
          </div>

          <div className={styles.rightMenu}>
            <ul>
              <li>
                <Link to={"/"}>Войти</Link>
              </li>
              <li>
                <Link to={"/"}>Помощь</Link>
              </li>
              <li>
                <Link to={"/"}>Ипотека</Link>
              </li>
              <li className={styles.lastLi}>
                <Link to={"/"}>Навостройки</Link>
              </li>
            </ul>
          </div>
          {/* <div className={styles.form}>
            <input
              placeholder="Введите название улицы или города"
              type="text"
              className={styles.input}
            />
            <button className={styles.btnSearch}>Найти</button>
          </div> */}
        </header>
      </motion.div>
    </>
  );
});

export default Header;
export const MHeader = motion(Header);
