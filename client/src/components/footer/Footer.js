import style from './FooterStyle.module.scss'
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import NewsService from "../../services/NewsService";

function Footer (){

    const [data, setData] = useState('')
    const [thisContacts, setThisContacts] = useState([]);
    const getCities = async () => {
        try{
            const {data} = await NewsService.getCities({capter: 'reafarm'})
            console.log(data)
            setThisContacts(data)
        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        getCities()
    }, [])

    return(
        <div className={style.main}>
            <div className={style.omediawater}></div>
            <div className={style.omedia}>REA FARM</div>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.upper}>
                        <div className={style.column}>
                            {/*<div className={style.point}>*/}
                            {/*    <div className={style.next}></div>*/}
                            {/*    <div className={style.text}>О нас</div>*/}
                            {/*</div>*/}
                            <Link to='/' className={style.point}>
                                <div className={style.next}></div>
                                <div className={style.text}>Сделать заказ</div>
                            </Link>
                            <Link to='/catalog'  className={style.point}>
                                <div className={style.next}></div>
                                <div className={style.text}>Каталог</div>
                            </Link>
                        </div>
                        {/*<div className={style.column}>*/}
                        {/*    <div className={style.point}>*/}
                        {/*        <div className={style.next}></div>*/}
                        {/*        <div className={style.text}>Стратегические приоритеты</div>*/}
                        {/*    </div>*/}
                        {/*    <div className={style.point}>*/}
                        {/*        <div className={style.next}></div>*/}
                        {/*        <div className={style.text}>История</div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className={style.column}>
                            <Link to='/contacts'  className={style.point}>
                                <div className={style.next}></div>
                                <div className={style.text}>Контакты</div>
                            </Link>
                        </div>
                    </div>
                    <div className={style.uppermobile}>
                            {/*<div className={style.point}>*/}
                            {/*    <div className={style.next}></div>*/}
                            {/*    <div className={style.text}>О нас</div>*/}
                            {/*</div>*/}
                            <Link to={'/'} className={style.point}>
                                <div className={style.next}></div>
                                <div className={style.text}>Сделать заказ</div>
                            </Link>
                            <Link to={'/catalog'} className={style.point}>
                                <div className={style.next}></div>
                                <div className={style.text}>Каталог</div>
                            </Link>
                            {/*<div className={style.point}>*/}
                            {/*    <div className={style.next}></div>*/}
                            {/*    <div className={style.text}>Стратегические приоритеты</div>*/}
                            {/*</div>*/}
                            {/*<div className={style.point}>*/}
                            {/*    <div className={style.next}></div>*/}
                            {/*    <div className={style.text}>История</div>*/}
                            {/*</div>*/}
                            <Link to={'/contacts'} className={style.point}>
                                <div className={style.next}></div>
                                <div className={style.text}>Контакты</div>
                            </Link>
                    </div>
                </div>
                <div className={style.contacts}>
                    <div className={style.data} style={{display: 'flex' ,flexDirection: 'column', alignItems: 'flex-end'}}>
                        {(thisContacts[0])&&thisContacts[0].adress.map((adress, indexCity1) => (
                            <div key={indexCity1} className={style.adress}>{(adress)&&adress}</div>
                        ))}
                        {(thisContacts[0])&&thisContacts[0].phone.map((phone, indexCity2) => (
                            <div key={indexCity2} className={style.phone}>{(phone)&&phone}</div>
                        ))}
                        {(thisContacts[0])&&thisContacts[0].email.map((email, indexCity2) => (
                            <div key={indexCity2} className={style.phone}>{(email)&&email}</div>
                        ))}
                    </div>
                    <div className={style.sociality}>
                        {/*<a href={(thisContacts[0])?thisContacts[0].youtube:''} target="_blank" rel="noopener noreferrer" style={(thisContacts.length < 0 && thisContacts[0].youtube === null || thisContacts[0].youtube === '' || thisContacts[0].youtube === undefined)?{display:'none'}:{}}><img src="/files/sociality/youtube.png" alt=""/></a>*/}
                        {/*<a href={(thisContacts[0])&&thisContacts[0].telegram} target="_blank" rel="noopener noreferrer" style={(thisContacts[0].telegram === null || thisContacts[0].telegram === '' || thisContacts[0].telegram === undefined)?{display:'none'}:{}}><img src="/files/sociality/telegram.png" alt="" height='71px'/></a>*/}
                        {/*<a href={(thisContacts[0])&&thisContacts[0].vk} target="_blank" rel="noopener noreferrer" style={(thisContacts[0].vk === null || thisContacts[0].vk === '' || thisContacts[0].vk === undefined)?{display:'none'}:{}}><img src="/files/sociality/vk.png" alt=""/></a>*/}
                        {/*<a href={(thisContacts[0])&&thisContacts[0].ok} target="_blank" rel="noopener noreferrer" style={(thisContact*/}
                        <a href={(thisContacts[0])?thisContacts[0].youtube:''} target="_blank" rel="noopener noreferrer" >
                            {/*<img src="/files/sociality/youtube.png" alt=""/>*/}
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                        <a href={(thisContacts[0])&&thisContacts[0].telegram} target="_blank" rel="noopener noreferrer" >
                            {/*<img src="/files/sociality/telegram.png" alt="" height='71px'/>*/}
                            <i className="fa-brands fa-telegram"></i>
                        </a>
                        <a href={(thisContacts[0])&&thisContacts[0].vk} target="_blank" rel="noopener noreferrer" >
                            {/*<img src="/files/sociality/vk.png" alt=""/>*/}
                            <i className="fa-brands fa-vk"></i>
                        </a>
                        <a href={(thisContacts[0])&&thisContacts[0].ok} target="_blank" rel="noopener noreferrer" >
                            {/*<img src="/files/sociality/ok.png" alt=""/>*/}
                            <i className="fa-brands fa-square-odnoklassniki"></i>
                        </a>

                        {/*<img src="/files/sociality/telegram.png" alt="" height='71px'/>*/}
                        {/*<img src="/files/sociality/youtube.png" alt=""/>*/}
                        {/*<img src="/files/sociality/vk.png" alt=""/>*/}
                        {/*<img src="/files/sociality/ok.png" alt=""/>*/}
                    </div>
                    <div className={style.autor}>
                        <div className={style.copyright}>

                        </div>
                        <div className={style.description}>
                            <div className={style.text}>"Сетевое издание "ОМЕДИА!"</div>
                            <div className={style.text}>Все права защищены</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer