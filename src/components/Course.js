import React from 'react'


function Course({post}) {

  function getSections(sections) {
    return sections.map(function (section){
      if (section.sectionType == "Lec") {
        return (
        <div>
          <p>Lecture: {JSON.stringify(section.instructors)}</p>
        </div>
      )
      } else {
        return (
          <div>
            <p>Section: {JSON.stringify(section.instructors)}</p>
          </div>
        )
      }
    })
  }

  return (
    <div key="{post.courseNumber}" className="courseInfo">
        <p>Course #/Title: {post.courseNumber}/{post.courseTitle}</p>
        <p>{getSections(post.sections)}</p>
    </div>
  )
}

export default Course