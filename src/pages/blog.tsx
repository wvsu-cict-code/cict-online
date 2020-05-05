import React from 'react'
import { useRouteData } from 'react-static'
import { Post } from 'types'

export default () => {
  const { posts }: { posts: any } = useRouteData()

  return (
    <div>
      <h1>It's blog time.</h1>
      <br />
      All Posts:
      <ul>
        {posts && posts.items.map((post:Post) => (
          <li key={post.guid}>
            <a href={post.link} target="_blank">{post.title}</a>            
          </li>
        ))}
      </ul>
    </div>
  )
}
