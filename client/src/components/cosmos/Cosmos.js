import style from './Cosmos.module.scss'
import {useState} from "react";
function Cosmos () {

    const whys = [
        {
            title: 'Отличные аниматоры',
            image: '6.jpg',
            desc: 'У нас большая команда аниматоров. Профессионалы своего дела, которые сделают ваш праздник незабываемым.'
        },
        {
            title: 'Интересные мастер-классы',
            image: '1.jpg',
            desc: 'Более 20 различных мастер-классов. Каждый найдет занятие по душе.'
        },
        {
            title: 'НАМ УЖЕ 3 года',
            image: '4.jpg',
            desc: 'Большое количество положительных отзывов подтверждают наш трепетный подход к своему делу!'
        },
        {
            title: 'Игровой лабиринт',
            image: '2.jpg',
            desc: 'Многоуровневый игровой лабиринт с горками и тоннелями. '
        },
        {
            title: 'Бассейн с шариками',
            image: '3.jpg',
            desc: 'Большой бассейн с шариками. Вашему ребенку точно понравится!'
        },
        {
            title: 'Свой бар',
            image: '5.jpg',
            desc: 'Большой выбор разнообразных напитков и десертов для детей. А для родителей у нас есть кофе.'
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
                        <img src="./files/kids/cosmos.gif" alt=""/>
                    </div>
                    <div className={style.right}>
                        <div className={style.title}>
                            hope kids
                        </div>
                        <div className={style.pretitle}>
                            путь к Счастью вашего ребёнка!
                        </div>
                        <div className={style.desc}>
                            В HopeKids с радостью организуют и проведут самые главные и важные события для ребят. Это дни рождения, выпускные, утренники. На базе детского центра проходят интересные, а зачастую эксклюзивные мастер-классы, подготовлены костюмированные программы. Есть все, чтобы праздник оказался незабываемым.
                        </div>
                    </div>
                </div>
                <div className={style.contenttwo}>
                    <div className={style.blocks}>
                        {whys.map((block, index) => (
                            <div key={index} className={style.why}>
                                <div className={style.imgblock}  style={{backgroundImage: `url('files/kids/${block.image}')`}}></div>
                                <div className={style.desc}>
                                    <div className={style.title}>{block.title}</div>
                                    <div className={style.description}>{block.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cosmos