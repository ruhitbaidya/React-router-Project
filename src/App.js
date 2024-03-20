import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Onlytext from './components/Onlytext';
import About from './components/About/About';
import User from './components/User/User';
import Post from './components/Post/Post';
import Contact from './components/Contact/Contact';
import UserDetails from './components/User/UserDetails';
import PostDetails from './components/Post/PostDetails';

const router = createBrowserRouter([
  {
    path : "/",
    element : <Home></Home>,
    children : [
      {
        path : "/",
        element : <Onlytext></Onlytext>
      },
      {
        path : "/about",
        element : <About></About>
      },
      {
        path : "/user",
        loader : ()=> fetch("https://jsonplaceholder.typicode.com/users"),
        element : <User></User>
      },
      {
        path: "/user/:userId",
        loader : ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element : <UserDetails></UserDetails>
      },
      {
        path : "/post",
        loader : ()=> fetch("https://jsonplaceholder.typicode.com/posts"),
        element : <Post></Post>
      },
      {
        path : "post/:postId",
        loader : ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element : <PostDetails></PostDetails>
      },
      {
        path : "/contact",
        element : <Contact></Contact>
      }
    ]
  }
])

function App() {
  return (
   <>
    <RouterProvider router={router}></RouterProvider>
   </>
  );
}

export default App;
