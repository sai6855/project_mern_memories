import * as api from "../api/index.js";

export const getPosts = () => async (setState) => {
  try {
    const { data } = await api.fetchPosts();

    setState(() => data, ["posts"]);
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (setState) => {
  try {
    const { data } = await api.createPost(post);
    setState(
      (posts) => {
        return [...posts, data];
      },
      ["posts"]
    );
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (setState) => {
  try {
    const { data } = await api.updatePost(id, post);

    setState(
      (posts) =>
        posts.map((post) => (post._id === id ? { ...data, ...post } : post)),
      ["posts"]
    );
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (setState) => {
  try {
    const { data } = await api.likePost(id);

    setState((posts) => posts.map((post) => (post._id === id ? data : post)), [
      "posts",
    ]);
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (setState) => {
  try {
    await api.deletePost(id);

    setState(
      (posts) => {
        return posts.filter((post) => post._id !== id);
      },
      ["posts"]
    );
  } catch (error) {
    console.log(error.message);
  }
};
