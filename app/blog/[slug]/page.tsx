export const revalidate = 600;

interface Post {
  title: string;
  slug: string;
  content: string;
}

interface Props {
  params: { slug: string };
}

// Tell next.js which pages to static generate(pages that not change often)
// Add revalidate to tell next.js how often to re-generate the page
export const generateStaticParams = async () => {
  const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
    (res) => res.json()
  );

  return posts.map((post) => ({ slug: post.slug }));
};

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
