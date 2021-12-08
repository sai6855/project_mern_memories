import * as api from "../api/index.js";

export const getPosts = () => async (_, setState) => {
  try {
    const { data } = await api.fetchPosts();

    setState(() => data, ["posts"]);
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch, setState) => {
  try {
    const { data } = await api.createPost(post);
    setState(
      (store, posts) => {
        return [...posts, data];
      },
      ["posts"]
    );
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch, setState) => {
  try {
    const { data } = await api.updatePost(id, post);

    setState(
      (_, posts) => posts.map((post) => (post._id === id ? data : post)),
      ["posts"]
    );
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch, setState) => {
  try {
    const { data } = await api.likePost(id);

    setState(
      (store, posts) => posts.map((post) => (post._id === id ? data : post)),
      ["posts"]
    );
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch, setState) => {
  try {
    await api.deletePost(id);

    setState(
      (store, posts) => {
        return posts.filter((post) => post._id !== id);
      },
      ["posts"]
    );
  } catch (error) {
    console.log(error.message);
  }
};
