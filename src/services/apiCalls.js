
import axios from 'axios';

// const root = "http://localhost:3000"
const root = "https://planetexpressdentalclinic.up.railway.app"

export const RegisterMe = async (body) => {

    return await axios.post(`${root}/register`, body);
} 

export const logMe = async (body) => {

    return await axios.post(`${root}/login`, body);
} 

export const bringUsersByAdmin = async (searchUser, token) => {
    let config = {
      headers: { 
        'Authorization': 'Bearer '+ token,  
      }
    };

    let sUrl = `${root}/getProfilesAdm`;

    if (searchUser) {
      sUrl += `/${searchUser}`;
    }

    return await axios.get(sUrl, config);
}

export const bringUsersByDoctor = async (searchUser, token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  }

    let sUrl = `${root}/getProfilesDoc`;

    if (searchUser) {
      sUrl += `/${searchUser}`;
    }

    return await axios.get(sUrl, config);
}

export const bringUpcomingAppointmentsAdmin = async (searchDate, token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  let sUrl = `${root}/getUpcomingAppAdm`;

    if (searchDate) {
      sUrl += `/${searchDate}`;
      console.log("envio");
    }

    return await axios.get(sUrl, config);
}

export const bringPastAppointmentsAdmin = async (token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  return await axios.get(`${root}/getPastAppAdm`, config);
}

export const bringUpcomingAppointmentsUser = async (token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  return await axios.get(`${root}/getUpcomingAppUser`, config);
}

export const bringPastAppointmentsUser = async (token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  return await axios.get(`${root}/getPastAppUser`, config);
}

export const bringUpcomingAppointmentsDoctor = async (searchDate, token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  let sUrl = `${root}/getUpcomingAppDoc`;

    if (searchDate) {
      sUrl += `/${searchDate}`;
    }

    return await axios.get(sUrl, config);
}

export const bringPastAppointmentsDoctor = async (token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  return await axios.get(`${root}/getPastAppDoctor`, config);
}

export const getUserProfile = async (token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  return await axios.get(`${root}/profile`, config);
}

export const updateProfile = async (dataUserUpdate, token) => {

  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  return await axios.put(`${root}/updateProfile`, dataUserUpdate, config);
}

export const getAllDoctors = async () => {

  return await axios.get(`${root}/getDoctors`);
}

export const getAllTreatments = async () => {

  return await axios.get(`${root}/getTreatments`);
}

export const deleteUserByAdmin = async (params, token) => {

  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  return await axios.delete(`${root}/deleteUser/${params}`, config);
}

export const createAppointment = async (dataAppointment, token) => {

  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

    return await axios.post(`${root}/app`, dataAppointment, config);
} 

export const createAppointmentAdm = async (dataAppointment, token) => {

  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

    return await axios.post(`${root}/appAdmin`, dataAppointment, config);
} 

export const CancelAppByUser = async (params, token) => {

  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  return await axios.delete(`${root}/cancelApp/${params}`, config);
}

export const CancelAppByAdmin = async (params, token) => {

  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  return await axios.delete(`${root}/cancelAppAdm/${params}`, config);
}

// export const searchUsersAdmin = async (searchUser, token) => {

//   let config = {
//     headers: { 
//       'Authorization': 'Bearer '+ token,  
//     }
//   };

//   return await axios.get(`${root}/searchAllUsersAdmin/${searchUser}`, config)
// }

export const addRoleByAdmin = async (body, token) => {

  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  return await axios.post(`${root}/user_roles`, body, config);
}