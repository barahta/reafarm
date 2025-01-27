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
import EntryBlanck from "../components/forms/EntryBlanck";
import NewsService from "../services/NewsService";

function Contacts() {
    const [activemodal, setActivemodal] = useState(false);
    const [data, setData] = useState('');
    const postResume = (pos = '') => {
        setData(pos)
        setActivemodal(true)
    }


    const [allCity, setAllCity] = useState([]);

    const getCities = async () => {
        try{
            const {data} = await NewsService.getCities({capter: 'reafarm'})
            setAllCity(data)
        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        getCities()
    },[])

    return (
        <div className={style.bodymain}>
            <WriteModal activemodal={activemodal} setActivemodal={setActivemodal} data={<EntryBlanck man={data}  setActivemodal={setActivemodal}/>} setData={setData} />
            <SmallHeader />
            <div className={style.contacts}>
                <div className={style.ontheleft}>
                    <div className={style.container50}>
                        <div className={style.strock}>телефон</div>
                        <div className={style.strock}>{(allCity[0])&&allCity[0].phone}</div>
                        <div className={style.strock}>адрес</div>
                        <div className={style.strock}>{(allCity[0])&&allCity[0].adress}</div>
                        <div className={style.strock}>{(allCity[0])&&allCity[0].email}</div>
                    </div>
                </div>
                <div className={style.ontheright}>
                    <div className={style.container50}>
                        <div className={style.entry}>
                            <Link to='/catalog' className={style.btn}>Каталог</Link>
                            <div className={style.btn} onClick={()=>postResume()}>Сделать заказ</div>
                        </div>
                    </div>
                </div>
            </div>
            <MyMap />
            <Footer />
        </div>
    );
}

export default Contacts;