const project_name = `Open-Source Hardware in the Era of Robot Learning`
const proj_small_caps = `<span class="small-caps"></span>`
const conference_details = ['CoRL 2025', 'https://www.corl.org/', 'Seoul, Korea', 'assets/images/corl_logo_2025.png', 'https://www.beta-cae.com/events/c9pdf/science%20congress%20center-floor-plans.pdf']
const workshop_date = `9:30 - 16:30 KST, September 27, 2025`

const talk_speaker_details = {
  'klu': ['C. Karen Liu', './assets/images/talks/karen.jpg', 'Professor', 'Stanford University, USA', 'https://profiles.stanford.edu/c-karen-liu', 
    'Why We Built Our Own Humanoid — And What We Learned Along the Way',
    'This talk shares the journey of creating Stanford ToddlerBot, a low-cost, open-source humanoid robot built from scratch for both policy execution and embodied data collection. Standing 0.56 m tall and weighing just 3.4 kg, Stanford ToddlerBot combines plug-and-play calibration, high-fidelity digital twins, and zero-shot sim-to-real transfer with a user-friendly teleoperation interface. Fully 3D-printed and built from off-the-shelf parts for under $6,000, it is reproducible by teams with basic technical skills. I will showcase its capabilities in loco-manipulation, endurance, and collaborative tasks, and discuss how its design advances reproducible, ML-ready humanoid research.', "C. Karen Liu is a professor in the Computer Science Department at Stanford University. Liu's research interests are in computer graphics and robotics, including physics-based animation, robot learning, and computational biomechanics. She developed computational approaches to modeling realistic and natural human movements, learning complex control policies for humanoids and assistive robots, and advancing fundamental numerical simulation and optimal control algorithms. The algorithms and software developed in her lab have fostered interdisciplinary collaboration with researchers in robotics, computer graphics, mechanical engineering, biomechanics, neuroscience, and biology. Liu received a National Science Foundation CAREER Award, an Alfred P. Sloan Fellowship, and was named Young Innovators Under 35 by Technology Review. Liu also received the ACM SIGGRAPH Significant New Researcher Award for her contribution in the field of computer graphics. In 2021, Liu was inducted to ACM SIGGRAPH Academy."],
  'gpt': ['Grégoire Passault', './assets/images/talks/gregoire.jpg', 'Associate Professor', 'University of Bordeaux, France', 'https://fr.linkedin.com/in/gr%C3%A9goire-passault-b14024140', 
    'SigmaBan: An Open Hardware Kid-Size Humanoid for Competitive Soccer', 
    "Autonomous humanoid robots playing soccer present a captivating and multi-faceted challenge, as exemplified by the RoboCup international competition. Since 2013, the Rhoban team has fielded the fully custom, open hardware SigmaBan robot in the kid-size league, garnering five championship titles. This presentation explores the evolution of SigmaBan from initial prototyping to international victories. It will highlight our integration of machine learning for perception, strategy, and motor control, detail practical workflows and tools built by the team, and share lessons learned about collaborative open development in both research and competition.",
      "Grégoire Passault is Associate Professor at Bordeaux University (LaBRI, IUT) and the leader of the Rhoban research team. He holds a Ph.D. in legged robot locomotion and is a principal architect of the SigmaBan humanoid robot, which has powered the Rhoban team to five RoboCup KidSize championships since 2013. His work blends mechatronic prototyping, open hardware/software development, and advanced robot learning, with a special focus on agile locomotion and robust autonomy for soccer-playing robots. Grégoire also designs low-cost educational robots and is committed to democratizing robotics research through open-source/hardware."],
  'toa': ['Tetsuya Ogata', './assets/images/talks/ogata.jpg', 'Professor', 'Waseda University, Japan', 'https://ogata-lab.jp/member/ogata.html', 
    'Open-Source Dual-Arm Robot', 
    '', ""],
  'bcn': ['Boyuan Chen', './assets/images/talks/boyuan.jpg', 'Assistant Professor', 'Duke University, USA', 'https://mems.duke.edu/people/boyuan-chen/', 
    'Open-Source Humanoid: Duke Humanoid',
		'', ""],
  'kka': ['Kento Kawaharazuka', './assets/images/organizers/kawaharazuka.png', 'Lecturer', 'The University of Tokyo, Japan', 'https://haraduka.github.io', 
    'Open-Source Quadruped Robot MEVIUS / Bipedal Robot MEVITA',
    '', ""],

  'arn': ['Antonin Raffin', './assets/images/talks/antonin.jpg', 'Research Engineer', 'DLR, Germany', 'https://araffin.github.io/', 
    'Designing (Robot) Software That Is Easy to Use', 
    'Hardware without software is like an instrument without a musician. Based on my experience maintaining the Stable-Baselines3 library and working with real robots, I will present key principles for creating easy-to-use interfaces.',
    "Antonin Raffin is a research engineer at the German Aerospace Center (DLR) who specializes in reinforcement learning (RL). He is the lead developer of Stable-Baselines3 (SB3), an open-source library that implements Deep RL algorithms. His main focus is on learning controllers directly on real robots and improving the reproducibility of RL."],
  'yna': ['Yuki Nakagawa', './assets/images/talks/nakagawa.jpg', 'CEO', 'RT Corporation, Japan', 'https://jp.linkedin.com/in/yuki-nakagawa-958b0b99', 
    'Toward Safe Coexistence: Risk Assessment and Safety Design of Open Source Hardware', 
    `Open-source hardware is increasingly becoming a shared foundation for research and industry, yet it entails physical risks absent in software, such as insufficient strength, heat generation, and accidents caused by moving parts. This keynote focuses on risk assessment and safety design as essential components of open hardware development. First, it examines methods for disclosing assessments of such hazards. Second, it highlights the importance of safety standardization and reproducibility in academic research. Third, it addresses issues of standards, responsibility, and practical implementation as a bridge to industry. By embedding safety design into the core of open-source hardware, the research community can contribute to building a societal infrastructure capable of safe coexistence with humans.`, 'Yuki Nakagawa is the CEO, President, and Founder of RT Corporation, a robotics company in Tokyo, Japan since 2005. She received her B.E. in Measurement and Control in 1993 and her M.S. in System Engineering in 1995 from Hosei University. From 1995 to 1998, she was an Assistant Professor at the Tokyo Institute of Technology and later a researcher at the JST ERATO Kitano Symbiotic Systems Project. In 2015, she was named one of the “25 Women in Robotics You Need to Know” by RoboHub. She has served as Director of Open Source Robotics Foundation, the New Technology Foundation, ROSConJP, and a member of the IEEE RAS Industrial Advisory Group. RT develops humanoid and legged robots and provides AI robotics education and industrial solutions.'],
  'ksw': ['Kenneth Shaw', './assets/images/talks/kenneth.jpg', 'PhD student', 'Carnegie Mellon University, USA', 'https://kennyshaw.net/', 
    'Designing and Teaching Low-Cost Dexterous Robot Hands',
		"Think about typing on a keyboard, using chopsticks, or hammering a nail—our hands allow us to interact with the world with remarkable precision and adaptability. In contrast, robotic manipulation is still largely limited to basic grippers and suction cups that lack this level of dexterity. A key reason is that truly dexterous robot hands are notoriously difficult to build and control.\n\nIn this talk, I’ll share our work on democratizing access to dexterity through robot hands such as our LEAP Hands—low-cost, highly capable hardware and software packages designed for research and education. I’ll also discuss how we use large-scale human motion data from the internet and modern simulation techniques to enable our robot hands to learn complex, human-like behavior.",
		"Kenneth Shaw is a Ph.D. student in the Robotics Institute at Carnegie Mellon University. He earned his Bachelor's degree in Electrical and Computer Engineering from Georgia Tech and is a recipient of the NSF Graduate Research Fellowship.<br> His research centers on dexterous manipulation, spanning both hardware development and learning algorithms. He has designed and built several low-cost, highly dexterous robotic hands aimed at making manipulation research and education more accessible. On the AI side, he develops highly dexterous control policies by leveraging human demonstrations from internet videos, teleoperation, and simulation.<br> His work has been recognized as a Best Oral Paper Award Finalist at IEEE Humanoids 2023, on the cover of the IJRR RSS special issue, and as a Best Paper Award Finalist at the Scaling Robot Learning Workshop.  For further details, visit: <a href=https://www.kennyshaw.net>https://www.kennyshaw.net<a/>"],
  'qlo': ['Qiayuan Liao', './assets/images/talks/qiayuan.jpg', 'PhD student', 'UC Berkley, USA', 'https://qiayuanl.github.io/', 
    'Berkeley Humanoid', 
    '', ""],
  'ape': ['Antoine Pirrone', './assets/images/talks/p-antoine.jpg', 'R&D Engineer', 'pollen Robotics & HuggingFace, France', 'https://scholar.google.com/citations?user=NtOzYVMAAAAJ&hl=en', 
    'Reachy 2, Open Duck Mini, SO-101', 
    '', ""],
  "scn": ['Stéphane Caron', 'assets/images/organizers/stephane.jpg', 'Research scientist', 'Inria, Paris, France', 'https://scaron.info/',
		"Overview of Open-Source Hardware for Robot Learning",
		"", ""],
  "tfs": ['Thomas Flayols', 'assets/images/talks/thomas.jpg', 'Research Engineer', 'LAAS-CNRS , France', 'https://www.laas.fr/en/annuaire/299',
		"Open Dynamic Robot Initiative",
		"", ""],
  // 'tbd': ['TBD', '', '', '', '', 
  //   '', 
  //   ''],

}

const organizers_talk_details = {
  'kka': ['Kento Kawaharazuka', './assets/images/organizers/kento.jpg', 'Lecturer', 'The University of Tokyo, Japan', 'https://haraduka.github.io', 
    'Open-Source Quadruped Robot MEVIUS / Bipedal Robot MEVITA',
    '', ""],
  "scn": ['Stéphane Caron', 'assets/images/organizers/stephane.jpg', 'Research scientist', 'Inria, Paris, France', 'https://scaron.info/',
	"Overview of Open-Source Hardware for Robot Learning",
	"", ""],
}

const organizers_details = [
  ['Kento Kawaharazuka', 'assets/images/organizers/kawaharazuka.png', 'Lecturer', 'The University of Tokyo, Japan', 'https://haraduka.github.io'],
  ['Stéphane Caron', 'assets/images/organizers/stephane.jpg', 'Research scientist', 'Inria, France', 'https://scaron.info/'],
  ['Keita Yoneda', 'assets/images/organizers/yoneda.jpg', 'PhD Student', 'The University of Tokyo, Japan', 'https://keitayoneda.github.io/'],
]

const accepted_presentations = [
]

const org_affiliation_logos = [
]

// event-alias, time slot, event name, person alias from talk_speaker_details, ppt mode
// last two are for inv-talk event-alias entries
const schedule = [
  ['welcome', '9:30 - 9:40', 'Welcome Talk'],
  ['inv-talk', '9:40 - 10:00', 'Invited Talk', 'klu', 'in-person'],
  ['inv-talk', '10:00 - 10:20', 'Invited Talk', 'qlo', 'in-person'],
  ['inv-talk', '10:20 - 10:40', 'Invited Talk', 'toa', 'in-person'],
  ['coffee-break', '10:40 - 11:10', 'Poster/Demo Session (1) and Coffee Break'],
  ['inv-talk', '11:10 - 11:30', 'Invited Talk', 'ape', 'in-person'],
  ['inv-talk', '11:30 - 11:50', 'Invited Talk', 'bcn', 'in-person'],
  ['org-talk', '11:50 - 12:10', 'Organizer Talk', 'kka', 'in-person'],
  ['inv-talk', '12:10 - 12:30', 'Invited Talk', 'tfs', 'in-person'],
  ['lunch-break', '12:30 - 13:30', 'Lunch Break', '', ''],
  ['inv-talk', '13:30 - 13:50', 'Invited Talk', 'ksw', 'in-person'],
  ['inv-talk', '13:50 - 14:10', 'Invited Talk', 'gpt', 'in-person'],
  ['inv-talk', '14:10 - 14:30', 'Invited Talk', 'yna', 'in-person'],
  ['coffee-break', '14:30 - 15:00', 'Poster/Demo Session (2) and Coffee Break'],
  ['inv-talk', '15:00 - 15:20', 'Invited Talk', 'arn', 'in-person'],
  ['org-talk', '15:20 - 15:40', 'Organizer Talk', 'scn', 'in-person'],
  ['disc', '15:40 - 16:20', 'Panel Discussions'],
  ['award', '16:20 - 16:30', 'Award & Closing Remarks'],
]
