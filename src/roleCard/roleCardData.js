export const basicFields = [
  [
    { id: "character-name", label: "角色名稱" },
    { id: "player-name", label: "玩家名稱" },
    { id: "job", label: "職業" },
  ],
  [
    { id: "age", label: "年齡", type: "number" },
    { id: "gender", label: "性別" },
    { id: "residence", label: "現居地" },
    { id: "birthplace", label: "出生地" },
  ],
];
export const defaltAttributes = [
  {
    eng: "STR",
    ch: "力量",
    count: "3D6x5",
    num: 45,
  },
  {
    eng: "CON",
    ch: "體質",
    count: "3D6x5",
    num: 45,
  },
  {
    eng: "SIZ",
    ch: "體型",
    count: "(2D6+6)x5",
    num: 45,
  },
  {
    eng: "DEX",
    ch: "敏捷",
    count: "3D6x5",
    num: 45,
  },
  {
    eng: "APP",
    ch: "外貌",
    count: "3D6x5",
    num: 45,
  },
  {
    eng: "INT",
    ch: "智力",
    count: "(2D6+6)x5",
    num: 45,
  },
  {
    eng: "POW",
    ch: "意志",
    count: "3D6x5",
    num: 45,
  },
  {
    eng: "EDU",
    ch: "教育",
    count: "(2D6+6)x5",
    num: 45,
  },
];

export const defaltSkills = [
  {
    name: "心理學 Psychology",
    base: 0,
    occupation: 0,
    interest: 0,
  },
];
export const defaltInventory = [
  {
    name: "聖經",
    qty: 1,
  },
];
export const defaltWeapon = [
  {
    name: "徒手格鬥",
    damage: "1D3 + DB",
  },
];
export const defaltState = [
  {
    name: "生命值 HP",
    color: "",
    now: 10,
    max: 10,
  },
  {
    name: "魔法值 MP",
    color: "mp",
    now: 10,
    max: 10,
  },
  {
    name: "理智值 SAN",
    color: "san",
    now: 10,
    max: 99,
  },
  {
    name: "幸運 LUK",
    color: "luk",
    now: 10,
    max: 99,
  },
];
