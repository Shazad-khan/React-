import axios from 'axios'
import React, {useState, useEffect} from 'react'

function DataFetching() {
    const [post, setPost] = useState([])
    const [id, setId] = useState(1)
    const [idFromButtonClick, setidFromButtonClick] = useState(1)
    
    const handelClick =()=>{
        setidFromButtonClick(id)
    }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            console.log(res)
            setPost(res.data)
        }, [])
        .catch(err =>{
            console.log(err)
        })
    }, [idFromButtonClick])
  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)}></input>
        <button type='button' onClick={handelClick}>Fetch post</button>
        <div>{post.title}</div>

        {/* <ul>
            {posts.map(post =>(
                <li key={post.id}>{post.title}</li>
            ))} */}
        {/* </ul> */}
    </div>
  )
}

export default DataFetching