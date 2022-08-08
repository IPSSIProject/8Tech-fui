import React, {useState} from "react";
import '../../styles/Footer.css';
import logoblanc from '../../assets/logo-blanc.png'

function Footer(props){


    return(

    <div className="primaryBlock">

        <div className="listBlock">

            <img src={ logoblanc } id="logoBlanc"/>

            <ul>
                <li className="titreList">
                    A propos :
                </li>
                <li>
                    <a href="#"> Condition Géné d'utilisation </a>
                </li>
                <li>
                    <a href="#">Nous contacter </a>
                </li>
                <li>
                    <a href="#">Qui sommes nous ? </a>
                </li>
            </ul>
            <ul>
                <li className="titreList">
                    Lorem ipsum :
                </li>
                <li>
                    <a href="#">Lorem Ipsum </a>
                </li>
                <li>
                    <a href="#">Dolor sit amet </a>
                </li>
                <li>
                    <a href="#">van dur maniak </a>
                </li>
            </ul>
            <ul>
                <li className="titreList">
                    Autre :
                </li>
                <li>
                    <a href="#">Condition générales de vente </a>
                </li>
                <li>
                    <a href="#">Vos informations personnelles </a>
                </li>
                <li>
                    <a href="#" >Devenez partenaire </a>
                </li>
            </ul>
        </div>

    </div>)
}
export default Footer;