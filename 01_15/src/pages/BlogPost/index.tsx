import {useParams, useSubmit} from "react-router-dom";
import {useEffect, useState} from "react";

export default function BlogPost() {

    const {id} = useParams<{id: string}>()
    const [post, setPosts] = useState<Post[]| null>(null)
    const [loading, setLoadingPost] = useState<boolean>(false)
    const [ErrorPost, setErrorPost] = useState<string | null>(null)

    useEffect(()=>{
        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
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
    },[id])

    // if (!id) {
    //     return redirect('/blog')
    // }

    return (
    <div>
        {LoadingPost
        ? (<p>Loading...</p>)
        }
        <h1>
            Blog Post
        </h1>
    </div>
    )
}