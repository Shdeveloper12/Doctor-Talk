import { Suspense, useEffect, useState } from 'react';

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/blogData.json')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      
  }, []);

  return (
    
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Blogs</h1>
      <p className='text-center mb-10'>Let's explore some basic concept that will make you a good developer</p>
     
        {posts.map((item, index) => (
        <div
          key={index}
          className="mb-6 p-6 rounded-xl shadow-md bg-white border border-gray-200"
        >
          <h2 className="text-xl font-semibold mb-2">*{item.question}</h2>
          <p><span className='font-bold'>Answere:</span> {item.answer}</p>
        </div>
      ))}
      
      
    </div>
  );
}

export default Blog;
