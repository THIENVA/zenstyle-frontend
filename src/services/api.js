import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const getHeroSlides = () => api.get("/hero_slides");
export const getHairCutting = () => api.get("/hair_cutting");
export const getSkinCare = () => api.get("/skin_care");
export const getBeautyTreatment = () => api.get("/beauty_treatment");

export default api;
