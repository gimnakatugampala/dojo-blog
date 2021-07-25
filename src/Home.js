import { useState } from "react"

const Home = () => {

    // let name = 'mario'
    const [name,setName] = useState('mario')
    const [age,setAge] = useState(25)

    const handleClick = () =>{
        // name = 'luigi'
        setName('luigi')
        setAge(30)
    }

    // const handleClickAgain = (name,e) =>{
    //     console.log('hello , ' + namse ,e.target)
    // }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button>
            {/* <button onClick={(e) => handleClickAgain('mario',e)}>Click Me Again</button> */}
        </div>
    )
}

export default Home
