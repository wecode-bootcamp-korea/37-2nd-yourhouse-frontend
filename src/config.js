const BASE_URL = 'http://3.35.54.156:3500';
// const BASE_URL = 'http://10.58.52.239:3500';
const API = {
  login: `${BASE_URL}/user/auth`, // 김지원
  searchPosts: `${BASE_URL}/search/list`, // 김지원
  searchProducts: `${BASE_URL}/search/product`, // 장문정
  searchRelated: `${BASE_URL}/search?post=`, // 김지원
  comment: `${BASE_URL}/comment`, // 양석문
  detail: `${BASE_URL}/post`, // 양석문
  posting: `${BASE_URL}/post`, //장문정
  list: `${BASE_URL}/post`,
  like: `${BASE_URL}/user/like`,
  follow: `${BASE_URL}/user/follow`,
  postFollow: `${BASE_URL}/post/follow`,
  myProfile: `${BASE_URL}/profile`,
  myContents: `${BASE_URL}/profile/post`,
  myLikes: `${BASE_URL}/profile/like`,
};
export default API;
