import React from 'react'
import style from "./style.module.scss"
import { Data } from './Data.js'
const Slider = () => {
    Data.map((index, item) => console.log(index))
    return (
        <div className={style.slider}>
            <ul className={style.sliderList}>
                {Data?.map((item) => (
                    <li key={item} className={style.sliderMenu}>
                        <span>
                            {item.name}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Slider;