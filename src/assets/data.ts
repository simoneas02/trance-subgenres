import fullon from './imgs/goa-fullon.jpeg'
import prog from './imgs/progresive-psy.jpeg'
import dark from './imgs/dark-psy.jpeg'

const infos = [
  {
    id: 'figure-01',
    title: 'Full-on',
    src: fullon,
    alt: 'Psychedelic picture',
    subTitle: 'Morning Fullon, Israeli Full-on',
    bpm: {
      min: 140,
      max: 148,
    },
    content:
      'Full-on is a dynamic, playful, and musical subgenre of Psytrance that appeals to a broader audience because of its positive vibe. Unlike of a typical straight Psytrance bassline pattern, the Full-on basssline plays on various notes across few octaves, creating a special rhythm and melody that way. The period of 2004–2009 is considered as the “golden age” of Full-on, before Progressive Psy took over the global Psy scene.',
    artists: [
      'Astrix',
      'Bizzare Contact',
      'Electro Sun',
      'Ephedrix',
      'DigiCult',
      'System Nipel',
      'Sesto Sento',
      'Wizzy Noise',
    ],
  },
  {
    id: 'figure-02',
    title: 'Progressive Psy',
    src: prog,
    alt: 'Psychedelic picture',
    subTitle: 'Psy-Prog, Progressive',
    bpm: {
      min: 134,
      max: 138,
    },
    content:
      'Emerging in the mid 00’s in Europe, Progressive Psy has quickly expanded to become one of the most common Psytrance subgenre. And it’s very diverse too, featuring a quite wide range of vibes. Progressive Psy doesn’t utilise one particular type of sound, but rather focuses on the groove, the flow, and how it progresses over time.',
    artists: [
      'Ace Ventura',
      'Atacama',
      'Human Blue',
      'Liquid Soul',
      'Mindwave',
      'Protonica',
      'Vibrasphere',
      'Zyce',
    ],
  },
  {
    id: 'figure-03',
    title: 'Dark Psy',
    src: dark,
    alt: 'Psychedelic picture',
    subTitle: 'Cyberdelic, Alien Psy',
    bpm: {
      min: 140,
      max: 155,
    },
    content:
      'Dark Psy name speaks for itself. This subgenre is dark, cold, and themed with a horror special effects. Sometimes it’s called Cyberdelic, which stands for “cybernetic + psychedelic”, due to a massive amount of artificial sounds, lasers, and other alien sounds. Many Dark Psy producers are hailing from Russia, so you might see this genre referred as a Russian style.',
    artists: [
      'Fungus Funk',
      'Goa Gil',
      'Kindzadza',
      'Ocelot',
      'Penta',
      'Savage Scream',
      'Zik Matutero',
    ],
  },
]

export default infos
