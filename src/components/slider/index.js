import React from 'react'
import style from "./style.module.scss"
import { Data } from './Data.js'
import { LeftOutlined,RightOutlined } from '@ant-design/icons';
const Slider = () => {
    Data.map((index, item) => console.log(index))
    return (
        <div className={style.slider}>
            <ul className={style.sliderList}>
                {Data?.map((item) => (
                    <li key={item.id} className={style.sliderMenu}>
                        <span>
                            {item.name}
                        </span>
                    </li>
                ))}
            </ul>
              <div className={style.ellipse}>
                <span className={style.iconLeft}>
                <LeftOutlined />
                </span>
                <span  className={style.iconRight}>
              <RightOutlined />
              </span>
              
              </div>
             
        </div>
    )
}
export default Slider;