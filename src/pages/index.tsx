import React from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import { BlogType } from '../interfaces/blog.interfaces'
import { BlogService } from '../service/blog.service'

interface HomePageProps {
  blogs: BlogType[]
}

const Home: NextPage<HomePageProps> = ({ blogs }) => {
  return (
    <div>MainPage</div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const blogs = await BlogService.getAll()

  console.log(blogs)

  return {
    props: {
      blogs
    }
  }
}

export default Home;
