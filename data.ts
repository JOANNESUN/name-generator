interface Name {
    id: number;
    name: string;
    GENDER: GENDER;
    POPULARITY: POPULARITY;
    LENGTH: LENGTH;
  }

  //enum further restrict the actual string value to be enter in the object
  export enum GENDER {
    SHE = "She",
    THEY = "They",
    HE = "He",
  }
  
  export enum  POPULARITY {
    UNIQUE = "Unique",
    TRENDY = "Trendy",
  }
  
  export enum  LENGTH {
    SHORT = "Short",
    ALL = "All",
    LONG = "Long",
  }

  export const names: Name[] = [
    {
      id: 1,
      name: "Laith",
      GENDER: GENDER.HE,
      POPULARITY: POPULARITY.UNIQUE,
      LENGTH: LENGTH.SHORT,
    },
    {
      id: 2,
      name: "Jake",
      GENDER: GENDER.HE,
      POPULARITY: POPULARITY.TRENDY,
      LENGTH: LENGTH.SHORT,
    },
    {
      id: 3,
      name: "Lamelo",
      GENDER: GENDER.HE,
      POPULARITY: POPULARITY.UNIQUE,
      LENGTH: LENGTH.SHORT,
    },
    {
      id: 4,
      name: "Abraham",
      GENDER: GENDER.HE,
      POPULARITY: POPULARITY.TRENDY,
      LENGTH: LENGTH.LONG,
    },
    {
      id: 5,
      name: "Bartholomew",
      GENDER: GENDER.HE,
      POPULARITY: POPULARITY.UNIQUE,
      LENGTH: LENGTH.LONG,
    },
    {
      id: 6,
      name: "Noah",
      GENDER: GENDER.HE,
      POPULARITY: POPULARITY.TRENDY,
      LENGTH: LENGTH.SHORT,
    },
    {
      id: 7,
      name: "Benjamin",
      GENDER: GENDER.HE,
      POPULARITY: POPULARITY.TRENDY,
      LENGTH: LENGTH.LONG,
    },
    {
      id: 8,
      name: "William",
      GENDER: GENDER.HE,
      POPULARITY: POPULARITY.TRENDY,
      LENGTH: LENGTH.LONG,
    },
    {
      id: 9,
      name: "Lucus",
      GENDER: GENDER.HE,
      POPULARITY: POPULARITY.TRENDY,
      LENGTH: LENGTH.SHORT,
    },
    {
      id: 10,
      name: "Harrison",
      GENDER: GENDER.HE,
      POPULARITY: POPULARITY.UNIQUE,
      LENGTH: LENGTH.LONG,
    },
    {
      id: 11,
      name: "Selma",
      GENDER: GENDER.HE,
      POPULARITY: POPULARITY.UNIQUE,
      LENGTH: LENGTH.SHORT,
    },
    {
      id: 12,
      name: "Asher",
      GENDER: GENDER.HE,
      POPULARITY: POPULARITY.UNIQUE,
      LENGTH: LENGTH.SHORT,
    },
    {
      id: 13,
      name: "Tucker",
      GENDER: GENDER.HE,
      POPULARITY: POPULARITY.TRENDY,
      LENGTH: LENGTH.SHORT,
    },
  
    {
      id: 14,
      name: "Arya",
      GENDER: GENDER.SHE,
      POPULARITY: POPULARITY.UNIQUE,
      LENGTH: LENGTH.SHORT,
    },
    {
      id: 15,
      name: "Olivia",
      GENDER: GENDER.SHE,
      POPULARITY: POPULARITY.TRENDY,
      LENGTH: LENGTH.SHORT,
    },
    {
      id: 16,
      name: "Fay",
      GENDER: GENDER.SHE,
      POPULARITY: POPULARITY.UNIQUE,
      LENGTH: LENGTH.SHORT,
    },
    {
      id: 17,
      name: "Brooklyn",
      GENDER: GENDER.SHE,
      POPULARITY: POPULARITY.TRENDY,
      LENGTH: LENGTH.LONG,
    },
    {
      id: 18,
      name: "Genevieve",
      GENDER: GENDER.SHE,
      POPULARITY: POPULARITY.UNIQUE,
      LENGTH: LENGTH.LONG,
    },
    {
      id: 19,
      name: "Zoe",
      GENDER: GENDER.SHE,
      POPULARITY: POPULARITY.TRENDY,
      LENGTH: LENGTH.SHORT,
    },
    {
      id: 20,
      name: "Valentina",
      GENDER: GENDER.SHE,
      POPULARITY: POPULARITY.TRENDY,
      LENGTH: LENGTH.LONG,
    },
    {
      id: 21,
      name: "Josephine",
      GENDER: GENDER.SHE,
      POPULARITY: POPULARITY.TRENDY,
      LENGTH: LENGTH.LONG,
    },
    {
      id: 22,
      name: "Maya",
      GENDER: GENDER.SHE,
      POPULARITY: POPULARITY.TRENDY,
      LENGTH: LENGTH.SHORT,
    },
    {
      id: 23,
      name: "Everleigh",
      GENDER: GENDER.SHE,
      POPULARITY: POPULARITY.UNIQUE,
      LENGTH: LENGTH.LONG,
    },
    {
      id: 24,
      name: "Poppy",
      GENDER: GENDER.SHE,
      POPULARITY: POPULARITY.UNIQUE,
      LENGTH: LENGTH.SHORT,
    },
    {
      id: 25,
      name: "Maia",
      GENDER: GENDER.SHE,
      POPULARITY: POPULARITY.UNIQUE,
      LENGTH: LENGTH.SHORT,
    },
    {
      id: 26,
      name: "Ivy",
      GENDER: GENDER.SHE,
      POPULARITY: POPULARITY.TRENDY,
      LENGTH: LENGTH.SHORT,
    },
  
    {
      id: 27,
      name: "Jude",
      GENDER: GENDER.THEY,
      POPULARITY: POPULARITY.UNIQUE,
      LENGTH: LENGTH.SHORT,
    },
    {
      id: 28,
      name: "Adrian",
      GENDER: GENDER.THEY,
      POPULARITY: POPULARITY.TRENDY,
      LENGTH: LENGTH.SHORT,
    },
    {
      id: 29,
      name: "Sunny",
      GENDER: GENDER.THEY,
      POPULARITY: POPULARITY.UNIQUE,
      LENGTH: LENGTH.SHORT,
    },
    {
      id: 30,
      name: "Channing",
      GENDER: GENDER.THEY,
      POPULARITY: POPULARITY.TRENDY,
      LENGTH: LENGTH.LONG,
    },
    {
      id: 31,
      name: "Tennessee",
      GENDER: GENDER.THEY,
      POPULARITY: POPULARITY.UNIQUE,
      LENGTH: LENGTH.LONG,
    },
    {
      id: 32,
      name: "Dallas",
      GENDER: GENDER.THEY,
      POPULARITY: POPULARITY.TRENDY,
      LENGTH: LENGTH.SHORT,
    },
  
    {
      id: 33,
      name: "Zephyr",
      GENDER: GENDER.THEY,
      POPULARITY: POPULARITY.UNIQUE,
      LENGTH: LENGTH.LONG,
    },
  
    {
      id: 34,
      name: "Teri",
      GENDER: GENDER.THEY,
      POPULARITY: POPULARITY.TRENDY,
      LENGTH: LENGTH.SHORT,
    },
  ];