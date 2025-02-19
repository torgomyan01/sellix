export const SITE_URL = {
  HOME: "/",
  MUSICS: "/musics",
  PRIVACY_POLICY: "/privacy-policy",
  ABOUT_US: "/about-us",
};

export const API_URL = {
  HOST: "http://ytsmpt-api.loc/api",
  SAVE_MP3: "/save-mp3",
};

export const SQL = {
  INSERT_TRACK: (data: any) =>
    `INSERT INTO tracks (title, videoID, pathTrack, server_link, keywords, description, seo_link, status, created_at, updated_at) 
        VALUES ('${data.title}','${data.videoID}','${data.pathTrack}','${data.server_link}','${data.keywords}','${data.description}','${data.seo_link}', '${data.status}', '${data.created_at}','${data.updated_at}')`,
};

export const getDbConnection: any = () => {
  return {
    host: "mysql.4b3575f26be4.hosting.myjino.ru",
    port: "3306",
    user: "j1381019",
    password: "6Cmw2vwWCu",
    database: "j1381019_ytsmp3",
  };
};

export const fakeProducts = [
  {
    imageURL: "https://s.list.am/f/587/85521587.webp",
    title: "BMW 7 Series, 4.4 լ, լիաքարշ, 2020 թ.",
    price: "65,000",
    currency: "$",
  },
  {
    imageURL: "https://s.list.am/f/898/86788898.webp",
    title: "BMW X5, 3.0 լ, լիաքարշ, 2022 թ.",
    price: "36,000",
    currency: "$",
  },
  {
    imageURL: "https://s.list.am/f/769/86965769.webp",
    title: "BMW 5 Series, 3.0 լ, 2007 թ., գազ",
    price: "6,000",
    currency: "$",
  },
  {
    imageURL: "https://s.list.am/f/642/86981642.webp",
    title:
      "BROTHERS - Range Rover, BMW և Jaguar մակնիշի մեքենաների նորոգում և սպասրկում",
    price: "18,000",
    currency: "$",
  },
  {
    imageURL: "https://s.list.am/f/523/86970523.webp",
    title: "BMW 5 Series, 2.8 լ, 1999 թ., գազ",
    price: "3,000",
    currency: "$",
  },
  {
    imageURL: "https://s.list.am/f/100/81397100.webp",
    title: "BMW N20, N26 շարժիչ, մատոռ",
    price: "800,000",
    currency: "֏",
  },
  {
    imageURL: "https://s.list.am/f/482/82600482.webp",
    title: "BMW X5, 3.0 լ, լիաքարշ, 2005 թ., գազ",
    price: "11,000",
    currency: "$",
  },
  {
    imageURL: "https://s.list.am/f/040/81883040.webp",
    title: "BMW 7 Series, 3.0 լ, 2017 թ.",
    price: "36,000",
    currency: "$",
  },
  {
    imageURL: "https://s.list.am/f/040/81883040.webp",
    title: "BMW 7 Series, 5.0 լ, լիաքարշ, 2013 թ.",
    price: "2,000,000",
    currency: "₽",
  },
  {
    imageURL: "https://s.list.am/f/189/86974189.webp",
    title: "BMW 7 Series, 5.0 լ, լիաքարշ, 2012 թ.",
    price: "18,000",
    currency: "$",
  },
];

export const allCategories = [
  { id: 1, name: "Էլեկտրոնիկա", icon: "fa-microchip" },
  { id: 2, name: "Հագուստ", icon: "fa-shirt" },
  { id: 3, name: "Կոշիկ", icon: "fa-shoe-prints" },
  { id: 4, name: "Տուն և այգի", icon: "fa-house" },
  { id: 5, name: "Մանկական ապրանքներ", icon: "fa-baby" },
  { id: 6, name: "Գեղեցկություն և առողջություն", icon: "fa-spa" },
  { id: 7, name: "Կենցաղային տեխնիկա", icon: "fa-blender" },
  { id: 8, name: "Սպորտ և հանգիստ", icon: "fa-futbol" },
  { id: 9, name: "Շինարարություն և վերանորոգում", icon: "fa-hammer" },
  { id: 10, name: "Սննդամթերք", icon: "fa-utensils" },
  { id: 11, name: "Դեղատուն", icon: "fa-prescription-bottle" },
  { id: 12, name: "Կենդանիների համար ապրանքներ", icon: "fa-paw" },
  { id: 13, name: "Գրքեր", icon: "fa-book" },
  { id: 14, name: "Տուրիզմ, ձկնորսություն, որս", icon: "fa-fish" },
  { id: 15, name: "Ավտոմոբիլային ապրանքներ", icon: "fa-car" },
  { id: 16, name: "Կահույք", icon: "fa-couch" },
  { id: 17, name: "Հոբբի և ստեղծագործություն", icon: "fa-paintbrush" },
  { id: 18, name: "Զարդեր", icon: "fa-gem" },
  { id: 19, name: "Աքսեսուարներ", icon: "fa-glasses" },
  { id: 20, name: "Խաղեր և կոնսոլներ", icon: "fa-gamepad" },
  { id: 21, name: "Գրենական պիտույքներ", icon: "fa-pencil" },
  { id: 22, name: "Մեծահասակների համար ապրանքներ", icon: "fa-heart" },
  { id: 23, name: "Հնաոճ իրեր և կոլեկցիոնիրում", icon: "fa-coins" },
  { id: 24, name: "Թվային ապրանքներ", icon: "fa-file-code" },
  { id: 25, name: "Կենցաղային քիմիա և հիգիենա", icon: "fa-pump-soap" },
  { id: 26, name: "Երաժշտություն և վիդեո", icon: "fa-music" },
];
