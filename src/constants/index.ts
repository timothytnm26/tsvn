import tsvn from "../assets/imgs/tsvn.svg";
import taylorSpeakNow from "../assets/imgs/taylorSpeakNow.jpg";
import taylormobile from "../assets/imgs/taylormobile.jpg";
import wonderstruck from "../assets/imgs/wonderstruck.png";
import buffterfly1 from "../assets/imgs/buf1.svg";
import buffterfly2 from "../assets/imgs/buf2.svg";
import buffterfly3 from "../assets/imgs/buf3.svg";
import buffterfly4 from "../assets/imgs/buf4.svg";
import buffterfly5 from "../assets/imgs/buf5.svg";
import buffterfly0 from "../assets/imgs/buf0.svg";
import sg1 from "../assets/imgs/ASIANA0.png";
import sg2 from "../assets/imgs/ASIANA1.png";
import sg3 from "../assets/imgs/ASIANA2.png";
import sg4 from "../assets/imgs/ASIANA3.png";
import dn1 from "../assets/imgs/dn1.png";
import dn2 from "../assets/imgs/dn2.png";
import dn3 from "../assets/imgs/dn3.png";
import dn4 from "../assets/imgs/dn4.png";
import dragon2 from "../assets/imgs/dragon2.svg";
import hn1 from "../assets/imgs/HN3.png";
import hn2 from "../assets/imgs/HN4.png";
import tep11 from "../assets/imgs/slides/The Eras Party (Chapter 01)_ Screaming In Vain (1).jpg";
import tep12 from "../assets/imgs/slides/The Eras Party (Chapter 01)_ Screaming In Vain (2).jpg";
import tep13 from "../assets/imgs/slides/The Eras Party (Chapter 01)_ Screaming In Vain (3).jpg";
import tep21 from "../assets/imgs/slides/The Eras Party (Chapter 02)_ Kaleidoscope (1).jpg";
import tep22 from "../assets/imgs/slides/The Eras Party (Chapter 02)_ Kaleidoscope (2).jpg";
import tep23 from "../assets/imgs/slides/The Eras Party (Chapter 02)_ Kaleidoscope (3).jpg";
import tep24 from "../assets/imgs/slides/The Eras Party (Chapter 02)_ Kaleidoscope (4).jpg";
import tep25 from "../assets/imgs/slides/The Eras Party (Chapter 02)_ Kaleidoscope (5).jpg";
import tep26 from "../assets/imgs/slides/The Eras Party (Chapter 02)_ Kaleidoscope (6).jpg";
import tep27 from "../assets/imgs/slides/The Eras Party (Chapter 02)_ Kaleidoscope (7).jpg";
import decade1 from "../assets/imgs/slides/TSVN 2019_ Offline of the Decade (1).jpg";
import decade2 from "../assets/imgs/slides/TSVN 2019_ Offline of the Decade (2).jpg";
import glow1 from "../assets/imgs/slides/TSVN Offline 2022_ Glowing In The Dark (1).jpg";
import glow2 from "../assets/imgs/slides/TSVN Offline 2022_ Glowing In The Dark (2).jpg";
import mid1 from "../assets/imgs/slides/TSVN Secret Session 2022_ Midnights Listening Party (1).jpg";
import mid2 from "../assets/imgs/slides/TSVN Secret Session 2022_ Midnights Listening Party (1).jpg";
import mid3 from "../assets/imgs/slides/TSVN Secret Session 2022_ Midnights Listening Party (1).jpg";

export const IMAGES = {
  tsvn: tsvn,
  taylorSpeakNow: taylorSpeakNow,
  wonderstruck: wonderstruck,
  buffterfly0: buffterfly0,
  buffterfly1: buffterfly1,
  buffterfly2: buffterfly2,
  buffterfly3: buffterfly3,
  buffterfly4: buffterfly4,
  buffterfly5: buffterfly5,
  sg1: sg1,
  sg2: sg2,
  sg3: sg3,
  sg4: sg4,
  dn1: dn1,
  dn2: dn2,
  dn3: dn3,
  dn4: dn4,
  hn1: hn1,
  hn2: hn2,
  taylormobile: taylormobile,
  dragon2: dragon2,
  tep11: tep11,
  tep12: tep12,
  tep13: tep13,
  tep21: tep21,
  tep22: tep22,
  tep23: tep23,
  tep24: tep24,
  tep25: tep25,
  tep26: tep26,
  tep27: tep27,
  decade1: decade1,
  decade2: decade2,
  glow1: glow1,
  glow2: glow2,
  mid1: mid1,
  mid2: mid2,
  mid3: mid3,
};
export const LANGUAGES = [
  { label: "Tiếng Việt", code: "vn" },
  { label: "English", code: "en" },
];
export const FIND_DATA_KEY = "FB_PUBLIC_LOAD_DATA_";
export const FORM_RESPONSE = "formResponse";
export const FORM_URLS = {
  hn: "",
  dn: "",
  sg: "",
};
export const FORM_FIELDS = {
  sg: {
    id: "hcm",
    form_url:
      "https://docs.google.com/forms/d/e/1FAIpQLSetLCl8O1g8HNQaGBX4EoS8G_lSO6kxUN6GtP0vdTfsJC354Q/",
    inputs: {
      name: 1493562255,
      dob: 1848726192,
      email: 917576951,
      phone: 2019179497,
      fb_link: 115859692,
      ticket_count: 1378429735,
      ticket_count_max: 4,
      bank_no: 1237363824,
      bill_image: 113368911,
      note: 1044442296,
    },
  },
};

export const TABS = [
  {
    key: "hn",
    title: "HÀ NỘI",
    image: [
      { alt: "HA NOI", src: IMAGES.hn1, desc: "" },
      { alt: "HA NOI", src: IMAGES.hn2, desc: "" },
    ],
    preImages: [
      {
        src: `${IMAGES.wonderstruck}`,
        desc: "",
      },
      {
        src: `${IMAGES.wonderstruck}`,
        desc: "",
      },
    ],
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSfsdP4AelxFYlel3Wwck1oQH2HPbRW3-in-fWZis1u5WZegzg/viewform?usp=sf_link",
  },
  {
    key: "dn",
    title: "ĐÀ NẴNG",
    image: [
      { alt: "DA NANG", src: IMAGES.dn1, desc: "" },
      { alt: "DA NANG", src: IMAGES.dn2, desc: "" },
      { alt: "DA NANG", src: IMAGES.dn3, desc: "" },
      { alt: "DA NANG", src: IMAGES.dn4, desc: "" },
    ],
    preImages: [
      {
        src: `${IMAGES.wonderstruck}`,
        desc: "",
      },
      {
        src: `${IMAGES.wonderstruck}`,
        desc: "",
      },
    ],
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSeWCJ3ccL-PYwTDAobN1VgDL76Yg6zoUsGxLhPU2xgPuOzV-Q/viewform?usp=sf_link",
  },
  {
    key: "sg",
    title: "SÀI GÒN",
    image: [
      { alt: "SAI GON", src: IMAGES.sg1, desc: "" },
      { alt: "SAI GON", src: IMAGES.sg2, desc: "" },
      { alt: "SAI GON", src: IMAGES.sg3, desc: "" },
      { alt: "SAI GON", src: IMAGES.sg4, desc: "" },
    ],
    preImages: [
      {
        src: `${IMAGES.wonderstruck}`,
        desc: "",
      },
      {
        src: `${IMAGES.wonderstruck}`,
        desc: "",
      },
    ],
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSetLCl8O1g8HNQaGBX4EoS8G_lSO6kxUN6GtP0vdTfsJC354Q/viewform?usp=sf_link",
  },
];

export const SLIDE = [
  {
    src: `${decade1}`,
    desc: "TSVN 2019_ Offline of the Decade",
  },
  {
    src: `${decade2}`,
    desc: "TSVN 2019_ Offline of the Decade",
  },
  {
    src: `${glow1}`,
    desc: "TSVN Offline 2022_ Glowing In The Dark",
  },
  {
    src: `${glow2}`,
    desc: "TSVN Offline 2022_ Glowing In The Dark",
  },
  {
    src: `${mid1}`,
    desc: "TSVN Secret Session 2022_ Midnights Listening Party",
  },
  {
    src: `${mid2}`,
    desc: "TSVN Secret Session 2022_ Midnights Listening Party",
  },
  {
    src: `${mid3}`,
    desc: "TSVN Secret Session 2022_ Midnights Listening Party",
  },
  {
    src: `${tep11}`,
    desc: "The Eras Party (Chapter 01)_ Screaming In Vain",
  },
  {
    src: `${tep12}`,
    desc: "The Eras Party (Chapter 01)_ Screaming In Vain",
  },
  {
    src: `${tep13}`,
    desc: "The Eras Party (Chapter 01)_ Screaming In Vain",
  },
  {
    src: `${tep21}`,
    desc: "The Eras Party (Chapter 02)_ Kaleidoscope",
  },
  {
    src: `${tep22}`,
    desc: "The Eras Party (Chapter 02)_ Kaleidoscope",
  },
  {
    src: `${tep23}`,
    desc: "The Eras Party (Chapter 02)_ Kaleidoscope",
  },
  {
    src: `${tep24}`,
    desc: "The Eras Party (Chapter 02)_ Kaleidoscope",
  },
  {
    src: `${tep25}`,
    desc: "The Eras Party (Chapter 02)_ Kaleidoscope",
  },
  {
    src: `${tep26}`,
    desc: "The Eras Party (Chapter 02)_ Kaleidoscope",
  },
  {
    src: `${tep27}`,
    desc: "The Eras Party (Chapter 02)_ Kaleidoscope",
  },
];
