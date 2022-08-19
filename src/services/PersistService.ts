const savePersistance = <T>(store: T) => {
  try {
    const serializedStore = JSON.stringify(store);
    localStorage.setItem("store", serializedStore);
  } catch (error) {
    console.log(error);
  }
};

const loadPersistance = () => {
  try {
    const serializedStore = localStorage.getItem("store");
    if (serializedStore === null) return undefined;
    return JSON.parse(serializedStore);
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const PersistService = {
  savePersistance,
  loadPersistance,
};
