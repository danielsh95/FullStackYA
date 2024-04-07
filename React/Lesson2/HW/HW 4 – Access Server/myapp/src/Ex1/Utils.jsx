import axios from 'axios'

const getUserFullData = async (userId) => {
    const url_user = 'https://jsonplaceholder.typicode.com/users/'
    const url_todos = 'https://jsonplaceholder.typicode.com/todos'
    const url_posts = 'https://jsonplaceholder.typicode.com/posts'

    const { data: user } = await axios.get(url_user + userId);
    const name = user.name;
    const email = user.email;

    const { data: todos } = await axios.get(url_todos + `?userId=${userId}&_limit=5`);
    const todosTitles = todos.map(todo => todo.title)

    const { data: posts } = await axios.get(url_posts + `?userId=${userId}&_limit=1`);
    const postsTitle = posts.map(post => post.title)

    return { name, email, todosTitles, postsTitle }
}

export { getUserFullData }