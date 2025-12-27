const STORAGE_KEY = 'mock_posts';

function loadPosts() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

function savePosts(posts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

let posts = loadPosts();

export const mockAPI = {
  get: () =>
    Promise.resolve({
      data: posts,
    }),

  post: (_, data) => {
    const newPost = {
      id: Date.now(),
      created_datetime: new Date().toISOString(),
      ...data,
    };

    posts = [newPost, ...posts];
    savePosts(posts);

    return Promise.resolve({ data: newPost });
  },

  patch: (url, data) => {
    const id = Number(url.replace('/', ''));

    posts = posts.map((post) =>
      post.id === id ? { ...post, ...data } : post
    );

    savePosts(posts);
    return Promise.resolve({ data });
  },

  delete: (url) => {
    const id = Number(url.replace('/', ''));

    posts = posts.filter((post) => post.id !== id);
    savePosts(posts);

    return Promise.resolve({});
  },
};
