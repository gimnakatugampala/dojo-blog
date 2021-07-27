import { useState,useEffect } from "react"
import BlogList from "./BlogList"
import useFetch from "./useFetch"

const Home = () => {

    // let name = 'mario'
    // const [name,setName] = useState('mario')
    // const [age,setAge] = useState(25)

    // const handleClick = () =>{
    //     // name = 'luigi'
    //     setName('luigi')
    //     setAge(30)
    // }

    // const handleClickAgain = (name,e) =>{
    //     console.log('hello , ' + namse ,e.target)
    // }



    // const handleDelete = (id) =>{
    //     const newBlogs = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newBlogs)
    // }

    // Changes in  every render


    const {data:blogs,isPending,error} = useFetch('http://localhost:8000/blogs')
   

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
            {/* <button onClick={() => setName('luigi')}>Change Name</button>
            <p>{name}</p> */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs!" /> */}
          
            {/* <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button> */}
            {/* <button onClick={(e) => handleClickAgain('mario',e)}>Click Me Again</button> */}
        </div>
    )
}

export default Home
