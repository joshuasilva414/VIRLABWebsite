import React from "react";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Project from "../components/project-card";
import Footer from "../components/page-footer";
import Head from "next/head";
import Link from "next/link";

export default function Projects() {
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
                <Link class="nav-link active" href="/projects">
                  Projects
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " href="/publications">
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

      <div class="container" style={{ height: "" }}>
        <h1 style={{ marginTop: "25px", marginBottom: "25px" }}>
          Current Projects
        </h1>
        {/*  title, projectLink, agency, amount, investigators, abstract */}
        <Project
          title="HCC: Small: Making Virtual Reality Safe"
          projectLink="https://sites.google.com/site/kevinpdesai/videos?authuser=0#h.3zmrtt8ubtsi"
          agency="NSF - (CISE) Core Programs"
          amount="$600,000"
          investigators="John Quarles, Kevin Desai"
          abstract="Although consumer-level virtual reality head-mounted displays have become affordable enough for a broad user base to purchase, there are still serious concerns about safety. Head-mounted displays block out the surrounding real world, which can hide obstacles, such as tables, pets, walls, or other potential collision hazards. Current approaches to avoiding collisions depend on the user to define play area boundaries; this process is subject to user error and thus can lead to injury. Moreover, current approaches are ineffective for games that require fast motions, as the systems may not react in time to prevent injury. To address these problems, the investigators will create camera-based methods for detecting potential collisions in real time and evaluate feedback techniques to reduce the incidence of injury when using virtual reality headsets. This approach has the potential to make the use of virtual reality much safer in real-world environments.

The objective of this project is to create and evaluate reconstruction, segmentation, and motion-prediction techniques to inform obstacle avoidance feedback and reduce the incidence of injury to people using virtual reality head mounted displays. Providing feedback tailored to the specific locations of the user's body that are in proximity to real obstacles will, ideally, reduce user collisions with real-world objects compared to prior approaches. Specifically, the team will 1) determine the best approaches to real obstacle detection and segmentation, 2) investigate the efficacy of full body motion prediction approaches, 3) ascertain the optimal modality and locations of real obstacle alerts to maximize presence while minimizing collisions, and 4) evaluate the longitudinal impact of real obstacle alert systems in virtual reality systems. Ultimately, this research will result in human motion datasets that can be used for future motion prediction in virtual reality research, as well as open-source plugins that will make current virtual reality experiences safer by reducing injuries.
"
        />
        <Project
          title="Collaborative Research: HCC: Medium: HCI in Motion -- Using EEG, Eye Tracking, and Body Sensing for Attention-Aware Mobile Mixed Reality"
          projectLink="https://sites.google.com/site/kevinpdesai/videos?authuser=0#h.4h9c33o8k0gz"
          agency="NSF - (CISE) Core Programs"
          amount="$457,105"
          investigators=" John Quarles, Kevin Desai"
          abstract=" Mobile, wireless, headsets for virtual and augmented reality, such as the Meta Quest 2 and Microsoft HoloLens-2, are becoming more widely used in many applications beyond video games, such as training, construction, and medicine. However, wearing these head-worn goggles while walking can make some people feel sick or distracted, which has even led to injury in some cases. This effect is similar to texting while walking, but potentially worse because a person's entire periphery can be filled with distracting media elements. While previous research has investigated these issues when users are standing still or seated, it is unclear how problems unfold and how they can be prevented while users are in motion. Specifically, this project will investigate how and why virtual and augmented reality headsets affect attention and feelings of sickness. First, this work will record data, such as heart rate, brain waves, and the direction users are turning their eyes to, while they are wearing virtual and augmented reality headsets and walking. Secondly, this project will develop ways to reduce sickness and distraction while walking with virtual and augmented reality headsets. This work will improve the safety of mobile virtual and augmented reality headsets, products that virtually all big technology companies today heavily invest in as possible companions or replacements to smartphones. This project will be introduced in courses and research mentorship projects at The University of Texas at San Antonio and the University of California at Santa Barbara, to advance research training of both undergraduate and graduate students. Considering that both universities and research teams have a history of supporting many underrepresented minority students, it is expected that the educational value of this project will be high, especially in terms of recruiting and mentoring women and underrepresented minority students. There is an increasing prevalence of mobile, immersive interfaces (e.g., mobile Virtual Reality(VR) / Augmented Reality (AR)) that may affect users' cognitive capacities and situational awareness, potentially leading to physical harm (e.g., impaired task performance, tripping over physical obstacles in VR, unsafe street crossings while seeing advertisements in AR). The landscape of human-computer interaction has expanded from fairly well standardized stationary office configurations to more varied mobile and immersive settings involving active body movements (mobile and situated computing, AR, mobile VR) and simulated first-person perspective changes and motion experiences (immersive computing). To make matters worse, compared to more standardized platforms such as desktop and laptop UIs, tablet and smartphone interfaces, individual differences among users have a much bigger usability impact in context-driven surround-focus usage scenarios found in mobile AR/VR. For example, motion sickness (i.e., cybersickness) in VR is known to inflict symptoms of widely varying severity, depending on the individual user. One serious consequence is that interaction designers have difficulties providing engaging general experiences that are universally usable by a wide variety of users. Despite the increasing prevalence of immersive technologies and their pitfalls, the precise cognitive and physiological mechanisms at play when 'computing in motion' are not well understood. This work is aimed at filling this knowledge gap. The specific objectives are: 1) to assess the cognitive effects of interacting with mobile AR/VR while users are walking, 2) to provide automated tools to effectively reduce the cognitive demand of mobile AR/VR, and 3) to make mobile AR/VR safer and more usable. Based on preliminary data, the central hypothesis is that through multi-modal sensing combined with machine learning approaches, mobile AR/VR applications can learn the characteristics of user behavior and provide real time adaptations that will reduce user error, increase ease of use, improve task performance, and reduce the impact of physical hazards. This work will improve the safety of mobile AR and mobile VR, paradigms that virtually all big technology companies today heavily invest in as a possible follow-up paradigm to the smartphone platform. Educational impact will occur through incorporation of research outcomes into undergraduate and graduate courses offered at The University of Texas at San Antonio and the University of California at Santa Barbara, and research training and mentorship opportunities for both undergraduate and graduate students. The courses include Machine Learning, Deep Learning for Visual Computing, Human-Computer Interaction, and Mobile Application Programming. Because our project integrates a topic of high social impact with cutting edge machine learning and human-computer interaction research along with proven successful mentorship strategies, the educational impacts of the project will be high, especially in terms of recruiting and mentoring women and underrepresented minority students."
        />
        <Project
          title="CRII: HCC: 3D Hand & Full-Body Pose Estimation in Telehealth for Children with Autism"
          projectLink="https://sites.google.com/site/kevinpdesai/videos?authuser=0#h.onhfbhcn652v"
          agency=" NSF - (CISE) Research Initiation Initiative (CRII) 2021"
          amount="$174,368"
          investigators=" Kevin Desai"
          abstract="This award is funded in whole or in part under the American Rescue Plan Act of 2021 (Public Law 117-2).

The overall objective of this project is to provide efficient full-body interaction in virtual reality systems that do not use head-mounted displays. This project aims to create accurate and real-time 3D hand and body pose estimation, in the highly significant application area of children with autism. A novel synthetic hand data generation framework will generate 3D hand poses with increased diversity in terms of hand distance from camera, hand size, camera viewpoint, occlusion, background, and skin color. The outcome will be a novel 3D synthetic hand dataset consisting of realistic and kinematically accurate hand models with articulated poses that will advance current and future research endeavors in 3D hand pose estimation research. The project will advance the state-of-the-art in 3D body pose estimation for humans present further away from the camera at room-scale distances. The synthetic dataset, algorithms, and programming libraries will be made publicly available for wide-spread adoption, thereby advancing pose estimation research.

This research will have broad societal impact because it will improve the usability and interaction in human centered telehealth applications, initially helping with the applied behavior analysis for children with autism. Existing systems that employ head-mounted displays or wearable sensors for tracking the user's hand and body movements are not suitable for children with autism, and have disadvantages in many other application areas. Therefore, by enabling 3D hand and full-body pose estimation, this project will advance a plethora of 3D immersive applications such as education, virtual STEM laboratories, tele-rehabilitation, tele-operation, military training, entertainment, and communication. The need for real-time, remote and interactive human motion sensing exists now more than ever, considering the increase in virtual activities because of the recent pandemic.

"
        />
        <Project
          title="Electronic Health Record Big Data and Radiomic Analytics for Precision Medicine Approach to Long-COVID"
          projectLink="https://sites.google.com/site/kevinpdesai/videos?authuser=0#h.bh9akixzt6qw"
          agency="San Antonio Partnership for Precision Therapeutics (SAPPT)"
          amount="$50,000"
          investigators="Dhireesha Kudithipudi, Kevin Desai, Anandi Dutta"
        />
        <h1 style={{ marginTop: "25px", marginBottom: "25px" }}>
          Past Projects
        </h1>
        <Project
          title="A step towards smart and connected health in behavior analysis"
          projectLink="https://sites.google.com/site/kevinpdesai/videos?authuser=0#h.3lfxrm7dn31j"
          agency="UTSA VPR Office - GREAT 2021"
          amount="$20,000"
          investigators="Leslie Neely, Peyman Najafirad, Qian Chen, Kevin Desai"
        />
        <Project
          title="Project Lovelace 2.0: Advancing Women in AI Career Pathways"
          projectLink="https://sites.google.com/site/kevinpdesai/videos?authuser=0#h.y2zy4iq0v37d"
          agency="Xilinx Inc. WIT University Grants 2021"
          amount="$30,000"
          investigators="Dhireesha Kudithipudi, Amina Qutub, Kevin Desai"
        />
      </div>

      <Footer />

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
      <script src="js/scripts.js"></script>
    </>
  );
}
