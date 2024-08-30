import { useEffect, useRef, useState } from 'react';
import style from './GalaList.module.scss';
import PostContact from "../forms/PostContact";
import WriteModal from "../modalwin/WriteModal";
import OpenImg from "./OpenImg";

function GalaryList (){

    const images = [
        {
            src: '1.jpg',
        },
        {
            src: '2.jpg',
        },
        {
            src: '3.jpg',
        },
        {
            src: '4.jpg',
        },
        {
            src: '5.jpg',
        },
        {
            src: '6.jpg',
        },
        {
            src: '7.jpg',
        },
        {
            src: '8.jpg',
        },
        {
            src: '9.jpg',
        },
        {
            src: '10.jpg',
        },
        {
            src: '11.jpg',
        },
        {
            src: '12.jpg',
        },
        {
            src: '13.jpg',
        },
        {
            src: '14.jpg',
        },
        {
            src: '15.jpg',
        },
        {
            src: '16.jpg',
        },
        {
            src: '17.jpg',
        },
        {
            src: '18.jpg',
        },
        {
            src: '19.jpg',
        },
        {
            src: '20.jpg',
        },
        {
            src: '21.jpg',
        },
        {
            src: '22.jpg',
        },
        {
            src: '23.jpg',
        },
        {
            src: '24.jpg',
        },
        {
            src: '25.jpg',
        },
        {
            src: '26.jpg',
        },
        {
            src: '27.jpg',
        },
        {
            src: '28.jpg',
        },
        {
            src: '29.jpg',
        },
        {
            src: '30.jpg',
        },
        {
            src: '31.jpg',
        },
        {
            src: '32.jpg',
        },
        {
            src: '33.jpg',
        },
        {
            src: '34.jpg',
        },
        {
            src: '35.jpg',
        },
        {
            src: '36.jpg',
        },
        {
            src: '37.jpg',
        },
        {
            src: '38.jpg',
        },
        {
            src: '39.jpg',
        },
        {
            src: '40.jpg',
        },
        {
            src: '41.jpg',
        },
        {
            src: '42.jpg',
        },
        {
            src: '43.jpg',
        },
        {
            src: '44.jpg',
        },
        {
            src: '45.jpg',
        },
        {
            src: '46.jpg',
        },
        {
            src: '47.jpg',
        },
        {
            src: '48.jpg',
        }
    ]

    const containerRef = useRef(null);
    const [gridItems, setGridItems] = useState([]);
    const [activemodal, setActivemodal] = useState(false);
    const [data, setData] = useState('');
    const [more, setMore] = useState(8)
    const postResume = (pos) => {
        setData(pos)
        setActivemodal(true)
    }
    useEffect(() => {
        const container = containerRef.current;
        const updateGridItems = () => {
            if (container) {
                const items = Array.from(container.querySelectorAll('.item'));
                setGridItems(items);
            }
        };

        window.addEventListener('resize', updateGridItems);
        updateGridItems();

        return () => window.removeEventListener('resize', updateGridItems);
    }, [images]);

    return (
        <div className={style.main}>
            <WriteModal activemodal={activemodal} setActivemodal={setActivemodal} data={<OpenImg img={data} />} setData={setData}/>
            <div className={style.grid} ref={containerRef}>
                {images.map((image, index) =>{ if(index<more){return(
                    <div key={index} className={style.item} onClick={()=>postResume(image.src)}>
                        <img src={`./files/galary/${image.src}`} alt={`Gallery ${index}`} />
                    </div>
                )}})}
            </div>
            <div className={style.more} onClick={()=>setMore(more+8)} style={(images.length <= more)?{display: 'none'}:{}}>ЕЩЁ</div>
        </div>
    );
}

export default GalaryList;