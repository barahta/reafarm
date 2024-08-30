import style from './SmallHeaderStyle.module.scss'
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useState} from "react";
import EntryBlanck from "../forms/EntryBlanck";
import WriteModal from "../modalwin/WriteModal";

function SmallHeader(){

    const [openburger, setOpenburger] = useState(false)

    const [activemodal, setActivemodal] = useState(false)
    const [data, setData] = useState('')

    const postResume = (pos = '') => {
        setData(pos)
        setActivemodal(true)
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        if(openburger===true){
            document.body.style.position = 'fixed'
            document.body.style.top = '0px'
        }else{
            document.body.style.position = 'relative'
            document.body.style.top = '0px'
        }
    }, [openburger]);

    return(
        <div className={style.main}>
            <WriteModal activemodal={activemodal} setActivemodal={setActivemodal} data={<EntryBlanck man={data}  setActivemodal={setActivemodal}/>} setData={setData} />
            <div className={style.menumobile} style={(openburger)?{maxHeight:'100%', opacity: '1', marginTop: '0px', display:'flex'}:{}}>

                <div className={style.rightpart}>
                    <div className={style.board}>
                        <div  onClick={()=>postResume()} className={`${style.btn} ${style.left} ${style.down}`}>Записаться<div className={style.border}></div>
                        </div>
                        {/*<div className={style.btn}>О нас<div className={style.border}></div></div>*/}
                        <Link to='/allprograms' className={`${style.btn} ${style.right} ${style.down}`}>Все программы<div className={style.border}></div></Link>
                        <Link to='/contacts' className={`${style.btn} ${style.left}`}>Контакты<div className={style.border}></div></Link>
                        <Link to='/phototour' className={`${style.btn} ${style.right}`}>Фототур<div className={style.border}></div></Link>
                    </div>
                </div>
                <div className={style.up}></div>
            </div>
            <div className={style.container}>
                <Link to='/' className={style.leftpart}>
                    <img src="/files/header/logomain3.svg" alt=""/>
                </Link>
                <div className={style.rightpart}>
                    <div className={style.burder} onClick={()=>setOpenburger(!openburger)} style={(openburger)?{rotate: '90deg', width: '70px'}:{rotate: '0deg'}}>
                        <div className={style.line} style={(openburger)?{backgroundColor:'#454545'}:{}}></div>
                        <div className={style.line} style={(openburger)?{backgroundColor:'#454545'}:{}}></div>
                        <div className={style.line} style={(openburger)?{backgroundColor:'#454545'}:{}}></div>
                    </div>
                    <div className={style.menu}>
                        <div onClick={()=>postResume()}  className={style.page}>
                            <div className={style.text}>Записаться</div>
                            <div className={style.active}></div>
                        </div>
                        {/*<div className={style.page}>*/}
                        {/*    <div className={style.text}>О нас</div>*/}
                        {/*    <div className={style.active}></div>*/}
                        {/*</div>*/}
                        <Link to='/allprograms' className={style.page}>
                            <div className={style.text}>Все программы</div>
                            <div className={style.active}></div>
                        </Link>
                        <Link to='/phototour' className={style.page}>
                            <div className={style.text}>Фототур</div>
                            <div className={style.active}></div>
                        </Link>
                        <Link to='/contacts' className={style.page}>
                            <div className={style.text}>Контакты</div>
                            <div className={style.active}></div>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SmallHeader