import style from './Cart.module.scss'

function Cart ({data, setData, setActivemodal, write, setWrite}){

    const makeWrited = () => {
        setActivemodal(false)
        setData('')
        setWrite(true)
    }

    return(
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.imgblock}>
                    <img src={`./files/products/${data.image}`}></img>
                </div>
                <div className={style.desc}>
                    <div className={style.title}>{(data!=='' && data)?data.name:''}</div>
                    <div className={style.description}>{(data!=='' && data)?data.desc:''}</div>
                    <div className={style.category}>{(data!=='' && data)?data.category:''}</div>
                    <div className={style.tocart} onClick={makeWrited}>Заказать</div>
                </div>
            </div>
        </div>
    )
}

export default Cart