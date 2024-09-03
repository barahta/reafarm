import style from './Cosmos.module.scss'
import {useState} from "react";
function Cosmos () {

    const catalog = [
        {
            name: 'Бораго',
            category: 'Микрозелень',
            image: '7.png'
        },
        {
            name: 'Горох',
            category: 'Микрозелень',
            image: '8.png'
        },
        {
            name: 'Подсолнух',
            category: 'Микрозелень',
            image: '9.png'
        },
        {
            name: 'Редис',
            category: 'Микрозелень',
            image: '10.png'
        },
        {
            name: 'Lollo white',
            category: 'Lollo white',
            image: '11.png'
        },
        {
            name: 'Айсберг листовой',
            category: 'Lollo white',
            image: '12.png'
        },
        {
            name: 'Дубачек листовой',
            category: 'Lollo white',
            image: '13.png'
        },
        {
            name: 'Дуболистный блонд',
            category: 'Lollo white',
            image: '14.png'
        },
        {
            name: 'Роселла Кайпира',
            category: 'Lollo white',
            image: '15.png'
        },
        {
            name: 'Капуста Кейл',
            category: 'Салатные культуры',
            image: '16.png'
        },
        {
            name: 'Мелисса Мандариновая',
            category: 'Салатные культуры',
            image: '17.png'
        },
        {
            name: 'Руккола',
            category: 'Салатные культуры',
            image: '18.png'
        },
        {
            name: 'Татсой',
            category: 'Салатные культуры',
            image: '19.png'
        }
    ]

    const [activeblock, setActiveblock] = useState('')

    return(
        <div className={style.main}>

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
                    <div className={style.title}><div className={style.nameblock}>НОВИНКИ</div><div className={style.relocation}>см. все</div></div>
                    <div className={style.products}>
                        {catalog.map((green, index)=>{if(index<10){return(
                            <div key={index} className={style.block}>
                                <div className={style.aplicate} style={{backgroundImage: `url('./files/products/${green.image}')`}}></div>
                                <div className={style.name}>{green.name}</div>
                                <div className={style.category}>{green.category}</div>
                                <div className={style.btncart}>БОЛЬШЕ</div>
                            </div>
                        )}})}
                    </div>



                </div>
                <div className={style.moreblock}>
                    <div className={style.more}>Перейтив каталог</div>
                </div>
            </div>
        </div>
    )
}

export default Cosmos