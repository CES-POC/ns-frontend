export const setItem = (key, value) => {
  try {
    localStorage.removeItem(key);
    if (value) {
      localStorage.setItem(key, value);
    }
  } catch (error) {
    // console.log('>>>>: src/helpers/Utils.js : setCurrentUser -> error', error)
  }
};

export const removeItem = (key) => {
  localStorage.removeItem(key);
};
export const getItem = (key) => localStorage.getItem(key);

export const handleFilterChange = (e, data, label, setResult) => {
  if (e.target.checked === false) {
    setResult(data);
  } else {
    const filterData = data.filter((item) => {
      if (item[e.target.name] === label) return item;
    });
    setResult(filterData);
  }
};
