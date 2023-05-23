import { BlogType } from "src/interfaces/blog.interfaces"
export interface InputProps {
    type: string;
    label: string;
    state: string;
    setState: Function;
}