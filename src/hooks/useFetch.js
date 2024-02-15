import {useState,useEffect} from 'react'

const useFetch =(url)=>{
    const[data,setData] = useState([])

    useEffect(()=>{
        fetch(url).then((response)=>{
            response.json().then((result)=>{
                setData(result)
            })
        })
    },[url])

    return data
}

export default useFetch