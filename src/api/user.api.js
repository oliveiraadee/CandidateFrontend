
import axios from 'axios';

axios.defaults.headers.common["Content-Type"] = 'application/json';

export const getUser = async (id) => {
    return await axios.get(`http://localhost:8080/users/${id}`);
};

export const createUser = async (data) => {
    console.log(data)
    return await axios.post(`http://localhost:8080/users`, data, {
        headers: {
          // 'application/json' is the modern content-type for JSON, but some
          // older servers may use 'text/json'.
          // See: http://bit.ly/text-json
          'content-type': 'application/json',
          'access-control-allow-origin': '*',
        },
        credentials: 'same-origin'
      });
};

export const update = async (id, data) => {
    return await axios.put(`http://localhost:8080/users/${id}`, data);
};

export const deleteUser = async (id) => {
    return await axios.delete(`http://localhost:8080/users/${id}`);
};