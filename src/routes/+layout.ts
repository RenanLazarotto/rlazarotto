/** @type {import('./$types').PageLoad} */
export async function load({ url, fetch }) {
  const postsResponse = await fetch("/api/posts");

  let posts: Types.Post[] = await postsResponse.json();

  let postsByEar: Types.PostsByYear = {};

  posts.forEach((post, index) => {
    if (post.published) {
      post.published = new Date(post.published);
    }

    if (post.updated) {
      post.updated = new Date(post.updated);
    }

    posts[index] = post;
  });

  posts.reduce((acc, post) => {
    const ano: number = post.published.getFullYear();
    const mes = post.published.toLocaleString("pt-BR", { month: "long" });

    if (!acc[ano]) {
      acc[ano] = [];
    }

    acc[ano].push({
      title: post.title,
      slug: post.slug,
      published: post.published,
    });

    return acc;
  }, postsByEar);

  return {
    url: url.pathname,
    posts: postsByEar,
  };
}
