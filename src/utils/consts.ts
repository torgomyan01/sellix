export const SITE_URL = {
  HOME: "/",
  ADMIN: "/admin",
  ADMIN_CATEGORY: "admin/category",
  ADMIN_CATEGORY_ADD: "admin/category/add",
};
//
// export const API_URL = {
//   HOST: "http://ytsmpt-api.loc/api",
//   SAVE_MP3: "/save-mp3",
// };
//
export const SQL = {
  CREATE_CATEGORY: ({ nameCategory, icon_name, icon_code }: ICreateCategory) =>
    `INSERT INTO category (name, icon_name, icon_code) VALUES ('${nameCategory}','${icon_name}','${icon_code}')`,
  GET_ALL_CAT: `SELECT * FROM category WHERE 1`,
  REMOVE_CATEGORY: (id: string) => `DELETE FROM category WHERE id='${id}'`,
};

export const getDbConnection: any = () => {
  return {
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    database: "sellix",
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
  { id: 1, name: "Անշարժ գույք", icon: "fa-building", code: "f1ad" },
  { id: 2, name: "Տրանսպորտ", icon: "fa-truck", code: "f0d1" },
  { id: 3, name: "Էլեկտրոնիկա", icon: "fa-microchip", code: "f2db" },
  { id: 4, name: "Հագուստ", icon: "fa-shirt", code: "f553" },
  { id: 5, name: "Կոշիկ", icon: "fa-shoe-prints", code: "f54b" },
  { id: 6, name: "Տուն և այգի", icon: "fa-house", code: "e00d" },
  { id: 7, name: "Մանկական ապրանքներ", icon: "fa-baby", code: "f77c" },
  { id: 8, name: "Գեղեցկություն և առողջություն", icon: "fa-spa", code: "f5bb" },
  { id: 9, name: "Կենցաղային տեխնիկա", icon: "fa-blender", code: "f517" },
  { id: 10, name: "Սպորտ և հանգիստ", icon: "fa-futbol", code: "f1e3" },
  {
    id: 11,
    name: "Շինարարություն և վերանորոգում",
    icon: "fa-hammer",
    code: "f6e3",
  },
  { id: 12, name: "Սննդամթերք", icon: "fa-utensils", code: "f2e7" },
  { id: 13, name: "Դեղատուն", icon: "fa-prescription-bottle", code: "f485" },
  { id: 14, name: "Կենդանիների համար ապրանքներ", icon: "fa-paw", code: "f1b0" },
  { id: 15, name: "Գրքեր", icon: "fa-book", code: "f02d" },
  {
    id: 16,
    name: "Տուրիզմ, ձկնորսություն, որս",
    icon: "fa-fish",
    code: "f578",
  },
  { id: 17, name: "Ավտոմոբիլային ապրանքներ", icon: "fa-car", code: "f1b9" },
  { id: 18, name: "Կահույք", icon: "fa-couch", code: "f4b8" },
  {
    id: 19,
    name: "Հոբբի և ստեղծագործություն",
    icon: "fa-paintbrush",
    code: "f1fc",
  },
  { id: 20, name: "Զարդեր", icon: "fa-gem", code: "f3a5" },
  { id: 21, name: "Աքսեսուարներ", icon: "fa-glasses", code: "f530" },
  { id: 22, name: "Խաղեր և կոնսոլներ", icon: "fa-gamepad", code: "f11b" },
  { id: 23, name: "Գրենական պիտույքներ", icon: "fa-pencil", code: "f040" },
  {
    id: 24,
    name: "Մեծահասակների համար ապրանքներ",
    icon: "fa-heart",
    code: "f004",
  },
  {
    id: 25,
    name: "Հնաոճ իրեր և կոլեկցիոնիրում",
    icon: "fa-coins",
    code: "f51e",
  },
  { id: 26, name: "Թվային ապրանքներ", icon: "fa-file-code", code: "f1c9" },
  {
    id: 27,
    name: "Կենցաղային քիմիա և հիգիենա",
    icon: "fa-pump-soap",
    code: "e06b",
  },
  { id: 28, name: "Երաժշտություն և վիդեո", icon: "fa-music", code: "f001" },
];

export const subCategories = [
  {
    name: "Կանանց համար",
    subcategories: [
      "Ջրային կոշիկներ",
      "Սանդալներ և բաց կոշիկներ",
      "Կոշիկներ և կիսակոշիկներ",
      "Տան կոշիկներ",
      "Սպորտային կոշիկներ և կեդեր",
      "Մոկասիններ և տոպսայդերներ",
      "Ռեզինե կոշիկներ",
      "Սաբո և մյուլ",
      "Սապոգներ և կիսասապոգներ",
      "Կոշիկներ և բալետկաներ",
      "Ուգգիներ, վալենկիներ և դյուտիներ",
      "Շլեպկաներ և սլանցիներ",
      "Էսպադրիլներ",
      "Բժշկական կոշիկներ",
      "Աշխատանքային կոշիկներ",
    ],
  },
  {
    name: "Տղամարդկանց համար",
    subcategories: [
      "Ջրային կոշիկներ",
      "Կոշիկներ և կիսակոշիկներ",
      "Տան կոշիկներ",
      "Կեդեր, սպորտային կոշիկներ և սլիպոններ",
      "Մոկասիններ և տոպսայդերներ",
      "Ռեզինե կոշիկներ",
      "Սանդալներ",
      "Սապոգներ և կիսասապոգներ",
      "Կոշիկներ",
      "Ուգգիներ, վալենկիներ և դյուտիներ",
      "Շլեպկաներ և սլանցիներ",
      "Էսպադրիլներ",
      "Բժշկական կոշիկներ",
      "Աշխատանքային կոշիկներ",
    ],
  },
  {
    name: "Երեխաների համար",
    subcategories: [
      "Աղջիկների համար",
      "Տղաների համար",
      "Նորածինների համար",
      "Դպրոց",
      "Խնամք և աքսեսուարներ",
      "Ներքին մասեր կոշիկների համար",
      "Սպունգներ և խոզանակներ",
      "Ոտքի չափիչ սարքեր",
      "Հենակներ",
      "Կոսմետիկա և մաքրման միջոցներ",
      "Սառցահարթակներ և հակասահող սոսինձներ",
      "Գդալներ և կոշիկի երկարիչներ",
      "Ճկունացնողներ",
      "Ներքին կրունկներ",
      "Կոշիկի չորացուցիչներ",
      "Զարդարանքներ",
      "Պաշտպանիչ ծածկոցներ կոշիկների համար",
      "Կոշիկների թելեր",
    ],
  },
];
