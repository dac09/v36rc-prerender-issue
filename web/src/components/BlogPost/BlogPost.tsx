import { Link, routes } from '@redwoodjs/router'

interface Props {
  post: { id: string; title: string; body: string; createdAt: string }
}

const BlogPost = ({ post }: Props) => {
  return (
    <article>
      <header className="mt-4">
        <p className="text-sm">
          {new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }).format(new Date(post.createdAt))}
        </p>
        <h2 className="mt-2 text-xl font-semibold">
          <Link
            className="hover:text-blue-600"
            to={routes.blogPost({ id: post.id })}
          >
            {post.title}
          </Link>
        </h2>
      </header>
      <div className="mt-2 mb-4 font-light text-gray-900">{post.body}</div>
    </article>
  )
}

export default BlogPost
