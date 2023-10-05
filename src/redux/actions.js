import { CREATE_RECIPE } from "./action-types";
import axios from 'axios';

export const createRecipe = (formData) => {
    return async (dispatch) => {
      try {
        const endpoint = 'http://localhost:3001/videogames';
        const response = await axios.post(endpoint, formData);
  
        dispatch({ type: CREATE_RECIPE, payload: response.data });
      } catch (error) {
        console.error('Error creating videogame:', error);
      }
    };
  };