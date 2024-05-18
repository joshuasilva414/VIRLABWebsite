import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Publication from "../components/publication-card.js";
import Footer from "../components/page-footer";
import styles from "../styles/Button.module.css";
import Head from "next/head";
import Link from "next/link";

export default function Publications() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="bootstrap.css" />
        <link rel="stylesheet" href="carousel.css" />
      </Head>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <h1 style={{ color: "white" }}>VIR LAB</h1>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link" href="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="/people">
                  People
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " href="/projects">
                  Projects
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" href="/publications">
                  Publications
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " href="/sponsors">
                  Sponsors
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        class="container"
        style={{
          marginTop: "25px",
          marginBottom: "25px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1>Publications</h1>
      </div>

      <div class="container" style={{ height: "" }}>
        {/* pubLink, title, investigators, impactFactors, h5Index */}
        <Publication
          pdfLink="https://arxiv.org/pdf/2302.05795.pdf"
          pubLink="https://arxiv.org/abs/2302.05795"
          title="Assessment HTN (A-HTN) for Automated Task Performance Assessment in 3D Serious Games"
          authors="Desai, Kevin, Omeed Ashtiani, and Balakrishnan Prabhakaran"
          venue="arXiv 2023"
          pubImage="/publicationImages/Publication1.png"
          bibtex="@misc{desai2023assessment,
      title={Assessment HTN (A-HTN) for Automated Task Performance Assessment in 3D Serious Games}, 
      author={Kevin Desai and Omeed Ashtiani and Balakrishnan Prabhakaran},
      year={2023}
      eprint={2302.05795},
      archivePrefix={arXiv},
      primaryClass={cs.HC}
}"
        />
        <Publication
          pubLink="https://ieeexplore.ieee.org/document/10225860"
          title="A Study of Human Fitness Pose Classification Using Artificial Neural Networks."
          venue="ICIT 2023"
          authors="Shang, Sijie, Rong Jin, and Kevin Desai"
          pubImage="/publicationImages/Publication2.png"
        />
        <Publication
          pdfLink=""
          pubLink="https://www.mdpi.com/1424-8220/23/2/929"
          title="Can Hierarchical Transformers Learn Facial Geometry"
          ImpactFactors="3.85"
          authors="Young, Paul, Nima Ebadi, Arun Das, Mazal Bethany, Kevin Desai, and Peyman Najafirad"
          venue="2023"
          pubImage="/publicationImages/Publication3.png"
          bibtex="@INPROCEEDINGS{10225860,
  author={Shang, Sijie and Jin, Rong and Desai, Kevin},
  booktitle={2023 International Conference on Information Technology (ICIT)}, 
  title={A Study of Human Fitness Pose Classification Using Artificial Neural Networks}, 
  year={2023},
  volume={},
  number={},
  pages={250-255},
  doi={10.1109/ICIT58056.2023.10225860}}"
        />
        <Publication
          pubLink="https://link.springer.com/article/10.1007/s41252-022-00309-y"
          title="The Case for Integrated Advanced Technology in Applied Behavior Analysis"
          authors="Neely, Leslie, Amarie Carnett, John Quarles, Hannah MacNaul, Se-Woong Park, Sakiko Oyama, Guenevere Chen, Kevin Desai, and Peyman Najafirad"
          venue="Advances in Neurodevelopmental Disorders (2022): 1-11"
          impactFactors="impact factor: 1.22"
          h5Index="h5Index: 10"
          bibtex="@article{2023, title={Can Hierarchical Transformers Learn Facial Geometry?}, volume={23}, ISSN={1424-8220}, url={http://dx.doi.org/10.3390/s23020929}, DOI={10.3390/s23020929}, number={2}, journal={Sensors}, publisher={MDPI AG}, author={Young, Paul and Ebadi, Nima and Das, Arun and Bethany, Mazal and Desai, Kevin and Najafirad, Peyman}, year={2023}, month={Jan}, pages={929} }"
        />
        <Publication
          pubLink="https://ieeexplore.ieee.org/abstract/document/9995267"
          title="Towards Forecasting the Onset of Cybersickness by Fusing Physiological, Head-tracking and Eye-tracking with Multimodal Deep Fusion Network"
          authors="Islam, Rifatul, Kevin Desai, and John Quarles"
          venue="2022 IEEE International Symposium on Mixed and Augmented Reality (ISMAR) 2022"
          impactFactors="impact factor: 21"
          h5Index="h5Index: 25 (35)"
          bibtex="@INPROCEEDINGS{9995267,
  author={Islam, Rifatul and Desai, Kevin and Quarles, John},
  booktitle={2022 IEEE International Symposium on Mixed and Augmented Reality (ISMAR)}, 
  title={Towards Forecasting the Onset of Cybersickness by Fusing Physiological, Head-tracking and Eye-tracking with Multimodal Deep Fusion Network}, 
  year={2022},
  volume={},
  number={},
  pages={121-130},
  doi={10.1109/ISMAR55827.2022.00026}}"
        />
        <Publication
          pdfLink="/publicationPDF/PMPNet.pdf"
          pubLink="https://ieeexplore.ieee.org/abstract/document/9956096"
          title="PMPNet: Pixel Movement Prediction Network for Monocular Depth Estimation in Dynamic Scenes"
          authors="Peng, Kebin, John Quarles, and Kevin Desai"
          venue="2022 26th International Conference on Pattern Recognition (ICPR) 2022"
          acceptanceRate="47.8"
          h5Index="h5Index: 43 (61)"
          pubImage="/publicationImages/Publication6.png"
        />
        <Publication
          pdfLink=""
          pubLink="https://dl.acm.org/doi/10.1145/3532106.3533486"
          title="Virtepex: Virtual Remote Tele-Physical Examination System"
          authors="Khargonkar, Ninad, Kevin Desai, Balakrishnan Prabhakaran, and Thiru Annaswamy"
          venue="Designing Interactive Systems Conference 2022"
          acceptanceRate="21.5"
          h5Index="h5Index: 41 (58)"
        />
        <Publication
          pdfLink=""
          pubLink="https://www.scitepress.org/PublicationsDetail.aspx?ID=Df1h/LGTeUQ=&t=1"
          title="BRDF-Based Irradiance Image Estimation to Remove Radiometric Differences for Stereo Matching"
          authors="Peng, Kebin, John Quarles, and Kevin Desai"
          venue="Proceedings of the 17th International Joint Conference on Computer Vision, Imaging and Computer Graphics Theory and Applications - Volume 5: VISAPP 2022"
          h5Index="h5Index: 19 (31)"
          bibtex="@conference{visapp22,
author={Kebin Peng. and John Quarles. and Kevin Desai.},
title={BRDF-based Irradiance Image Estimation to Remove Radiometric Differences for Stereo Matching},
booktitle={Proceedings of the 17th International Joint Conference on Computer Vision, Imaging and Computer Graphics Theory and Applications (VISIGRAPP 2022) - Volume 5: VISAPP},
year={2022},
pages={734-744},
publisher={SciTePress},
organization={INSTICC},
doi={10.5220/0010879800003124},
isbn={978-989-758-555-5},
issn={2184-4321},
}"
        />
        <Publication
          pdfLink="https://openaccess.thecvf.com/content/CVPR2022W/PBVS/papers/Peng_TMVNet_Using_Transformers_for_Multi-View_Voxel-Based_3D_Reconstruction_CVPRW_2022_paper.pdf"
          pubLink="https://openaccess.thecvf.com/content/CVPR2022W/PBVS/html/Peng_TMVNet_Using_Transformers_for_Multi-View_Voxel-Based_3D_Reconstruction_CVPRW_2022_paper.html"
          title="TMVNet: Using Transformers for Multi-view Voxel-based 3D Reconstruction"
          authors="Peng, Kebin, Rifatul Islam, John Quarles, and Kevin Desai"
          venue="Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition 2022"
          acceptanceRate="60"
          h5Index="h5Index: 89 (154)"
          pubImage="/publicationImages/Publication9.png"
          bibtex="@InProceedings{Peng_2022_CVPR,
    author    = {Peng, Kebin and Islam, Rifatul and Quarles, John and Desai, Kevin},
    title     = {TMVNet: Using Transformers for Multi-View Voxel-Based 3D Reconstruction},
    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Workshops},
    month     = {June},
    year      = {2022},
    pages     = {222-230}
}"
        />
        <Publication
          pdfLink="https://openaccess.thecvf.com/content/CVPR2022W/Precognition/papers/Medjaouri_HR-STAN_High-Resolution_Spatio-Temporal_Attention_Network_for_3D_Human_Motion_Prediction_CVPRW_2022_paper.pdf"
          pubLink="https://openaccess.thecvf.com/content/CVPR2022W/Precognition/html/Medjaouri_HR-STAN_High-Resolution_Spatio-Temporal_Attention_Network_for_3D_Human_Motion_Prediction_CVPRW_2022_paper.html"
          title="HR-STAN: High-Resolution Spatio-Temporal Attention Network for 3D Human Motion Prediction"
          authors="Medjaouri, Omar, and Kevin Desai"
          venue="Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition 2022"
          h5Index="h5Index: 89 (154)"
          bestPaperAward="6%"
          pubImage="/publicationImages/Publication10.png"
          bibtex="@InProceedings{Medjaouri_2022_CVPR,
    author    = {Medjaouri, Omar and Desai, Kevin},
    title     = {HR-STAN: High-Resolution Spatio-Temporal Attention Network for 3D Human Motion Prediction},
    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Workshops},
    month     = {June},
    year      = {2022},
    pages     = {2540-2549}
}"
        />
        <Publication
          pdfLink="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9659223"
          pubLink="https://ieeexplore.ieee.org/abstract/document/9659223"
          title="Show Why the Answer is Correct! Towards Explainable AI using Compositional Temporal Attention"
          authors="Bendre, Nihar, Kevin Desai, and Peyman Najarad"
          venue="2021 IEEE International Conference on Systems, Man, and Cybernetics (SMC) 2021"
          h5Index="h5Index: 32 (47)"
          pubImage="/publicationImages/Publication11.png"
          bibtex="@INPROCEEDINGS{9659223,
  author={Bendre, Nihar and Desai, Kevin and Najafirad, Peyman},
  booktitle={2021 IEEE International Conference on Systems, Man, and Cybernetics (SMC)}, 
  title={Show Why the Answer is Correct! Towards Explainable AI using Compositional Temporal Attention}, 
  year={2021},
  volume={},
  number={},
  pages={3006-3012},
  doi={10.1109/SMC52423.2021.9659223}}
"
        />
        <Publication
          pdfLink="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9583838"
          pubLink="https://ieeexplore.ieee.org/abstract/document/9583838"
          title="Cybersickness Prediction from Integrated HMD's Sensors: A Multimodal Deep Fusion Approach using Eye-tracking and Head-tracking Data"
          authors="Islam, Rifatul, Kevin Desai, and John Quarles"
          venue="2021 IEEE International Symposium on Mixed and Augmented Reality (ISMAR) 2021"
          acceptanceRate="23.6"
          h5Index="h5Index: 25 (35)"
          pubImage="/publicationImages/Publication12.png"
          bibtex="@INPROCEEDINGS{9583838,
  author={Islam, Rifatul and Desai, Kevin and Quarles, John},
  booktitle={2021 IEEE International Symposium on Mixed and Augmented Reality (ISMAR)}, 
  title={Cybersickness Prediction from Integrated HMD’s Sensors: A Multimodal Deep Fusion Approach using Eye-tracking and Head-tracking Data}, 
  year={2021},
  volume={},
  number={},
  pages={31-40},
  doi={10.1109/ISMAR52148.2021.00017}}
"
        />
        <Publication
          pdfLink="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9506108"
          pubLink="https://ieeexplore.ieee.org/abstract/document/9506108"
          title="Generalized Zero-Shot Learning Using Multimodal Variational Auto-Encoder With Semantic Concepts"
          authors="Bendre, Nihar, Kevin Desai, and Peyman Najafirad"
          venue="2021 IEEE International Conference on Image Processing (ICIP) 2021"
          acceptanceRate="46"
          h5Index="h5Index: 60 (89)"
          pubImage="/publicationImages/Publication13.png"
          bibtex="@INPROCEEDINGS{9506108,
  author={Bendre, Nihar and Desai, Kevin and Najafirad, Peyman},
  booktitle={2021 IEEE International Conference on Image Processing (ICIP)}, 
  title={Generalized Zero-Shot Learning Using Multimodal Variational Auto-Encoder With Semantic Concepts}, 
  year={2021},
  volume={},
  number={},
  pages={1284-1288},
  doi={10.1109/ICIP42928.2021.9506108}}
"
        />
        <Publication
          pdfLink="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9559516"
          pubLink="https://ieeexplore.ieee.org/abstract/document/9559516"
          title="Multimodal Data Streaming using Visual IoTs and Wearables for Telerehabilitation and Teletreatment"
          authors="Guzman, Herbert, Reenam Joshi, Victor Guzman, Max Kilger, and Kevin Desai"
          venue="2021 World Automation Congress (WAC) 2021"
          h5Index="h5Index: 13 (20)"
          pubImage="/publicationImages/Publication14.png"
          bibtex="@INPROCEEDINGS{9559516,
  author={Guzman, Herbert and Joshi, Reenam and Guzman, Victor and Kilger, Max and Desai, Kevin},
  booktitle={2021 World Automation Congress (WAC)}, 
  title={Multimodal Data Streaming using Visual IoTs and Wearables for Telerehabilitation and Teletreatment}, 
  year={2021},
  volume={},
  number={},
  pages={233-238},
  doi={10.23919/WAC50355.2021.9559516}}
"
        />
        <Publication
          pubLink="https://www.tandfonline.com/doi/abs/10.1080/17483107.2021.1913518"
          title="Personalized 3D exergames for in-home rehabilitation after stroke: a pilot study"
          authors="Desai, Kevin, Balakrishnan Prabhakaran, Nneka Ifejika, and Thiru M. Annaswamy"
          venue="Disability and Rehabilitation: Assistive Technology 2021"
          h5Index="h5Index: 35 (57)"
          impactFactor="Impact Factor: 2.5"
        />
        <Publication
          pubLink="https://eventscribe.com/2019/acrm/fsPopup.asp?Mode=presInfo&PresentationID=550919"
          title="Innovative Augmented-Reality Based Customized Gaming Solutions for Home Exercises Following Stroke"
          authors="Annaswamy, Thiru, Balakrishnan Prabhakaran, Nneka Ifejika, Kevin Desai"
          venue="96th Annual ACRM Conference: Progress in Rehabilitation Research Nov 6, 2019"
        />
        <Publication
          pubLink="https://dl.acm.org/doi/abs/10.1145/3343031.3351165"
          title="Using mr. mapp for lower limb phantom pain management"
          authors="Bahirat, Kanchan, Yu-Yen Chung, Thiru Annaswamy, Gargi Raval, Kevin Desai, Balakrishnan Prabhakaran, and Michael Riegler"
          venue="Proceedings of the 27th ACM International Conference on Multimedia 2019"
          acceptanceRate="27"
          h5Index="h5Index: 65 (107)"
          bibtex="@inproceedings{10.1145/3343031.3351165,
author = {Bahirat, Kanchan and Chung, Yu-Yen and Annaswamy, Thiru and Raval, Gargi and Desai, Kevin and Prabhakaran, Balakrishnan and Riegler, Michael},
title = {Using Mr. MAPP for Lower Limb Phantom Pain Management},
year = {2019},
isbn = {9781450368896},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3343031.3351165},
doi = {10.1145/3343031.3351165},
abstract = {Phantom pain is a chronic pain that is experienced as a vivid sensation stemming from the missing limb. From traditional mirror box to virtual reality-based approaches, a wide spectrum of treatments using mimic feedback of the amputated limb have been developed for alleviating phantom limb pain. In our previous work, Mixed reality-based framework for MAnaging Phantom Pain (Mr.MAPP) was presented and used to generate a virtual phantom upper limb, in real time, to manage the phantom pain. However, amputation of the lower limb is more common than that of the upper limb. Hence, in this paper, on top of demonstrating the reproducibility of the Mr.MAPP framework for upper limb, we extend it to manage lower limb phantom pain as well. Unlike an upper limb amputee, a patient with lower limb amputated is constrained to perform the training procedure in a sitting posture. Accordingly, virtual training games are designed for lower limb exercises with sitting posture such as knee flexion and extension, ankle dorsiflexion and tandem coordinated movement. Finally, the technical details of the system setup for playing the training games are introduced.},
booktitle = {Proceedings of the 27th ACM International Conference on Multimedia},
pages = {1071–1075},
numpages = {5},
keywords = {augmented virtuality, mixed reality, phantom pain management},
location = {Nice, France},
series = {MM '19}
}

"
        />
        <Publication
          pubLink="https://dl.acm.org/doi/abs/10.1145/3204949.3204958"
          title="Combining Skeletal Poses for 3D Human Model Generation using Multiple Kinects"
          authors="Desai, Kevin, Balakrishnan Prabhakaran, and Suraj Raghuraman"
          venue="9th ACM Multimedia Systems Conference 2018"
          acceptanceRate="26"
          h5Index="h5Index: 34 (65)"
          pubImage="/publicationImages/Publication18.png"
          bibtex="@inproceedings{10.1145/3204949.3204958,
author = {Desai, Kevin and Prabhakaran, Balakrishnan and Raghuraman, Suraj},
title = {Combining Skeletal Poses for 3D Human Model Generation Using Multiple Kinects},
year = {2018},
isbn = {9781450351928},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3204949.3204958},
doi = {10.1145/3204949.3204958},
abstract = {RGB-D cameras, such as the Microsoft Kinect, provide us with the 3D information, color and depth, associated with the scene. Interactive 3D Tele-Immersion (i3DTI) systems use such RGB-D cameras to capture the person present in the scene in order to collaborate with other remote users and interact with the virtual objects present in the environment. Using a single camera, it becomes difficult to estimate an accurate skeletal pose and complete 3D model of the person, especially when the person is not in the complete view of the camera. With multiple cameras, even with partial views, it is possible to get a more accurate estimate of the skeleton of the person leading to a better and complete 3D model. In this paper, we present a real-time skeletal pose identification approach that leverages on the inaccurate skeletons of the individual Kinects, and provides a combined optimized skeleton. We estimate the Probability of an Accurate Joint (PAJ) for each joint from all of the Kinect skeletons. We determine the correct direction of the person and assign the correct joint sides for each skeleton. We then use a greedy consensus approach to combine the highly probable and accurate joints to estimate the combined skeleton. Using the individual skeletons, we segment the point clouds from all the cameras. We use the already computed PAJ values to obtain the Probability of an Accurate Bone (PAB). The individual point clouds are then combined one segment after another using the calculated PAB values. The generated combined point cloud is a complete and accurate 3D representation of the person present in the scene. We validate our estimated skeleton against two well-known methods by computing the error distance between the best view Kinect skeleton and the estimated skeleton. An exhaustive analysis is performed by using around 500000 skeletal frames in total, captured using 7 users and 7 cameras. Visual analysis is performed by checking whether the estimated skeleton is completely present within the human model. We also develop a 3D Holo-Bubble game to showcase the real-time performance of the combined skeleton and point cloud. Our results show that our method performs better than the state-of-the-art approaches that use multiple Kinects, in terms of objective error, visual quality and real-time user performance.},
booktitle = {Proceedings of the 9th ACM Multimedia Systems Conference},
pages = {40–51},
numpages = {12},
keywords = {interactive 3D tele-immersion, combined skeleton, point cloud combination, 3D model},
location = {Amsterdam, Netherlands},
series = {MMSys '18}
}"
        />
        <Publication
          pubLink="https://dl.acm.org/doi/abs/10.1145/3204949.3204969"
          title="Skeleton-based continuous extrinsic calibration of multiple RGB-D kinect cameras"
          authors="Desai, Kevin, Balakrishnan Prabhakaran, and Suraj Raghuraman"
          venue="9th ACM Multimedia Systems Conference 2018"
          acceptanceRate="26"
          h5Index="h5Index: 34 (65)"
          pubImage="/publicationImages/Publication19.png"
          bibtex="@inproceedings{10.1145/3204949.3204969,
author = {Desai, Kevin and Prabhakaran, Balakrishnan and Raghuraman, Suraj},
title = {Skeleton-Based Continuous Extrinsic Calibration of Multiple RGB-D Kinect Cameras},
year = {2018},
isbn = {9781450351928},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3204949.3204969},
doi = {10.1145/3204949.3204969},
abstract = {Applications involving 3D scanning and reconstruction \& 3D Tele-immersion provide an immersive experience by capturing a scene using multiple RGB-D cameras, such as Kinect. Prior knowledge of intrinsic calibration of each of the cameras, and extrinsic calibration between cameras, is essential to reconstruct the captured data. The intrinsic calibration for a given camera rarely ever changes, so only needs to be estimated once. However, the extrinsic calibration between cameras can change, even with a small nudge to the camera. Calibration accuracy depends on sensor noise, features used, sampling method, etc., resulting in the need for iterative calibration to achieve good calibration.In this paper, we introduce a skeleton based approach to calibrate multiple RGB-D Kinect cameras in a closed setup, automatically without any intervention, within a few seconds. The method uses only the person present in the scene to calibrate, removing the need for manually inserting, detecting and extracting other objects like plane, checker-board, sphere, etc. 3D joints of the extracted skeleton are used as correspondence points between cameras, after undergoing accuracy and orientation checks. Temporal, spatial, and motion constraints are applied during the point selection strategy. Our calibration error checking is inexpensive in terms of computational cost and time and hence is continuously run in the background. Automatic re-calibration of the cameras can be performed when the calibration error goes beyond a threshold due to any possible camera movement. Evaluations show that the method can provide fast, accurate and continuous calibration, as long as a human is moving around in the captured scene.},
booktitle = {Proceedings of the 9th ACM Multimedia Systems Conference},
pages = {250–257},
numpages = {8},
keywords = {3D skeleton \& point-cloud, real-time, 3D calibration, interactive 3D tele-immersion},
location = {Amsterdam, Netherlands},
series = {MMSys '18}
}"
        />
        <Publication
          pubLink="https://ieeexplore.ieee.org/abstract/document/8241591"
          title="QoE studies on interactive 3D tele-immersion"
          authors="Desai, Kevin, Rong Jin, and Balakrishnan Prabhakaran"
          venue="2017 IEEE international symposium on multimedia (ISM) 2017"
          acceptanceRate="23.02"
          h5Index="h5Index: 18 (26)"
          pubImage="/publicationImages/Publication20.png"
          bibtex="@INPROCEEDINGS{8241591,
  author={Desai, Kevin and Raghuraman, Suraj and Jin, Rong and Prabhakaran, Balakrishnan},
  booktitle={2017 IEEE International Symposium on Multimedia (ISM)}, 
  title={QoE Studies on Interactive 3D Tele-Immersion}, 
  year={2017},
  volume={},
  number={},
  pages={130-137},
  doi={10.1109/ISM.2017.27}}
"
        />
        <Publication
          pdfLink="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8019470"
          pubLink="https://ieeexplore.ieee.org/abstract/document/8019470"
          title="Learning-based objective evaluation of 3D human open meshes"
          authors="Desai, Kevin, Kanchan Bahirat, and Balakrishnan Prabhakaran"
          venue="2017 IEEE International Conference on Multimedia and Expo (ICME) 2017"
          h5Index="h5Index: 35 (57)"
          pubImage="/publicationImages/Publication21.png"
          bibtex="@INPROCEEDINGS{8019470,
  author={Desai, Kevin and Bahirat, Kanchan and Prabhakaran, Balakrishnan},
  booktitle={2017 IEEE International Conference on Multimedia and Expo (ICME)}, 
  title={Learning-based objective evaluation of 3D human open meshes}, 
  year={2017},
  volume={},
  number={},
  pages={733-738},
  doi={10.1109/ICME.2017.8019470}}

"
        />
        <Publication
          pdfLink="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7966775"
          pubLink="https://ieeexplore.ieee.org/abstract/document/7966775"
          title="Experiences with multi-modal collaborative virtual laboratory (mmcvl)"
          authors="Desai, Kevin, Uriel Haile Hernndez Belmonte, Rong Jin, Balakrishnan Prabhakaran, Paul Diehl, Victor Ayala Ramirez, Vinu Johnson, and Murry Gans"
          venue="2017 IEEE Third International Conference on Multimedia Big Data (BigMM) 2017"
          acceptanceRate="23.9"
          h5Index="h5Index: 19 (29)"
          pubImage="/publicationImages/Publication22.png"
          bibtex="@INPROCEEDINGS{7966775,
  author={Desai, Kevin and Belmonte, Uriel Haile Hernndez and Jin, Rong and Prabhakaran, Balakrishnan and Diehl, Paul and Ramirez, Victor Ayala and Johnson, Vinu and Gans, Murry},
  booktitle={2017 IEEE Third International Conference on Multimedia Big Data (BigMM)}, 
  title={Experiences with Multi-modal Collaborative Virtual Laboratory (MMCVL)}, 
  year={2017},
  volume={},
  number={},
  pages={376-383},
  doi={10.1109/BigMM.2017.62}}
"
        />
        <Publication
          pubLink="https://dl.acm.org/doi/abs/10.1145/2910017.2910612"
          title="Augmented reality-based exergames for rehabilitation"
          authors="Desai, Kevin, Kanchan Bahirat, Sudhir Ramalingam, Balakrishnan Prabhakaran, Thiru Annaswamy, and Una E. Makris"
          venue="7th International Conference on Multimedia Systems 2016"
          acceptanceRate="28"
          h5Index="h5Index: 34 (65)"
          bibtex="@inproceedings{10.1145/2910017.2910612,
author = {Desai, Kevin and Bahirat, Kanchan and Ramalingam, Sudhir and Prabhakaran, Balakrishnan and Annaswamy, Thiru and Makris, Una E.},
title = {Augmented Reality-Based Exergames for Rehabilitation},
year = {2016},
isbn = {9781450342971},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/2910017.2910612},
doi = {10.1145/2910017.2910612},
abstract = {Rehabilitation for stroke afflicted patients, through exercises tailored for individual needs, aims at relearning basic motor skills, especially in the extremities. Rehabilitation through Augmented Reality (AR) based games engage and motivate patients to perform exercises which, otherwise, maybe boring and monotonic. Also, mirror therapy allows users to observe one's own movements in the game providing them with good visual feedback. This paper presents an augmented reality based system for rehabilitation by playing four interactive, cognitive and fun Exergames (exercise and gaming).The system uses low-cost RGB-D cameras such as Microsoft Kinect V2 to capture and generate 3D model of the person by extracting him/her from the entire captured data and immersing it in different interactive virtual environments. Animation based limb movement enhancement along with cognitive aspects incorporated in the game can help in positive reinforcement, progressive challenges and motion improvement. Recording module of the toolkit allows future reference and facilitates feedback from the physician. 10 able-bodied users, 2 psychological experts and 2 Physical Medicine and Rehabilitation physicians evaluated the user experience and usability aspects of the exergames. Results obtained shows the games to be fun and realistic, and at the same time engaging and motivating for performing exercises.},
booktitle = {Proceedings of the 7th International Conference on Multimedia Systems},
articleno = {22},
numpages = {10},
location = {Klagenfurt, Austria},
series = {MMSys '16}
}"
        />
        <Publication
          pdfLink="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7442307"
          pubLink="https://ieeexplore.ieee.org/abstract/document/7442307"
          title="Network adaptive textured mesh generation for collaborative 3d tele-immersion"
          authors="Desai, Kevin, Kanchan Bahirat, Suraj Raghuraman, and Balakrishnan Prabhakaran"
          venue="2015 IEEE International Symposium on Multimedia (ISM) 2015"
          acceptanceRate="25.5"
          h5Index="h5Index: 18 (26)"
          pubImage="/publicationImages/Publication24.png"
          bibtex="@INPROCEEDINGS{7442307,
  author={Desai, Kevin and Bahirat, Kanchan and Raghuraman, Suraj and Prabhakaran, Balakrishnan},
  booktitle={2015 IEEE International Symposium on Multimedia (ISM)}, 
  title={Network Adaptive Textured Mesh Generation for Collaborative 3D Tele-Immersion}, 
  year={2015},
  volume={},
  number={},
  pages={107-112},
  doi={10.1109/ISM.2015.111}}
"
        />
      </div>
      <Footer />

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
      <script src="js/scripts.js"></script>
    </>
  );
}
