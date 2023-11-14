import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employee from '../components/employee-card';
import Alumni from '../components/alumni-card';
import Footer from '../components/page-footer';
export default function People() {
  return (
    <><div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
            <h1 style={{color: 'white'}}>VIR LAB</h1>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a class="nav-link"  href="/">Home</a></li>
                        <li class="nav-item"><a class="nav-link active" href="/people">People</a></li>
                        <li class="nav-item"><a class="nav-link" href="/projects">Projects</a></li>
                        <li class="nav-item"><a class="nav-link" href="/publications">Publications</a></li>
                        <li class="nav-item"><a class="nav-link" href="/sponsors">Sponsors</a></li>
                    
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container" style={{marginTop: '25px', marginBottom: '25px'}}>
            <h1>Faculty</h1>

        </div>
        <div class="container" style={{marginBottom: '25px'}}>
            <Employee name="Kevin Desai" education="Assistant Professor in Computer Science at UTSA" image="/KevinDesai.jpg" personal="https://sites.google.com/site/kevinpdesai"></Employee>

        </div>
        </div>
        <div class="container">
            <h1>Students</h1>

        </div>

        <div class="container " style={{display: 'flex', flexWrap: 'wrap'}} >
            {/* name, education, image, personal */}
            <Employee name="Ayda Eghbalian" education="PhD in Computer Science at UTSA " personal="https://www.linkedin.com/in/ayda-eghbalian-a825b8111/" image="/Ayda.jpeg"></Employee>
            <Employee name="Md Mushfiqur Azam" education="PhD in Computer Science at UTSA" personal="https://bd.linkedin.com/in/md-mushfiqur-azam-588488142"image="MdMushfiqurAzam.jpeg"></Employee>
            <Employee name="Sadia Mubashshira" education="PhD in Computer Science at UTSA" personal="https://www.linkedin.com/in/sadia-mubashshira-482494142/"image="SadiaMubashshira.jpg"></Employee>
            <Employee name="Rojan Hosseini" education="PhD in Computer Science at UTSA" personal="https://www.linkedin.com/in/itsrojan" image="RojanHosseini.jpeg"></Employee>
            <Employee name="Ebrahim Mellatdoust Pordel" education="PhD in Electrical and Computer Engineering at UTSA" image="EbrahimMellatdoust.png"></Employee>
            <Employee name=" OFM Riaz Rahman Aranya" education="PhD in Computer Science at UTSA " personal= "https://aranya059.github.io/" image="/RiazRahmanAranya.jpeg"></Employee>



        </div>
        <div class="container " style={{display: 'flex', flexWrap: 'wrap'}}>
            <Employee name="Soren Watterson" education="BS in Computer Science and Mathematics of Data and Computing at UTSA" personal="https://www.linkedin.com/in/soren-watterson/" image="SorenW.jpeg" ></Employee>
            <Employee name="Joshua Silva" education="BS in Computer Science at UTSA" personal="https://joshuasilva.netlify.app" image="JoshuaSilva.jpeg"></Employee>
        </div>
        <div class="container">
            <h1>Alumni</h1>

        </div>

        <div class="container " style={{display: 'flex', flexWrap: 'wrap'}} >
            {/* name, education, image, personal */}
            <Alumni name="Jenelle Millison" education="BS in Computer Science at UTSA (2022)" job="  Data Scientist at Johns Hopkins University Applied Physics Lab" personal=" https://www.linkedin.com/in/jenelle-millison" image='/jenelle.jpeg'></Alumni>

            <Alumni name="Jeff Dong" education="B.S. Computer Science at UTSA (2023)" job="Software Developer at Paycom" personal="https://www.linkedin.com/in/jeffrdong/" image="JeffDong.jpeg"></Alumni>
            <Alumni name="Ker Xiang Teh" education="B.S. Computer Science at UTSA (2023)" job="Application Security Engineer at HEB" personal="https://www.linkedin.com/in/ker-xiang-teh-a24343101/" image="KerXiangTeh.jpeg"></Alumni>
            <Alumni name="Hector Pineda" education="B.S. Computer Science at UTSA (2023)" job="Software Developer at HEB" personal="https://www.linkedin.com/in/hector-pineda-5b733a216/" image="HectorPineda.jpeg"></Alumni>
            <Alumni name="Ivy Vasquez Sandoval" education="B.S. Computer Science at UTSA (2023)" job="Robotics Software Engineer at Plus One Robotics" personal="https://www.linkedin.com/in/ivybrandyn/" ></Alumni>
        </div>
        <Footer/>
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="js/scripts.js"></script>
    </>
  );
}
