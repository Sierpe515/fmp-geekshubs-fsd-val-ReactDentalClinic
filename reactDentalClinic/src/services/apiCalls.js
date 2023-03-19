
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

export const bringUsersByDoctor = async (token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  return await axios.get(`${root}/getProfilesDoc`, config);
}

export const bringAppointments = async (token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  return await axios.get(`${root}/getAppAdm`, config);
}

export const bringAppointmentsUser = async (token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  return await axios.get(`${root}/getApp`, config);
}

export const bringAppointmentsDoctor = async (token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  return await axios.get(`${root}/getAppDoc`, config);
}

export const getUserProfile = async (token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  return await axios.get(`${root}/profile`, config);
}

export const updateProfile = async (body) => {

  let token = body.token

  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  console.log(token);
  //Token is undefined

  return await axios.put(`${root}/updateProfile`, config, body);
}

export const getAllDoctors = async () => {

  return await axios.get(`${root}/getDoctors`);
}