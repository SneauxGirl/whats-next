export const BlogPost = async ({params}) => {
    const { id } = await params; //Next.js 15 and later - required for params because it's a promise

    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response => response.json());

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}

export default BlogPost;