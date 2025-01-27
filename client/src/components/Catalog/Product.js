import style from './Product.module.scss';
import { useState, useEffect } from "react";
import WriteModal from "../modalwin/WriteModal";
import EntryBlanck from "../forms/EntryBlanck";
import BigModal from "../modalwin/BigModal";
import Cart from "../cart/Cart";

function Product({ green }) {
    const [cart, setCart] = useState('');
    const [opengreen, setOpengreen] = useState(false);
    const [activemodal, setActivemodal] = useState(false);
    const [data, setData] = useState('');
    const [cartList, setCartList] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // Проверка: находится ли green в корзине
    const [isInCart, setIsInCart] = useState(false);

    useEffect(() => {
        const checkIfInCart = () => {
            const storedCart = localStorage.getItem('cart');
            const parsedCart = storedCart ? JSON.parse(storedCart) : [];
            const exists = parsedCart.some((item) => item.id === green.id);
            setIsInCart(exists);
        };

        checkIfInCart();

        // Слушаем изменения localStorage
        const handleStorageChange = () => {
            checkIfInCart();
        };

        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [green.id]);

    const plusToCart = (item) => {
        const storedCart = localStorage.getItem('cart');
        let updatedCart = storedCart ? JSON.parse(storedCart) : [];

        const existingItem = updatedCart.find((product) => product.id === item.id);

        if (existingItem) {
            existingItem.cost += 1;
        } else {
            updatedCart.push({ ...item, cost: 1 });
        }

        setCartList(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        window.dispatchEvent(new Event('storage'));
    };

    return (
        <div className={style.block}>
            <WriteModal activemodal={activemodal} setActivemodal={setActivemodal} data={<EntryBlanck man={data} setActivemodal={setActivemodal} />} setData={setData} />
            <BigModal activemodal={opengreen} setActivemodal={setOpengreen} data={<Cart data={cart} setData={setCart} setActivemodal={setOpengreen} write={activemodal} setWrite={setActivemodal} />} setData={setCart} />

            <div
                onClick={() => { setCart(green); setOpengreen(true); }}
                className={style.aplicate}
                style={{ backgroundImage: `url('${process.env.REACT_APP_API_URL}${green.image}')` }}
            ></div>
            <div className={style.name} onClick={() => { setCart(green); setOpengreen(true); }}>{green.name}</div>
            <div className={style.category} onClick={() => { setCart(green); setOpengreen(true); }}>{green.time}</div>
            <div
                className={style.btncart}
                onClick={() => plusToCart(green)}
                style={isInCart ? { backgroundColor: 'darkgreen', color: '#FFFFFF' } : {}}
            >
                В КОРЗИНУ
            </div>
        </div>
    );
}

export default Product;
