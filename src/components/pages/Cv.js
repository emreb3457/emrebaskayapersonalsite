import style from "../style/cv.module.css";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { Component } from 'react'

export default class Cv extends Component {

  render() {

    return (

      <div className={style.content}>
        <div className={style.main}>
          <div className={style.main_inner} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h1 className={style.l1}>EMRE BASKAYA</h1>
            <h6 className={style.l2}>SOFTWARE DEVELOPER</h6>
            <ul className={style.links}>
              <li><a target="blank" href="https://www.linkedin.com/in/emre-başkaya-ab086a15b/"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a target="blank" href="https://github.com/emreb3457"><i className="fab fa-github" ></i></a></li>
              <li><a target="blank" href="https://www.instagram.com/emrebaskayaaa/?hl=tr"><i className="fab fa-instagram"></i></a></li>
              <li><a target="blank" href="https://drive.google.com/file/d/19XPFI-BC_lzMq77Y1sKomRxfZ8pMv5mH/view?usp=sharing"><i className="fas fa-file"></i></a></li>
            </ul>
            <br />
            <br />
            {/* <ul className={style.buttons}>
              <li><Link to="project"><Button variant="light" size="lg" href="">Project</Button></Link></li>
              <li><Link to="blogs"><Button variant="light" size="lg" >Blog</Button></Link></li>
            </ul> */}
            <br />
            <ul className={style.tec}>
              <li><i className="fab fa-node"></i></li>
              <li><i className="fab fa-react"></i></li>
              <li><i className="fab fa-js"></i></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>

    )
  }
}




