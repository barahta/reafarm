import style from './OpenNewsStyle.module.scss'

function OpenNews({news, width}){
    return(
        <div className={style.main} style={(width)?{maxWidth: width}:{}}>
            <div className={style.conatiner}>
                <div className={style.title}>{news.name}</div>
                <div className={style.image}>
                    <img src={`/files/news/${news.url}`} alt=""/>
                </div>
                <div className={style.content}>
                    {(news.content)&&news.content.map((line, index)=>(
                        <p key={index}>{line}</p>
                    ))}
                </div>
            </div>

            <div className={style.logo}>
                <img src="/files/header/logomain3.svg" alt=""/>
            </div>
        </div>
    )
}

export default OpenNews