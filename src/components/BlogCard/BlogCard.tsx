import React from 'react'
import { BlogCardProps } from './BlogCard.props'
import moment from 'moment'
import { useRouter } from 'next/router'

const BlogCard = ({ item, onDelete }: BlogCardProps) => {

    const router = useRouter()
    const fromNow = (date: string) => {
        return moment(date).fromNow()
    }


    return <>
        <div className="col">
            <div className="card shadow-sm">
                <div className="card-body">
                    <p className="h5">{item.title}</p>
                    <p className='text-body'>{item.description}</p>
                    <div style={{ display: 'flex', gap: '20px', flexDirection: 'column', alignItems: 'start' }}>
                        <div className="btn-group">
                            <button type="button" onClick={() => router.push(`/${item.slug}`)} className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" onClick={() => router.push(`/editor/${item.slug}`)} className="btn btn-sm btn-outline-secondary">Edit</button>
                            <button type="button" onClick={() => onDelete(item.slug)} className="btn btn-sm btn-outline-secondary">Delete</button>
                        </div>
                        <div className='d-flex align-items-center justify-content-center'>
                            <small className="text-body-secondary">{fromNow(item.createdAt)} mins</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default BlogCard

