import React from 'react';

function Footer() {
    return(
        <>

        <footer class="bg-dark text-center text-white">
            
            <div style={{paddingTop: '40px'}}>
                <p>Copyright © VIRLab 2023-2023</p>
            </div>
            
            
            <div style={{paddingBottom: '50px'}}>
                <img src="VIRLABLOGO.png" alt="Image 1" class="" style={{width: '100px', paddingRight: '25px'}}/>
                <img src="utsaimage.png" alt="Image 2" class="" style={{width: '100px', paddingLeft: '25px'}} />
            </div>
        </footer>
        </>
    );
}
export default Footer;