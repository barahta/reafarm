import style from './CartBlock.module.scss';
import { useEffect, useState } from "react";
import EntryBlanckSale from "../forms/EntryBlanckSale";
import WriteModalSale from "../modalwin/WriteModalSale";

const makeSale = (mycart, activemodal, setActivemodal) => {
    setActivemodal(true);
    console.log(mycart);
};

function OpenCart({ openBlock, setOpenBlock, cart, setCart, updateCart }) {
    const handleInputChange = (productId, value) => {
        const newCost = value === "" ? "" : parseInt(value, 10); // Разрешаем пустую строку

        // Если значение меньше 0, удаляем из корзины
        if (newCost < 0) {
            updateCart(productId, -Infinity); // Удаляем товар
        } else {
            const currentCost = cart.find(item => item.id === productId)?.cost || 0;
            updateCart(productId, (newCost || 0) - currentCost);
        }
    };

    const handleIncrease = (productId) => {
        updateCart(productId, 1);
    };

    const handleDecrease = (productId) => {
        updateCart(productId, -1);
    };

    const [activemodal, setActivemodal] = useState(false);

    return (
        <div
            className={style.opencart}
            style={openBlock ? { display: 'flex' } : { display: 'none' }}
        >
            <WriteModalSale
                activemodal={activemodal}
                setActivemodal={setActivemodal}
                data={<EntryBlanckSale sale={cart} setCart={setCart} setActivemodal={setActivemodal} />}
            />
            <div className={style.opencart_list}>
                {cart.map((product) => (
                    <div key={product.id} className={style.opencart_prod}>
                        <div className={style.opencart_prod_left}>
                            <div className={style.opencart_prod_img}>
                                <img src={`${process.env.REACT_APP_API_URL}${product.image}`} alt={product.name} />
                            </div>
                            <div className={style.opencart_details}>
                                <div className={style.opencart_prod_name}>{product.name}</div>
                                <div className={style.opencart_prod_quantity}>
                                    Итого: {(+product.cost || 0) * ((product.price) ? +product.price : 1)} руб.
                                </div>
                                <div className={style.opencart_prod_quantity}>
                                    Кол-во: {(product.publicdesc) ? (+product.publicdesc.split("|")[0]) * (+product.cost || 0) : ''} {(product.publicdesc) ? product.publicdesc.split("|")[1] : ''}
                                </div>
                            </div>
                        </div>

                        <div className={style.plusminus}>
                            <div className={style.plusminus_btn} onClick={() => handleDecrease(product.id)}>-</div>
                            <input
                                className={style.plusminus_total}
                                onChange={(e) => handleInputChange(product.id, e.target.value)}
                                value={product.cost === "" ? "" : product.cost} // Пустая строка вместо 0
                                type="number"
                                min="0"
                                style={{ outline: 'none', textAlign: 'center' }}
                            />
                            <div className={style.plusminus_btn} onClick={() => handleIncrease(product.id)}>+</div>
                        </div>
                    </div>
                ))}
                <div className={style.makesale} onClick={() => makeSale(cart, activemodal, setActivemodal)}>Оформить</div>
            </div>
        </div>
    );
}

function CartBlock() {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });
    const [openBlock, setOpenBlock] = useState(false);
    const [activemodal, setActivemodal] = useState(false);

    const updateCart = (productId, change) => {
        const updatedCart = cart.reduce((acc, product) => {
            if (product.id === productId) {
                const newCost = product.cost + change;
                if (newCost > 0 || newCost === "") {
                    acc.push({ ...product, cost: newCost }); // Сохраняем товар, если cost > 0 или пустая строка
                }
                // Если newCost <= 0, товар не добавляется (удаляется из корзины)
            } else {
                acc.push(product);
            }
            return acc;
        }, []);

        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    useEffect(() => {
        const updateCartFromStorage = () => {
            const storedCart = localStorage.getItem('cart');
            setCart(storedCart ? JSON.parse(storedCart) : []);
        };

        window.addEventListener('storage', updateCartFromStorage);

        return () => {
            window.removeEventListener('storage', updateCartFromStorage);
        };
    }, []);

    return (
        <div
            className={style.main}
            style={cart.length > 0 ? { display: 'flex' } : { display: 'none' }}
        >
            <OpenCart openBlock={openBlock} setOpenBlock={setOpenBlock} cart={cart} setCart={setCart} updateCart={updateCart} />
            <WriteModalSale
                activemodal={activemodal}
                setActivemodal={setActivemodal}
                data={<EntryBlanckSale sale={cart} setCart={setCart} setActivemodal={setActivemodal} />}
            />
            <div
                className={style.cartbtn}
                style={openBlock ? { backgroundColor: '#CCC' } : {}}
                onClick={() => setOpenBlock(!openBlock)}
            >
                <div className={style.cartbtn_name}>
                    Корзина <i className="fa-solid fa-cart-shopping" style={openBlock ? { color: '#007903' } : { }} />
                </div>
                <div className={style.cartbtn_all}>
                    {cart.reduce((sum, item) => sum + (item.cost || 0), 0)}
                </div>
            </div>
        </div>
    );
}

export default CartBlock;
