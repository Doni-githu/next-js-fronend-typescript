import React, { useState } from 'react'
import Input from '../components/Input/Input'
import { BlogService } from '../service/blog.service'
import { useRouter } from 'next/router'

function Add() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [experct, setExcerpt] = useState('')
    const router = useRouter()
    const AddBlog = () => {
        if (!title || !description || !experct) {
            alert('All fields are required')
            return
        }

        const blog = {
            title,
            description,
            excerpt: experct
        }


        BlogService.addBlog(blog as object)
            .then((res) => {
                router.push('/')
            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <div style={{ textAlign: 'center', width: '70%', margin: '0 auto' }}>
            <p className='fs-1'>Add</p>
            <form onSubmit={(e) => e.preventDefault()}>
                <Input type={"text"} label={'Title'} state={title} setState={setTitle} />
                <Input type={"text"} label={'Description'} state={description} setState={setDescription} />
                <Input type={"text"} label={'Excerpt'} state={experct} setState={setExcerpt} />
                <button onClick={AddBlog} className='btn btn-primary'>Add</button>
            </form>
        </div>
    )
}
export default Add