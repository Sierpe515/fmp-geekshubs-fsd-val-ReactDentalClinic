
import axios from 'axios';

const root = "http://localhost:3000"

export const RegisterMe = async (body) => {

  console.log(body)

    return await axios.post(`${root}/register`, body);
} 

export const logMe = async (body) => {

  console.log(body)

    return await axios.post(`${root}/login`, body);
} 

export const bringUsers = async (token) => {
    let config = {
      headers: { 
        'Authorization': 'Bearer '+ token,  
      }
    };

    return await axios.get(`${root}/getProfilesAdm`, config);
}