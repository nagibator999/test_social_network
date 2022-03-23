import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://barabulka.site:8080/api/',
});

export const usersAPI = {
  getUsers(pageSize, currentPage) {
    return instance
      .get(`user?size=${pageSize}&current=${currentPage}`)
      .then(response => {
        return response.data;
      })
      .catch(err => {
        console.log('hi');
        console.log(err.response);
      });
  },

  getPosts(userId) {
    return instance
      .get(`posts?size=20&current=1&user_id=${userId}`)
      .then(response => {
        return response.data;
      })
      .catch(err => {
        console.log('hi');
        console.log(err.response);
      });
  },

  getOneUser(userId) {
    debugger;
    return instance
      .get(`user/${userId}`)
      .then(response => {
        return response.data;
      })
      .catch(err => {
        console.log('hi');
        console.log(err.response);
      });
  },

  addPost(userId, postText, likeCount) {
    return instance
      .post(`http://barabulka.site:8080/api/posts`, {
        userId,
        postText,
        likeCount,
      })
      .then(response => {
        return true;
      })
      .catch(err => {
        console.log('hi');
        console.log(err.response);
      });
  },
};

export const authAPI = {
  auth() {
    return instance
      .get('auth')
      .then(response => {
        if (response.data.isLogined === true) {
          return response.data;
        }
      })
      .catch(err => {
        console.log('hi');
        console.log(err.response);
      });
  },
};
