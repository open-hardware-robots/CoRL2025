const project_name = `Open-Source Hardware in the Era of Robot Learning`
const proj_small_caps = `<span class="small-caps"></span>`
const conference_details = ['CoRL 2025', 'https://www.corl.org/', 'Seoul, Korea', 'assets/images/corl_logo_2025.png', 'https://www.beta-cae.com/events/c9pdf/science%20congress%20center-floor-plans.pdf']
const workshop_date = `9:30 - 16:30 KST, Septembar 27, 2025`

const talk_speaker_details = {
  'klu': ['C. Karen Liu', './assets/images/talks/karen.jpg', 'Professor', 'Stanford University, USA', 'https://profiles.stanford.edu/c-karen-liu', 
    'Open-Source Humanoid Platform: ToddlerBot',
    ''],
  'gpt': ['Grégoire Passault', './assets/images/talks/gregoire.jpg', 'Associate Professor', 'University of Bordeaux, France', 'https://fr.linkedin.com/in/gr%C3%A9goire-passault-b14024140', 
    'Open-Source Humanoid: SigmaBan', 
    ''],
  'toa': ['Tetusya Ogata', './assets/images/talks/ogata.jpg', 'Professor', 'Waseda University, Japan', 'https://ogata-lab.jp/member/ogata.html', 
    'Open-Source Dual-Arm Robot', 
    ''],
  'bcn': ['Boyuan Chen', './assets/images/talks/boyuan.jpg', 'Assistant Professor', 'Duke University, USA', 'https://mems.duke.edu/people/boyuan-chen/', 
    'Open-Source Humanoid: Duke Humanoid',
		''],
  'kka': ['Kento Kawaharazuka', './assets/images/organizers/kawaharazuka.png', 'Lecturer', 'The University of Tokyo, Japan', 'https://haraduka.github.io', 
    'Open-Source Quadruped Robot MEVIUS / Bipedal Robot MEVITA',
    ''],

  'arn': ['Antonin Raffin', './assets/images/talks/antonin.jpg', 'Research Engineer', 'DLR, Germany', 'https://araffin.github.io/', 
    'Open-Source Quadruped: BERT', 
    ''],
  'yna': ['Yuki Nakagawa', './assets/images/talks/nakagawa.jpg', 'CEO', 'RT Corporation, Japan', 'https://jp.linkedin.com/in/yuki-nakagawa-958b0b99', 
    'Open-Source in Industry', 
    ''],
  'ksw': ['Kenneth Shaw', './assets/images/talks/kenneth.jpg', 'PhD student', 'Carnegie Mellon University, USA', 'https://kennyshaw.net/', 
    'Open-Source LEAP Hand', 
		''],
  'qlo': ['Qiayuan Liao', './assets/images/talks/qiayuan.jpg', 'PhD student', 'UC Berkley, USA', 'https://qiayuanl.github.io/', 
    'Barkeley Humanoid', 
    ''],
  'ape': ['Antoine Pirrone', './assets/images/talks/p-antoine.jpg', 'R&D Engineer', 'pollen Robotics & HuggingFace, France', 'https://scholar.google.com/citations?user=NtOzYVMAAAAJ&hl=en', 
    'Reachy 2, Open Duck Mini, SO-101', 
    ''],
  "scn": ['Stéphane Caron', 'assets/images/organizers/stephane.jpg', 'Research scientist', 'Inria, Paris, France', 'https://scaron.info/',
		"Overview of Open-Source Hardware for Robot Learning",
		""],
  // 'tbd': ['TBD', '', '', '', '', 
  //   '', 
  //   ''],

}

const organizers_talk_details = {
  'kka': ['Kento Kawaharazuka', './assets/images/organizers/kento.jpg', 'Lecturer', 'The University of Tokyo, Japan', 'https://haraduka.github.io', 
    'Open-Source Quadruped Robot MEVIUS / Bipedal Robot MEVITA',
    ''],
  "scn": ['Stéphane Caron', 'assets/images/organizers/stephane.jpg', 'Research scientist', 'Inria, Paris, France', 'https://scaron.info/',
	"Overview of Open-Source Hardware for Robot Learning",
	""],
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
  ['inv-talk', '10:00 - 10:20', 'Invited Talk', 'gpt', 'in-person'],
  ['inv-talk', '10:20 - 10:40', 'Invited Talk', 'toa', 'in-person'],
  ['coffee-break', '10:40 - 11:10', 'Poster/Demo Session (1) and Coffee Break'],
  ['inv-talk', '11:10 - 11:30', 'Invited Talk', 'bcn', 'in-person'],
  ['inv-talk', '11:30 - 11:50', 'Invited Talk (online)', 'arn', 'in-person'],
  ['org-talk', '11:50 - 12:10', 'Organizer Talk', 'kka', 'in-person'],
  ['lightning-talk', '12:10 - 12:30', 'Lightning Talk', '', ''],
  ['lunch-break', '12:30 - 13:30', 'Lunch Break', '', ''],
  ['inv-talk', '13:30 - 13:50', 'Invited Talk', 'ksw', 'in-person'],
  ['inv-talk', '13:50 - 14:10', 'Invited Talk (online)', 'qlo', 'in-person'],
  ['inv-talk', '14:10 - 14:30', 'Invited Talk', 'yna', 'in-person'],
  ['coffee-break', '14:30 - 15:00', 'Poster/Demo Session (2) and Coffee Break'],
  ['inv-talk', '15:00 - 15:20', 'Invited Talk', 'ape', 'in-person'],
  ['org-talk', '15:20 - 15:40', 'Organizer Talk', 'scn', 'in-person'],
  ['disc', '15:40 - 16:20', 'Panel Discussions'],
  ['award', '16:20 - 16:30', 'Award & Closing Remarks'],
]
