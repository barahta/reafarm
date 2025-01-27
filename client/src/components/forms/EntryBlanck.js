import style from './PostResumeStyle.module.scss'
import {useState} from "react";
import useNotification from "../../hooks/useNotification.hook";
import Nota from "./Nota";
import {useMessage} from "../../hooks/message.hook";
import NewsService from "../../services/NewsService";
import {useEffect} from "react";

function EntryBlanck ({man,setActivemodal}){

    const [thisContacts, setThisContacts] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: 'info@reafarm86.ru',
        message: '',
        recipient: '', // Почта для получения сообщений
    });
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
    useEffect(()=>{
        const newarr = thisContacts
        const newset = formData
        if(newarr[0]){
            newset.recipient = newarr[0].email
        }
        setFormData(newset)
    }, [thisContacts])
    const getContacts = async () => {
        try{
            const {data} = await NewsService.plusContactParam()
        }catch(e){
            console.log(e)
        }
    }
    const [responseMessage, setResponseMessage] = useState('');

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const response = await axios.post('/views/contact', formData);
            const response = await NewsService.sendContactMessage(formData);
            setResponseMessage(response.data.message);
            if(response.data){setActivemodal(false)}
        } catch (error) {
            setResponseMessage(error.response?.data?.error || 'Произошла ошибка. Попробуйте снова.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={style.main}>
            <div className={style.up}>
                <div className={style.title}>Заказать</div>
                {/*<div className={style.vakname}>{man.name}</div>*/}
                {/*<input onChange={e=>setMyname(e.target.value)} value={myname} type="text" className={style.forminput} placeholder='Как Вас зовут'/>*/}
                {/*<input onChange={e=>setDate(e.target.value)} value={date} type="date" className={style.forminput} placeholder='Дата'/>*/}
                {/*<input onChange={e=>setPhone(e.target.value)} value={phone} type="number" className={style.forminput} placeholder='Телефон для связи'/>*/}
                <input
                    onChange={handleInputChange}
                    value={formData.name}
                    name="name"
                    type="text"
                    className={style.forminput}
                    placeholder='Как Вас зовут'
                    required/>
                <input value={formData.message}
                       name="message"
                       onChange={handleInputChange}
                       type="number"
                       className={style.forminput}
                       placeholder='Телефон для связи'
                       required/>
            </div>
            <div className={style.down}>
                {/*<div className={style.btnpost} onClick={postMess}>Записаться</div>*/}
                {responseMessage}
                <button type="submit" className={style.btnpost}>Отправить</button>
            </div>



        </form>
    )
}

export default EntryBlanck