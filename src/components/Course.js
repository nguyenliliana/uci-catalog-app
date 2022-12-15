import React from 'react'

function Course({post}) {
  return (
    <div key="{post.courseNumber}" className="courseInfo">
        <p>Course #/Title: {post.courseNumber}/{post.courseTitle}</p>
    </div>
  )
}

export default Course