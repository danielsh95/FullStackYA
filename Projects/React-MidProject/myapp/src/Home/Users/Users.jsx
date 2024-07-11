import { useEffect } from "react"
import { useState } from "react"
import { getData } from "../../Tools/Utils"
import UserComp from "./User"
import TodosComp from "../Todos/Todos"
import NewTodoComp from "../Todos/NewTodo"
import PostsComp from "../Posts/Posts"
import NewPostComp from "../Posts/NewPost"
import AddUserComp from "./AddUser"

const URL_USER = 'https://jsonplaceholder.typicode.com/users'
const URL_TODOS = 'https://jsonplaceholder.typicode.com/todos'
const URL_POSTS = 'https://jsonplaceholder.typicode.com/posts'

function UsersComp() {

  const [users, setUsers] = useState([])
  const [todos, setTodos] = useState([])
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('')
  const [usersFilter, setUsersFilter] = useState([])
  const [idShowTodosPost, setIdShowTodosPost] = useState(-1)
  const [isShowNewTodo, setIsShowNewTodo] = useState(false)
  const [isShowNewPost, setIsShowNewPost] = useState(false)
  const [isShowNewUser, setIsShowNewUser] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const allUsers = await getData(URL_USER)
      setUsers(allUsers)
      setUsersFilter(allUsers)

      const allTodos = await getData(URL_TODOS)
      setTodos(allTodos)

      const allPosts = await getData(URL_POSTS)
      setPosts(allPosts)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = () => {
      searchFilter(search)
    }
    fetchData()
  }, [search, users])
  const setCompletedTodo = (id) => {
    setTodos(todos.map(prevTodo =>
      prevTodo.id != id ? prevTodo : { ...prevTodo, completed: true }
    ))
  }

  const addNewTodo = (title) => {
    const data = {
      'userId': idShowTodosPost,
      'id': todos.length + 1,
      'title': title,
      'completed': false
    }

    setTodos([...todos, data])
  }

  const addNewPost = (title, body) => {
    const data = {
      'userId': idShowTodosPost,
      'id': posts.length + 1,
      'title': title,
      'body': body
    }

    setPosts([...posts, data])
  }

  const searchFilter = (text) => {
    const result = users.filter(user => user.name.includes(text) || user.email.includes(text))
    setUsersFilter(result)
  }

  const updateUser = (user) => {
    setUsers(prevUsers =>
      prevUsers.map(prevUser =>
        prevUser.id === user.id ? user : prevUser
      )
    );

    setUsersFilter(prevUsers =>
      prevUsers.map(prevUser =>
        prevUser.id === user.id ? user : prevUser
      )
    );
    console.log(usersFilter);
  }

  const deleteUser = (userId) => {
    setUsers(prevUsers =>
      prevUsers.filter(user => user.id !== userId)
    );

    setUsersFilter(prevUsers =>
      prevUsers.filter(user => user.id !== userId)
    );
  }
  const setIdForShowTodosPost = (id) => {
    setIdShowTodosPost(id)
  }

  const addNewUser = (name, email) => {
    const data = {
      'id': users.length + 1,
      'name': name,
      'email': email,
      "address": {
        "street": "",
        "city": "",
        "zipcode": ""
      }
    }
    console.log(data);
    setUsers([...users, data])
  }

  const isCompletedAllTasks = (userId) => {
    const todosByUserId = todos.filter(todo => todo.userId == userId)
    var isAllcompleted = true
    const len = todosByUserId.filter(todo => todo.completed == false).length
    if (len > 0)
      isAllcompleted = false

    return isAllcompleted
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'start' }}>
      {/* Users: */}
      <div style={{ border: '5px solid black', width: '350px', borderRadius: '25px' }}>

        <div style={{ margin: '8px', overflowY: "scroll", maxHeight: "600px" }}>
          <div>
            Search: <input type="text" onChange={e => setSearch(e.target.value)} style={{ width: '150px' }} />
            <input style={{ "backgroundColor": '#eeb570', float: 'right' }}
              type="button" value={'Add'} onClick={() => setIsShowNewUser(true)} />
          </div>
          {
            usersFilter.map((user, index) => {
              return <div key={index}>
                <UserComp borderColor={isCompletedAllTasks(user.id) ? 'green' : 'red'} user={user}
                  callback={{ updateUser, deleteUser, setIdForShowTodosPost }} /> <br />
              </div>
            })
          }
        </div>

      </div>

      {/* Todos: */}
      {!isShowNewUser &&
        <div>
          {idShowTodosPost != -1 && !isShowNewTodo &&

            <div>
              {
                <TodosComp id={idShowTodosPost} todos={todos} setCompletedTodo={setCompletedTodo} ShowNewUser={() => setIsShowNewTodo(true)} />
              }
            </div>
          }

          {/* new todo: */}
          {
            isShowNewTodo &&
            <div>
              {
                <NewTodoComp userId={idShowTodosPost} ShowTodos={() => setIsShowNewTodo(false)} addNewTodo={addNewTodo} />
              }
            </div>
          }

          {/* Posts: */}
          {idShowTodosPost !== -1 && !isShowNewPost &&
            <div>
              <PostsComp id={idShowTodosPost} posts={posts} ShowNewPost={() => setIsShowNewPost(true)} />
            </div>
          }

          {/* new todo: */}
          {
            isShowNewPost &&
            <div>
              {
                <NewPostComp userId={idShowTodosPost} ShowPosts={() => setIsShowNewPost(false)} addNewPost={addNewPost} />
              }
            </div>
          }
        </div>
      }
      {isShowNewUser &&
        <div>
          <AddUserComp addNewUser={addNewUser} ShowOffNewUser={() => setIsShowNewUser(false)} />
        </div>
      }

    </div>
  )
}
export default UsersComp
