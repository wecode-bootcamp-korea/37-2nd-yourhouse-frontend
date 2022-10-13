const BASE_URL = 'http://10.58.52.78:3000';
const API = {
  login: `${BASE_URL}/user/auth`, // 김지원
  searchPosts: `${BASE_URL}/search/list`, // 김지원
  searchProducts: `${BASE_URL}/search/product`, // 장문정
  searchRelated: `${BASE_URL}/search?post=`, // 김지원
  comment: `${BASE_URL}/comment`, // 양석문
  detail: `${BASE_URL}/post`, // 양석문
  posting: `${BASE_URL}/posting`, //장문정
  list: `${BASE_URL}/post`,
  like: `${BASE_URL}/like`,
  follow: `${BASE_URL}/post/follow`,
  myProfile: `${BASE_URL}/profile`,
  myContents: `${BASE_URL}/profile/post`,
  myLikes: `${BASE_URL}/profile/like`,
};
export default API;
