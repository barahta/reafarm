import { useEffect, useState, useRef } from "react";
import style from './Planet.module.scss';

function Planet() {
    const [offsetX, setOffsetX] = useState(0);
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const numRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const handleScroll = () => {
        if (elementRef.current) {
            const elementTop = elementRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight && elementTop > 0) {
                const scrollFactor = (windowHeight - elementTop) * 0.4;
                setOffsetX(scrollFactor);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Анимация чисел
    const animateNumbers = () => {
            numRefs.forEach((ref, index) => {
                const targetNumber = parseInt(ref.current.dataset.value, 10);
                let currentNumber = 0;

                const updateNumber = () => {
                    currentNumber++;
                    ref.current.textContent = currentNumber;
                    if (currentNumber < targetNumber) {
                        requestAnimationFrame(updateNumber);
                    }
                };

                updateNumber();
            });

    };

    // Используем IntersectionObserver для отслеживания видимости элементов
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            });
        });

        observer.observe(elementRef.current);

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            setTimeout(()=>{
            animateNumbers();

            },1000)
        }
    }, [isVisible]);

    return (
        <div className={style.main}>
            <div className={style.paralax}></div>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.right} ref={elementRef}>
                        <div className={style.title}>
                            Выездные праздники
                        </div>
                        <div className={style.desc}>
                            Мы с радостью организуем праздник у вас дома! Большой выбор программ специально для Вас!
                        </div>
                        <div className={style.btnwriten}>
                            <div className={style.btn}>Подробности</div>
                        </div>
                    </div>
                    <div className={style.left}>
                        <div className={style.raket} style={{
                            transform: `translateX(${offsetX}px)`
                        }}>
                            <div className={style.fireraket}>
                                <div className={style.p1}></div>
                                <div className={style.p2}></div>
                                <div className={style.p3}></div>
                            </div>
                            <div className={style.bodyraket}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.totalblock}>
                <div className={style.clockblock}>
                    <div className={style.icon} style={{ backgroundImage: `url('./files/icons/animators.svg')` }}></div>
                    <div className={style.num} ref={numRefs[0]} data-value="10">0</div>
                    <div className={style.name}>Аниматоров</div>
                    <div className={style.desc}>А так же большой выбор различных костюмов, которые подойдут под любой праздник</div>
                </div>
                <div className={style.clockblock}>
                    <div className={style.icon} style={{ backgroundImage: `url('./files/icons/masters.svg')` }}></div>
                    <div className={style.num} ref={numRefs[1]} data-value="20">0</div>
                    <div className={style.name}>мастер-классов</div>
                    <div className={style.desc}>Уникальные мастер-классы, которые точно не оставят Вашего ребенка равнодушным!</div>
                </div>
                <div className={style.clockblock}>
                    <div className={style.icon} style={{ backgroundImage: `url('./files/icons/childs.svg')` }}></div>
                    <div className={style.num} ref={numRefs[2]} data-value="100">0</div>
                    <div className={style.name}>ДЕТЕЙ</div>
                    <div className={style.desc}>Посещает нас ежедневно! Приходите и Вы!</div>
                </div>
                <div className={style.clockblock}>
                    <div className={style.icon} style={{ backgroundImage: `url('./files/icons/parents.svg')` }}></div>
                    <div className={style.num} ref={numRefs[3]} data-value="150">0</div>
                    <div className={style.name}>РОДИТЕЛей</div>
                    <div className={style.desc}>Стали нашими постоянными гостями!</div>
                </div>
            </div>
        </div>
    );
}

export default Planet;