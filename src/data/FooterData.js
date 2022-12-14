import LogoImg from '../assets/images/logo.svg';

export const footerData = {
  logoUrl: LogoImg,
  infoTExt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  copyright: '©My-app 2022. All rights reserved',
  footerNavFirst: {
    heading: "Top Hops",
    items: [
      {
        id: 0,
        name: "Fuggles",
        link: "/archive/hops/fuggles"
      },
      {
        id: 1,
        name: "Nelson Sauvin",
        link: "archive/hops/nelson-sauvin"
      },
      {
        id: 2,
        name: "Dana",
        link: "archive/hops/dana"
      }
    ]
  },
  footerNavSecond: {
    heading: "Top Yeast",
    items: [
      {
        id: 0,
        name: "Belgian Ardennes",
        link: "archive/yeast/belgian-ardennes"
      },
      {
        id: 1,
        name: "Bohemian Lager",
        link: "archive/yeast/bohemian-lager"
      },
      {
        id: 2,
        name: "French Saison",
        link: "archive/yeast/french-saison"
      }
    ]
  },
  footerNavThird: {
    heading: "Menu",
    items: [
      {
        id: 0,
        name: "Home",
        link: "/"
      },
      {
        id: 1,
        name: "Item32",
        link: "/terms"
      },
      {
        id: 2,
        name: "Item33",
        link: "/tabs"
      },
      {
        id: 3,
        name: "Item34",
        link: "/figma"
      }
    ]
  },
}
