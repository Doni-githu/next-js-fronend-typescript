import axios from "axios";
import { BlogType } from "src/interfaces/blog.interfaces";


export const BlogService = {
    async getAll() {
        const { data } = await axios.get<BlogType[]>('http://localhost:8080/api')
        return data
    }
}
