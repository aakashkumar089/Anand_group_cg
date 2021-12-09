import axios from 'axios';

export const register = data => {
  // console.log(data);
  var bodyFormData = new FormData();
  bodyFormData.append('token', data.token);
  bodyFormData.append('tag', data.tag);
  bodyFormData.append('name', data.name);
  bodyFormData.append('email', data.email);
  bodyFormData.append('mobile_no', data.mobile_no);
  bodyFormData.append('colony', data.colony);
  bodyFormData.append('house_no', data.house_no);
  bodyFormData.append('old_address', data.old_address);
  bodyFormData.append('password', data.password);
  bodyFormData.append('usertype', data.usertype);
  bodyFormData.append('firebasetoken', data.firebasetoken);

  return axios({
    method: 'post',
    url: 'https://niteshsharma.co.in/AnandGroupCgapp/Apiregister.php',
    data: bodyFormData,
    headers: {'Content-Type': 'multipart/form-data'},
  });
};

export const userlogin = data => {
  //  console.log(data);
  var bodyFormData = new FormData();
  bodyFormData.append('user', data.user);
  bodyFormData.append('email', data.email);
  bodyFormData.append('password', data.password);
  bodyFormData.append('token', data.token);
  bodyFormData.append('tag', data.tag);
  return axios({
    method: 'post',
    url: 'https://niteshsharma.co.in/AnandGroupCgapp/Api/login.php',
    data: bodyFormData,
    headers: {'Content-Type': 'multipart/form-data'},
  });
};

export const userhome = ({pageParam = 1, queryKey}) => {
  const email = queryKey[1];
  const password = queryKey[2];
  return axios.get(
    `https://niteshsharma.co.in/AnandGroupCgapp/Api/home.php?user=${email}&password=${password}&token=HAMAR-SOCIETY&tag=userhome`,
  );
};

export const service = ({pageParam = 1, queryKey}) => {
  const email = queryKey[1];
  const password = queryKey[2];
  return axios.get(
    `https://niteshsharma.co.in/AnandGroupCgapp/Api/services.php?user=${email}&password=${password}&token=HAMAR-SOCIETY&tag=service`,
  );
};

export const directory = ({pageParam = 1, queryKey}) => {
  const email = queryKey[1];
  const password = queryKey[2];
  return axios.get(
    `https://niteshsharma.co.in/AnandGroupCgapp/Api/dir.php?user=${email}&password=${password}&token=HAMAR-SOCIETY&tag=service`,
  );
};

export const fetchTodos = () => {
  return axios.get('https://jsonplaceholder.typicode.com/todos');
};

export const fetchTodo = ({pageParam = 1, queryKey}) => {
  const todoId = queryKey[1];
  return axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
};
