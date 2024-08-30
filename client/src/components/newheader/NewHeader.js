import style from './NewHeaderStyle.module.scss';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import PostResume from "../forms/PostResume";
import WriteModal from "../modalwin/WriteModal";
import EntryBlanck from "../forms/EntryBlanck";

function NewHeader() {
    const [showVideo, setShowVideo] = useState(false);
    const [activemodal, setActivemodal] = useState(false)
    const [data, setData] = useState('')

    const postResume = (pos = '') => {
        setData(pos)
        setActivemodal(true)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowVideo(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);
    return (
        <div className={style.main}>
            <WriteModal activemodal={activemodal} setActivemodal={setActivemodal} data={<EntryBlanck man={data}  setActivemodal={setActivemodal}/>} setData={setData} />
            <div className={style.video}>
            {showVideo && (

                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={style.videoContent}
                >
                    <source src="/files/header/intro.mp4" type="video/mp4" />
                </video>
                )}
            </div>
            <div className={style.container}>
                <div className={style.leftpart}>
                    <img src="/files/header/hopekidsw.svg" alt=""/>
                </div>
                <div className={style.rightpart}>
                    <div className={style.board}>
                        <div onClick={()=>postResume()}  className={style.btn}>Записаться<div className={style.border}></div>
                        </div>
                        {/*<div className={style.btn}>О нас<div className={style.border}></div></div>*/}
                        <Link to='/allprograms' className={style.btn}>Все программы<div className={style.border}></div></Link>
                        <Link to='/contacts' className={style.btn}>Фототур<div className={style.border}></div></Link>
                        <Link to='/contacts' className={style.btn}>Контакты<div className={style.border}></div></Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default NewHeader;