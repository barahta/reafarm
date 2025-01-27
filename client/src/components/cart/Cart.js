import style from './Cart.module.scss'
import {useState} from "react";

function Cart ({data, setData, setActivemodal, write, setWrite}){

    const makeWrited = () => {
        setActivemodal(false)
        setData('')
        setWrite(true)
    }
    const [cartList, setCartList] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    const plusToCart = (item) => {
        // Загружаем актуальное состояние корзины из localStorage
        const storedCart = localStorage.getItem('cart');
        let updatedCart = storedCart ? JSON.parse(storedCart) : [];

        // Ищем, есть ли уже этот товар в корзине
        const existingItem = updatedCart.find((product) => product.id === item.id);

        if (existingItem) {
            // Если товар есть, увеличиваем количество
            existingItem.cost += 1;
        } else {
            // Если товара нет, добавляем его в корзину с количеством 1
            updatedCart.push({ ...item, cost: 1 });
        }

        // Сохраняем обновленный массив в localStorage и обновляем состояние
        setCartList(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));

        // Генерируем событие для синхронизации с CartBlock
        window.dispatchEvent(new Event('storage'));
        setActivemodal(false)
    };



    return(
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.imgblock}>
                    <img src={`${process.env.REACT_APP_API_URL}${data.image}`}></img>
                </div>
                <div className={style.desc}>
                    <div className={style.title}>{(data!=='' && data)?data.name:''}</div>
                    <div className={style.description}>{(data!=='' && data)?data.desc:''}</div>
                    <div className={style.description}>Фасовка: {(data!=='' && data)?data.price:''} {(data!=='' && data)?data.publicdesc:''}</div>
                    <div className={style.category}>{(data!=='' && data)?data.time:''}</div>
                    {/*<div className={style.tocart} onClick={makeWrited}>В КОРЗИНУ</div>*/}
                    <div className={style.tocart} onClick={() => plusToCart(data)}>В КОРЗИНУ</div>
                </div>
            </div>
        </div>
    )
}

export default Cart