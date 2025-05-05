export const baseUrl = `http://localhost:3000/api`;

export const token = () => localStorage.getItem("token");
export const request = {
  blog: `${baseUrl}/blog`,
  login: `${baseUrl}/login`,
  register: `${baseUrl}/register`,
  getAllPublishedBlog: `${baseUrl}/blog/getAllPublishedBlog`,
  getAllBlogByUserId: `${baseUrl}/blog/getAllBlogByUserId`,
};
