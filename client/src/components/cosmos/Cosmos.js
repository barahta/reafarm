import style from './Cosmos.module.scss'
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Cart from "../cart/Cart";
import BigModal from "../modalwin/BigModal";
import EntryBlanck from "../forms/EntryBlanck";
import WriteModal from "../modalwin/WriteModal";
import NewsService from "../../services/NewsService";
import Product from "../Catalog/Product";
import CartBlock from "../cart/CartBlock";
function Cosmos () {

    const catalog = [
        {
            name: 'RUBY RED',
            category: 'Базилик',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis fugiat id impedit, ipsa nesciunt vero? Alias aspernatur assumenda cupiditate dolor, esse eveniet ex hic quaerat soluta. In maiores optio reiciendis.',
            image: '1.png'
        },
        {
            name: 'Зеленый душистый',
            category: 'Базилик',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis fugiat id impedit, ipsa nesciunt vero? Alias aspernatur assumenda cupiditate dolor, esse eveniet ex hic quaerat soluta. In maiores optio reiciendis.',
            image: '2.png'
        },
        {
            name: 'Мята перечная Ментол',
            category: 'Мята перечная Ментол',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis fugiat id impedit, ipsa nesciunt vero? Alias aspernatur assumenda cupiditate dolor, esse eveniet ex hic quaerat soluta. In maiores optio reiciendis.',
            image: '6.png'
        },
        {
            name: 'Пурпурный шар (мелколистный)',
            category: 'Базилик',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis fugiat id impedit, ipsa nesciunt vero? Alias aspernatur assumenda cupiditate dolor, esse eveniet ex hic quaerat soluta. In maiores optio reiciendis.',
            image: '4.png'
        },
        {
            name: 'Рози',
            category: 'Базилик',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis fugiat id impedit, ipsa nesciunt vero? Alias aspernatur assumenda cupiditate dolor, esse eveniet ex hic quaerat soluta. In maiores optio reiciendis.',
            image: '5.png'
        },
        {
            name: 'Темно-фиолетовый',
            category: 'Базилик',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis fugiat id impedit, ipsa nesciunt vero? Alias aspernatur assumenda cupiditate dolor, esse eveniet ex hic quaerat soluta. In maiores optio reiciendis.',
            image: '6.png'
        },
        {
            name: 'Бораго',
            category: 'Микрозелень',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis fugiat id impedit, ipsa nesciunt vero? Alias aspernatur assumenda cupiditate dolor, esse eveniet ex hic quaerat soluta. In maiores optio reiciendis.',
            image: '7.png'
        },
        {
            name: 'Горох',
            category: 'Микрозелень',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis fugiat id impedit, ipsa nesciunt vero? Alias aspernatur assumenda cupiditate dolor, esse eveniet ex hic quaerat soluta. In maiores optio reiciendis.',
            image: '8.png'
        },
        {
            name: 'Подсолнух',
            category: 'Микрозелень',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis fugiat id impedit, ipsa nesciunt vero? Alias aspernatur assumenda cupiditate dolor, esse eveniet ex hic quaerat soluta. In maiores optio reiciendis.',
            image: '9.png'
        },
        {
            name: 'Редис',
            category: 'Микрозелень',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis fugiat id impedit, ipsa nesciunt vero? Alias aspernatur assumenda cupiditate dolor, esse eveniet ex hic quaerat soluta. In maiores optio reiciendis.',
            image: '10.png'
        },
        {
            name: 'Lollo white',
            category: 'Салат микс',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis fugiat id impedit, ipsa nesciunt vero? Alias aspernatur assumenda cupiditate dolor, esse eveniet ex hic quaerat soluta. In maiores optio reiciendis.',
            image: '11.png'
        },
        {
            name: 'Айсберг листовой',
            category: 'Салат микс',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis fugiat id impedit, ipsa nesciunt vero? Alias aspernatur assumenda cupiditate dolor, esse eveniet ex hic quaerat soluta. In maiores optio reiciendis.',
            image: '12.png'
        },
        {
            name: 'Дубачек листовой',
            category: 'Салат микс',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis fugiat id impedit, ipsa nesciunt vero? Alias aspernatur assumenda cupiditate dolor, esse eveniet ex hic quaerat soluta. In maiores optio reiciendis.',
            image: '13.png'
        },
        {
            name: 'Дуболистный блонд',
            category: 'Салат микс',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis fugiat id impedit, ipsa nesciunt vero? Alias aspernatur assumenda cupiditate dolor, esse eveniet ex hic quaerat soluta. In maiores optio reiciendis.',
            image: '14.png'
        },
        {
            name: 'Роселла Кайпира',
            category: 'Салат микс',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis fugiat id impedit, ipsa nesciunt vero? Alias aspernatur assumenda cupiditate dolor, esse eveniet ex hic quaerat soluta. In maiores optio reiciendis.',
            image: '15.png'
        },
        {
            name: 'Капуста Кейл',
            category: 'Салатные культуры',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis fugiat id impedit, ipsa nesciunt vero? Alias aspernatur assumenda cupiditate dolor, esse eveniet ex hic quaerat soluta. In maiores optio reiciendis.',
            image: '16.png'
        },
        {
            name: 'Мелисса Мандариновая',
            category: 'Салатные культуры',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis fugiat id impedit, ipsa nesciunt vero? Alias aspernatur assumenda cupiditate dolor, esse eveniet ex hic quaerat soluta. In maiores optio reiciendis.',
            image: '17.png'
        },{
            name: 'Руккола',
            category: 'Салатные культуры',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis fugiat id impedit, ipsa nesciunt vero? Alias aspernatur assumenda cupiditate dolor, esse eveniet ex hic quaerat soluta. In maiores optio reiciendis.',
            image: '18.png'
        },{
            name: 'Татсой',
            category: 'Салатные культуры',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis fugiat id impedit, ipsa nesciunt vero? Alias aspernatur assumenda cupiditate dolor, esse eveniet ex hic quaerat soluta. In maiores optio reiciendis.',
            image: '19.png'
        },
        {
            name: 'Бархатцы',
            category: 'Съедобные цветы',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis fugiat id impedit, ipsa nesciunt vero? Alias aspernatur assumenda cupiditate dolor, esse eveniet ex hic quaerat soluta. In maiores optio reiciendis.',
            image: '20.png'
        },
        {
            name: 'Бегония вечноцвет',
            category: 'Съедобные цветы',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis fugiat id impedit, ipsa nesciunt vero? Alias aspernatur assumenda cupiditate dolor, esse eveniet ex hic quaerat soluta. In maiores optio reiciendis.',
            image: '21.png'
        },
        {
            name: 'Виола',
            category: 'Съедобные цветы',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis fugiat id impedit, ipsa nesciunt vero? Alias aspernatur assumenda cupiditate dolor, esse eveniet ex hic quaerat soluta. In maiores optio reiciendis.',
            image: '22.png'
        },
        {
            name: 'Гвоздика',
            category: 'Съедобные цветы',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis fugiat id impedit, ipsa nesciunt vero? Alias aspernatur assumenda cupiditate dolor, esse eveniet ex hic quaerat soluta. In maiores optio reiciendis.',
            image: '23.png'
        },
        {
            name: 'Настурция',
            category: 'Съедобные цветы',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis fugiat id impedit, ipsa nesciunt vero? Alias aspernatur assumenda cupiditate dolor, esse eveniet ex hic quaerat soluta. In maiores optio reiciendis.',
            image: '24.png'
        },
        {
            name: 'Шпинат Шелби',
            category: 'Шпинат шелби',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis fugiat id impedit, ipsa nesciunt vero? Alias aspernatur assumenda cupiditate dolor, esse eveniet ex hic quaerat soluta. In maiores optio reiciendis.',
            image: '25.png'
        },
        {
            name: 'Щавель Бальвийский',
            category: 'Щавель Бальвийский',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis fugiat id impedit, ipsa nesciunt vero? Alias aspernatur assumenda cupiditate dolor, esse eveniet ex hic quaerat soluta. In maiores optio reiciendis.',
            image: '26.png'
        }

    ]

    const [list, setListcom] = useState([])


    const getPacks = async () => {
        try{
            const {data} = await NewsService.getAllPacks({capter: 'reafarm'})
            if(data){
                console.log(data)
                const sortedData = data.sort((a, b) => b.priory - a.priory);
                const top10Data = sortedData.slice(0, 10);
                setListcom(top10Data)
            }
        }catch(e){
            console.log(e)
        }
    }

    const [activeblock, setActiveblock] = useState('')
    const [view, setView] = useState('')
    const [opengreen, setOpengreen] = useState(false)
    const [activemodal, setActivemodal] = useState(false)
    const [data, setData] = useState('')

    useEffect(()=>{
        getPacks()
    },[])

    return(
        <div className={style.main}>
            {/*BigModal({activemodal, setActivemodal, data, setData}*/}
            <WriteModal activemodal={activemodal} setActivemodal={setActivemodal} data={<EntryBlanck man={data}  setActivemodal={setActivemodal}/>} setData={setData} />
            <BigModal activemodal={opengreen} setActivemodal={setOpengreen} data={<Cart data={view} setData={setView} setActivemodal={setOpengreen} write={activemodal} setWrite={setActivemodal}/>} setData={setView}/>
            <CartBlock />

            <div className={style.paralax}>
            </div>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.left}>
                        <img className={style.img1} src="./files/green/1.png" alt=""/>
                        <img className={style.img2} src="./files/green/2.png" alt=""/>
                        <img className={style.img3} src="./files/green/3.png" alt=""/>
                        <img className={style.img4} src="./files/green/4.png" alt=""/>
                    </div>
                    <div className={style.right}>
                        <div className={style.title}>
                            REA FARM
                        </div>
                        <div className={style.pretitle}>
                            КФХ "Реафарм"
                        </div>
                        <div className={style.desc}>
                            КФХ "Реафарм" выращивает более 30 видов различной зелени: мелисса, руккола, базилик, мята перечная, шпинат шелби, щавель, микрозелень (горох, бораго, подсолнух, редис), съедобные цветы и др.
                        </div>
                    </div>
                </div>
                <div className={style.contenttwo}>
                    <div className={style.title}><div className={style.nameblock}>НОВИНКИ</div><Link to='/catalog' className={style.relocation}>см. все</Link></div>
                    <div className={style.products}>
                        {list&&list.map((green, index)=>{if(index<10){return(
                            <Product key={index} green={green}/>
                            // <div key={index} className={style.block}>
                            //     <div className={style.aplicate} style={{backgroundImage: `url('${process.env.REACT_APP_API_URL}${green.image}')`}}></div>
                            //     <div className={style.name}>{green.name}</div>
                            //     <div className={style.category}>{green.time}</div>
                            //     <div className={style.btncart} onClick={()=>{setView(green); setOpengreen(true)}}>БОЛЬШЕ</div>
                            // </div>
                        )}})}
                    </div>



                </div>
                <div className={style.moreblock}>
                    <Link to='/catalog' className={style.more} >Перейти в каталог</Link>
                </div>
            </div>
        </div>
    )
}

export default Cosmos