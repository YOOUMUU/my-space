export const dynamic = 'force-dynamic';

interface Post {
  title: string;
  slug: string;
  content: string;
}

interface Props {
  params: { slug: string };
}

const BlogPostPage = async ({ params }: Props) => {
  const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
    (res) => res.json()
  );
  const post = posts.find((post) => post.slug === params.slug);

  return (
    <div className="container">
      <h1 className="title">{post?.title}</h1>
      <p>{post?.content}</p>
    </div>
  );
};

export default BlogPostPage;
