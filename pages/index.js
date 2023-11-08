import Head from 'next/head';

import BootstrapCarousel from "../components/carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from '../components/page-footer';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Map from '../components/Map';
import GoogleMap from '../components/Map';
export default function Home() {
return (
    <>  
        <Head>
            <link rel="icon" href="VIR.png" />
            <title >VIRLAB</title>
        </Head>
        

        
            
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <h1 style={{color: 'white'}}>VIR LAB</h1>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a class="nav-link active"  href="/">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="/people">People</a></li>
                        <li class="nav-item"><a class="nav-link" href="/projects">Projects</a></li>
                        <li class="nav-item"><a class="nav-link" href="/publications">Publications</a></li>
                        <li class="nav-item"><a class="nav-link" href="/sponsors">Sponsors</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container">
            <div class="row">
                <div class="col-8">
                    <div class="text-left mt-5">
                        <h1>About Us</h1>
                        <p>The Vision and Immersive Realities Lab (VIRLab) at UTSA is an innovative research facility that explores the cutting-edge intersections of technology, human perception, and immersive experiences. VIRLab's interdisciplinary approach encompasses Computer Vision and Immersive Realities, including Virtual Reality (VR), Augmented Reality (AR), and Mixed Reality (MR). The lab leverages its discoveries to impact diverse fields, including healthcare, rehabilitation, virtual training, and serious gaming, with a core mission of enhancing human quality of life through immersive technologies.</p>
                        <p>At the heart of VIRLab's operations is an exceptional team of research students, spanning both graduate and undergraduate levels. Together, they collaborate to craft immersive experiences that push the boundaries of human-computer interaction. Their collective ambition is to make AR, VR, and MR more accessible, intuitive, and adaptable across diverse sectors. Within the healthcare sector, VIRLab concentrates its efforts on exploring the application of immersive technologies in therapy, diagnostics, and training. For instance, augmented reality finds application in assisting post-stroke patients in enhancing their range of motion through rehabilitation exercises integrated into serious games. In the realm of education, immersive VR STEM laboratories are designed to provide students with an interactive and collaborative learning experience. 
                        </p>    
                        <p>The lab is well-equipped with state-of-the-art hardware and software, including high-resolution headsets, motion tracking systems, and RGB-D cameras, empowering researchers to develop and evaluate increasingly lifelike immersive environments. Among the various research projects within VIRLab's scope are endeavors like 3D human pose estimation, multi-camera calibration, 3D reconstruction, mesh generation and simplification, and 3D serious game design.</p>
                        <p>Several of our ongoing research initiatives are generously funded/supported by the US National Science Foundation (NSF). A detailed list of the research projects can be found <a href="https://sites.google.com/site/kevinpdesai/videos?authuser=0">here</a>, while a detailed list of related publications can be found <a href="https://sites.google.com/site/kevinpdesai/publications-projects?authuser=0">here</a>.</p>
                    </div>
                </div>
                <div class="col mt-5 " style={{paddingBottom: '5vw'}}>
                    <p style={{paddingLeft: '10px'}}>506 Dolorosa St, San Antonio, TX 78204</p>
                    <div class="container" style={{height: '34vh'}}>
                        <GoogleMap/>
                    </div>
                    
                    <p>contact: <a href='https://sites.google.com/site/kevinpdesai/home?authuser=0'>kevin.desai@utsa.edu</a></p>

                </div>
            </div>
            
        </div>
        
        <BootstrapCarousel />

        <Footer/>
    
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="js/scripts.js"></script>
    </>
);
}