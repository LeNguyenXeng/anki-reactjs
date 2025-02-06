import instance from "./config";

async function getPosts(per_page) {
  const res = await instance.get(`/posts?per_page=${per_page}`);  
  return res.data;
}


async function getPostsWithOffset(per_page, offset) {
    const res = await instance.get(`posts?per_page=${per_page}&offset=${offset}`);
    return res.data;
}
export { getPostsWithOffset, getPosts }

