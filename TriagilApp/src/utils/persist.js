import { AsyncStorage } from 'react-native';

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(`${key}`, `${value}`);
  } catch (err) {
    console.log(`Failed to save in storage: ${err}`);
  }
};

const getData = async (key) => {
  try {
    const value = AsyncStorage.getItem(`${key}`);

    return value;
  } catch (err) {
    console.log(`Failed to recover key: ${key}`);
  }
}

const eraseData = async (key, value) => {
  try {
    await AsyncStorage.clear();
  } catch (err) {
    console.log(`Failed to erase data from storage: ${err}`);
  }
}

export { storeData, getData, eraseData}