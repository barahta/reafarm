import style from './styles/AllNewsStyle.module.scss'
import TwoBlocks from "../components/animation/TwoBlocks";
import Footer from "../components/footer/Footer";
import NewsPost from "../components/news/NewsPost";
import SmallHeader from "../components/newheader/SmallHeader";
import {useEffect, useState} from "react";
import OpenNews from "../components/news/OpenNews";
import BigModal from "../components/modalwin/BigModal";
import NewsPost2 from "../components/news/NewsPost2";
import AllPrices from "../components/prices/AllPrices";

function AllNews (){

    return (
        <div className={style.bodymain}>

            <SmallHeader />
            <AllPrices />
            <Footer />
        </div>
    )
}

export default AllNews