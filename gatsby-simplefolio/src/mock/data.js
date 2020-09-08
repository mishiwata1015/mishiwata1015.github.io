import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Masanori Ishiwata | Web Developer',
  lang: 'jp',
  description: "My name is Masanori Ishiwata(@mishiwata1015). I'm the Web Developer.",
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Masanori Ishiwata(@mishiwata1015)',
  subtitle: "I'm the Web Developer.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    'Ruby, Rails, Reactを主に書いているWebエンジニアです。インフラもちょこっと触ります。',
  paragraphTwo: '5年ほどSESでを経験した後。自社サービス開発に携わりたいと思いWeb系へ転職しました。',
  paragraphThree: '娘が二人います。日本酒とボドゲが好きです。',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'qiita.png',
    title: 'Qiita',
    info: 'Qiitaは、エンジニアリングに関する知識を記録・共有するためのサービスです。',
    info2: 'エンジニアとして、機能開発に携わりました。',
    url: 'https://qiita.com',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'mishiwata1015@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/mishiwata1015',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/mishiwata1015',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mishiwata1015',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
