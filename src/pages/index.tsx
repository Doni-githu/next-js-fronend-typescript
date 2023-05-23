import React, { useState } from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import { BlogType } from '../interfaces/blog.interfaces'
import { BlogService } from '../service/blog.service'
import BlogCard from '../components/BlogCard/BlogCard'

interface HomePageProps {
  blogs: BlogType[]
}


export const getServerSideProps: GetServerSideProps = async () => {
  const blogs = await BlogService.getAll()

  return {
    props: {
      blogs
    }
  }
}

const Home: NextPage<HomePageProps> = ({ blogs }) => {
  const [data, setData] = useState(blogs)
  const onDeleteHandler = async (slug: string) => {
    await BlogService.deleteBlog(slug)
    const newData = blogs.filter(c => c.slug !== slug)
    setData(newData)
  }
  return (
    <>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" style={{ paddingTop: '2rem' }}>
        {data ? data.map((item) => (
          <BlogCard item={item} key={item._id} onDelete={onDeleteHandler} />
        )) : <p className='fs-1 text-center'>Loading...</p>}
      </div>
    </>
  )
}



export default Home;
