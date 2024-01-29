import {useEffect, useState} from "react"
import {Post} from "../../types/post.ts"
import { Link } from "react-router-dom"

export default function Blog(){
    const [posts, setPosts] = useState<Post[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(()=>{
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response)=>response.json() as Promise<Posts[]>)
            .then((data)=>{
                setPosts(data)
            })
            .catch((error)=>{
                setError(error.message)
            })
            .finally(()=>{
                setLoading(false)
            })
    },[])

    return (
        <div>
            <h1>Blog</h1>
            {loading
                ?(
                    <p>Loading...</p>
                )
                :error
                    ?(<p>{error}</p>)
                    :(
                        <div>{
                            posts.map((post) => (
                                <div key={posts.id}>
                                    <h2>{post.title}</h2>
                                    <p>{post.body}</p>
                                    <Link to={`/blog/{$post.id}`}>Read more</Link>
                                </div>
                            ))}</div>
                    )
            }
        </div>
    )
}