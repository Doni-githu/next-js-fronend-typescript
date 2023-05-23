import axios from "axios";
import { BlogType } from "src/interfaces/blog.interfaces";



export const BlogService = {
    async getAll() {
        const { data } = await axios.get<BlogType[]>(`http://localhost:8080/api/blog`)
        return data
    },
    async addBlog(dto: object) {
        const { data } = await axios.post<object>(`http://localhost:8080/api/blog`, dto)
        return data
    },
    async getBySlug(slug: string) {
        const { data } = await axios.get<BlogType>(`http://localhost:8080/api/blog/${slug}`)
        return data
    },
    async deleteBlog(slug: string) {
        const { data } = await axios.delete(`http://localhost:8080/api/blog/${slug}`)
        return data
    },
    async editBlog(slug: string, blog: object) {
        const { data } = await axios.put(`http://localhost:8080/api/blog/${slug}`, blog)
        return data
    }
}
