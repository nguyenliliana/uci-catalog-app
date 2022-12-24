import React from 'react'


function Course({post}) {

  function getSections(sections) {
    return sections.map(function (section){
      if (section.sectionType == "Lec") {
        return (
        <div className="lecture">
          <div className="lecture-instructors">
            <p> {section.sectionType}: </p>
            {section.instructors.map(i => <p> {i}</p>)}
          </div>
          <div className="section-info">
            <p className="section-code">   {section.sectionCode} </p>
            <p className="section-meeting"> {section.meetings[0].days} {section.meetings[0].time} </p>
            <p className="section-location"> {section.meetings[0].bldg} </p>
            <p className="section-capacity"> {section.numCurrentlyEnrolled.totalEnrolled}/{section.maxCapacity}</p>
          </div>
        </div>
      )
      } else {
        return (
          <div className="discussion">
            {section.instructors.map(i => <p>{section.sectionType}: {i}</p>)}
            
          </div>
        )
      }
    })
  }

  return (
    <div key="{post.courseNumber}" className="courseInfo">
        <p>Course #/Title: {post.courseNumber}/{post.courseTitle}</p>
        <p className="sections">{getSections(post.sections)}</p>
    </div>
  )
}

export default Course