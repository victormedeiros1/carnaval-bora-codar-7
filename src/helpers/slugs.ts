import { Block } from "../types/block";
import { Location } from "../types/location";
import block1 from "/src/assets/images/bloco-1.jpg";
import block2 from "/src/assets/images/bloco-2.jpg";
import block3 from "/src/assets/images/bloco-3.jpg";
import block4 from "/src/assets/images/bloco-4.jpg";

export const blockOptions: Block[] = [
  {
    id: 0,
    name: "Theme só res enha",
    cover: block1,
    description: "Lorem ipsum dolot sit amet lorem ipsum dolot sit amet",
    location: "Natal - RN",
  },
  {
    id: 1,
    name: "Não sou deSASS coisas",
    cover: block2,
    description: "Lorem ipsum dolot sit amet lorem ipsum dolot sit amet",
    location: "Caicó - RN",
  },
  {
    id: 2,
    name: "Assets te pego",
    cover: block3,
    description: "Lorem ipsum dolot sit amet lorem ipsum dolot sit amet",
    location: "Salvador - BA",
  },
  {
    id: 3,
    name: "As gata e IML",
    cover: block4,
    description: "Lorem ipsum dolot sit amet lorem ipsum dolot sit amet",
    location: "Péssimo - MC",
  },
];

export const locationOptions: Location[] = [
  {
    id: 0,
    name: "Caicó - RN",
    value: "Caicó - RN",
  },
  {
    id: 1,
    name: "Natal - RN",
    value: "Natal - RN",
  },
  {
    id: 2,
    name: "Salvador - BA",
    value: "Salvador - BA",
  },
  {
    id: 3,
    name: "Péssimo - MC",
    value: "Péssimo - MC",
  },
];
