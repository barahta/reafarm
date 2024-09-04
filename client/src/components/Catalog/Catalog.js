import style from './Catalog.module.scss'
import {useEffect, useState} from "react";
function Catalog () {

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

    const menu = [
        {
            id: 0,
            name: 'Базилик'
        },
        {
            id: 1,
            name: 'Микрозелень'
        },
        {
            id: 2,
            name: 'Мята перечная Ментол'
        },
        {
            id: 3,
            name: 'Салат микс'
        },
        {
            id: 4,
            name: 'Салатные культуры'
        },
        {
            id: 5,
            name: 'Съедобные цветы'
        },
        {
            id: 6,
            name: 'Шпинат шелби'
        },
        {
            id: 7,
            name: 'Щавель Бальвийский'
        }
    ]
    const [categoty, setCtegory] = useState('')
    const [activeblock, setActiveblock] = useState('')
    const [view, setView] = useState([])

    const openCat = (cat)=> {
        setCtegory(cat)
        const newarr = []
        if(cat.length > 0){
            catalog.forEach(item=>{
                if(item.category === cat){
                    newarr.push(item)
                }
            })
            setView(newarr)
        }else{
            setView(catalog)
        }
    }
    useEffect(()=>{
        setView(catalog)
    }, [])
    return(
        <div className={style.main}>

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
                            <div key={index} className={style.block}>
                                <div className={style.aplicate} style={{backgroundImage: `url('./files/products/${green.image}')`}}></div>
                                <div className={style.name}>{green.name}</div>
                                <div className={style.category}>{green.category}</div>
                                <div className={style.btncart}>БОЛЬШЕ</div>
                            </div>
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