import React from "react";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";
import {ImFacebook2,ImYoutube} from 'react-icons/im'
import {BsLinkedin} from 'react-icons/bs'
import {ImWhatsapp} from 'react-icons/im'

export function Footer() {
  return (
    <div className={style.container}>
      <div className={style.footer_title}>
        <h2>Oxygen Gym</h2>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos magni,
          aut labore laudantium totam commodi beatae expedita
        </p>

        <div >
            <ImFacebook2 className={style.icons}/>
            <BsLinkedin className={style.icons}/>
            <ImWhatsapp className={style.icons}/>
            <ImYoutube className={style.icons}/>
            
          </div>
      </div>

      <div className={style.footer_content}>
        <ul>
          <h3>Healthy living</h3>
          <Link>Lorem</Link>
          <Link>Lorem ipsum</Link>
          <Link>Lorem</Link>
          <Link>Lorem ipsum</Link>
        </ul>
        <ul>
          <h3>Services</h3>
          <Link>Lorem</Link>
          <Link>Lorem ipsum</Link>
          <Link>Lorem ipsum</Link>
          <Link>Lorem ipsum</Link>
        </ul>
        <ul>
          <h3>Programms</h3>
          <Link>Lorem</Link>
          <Link>Lorem ipsum</Link>
          <Link>Lorem ipsum</Link>
          <Link>Lorem ipsum</Link>
        </ul>
      </div>
    </div>
  );
}