// roleCardUtils.js
export const Min = 0;
export const Max = 99;

export const clamp = (value, min = Min, max = Max) => {
  Math.min(max, Math.max(min, value));
};

// 一般 / 困難 / 極限
export const getLevels = (value) => ({
  regular: value,
  hard: Math.floor(value / 2),
  extreme: Math.floor(value / 5),
});

// 取代到處重複的 prev.map((item, index) => i === index ? {...} : item)

export const updateAt = (setter, index, patch) => {
  setter((prev) => {
    return prev.map((item, i) => {
      return i === index ? { ...item, ...patch } : item;
    });
  });
};
