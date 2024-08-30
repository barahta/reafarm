import style from './OpenStyle.module.scss'

function OpenImg ({img}){

    return(
        <div className={style.main}>
            <img src={`./files/galary/${img}`} alt=""/>
        </div>
    )
}

export default OpenImg