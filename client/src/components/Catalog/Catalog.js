import style from './Catalog.module.scss'
import {useEffect, useState} from "react";
import NewsService from "../../services/NewsService";
import BigModal from "../modalwin/BigModal";
import Cart from "../cart/Cart";
import WriteModal from "../modalwin/WriteModal";
import EntryBlanck from "../forms/EntryBlanck";
import Product from "./Product";
import CartBlock from "../cart/CartBlock";
import {useMessage} from "../../hooks/message.hook";
function Catalog () {

    const [categoty, setCtegory] = useState('')
    const [menu, setMenu] = useState([])
    const [catalog, setCatalog] = useState([])
    const [activeblock, setActiveblock] = useState('')
    const [view, setView] = useState([])
    const [cart, setCart] = useState('')
    const [opengreen, setOpengreen] = useState(false)
    const [activemodal, setActivemodal] = useState(false)
    const [data, setData] = useState('')
    const message = useMessage();

    const getComVak = async () => {
        try {
            const {data} = await NewsService.getComVak({com: 'reafarm'})
            setMenu(data)
        }catch(e){
            console.log(e)
        }
    }

    const getPacks = async () => {
        try{
            const {data} = await NewsService.getAllPacks({capter: 'reafarm'})
            if(data){
                console.log(data)
                const sortedData = data.sort((a, b) => b.priory - a.priory);
                setCatalog(sortedData)
            }
        }catch(e){
            console.log(e)
        }
    }

    const openCat = (cat)=> {
        setCtegory(cat)
        const newarr = []
        if(cat.length > 0){
            catalog.forEach(item=>{
                if(item.time === cat){
                    newarr.push(item)
                }
            })
            setView(newarr)
        }else{
            setView(catalog)
        }
    }



    useEffect(()=>{
        getComVak()
    },[])
    useEffect(()=>{
        getPacks()
    },[menu])

    useEffect(()=>{
        setView(catalog)
    }, [catalog])
    return(
        <div className={style.main}>
            <WriteModal activemodal={activemodal} setActivemodal={setActivemodal} data={<EntryBlanck man={data}  setActivemodal={setActivemodal}/>} setData={setData} />
            <BigModal activemodal={opengreen} setActivemodal={setOpengreen} data={<Cart data={cart} setData={setCart} setActivemodal={setOpengreen} write={activemodal} setWrite={setActivemodal}/>} setData={setCart}/>
            <CartBlock />
            <div className={style.paralax}>
            </div>
            <div className={style.menu}>
                <div className={style.containermenu}>
                    {menu.map((item, index) => (
                        <div className={style.itemmenu} key={index} onClick={()=>openCat(item.name)}>{item.name}</div>
                    ))}

                </div>
            </div>
            <div className={style.containername}>
                <div className={style.category}>
                    {(categoty.length < 1)?'Вся продукция':categoty}
                    <div className={style.moreitems} style={(categoty.length < 1)?{display: 'none'}:{}}  onClick={()=>openCat('')}>см. все</div>
                </div>
            </div>

            <div className={style.container}>
                <div className={style.content}>
                </div>
                <div className={style.contenttwo}>

                    <div className={style.products}>
                        {(view.length > 0)&&view.map((green, index)=>{if(view){return(

                            <Product key={index} green={green}/>
                            // <div key={index} className={style.block}>
                            //     <div className={style.aplicate} style={{backgroundImage: `url('${process.env.REACT_APP_API_URL}${green.image}')`}}></div>
                            //     <div className={style.name}>{green.name}</div>
                            //     <div className={style.category}>{green.time}</div>
                            //     <div className={style.btncart} onClick={()=>{setCart(green); setOpengreen(true)}}>БОЛЬШЕ</div>
                            // </div>
                        )}})}
                    </div>



                </div>
                {/*<div className={style.moreblock}>*/}
                {/*    <div className={style.more}>EЩЁ</div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default Catalog