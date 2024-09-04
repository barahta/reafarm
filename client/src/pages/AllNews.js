import style from './styles/AllNewsStyle.module.scss'
import Footer from "../components/footer/Footer";
import SmallHeader from "../components/newheader/SmallHeader";
import Catalog from "../components/Catalog/Catalog";

function AllNews (){

    return (
        <div className={style.bodymain}>

            <SmallHeader />
            <Catalog />
            <Footer />
        </div>
    )
}

export default AllNews