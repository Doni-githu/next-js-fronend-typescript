import Input from '@/src/components/Input/Input'
import { BlogType } from '@/src/interfaces/blog.interfaces'
import { BlogService } from '@/src/service/blog.service'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

export const getServerSideProps: GetServerSideProps<EditType> = async ({ query }) => {
    const blog = await BlogService.getBySlug(query.slug as string)

    return {
        props: {
            blog
        }
    }
}

interface EditType {
    blog: BlogType
}

export default function edit({ blog }: EditType) {
    const router = useRouter()
    const [title, setTitle] = useState(blog.title)
    const [description, setDescription] = useState(blog.description)
    const [excerpt, setExcerpt] = useState(blog.excerpt)
    const EditBlog =  () => {
        const changingBlog = {
            title,
            description,
            excerpt
        }
        BlogService.editBlog(blog.slug as string, changingBlog)
            .then(() => {
                router.push('/')
            })
    }

    return (
        <div style={{ textAlign: 'center', width: '70%', margin: '0 auto' }}>
            <p className='fs-1'>Edit</p>
            <form onSubmit={(e) => e.preventDefault()}>
                <Input type={"text"} label={'Title'} state={title} setState={setTitle} />
                <Input type={"text"} label={'Description'} state={description} setState={setDescription} />
                <Input type={"text"} label={'Excerpt'} state={excerpt} setState={setExcerpt} />
                <button onClick={EditBlog} className='btn btn-primary'>Edit</button>
            </form>
        </div>
    )
}
