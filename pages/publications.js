import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Publication from '../components/publication-card.js'
import Footer from '../components/page-footer';
import styles from '../styles/Button.module.css';
export default function Publications(){
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
            <h1 style={{color: 'white'}}>VIR LAB</h1>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="/people">People</a></li>
                        <li class="nav-item"><a class="nav-link " href="/projects">Projects</a></li>
                        <li class="nav-item"><a class="nav-link active" href="/publications">Publications</a></li>
                        <li class="nav-item"><a class="nav-link " href="/sponsors">Sponsors</a></li>

                    </ul>
                </div>
            </div>
        </nav>
        
        <div class="container" style={{marginTop: "25px", marginBottom: "25px", display: "flex", justifyContent: "center"}}>
            <h1>Publications</h1>
        </div>

        <div class="container" style={{height: ''}}>
            {/* pubLink, title, investigators, impactFactors, h5Index */}
            <Publication pdfLink="https://arxiv.org/pdf/2302.05795.pdf" pubLink="https://arxiv.org/abs/2302.05795"  title="Assessment HTN (A-HTN) for Automated Task Performance Assessment in 3D Serious Games" authors="Desai, Kevin, Omeed Ashtiani, and Balakrishnan Prabhakaran" venue="arXiv 2023" pubImage="publicationImages/Publication1.png" bibtex="@misc{desai2023assessment,
      title={Assessment HTN (A-HTN) for Automated Task Performance Assessment in 3D Serious Games}, 
      author={Kevin Desai and Omeed Ashtiani and Balakrishnan Prabhakaran},
      year={2023}
      eprint={2302.05795},
      archivePrefix={arXiv},
      primaryClass={cs.HC}
}" />
            <Publication pubLink="https://ieeexplore.ieee.org/document/10225860" title="A Study of Human Fitness Pose Classification Using Artificial Neural Networks." venue="ICIT 2023" authors="Shang, Sijie, Rong Jin, and Kevin Desai"  pubImage="publicationImages/Publication2.png"/>
            <Publication pdfLink="" pubLink="https://www.mdpi.com/1424-8220/23/2/929" title="Can Hierarchical Transformers Learn Facial Geometry" ImpactFactors="3.85" authors="Young, Paul, Nima Ebadi, Arun Das, Mazal Bethany, Kevin Desai, and Peyman Najafirad" venue="2023" pubImage="publicationImages/Publication3.png" bibtex="@INPROCEEDINGS{10225860,
  author={Shang, Sijie and Jin, Rong and Desai, Kevin},
  booktitle={2023 International Conference on Information Technology (ICIT)}, 
  title={A Study of Human Fitness Pose Classification Using Artificial Neural Networks}, 
  year={2023},
  volume={},
  number={},
  pages={250-255},
  doi={10.1109/ICIT58056.2023.10225860}}"/>
            <Publication pubLink="https://link.springer.com/article/10.1007/s41252-022-00309-y" title="The Case for Integrated Advanced Technology in Applied Behavior Analysis" authors="Neely, Leslie, Amarie Carnett, John Quarles, Hannah MacNaul, Se-Woong Park, Sakiko Oyama, Guenevere Chen, Kevin Desai, and Peyman Najafirad" venue="Advances in Neurodevelopmental Disorders (2022): 1-11" impactFactors="impact factor: 1.22" h5Index="h5Index: 10" bibtex="@article{2023, title={Can Hierarchical Transformers Learn Facial Geometry?}, volume={23}, ISSN={1424-8220}, url={http://dx.doi.org/10.3390/s23020929}, DOI={10.3390/s23020929}, number={2}, journal={Sensors}, publisher={MDPI AG}, author={Young, Paul and Ebadi, Nima and Das, Arun and Bethany, Mazal and Desai, Kevin and Najafirad, Peyman}, year={2023}, month={Jan}, pages={929} }"/>
            <Publication pubLink="Publication-Link-Here" title="Towards Forecasting the Onset of Cybersickness by Fusing Physiological, Head-tracking and Eye-tracking with Multimodal Deep Fusion Network" authors="Islam, Rifatul, Kevin Desai, and John Quarles" venue="2022 IEEE International Symposium on Mixed and Augmented Reality (ISMAR) 2022" impactFactors="impact factor: 21" h5Index="h5Index: 25 (35)" bibtex="@INPROCEEDINGS{9995267,
  author={Islam, Rifatul and Desai, Kevin and Quarles, John},
  booktitle={2022 IEEE International Symposium on Mixed and Augmented Reality (ISMAR)}, 
  title={Towards Forecasting the Onset of Cybersickness by Fusing Physiological, Head-tracking and Eye-tracking with Multimodal Deep Fusion Network}, 
  year={2022},
  volume={},
  number={},
  pages={121-130},
  doi={10.1109/ISMAR55827.2022.00026}}"/>
            <Publication pubLink="Publication-Link-Here" title="PMPNet: Pixel Movement Prediction Network for Monocular Depth Estimation in Dynamic Scenes" authors="Peng, Kebin, John Quarles, and Kevin Desai" venue="2022 26th International Conference on Pattern Recognition (ICPR) 2022" acceptanceRate="47.8" h5Index="h5Index: 43 (61)" pubImage="publicationImages/Publication6.png"/>
            <Publication pubLink="Publication-Link-Here" title="Virtepex: Virtual Remote Tele-Physical Examination System" authors="Khargonkar, Ninad, Kevin Desai, Balakrishnan Prabhakaran, and Thiru Annaswamy" venue="Designing Interactive Systems Conference 2022" acceptanceRate="21.5" h5Index="h5Index: 41 (58)" />
            <Publication pubLink="Publication-Link-Here" title="BRDF-Based Irradiance Image Estimation to Remove Radiometric Differences for Stereo Matching" authors="Peng, Kebin, John Quarles, and Kevin Desai" venue="Proceedings of the 17th International Joint Conference on Computer Vision, Imaging and Computer Graphics Theory and Applications - Volume 5: VISAPP 2022" h5Index="h5Index: 19 (31)" />
            <Publication pubLink="Publication-Link-Here" title="TMVNet: Using Transformers for Multi-view Voxel-based 3D Reconstruction" authors="Peng, Kebin, Rifatul Islam, John Quarles, and Kevin Desai" venue="Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition 2022" acceptanceRate="60" h5Index="h5Index: 89 (154)" pubImage="publicationImages/Publication9.png"/>
            <Publication pubLink="Publication-Link-Here" title="HR-STAN: High-Resolution Spatio-Temporal Attention Network for 3D Human Motion Prediction" authors="Medjaouri, Omar, and Kevin Desai" venue="Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition 2022" h5Index="h5Index: 89 (154)" bestPaperAward="6%" pubImage="publicationImages/Publication10.png"/>
            <Publication pubLink="Publication-Link-Here" title="Show Why the Answer is Correct! Towards Explainable AI using Compositional Temporal Attention" authors="Bendre, Nihar, Kevin Desai, and Peyman Najarad" venue="2021 IEEE International Conference on Systems, Man, and Cybernetics (SMC) 2021" h5Index="h5Index: 32 (47)" pubImage="publicationImages/Publication11.png"/>
            <Publication pubLink="Publication-Link-Here" title="Cybersickness Prediction from Integrated HMD's Sensors: A Multimodal Deep Fusion Approach using Eye-tracking and Head-tracking Data" authors="Islam, Rifatul, Kevin Desai, and John Quarles" venue="2021 IEEE International Symposium on Mixed and Augmented Reality (ISMAR) 2021" acceptanceRate="23.6" h5Index="h5Index: 25 (35)" pubImage="publicationImages/Publication12.png"/>
            <Publication pubLink="Publication-Link-Here" title="Generalized Zero-Shot Learning Using Multimodal Variational Auto-Encoder With Semantic Concepts" authors="Bendre, Nihar, Kevin Desai, and Peyman Najafirad" venue="2021 IEEE International Conference on Image Processing (ICIP) 2021" acceptanceRate="46" h5Index="h5Index: 60 (89)" pubImage="publicationImages/Publication13.png"/>
            <Publication pubLink="Publication-Link-Here" title="Multimodal Data Streaming using Visual IoTs and Wearables for Telerehabilitation and Teletreatment" authors="Guzman, Herbert, Reenam Joshi, Victor Guzman, Max Kilger, and Kevin Desai" venue="2021 World Automation Congress (WAC) 2021" h5Index="h5Index: 13 (20)" pubImage="publicationImages/Publication14.png"/>
            <Publication pubLink="Publication-Link-Here" title="Personalized 3D exergames for in-home rehabilitation after stroke: a pilot study" authors="Desai, Kevin, Balakrishnan Prabhakaran, Nneka Ifejika, and Thiru M. Annaswamy" venue="Disability and Rehabilitation: Assistive Technology 2021" h5Index="h5Index: 35 (57)" impactFactor="Impact Factor: 2.5"/>
            <Publication pubLink="Publication-Link-Here" title="Innovative Augmented-Reality Based Customized Gaming Solutions for Home Exercises Following Stroke" authors="Annaswamy, Thiru, Balakrishnan Prabhakaran, Nneka Ifejika, Kevin Desai" venue="96th Annual ACRM Conference: Progress in Rehabilitation Research Nov 6, 2019"/>
            <Publication pubLink="Publication-Link-Here" title="Using mr. mapp for lower limb phantom pain management" authors="Bahirat, Kanchan, Yu-Yen Chung, Thiru Annaswamy, Gargi Raval, Kevin Desai, Balakrishnan Prabhakaran, and Michael Riegler" venue="Proceedings of the 27th ACM International Conference on Multimedia 2019" acceptanceRate="27" h5Index="h5Index: 65 (107)"/>
            <Publication pubLink="Publication-Link-Here" title="Combining Skeletal Poses for 3D Human Model Generation using Multiple Kinects" authors="Desai, Kevin, Balakrishnan Prabhakaran, and Suraj Raghuraman" venue="9th ACM Multimedia Systems Conference 2018" acceptanceRate="26" h5Index="h5Index: 34 (65)" pubImage="publicationImages/Publication18.png"/>
            <Publication pubLink="Publication-Link-Here" title="Skeleton-based continuous extrinsic calibration of multiple RGB-D kinect cameras" authors="Desai, Kevin, Balakrishnan Prabhakaran, and Suraj Raghuraman" venue="9th ACM Multimedia Systems Conference 2018" acceptanceRate="26" h5Index="h5Index: 34 (65)" pubImage="publicationImages/Publication19.png"/>
            <Publication pubLink="Publication-Link-Here" title="QoE studies on interactive 3D tele-immersion" authors="Desai, Kevin, Rong Jin, and Balakrishnan Prabhakaran" venue="2017 IEEE international symposium on multimedia (ISM) 2017" acceptanceRate="23.02" h5Index="h5Index: 18 (26)" pubImage="publicationImages/Publication20.png"/>
            <Publication pubLink="Publication-Link-Here" title="Learning-based objective evaluation of 3D human open meshes" authors="Desai, Kevin, Kanchan Bahirat, and Balakrishnan Prabhakaran" venue="2017 IEEE International Conference on Multimedia and Expo (ICME) 2017" h5Index="h5Index: 35 (57)" pubImage="publicationImages/Publication21.png"/>
            <Publication pubLink="Publication-Link-Here" title="Experiences with multi-modal collaborative virtual laboratory (mmcvl)" authors="Desai, Kevin, Uriel Haile Hernndez Belmonte, Rong Jin, Balakrishnan Prabhakaran, Paul Diehl, Victor Ayala Ramirez, Vinu Johnson, and Murry Gans" venue="2017 IEEE Third International Conference on Multimedia Big Data (BigMM) 2017" acceptanceRate="23.9" h5Index="h5Index: 19 (29)" pubImage="publicationImages/Publication22.png"/>
            <Publication pubLink="Publication-Link-Here" title="Augmented reality-based exergames for rehabilitation" authors="Desai, Kevin, Kanchan Bahirat, Sudhir Ramalingam, Balakrishnan Prabhakaran, Thiru Annaswamy, and Una E. Makris" venue="7th International Conference on Multimedia Systems 2016" acceptanceRate="28" h5Index="h5Index: 34 (65)"/>
            <Publication pubLink="Publication-Link-Here" title="Network adaptive textured mesh generation for collaborative 3d tele-immersion" authors="Desai, Kevin, Kanchan Bahirat, Suraj Raghuraman, and Balakrishnan Prabhakaran" venue="2015 IEEE International Symposium on Multimedia (ISM) 2015" acceptanceRate="25.5" h5Index="h5Index: 18 (26)" pubImage="publicationImages/Publication24.png"/>

        </div>
        <Footer/>
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="js/scripts.js"></script>
        
        </>
    )
}