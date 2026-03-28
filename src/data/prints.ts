export interface Print {
  id: string;
  title: string;
  description: string;
  price: string;
  images: string[];
}

export const prints: Print[] = [
  {
    id: "1",
    title: "Māhina",
    description:
      "Captured in the tropical waters of Vava'u Tonga, this incredibly rare white humpback is the first pure white humpback whale observed in Tonga in recorded history. Māhina, meaning moon in Tongan, was the name given to this calf due to her luminescent appearance underwater which is as rare as it is breathtaking.",
    price: "$1,500",
    images: ["/images/prints/Photo1.JPG"],
  },
  {
    id: "2",
    title: "Silent Passage",
    description:
      "A solitary whale shark glides through the deep blue, its spotted skin catching the filtered sunlight from above. Encountered during a drift dive off the coast, this gentle giant moved with an effortless grace that left everyone in the water speechless.",
    price: "$1,300",
    images: ["/images/prints/Photo2.JPG"],
  },
  {
    id: "3",
    title: "Series III",
    description:
      "A paired series capturing two perspectives of the same moment.",
    price: "$1,800",
    images: ["/images/prints/Photo3a.jpg", "/images/prints/Photo3b.JPG"],
  },
  {
    id: "4",
    title: "Print IV",
    description: "",
    price: "$1,200",
    images: ["/images/prints/Photo4.jpg"],
  },
  {
    id: "5",
    title: "Print V",
    description: "",
    price: "$1,200",
    images: ["/images/prints/Photo5.jpg"],
  },
  {
    id: "6",
    title: "Print VI",
    description: "",
    price: "$1,200",
    images: ["/images/prints/Photo6.jpg"],
  },
  {
    id: "7",
    title: "Print VII",
    description: "",
    price: "$1,200",
    images: ["/images/prints/Photo7.jpg"],
  },
];
