// this is api features page
import axios from 'axios';
// auth based Routes

export const login = async function (email, password) {
  try {
    const route = '/api/v1/users/login';
    const data = { email, password };
    const user = await axios.post(route, data);
    if (user.data.status === 'success') {
      console.log('okay');
      return { ...user.data };
    }
  } catch (err) {
    console.log('not okay');
  }
};

export const signup = async function (data) {
  try {
    const route = '/api/v1/users/signup';
    const filteredData = {
      name: data.name,
      email: data.email,
      password: data.password,
      passwordConfirm: data.passwordConfirm
    };
    const newUser = await axios.post(route, filteredData);
    if (newUser.data.status === 'success') {
      return { ...newUser.data };
    }

  } catch (err) {
    console.log('failed to signup');
  }
};

export const getAllUser = async function () {
  try {
    const route = '/api/v1/users';
    const allUsers = await axios.get(route);
    console.log('all users receved', allUsers);
  } catch (err) {
    console.log('failed to get all users');
    console.log(err);
  }
};

export const sendQuickReport = async function(formData) {
  try {

    const route = '/api/v1/report';
    const filteredData = {
      name: formData.name,
      description: formData.desc,
      contact: formData.contact,
      category: formData.category,
      location: 'test',
    }
    const data = await axios.post(route, filteredData);
    return data.data;
  } catch (err) {
    console.log(err);
  }
}

export const getQuickReport = async function() {
  const route = '/api/v1/report';
  const data = await axios.get(route);
  return data.data;
}