import style from './PostResumeStyle.module.scss';
import { useState, useEffect } from "react";
import useNotification from "../../hooks/useNotification.hook";
import { useMessage } from "../../hooks/message.hook";
import NewsService from "../../services/NewsService";

function EntryBlanckSale({ sale, activemodal, setCart, setActivemodal }) {
    const message = useMessage();
    const [thisContacts, setThisContacts] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: 'info@reafarm86.ru',
        message: '',
        cart: sale, // Изначально из переданного пропса
        recipient: '', // Почта для получения сообщений
    });

    const [carter, setCarter] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    const [totalsum, setTotalsum] = useState(0);

    // Получение email для получения сообщений
    const getCities = async () => {
        try {
            const { data } = await NewsService.getCities({ capter: 'reafarm' });
            setThisContacts(data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getCities();
    }, [activemodal]);

    useEffect(() => {
        if (thisContacts[0]) {
            setFormData((prevData) => ({
                ...prevData,
                recipient: thisContacts[0].email,
            }));
        }
    }, [thisContacts]);


    // Пересчет суммы
    useEffect(() => {

        const calculateTotalSum = () => {
            const updatedCart = JSON.parse(localStorage.getItem('cart')) || [];
            let allsum = 0;
            if (updatedCart.length > 0) {
                updatedCart.forEach((prod) => {
                    const summer = +prod.price * +prod.cost;
                    allsum += summer;
                });
            }
            setTotalsum(allsum);
            setCarter(updatedCart); // Обновляем carter для отображения
        };

        calculateTotalSum();

        // Слушаем изменения в localStorage
        const updateCartFromStorage = () => {
            calculateTotalSum();
        };

        window.addEventListener('storage', updateCartFromStorage);

        return () => {
            window.removeEventListener('storage', updateCartFromStorage);
        };
    }, [activemodal]);


    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Получаем актуальный cart из localStorage
        const updatedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setFormData((prevData) => ({
            ...prevData,
            cart: updatedCart, // Обновляем перед отправкой
        }));

        try {
            const response = await NewsService.sendSaleMessage({
                ...formData,
                cart: updatedCart, // Передаем актуальный cart
            });
            if (response.data) {
                setActivemodal(false);
                message('Заказ сформирован, с вами свяжутся для подтверждения');

                // Очищаем localStorage и состояние
                setCart([]);
                localStorage.setItem('cart', JSON.stringify([]));

                // Сброс formData
                setFormData({
                    name: '',
                    email: 'info@reafarm86.ru',
                    message: '',
                    cart: [],
                    recipient: '',
                });
            }
        } catch (error) {
            console.error(error);
            message('Произошла ошибка. Попробуйте снова.');
        }
    };

    useEffect(()=>{
        console.log(carter)
    },[])

    return (
        <form onSubmit={handleSubmit} className={style.main}>
            <div className={style.up}>
                <div className={style.title}>Заказ</div>
                <div style={{ width: '100%', textAlign: 'center' }}>
                    Ваш заказ из {carter.length} позиции(ий)<br />
                    на сумму: {totalsum} руб.
                </div>
                <input
                    onChange={handleInputChange}
                    value={formData.name}
                    name="name"
                    type="text"
                    className={style.forminput}
                    placeholder="Как Вас зовут"
                    required
                />
                <input
                    value={formData.message}
                    name="message"
                    onChange={handleInputChange}
                    type="number"
                    className={style.forminput}
                    placeholder="Телефон для связи"
                    required
                />
            </div>
            <div className={style.down}>
                <button type="submit" className={style.btnpost}>
                    Заказать
                </button>
            </div>
        </form>
    );
}

export default EntryBlanckSale;
