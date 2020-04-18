import fetch from 'node-fetch'
const BASE_URL = "https://api.canillitapp.com";


export const getLatest = async date => {
  try {
    let response = await fetch(`${BASE_URL}/latest/${date}`);
    if (response.status !== 200)
      throw new Error("No se pudieron descargar las noticias.");
    let data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getCategory = async category => {
  try {
    let response = await fetch(`${BASE_URL}/news/category/${category}`);
    if (response.status !== 200)
      throw new Error("No se pudieron descargar las noticias.");
    let data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
