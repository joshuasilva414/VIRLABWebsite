
import React, { useState } from 'react';
import styles from '../styles/Button.module.css';

export default function Publication(props){
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };
    return (
        
        <>
        <div style={{display: "flex", justifyContent: "center"}}>
        <div class="card" style={{width: '55rem', height: 'auto', marginBottom: '50px'}}>
                
            <div class="card-body" >
                <div class="row">
                    <div class="col-2 col-sm-1 col-md-2 col-lg-2">
                        
                        <img src={props.pubImage} alt="" style={{width: '125px', height: '125px'}}/>
                    </div>
                    <div class="col-10 col-sm-4 col-md-8 col-lg-10">
                        <a href={props.pubLink} style={{marginBottom: '0px', textDecoration: 'none', color: "black"}}><p style={{marginBottom: '0px'}} class="card-title "><b>{props.title}<img/></b></p></a>
                        <p style={{marginBottom: '0px'}}> {props.authors}</p>
                        
                            <p><i>{props.venue}</i></p>
                            <p style={{marginBottom: '0px'}}>{props.impactFactor} {props.h5Index} {props.acceptanceRate}</p>
                        
                        <div>
                        <div className="btn-group">
                            <button id="triggerButton" className={`${styles['btn-white']} ${styles['btn-hover-gray']} `}  onClick={togglePopup} style={{}}>
                                <p >bibTex</p>
                            </button>
                            
                            <a href={props.pdfLink} className={`${styles['btn-white']} ${styles['btn-hover-gray']}`} target="_blank" style={{textDecoration: 'none'}}>
                                <p >PDF</p>
                            </a>
                            </div>
                            <div>
                                {showPopup && (
                                <div className="overlay">
                                    <div className="popup" >
                                    
                                    {props.bibtex}

                                    </div>
                                </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
        </div>
        </>
    );
}
Publication.defaultProps = {
    pdfLink: 'https://sites.google.com/site/kevinpdesai/publications-projects?authuser=0',
    pubImage: "/placeHolder.png",
    bibtex: 'no bibtex citation available'
}
// pubLink, title, investigators, impactFactors, h5Index