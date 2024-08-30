import { useEffect, useRef, useState } from "react";
import style from './styles/ContactsStyle.module.scss';
import TwoBlocks from "../components/animation/TwoBlocks";
import Footer from "../components/footer/Footer";
import SmallHeader from "../components/newheader/SmallHeader";
import MyMap from "../components/map/Map";
import WriteModal from "../components/modalwin/WriteModal";
import PostContact from "../components/forms/PostContact";
import {useMessage} from "../hooks/message.hook";
import {Link} from "react-router-dom";
import GalaryList from "../components/galary/GalaryList";

function Galary() {


    return (
        <div className={style.bodymain}>
           <SmallHeader />
            <GalaryList />
           <Footer />
        </div>
    );
}

export default Galary;