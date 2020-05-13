import React from "react";
import { Link } from "react-router-dom";
import {
  FiPlusCircle,
  FiUsers,
  FiBarChart,
  FiList,
  FiHome,
} from "react-icons/fi";
import s from "./index.module.css";

const Topbar = () => {
  return (
    <div className={s.topbar}>
      <nav className={s.topbarNav}>
        <Link className={s.topbarNavLinkHome} to="/">
          <FiHome />
        </Link>
        
        <Link className={s.topbarNavLink} to="/rating">
          <FiBarChart />
        </Link>
        <Link className={s.topbarNavLink} to="/players">
          <FiUsers />
        </Link>
        <Link className={s.topbarNavLink} to="/games">
          <FiList />
        </Link>

        <Link className={s.topbarNavLinkNewGame} to="/new-game">
          <FiPlusCircle />
        </Link>
      </nav>
    </div>
  );
};

export default Topbar;
