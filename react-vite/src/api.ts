const BASE = 'https://jsonplaceholder.typicode.com/posts'

export const api = {
    getAllPosts: async () => {
        let response = await fetch(`${BASE}/posts`);
        let json = await response.json();
        return json;
    },
    addNewPost: async (title: string, body: string, userId: number) => {
        let response = await fetch(`${BASE}/posts`, {
        method: 'POST',
        body: JSON.stringify({ body, title, userId }),
        headers: { 'Content-Type': 'aplication/json' }
      });
      let json = await response.json();
      return json;
    }
}