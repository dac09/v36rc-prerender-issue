import { Link, routes } from '@redwoodjs/router'

type BlogPostPageProps = {
  id: number
}

import BlogPostCell from "src/components/BlogPostCell";

const BlogPostPage = ({ id }: BlogPostPageProps) => 
<BlogPostCell id={id} />


export default BlogPostPage
