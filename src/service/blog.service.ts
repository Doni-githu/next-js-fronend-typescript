import axios from "axios";
import { BlogType } from "src/interfaces/blog.interfaces";



export const BlogService = {
    async getAll() {
        const { data } = await axios.get<BlogType[]>(`https://nestjs-backend.onrender.com/api/blog`)
        return data
    },
    async addBlog(dto: object) {
        const { data } = await axios.post<object>(`https://nestjs-backend.onrender.com/api/blog`, dto)
        return data
    },
    async getBySlug(slug: string) {
        const { data } = await axios.get<BlogType>(`https://nestjs-backend.onrender.com/api/blog/${slug}`)
        return data
    },
    async deleteBlog(slug: string) {
        const { data } = await axios.delete(`https://nestjs-backend.onrender.com/api/blog/${slug}`)
        return data
    },
    async editBlog(slug: string, blog: object) {
        const { data } = await axios.put(`https://nestjs-backend.onrender.com/api/blog/${slug}`, blog)
        return data
    }
}
