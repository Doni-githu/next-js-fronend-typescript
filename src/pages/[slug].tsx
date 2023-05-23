import React from 'react'
import { useRouter } from "next/router"
import { BlogService } from '../service/blog.service'
import { GetServerSideProps } from 'next'
import { BlogType } from '../interfaces/blog.interfaces'
import moment from "moment"
export default function DetailPost({ blog }: DetailType) {
    return (
        <div className='text-center'>
            <h1>{blog.title}</h1>
            <p>{blog.description}</p>
            <p>{blog.excerpt}</p>
            <div className='d-flex justify-content-center gap-2'>
                <p>When created {moment(blog.createdAt).fromNow()}</p>
                <p>When updated {moment(blog.updatedAt).fromNow()}</p>
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps<DetailType> = async ({ query }) => {
    const blog = await BlogService.getBySlug(query.slug as string)
    return {
        props: {
            blog
        }
    }
}


interface DetailType {
    blog: BlogType
}