export const api = {
  post: (id) => `posts/${id}`,
  posts: (limit) => `posts/${limit && `?_limit=${limit}`}`,
};
