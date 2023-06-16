import tsvn from "../assets/imgs/tsvn.svg";
import taylorSpeakNow from "../assets/imgs/taylorSpeakNow.jpg";
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
    title: "Hà Nội",
    image: [
      { alt: "view of mountain", src: IMAGES.wonderstruck, desc: "" },
      { alt: "view of mountain", src: IMAGES.wonderstruck, desc: "" },
    ],
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSfsdP4AelxFYlel3Wwck1oQH2HPbRW3-in-fWZis1u5WZegzg/viewform?usp=sf_link",
  },
  {
    key: "dn",
    title: "Đà Nẵng",
    image: [
      { alt: "DA NANG", src: IMAGES.dn1, desc: "" },
      { alt: "DA NANG", src: IMAGES.dn2, desc: "" },
      { alt: "DA NANG", src: IMAGES.dn3, desc: "" },
      { alt: "DA NANG", src: IMAGES.dn4, desc: "" },
    ],
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSeWCJ3ccL-PYwTDAobN1VgDL76Yg6zoUsGxLhPU2xgPuOzV-Q/viewform?usp=sf_link",
  },
  {
    key: "sg",
    title: "Sài Gòn",
    image: [
      { alt: "SAI GON", src: IMAGES.sg1, desc: "" },
      { alt: "SAI GON", src: IMAGES.sg2, desc: "" },
      { alt: "SAI GON", src: IMAGES.sg3, desc: "" },
      { alt: "SAI GON", src: IMAGES.sg4, desc: "" },
    ],
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSetLCl8O1g8HNQaGBX4EoS8G_lSO6kxUN6GtP0vdTfsJC354Q/viewform?usp=sf_link",
  },
];
