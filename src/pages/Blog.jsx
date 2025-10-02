import { useState, useEffect } from "react";
import axios from "axios";

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const users = ["ben", "thepracticaldev", "cassidoo"];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const allResponses = await Promise.all(
          users.map((user) =>
            axios.get(`https://dev.to/api/articles?username=${user}`)
          )
        );

        const mergedPosts = allResponses.flatMap((res) => res.data);


        setPosts(mergedPosts);
        setLoading(false);
      } catch (err) {
        setError("Failed to load blog posts.");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="flex mt-10 flex-col items-center w-full min-h-screen bg-black text-white p-6">

      <h1 className="text-3xl font-bold text-violet-400 mb-6">Tech Blog</h1>
      <p className="text-gray-400 mb-8 text-center w-3/4 md:w-1/2">
        A curated feed of articles from top developers on Dev.to.
      </p>

      {loading && <p className="text-gray-500">Loading posts...</p>}
      {error && <p className="text-red-400">{error}</p>}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col justify-between bg-gray-900 border border-violet-500 rounded-lg shadow-lg p-5 hover:scale-105 transition"
          >
            <h2 className="text-xl font-semibold text-violet-300 mb-2">
              {post.title}
            </h2>
            <p className="text-sm text-gray-400 mb-3">
              {post.description || "No description available"}
            </p>
            <p className="text-xs text-gray-500 mb-4">
              {new Date(post.published_at).toLocaleDateString()} •
              {post.user.name}
            </p>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-violet-500 text-white rounded hover:bg-violet-600 transition self-start"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
