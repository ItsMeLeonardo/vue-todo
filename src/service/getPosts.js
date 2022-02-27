export const getPosts = async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';

  const res = await fetch(url);
  const data = await res.json();
  return data;
};
