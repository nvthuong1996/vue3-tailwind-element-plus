function addItem(
  { arr, item, toBottom = false } = { toBottom: false, key: "id" }
) {
  if (toBottom) {
    arr.push(item);
  } else {
    arr.unshift(item);
  }
}

function addItems(
  { arr, items, toBottom = false, key = "id" } = { toBottom: false, key: "id" }
) {
  items.forEach((item) => {
    if (arr.find((e) => e[key] === item[key])) {
      updateItem({ arr, item, key });
    } else {
      addItem({ arr, item, toBottom, key });
    }
  });
}

function updateItem({ arr, item, key = "id" }) {
  const findIndex = arr.findIndex((e) => e[key] === item[key]);
  if (findIndex >= 0) {
    arr.splice(findIndex, 1, item);
    return true;
  } else {
    return false;
  }
}

function removeItem({ arr, item, key = "id" }) {
  const findIndex = arr.findIndex((e) => e[key] === item[key]);
  if (findIndex >= 0) {
    arr.splice(findIndex, 1);
    return true;
  } else {
    return false;
  }
}

export const arrayUtil = {
  addItem,
  addItems,
  updateItem,
  removeItem,
};
