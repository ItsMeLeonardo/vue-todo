export const getTodos = async () => {
  const url = 'https://jsonplaceholder.typicode.com/todos';

  const res = await fetch(url);
  const data = await res.json();
  return data;
};
