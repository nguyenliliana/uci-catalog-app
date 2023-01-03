import React from 'react'


function Course({post, checked}) {

  function getSections(sections) {
    const checkedOnly = checked

    return sections.map(function (section){
        if (checkedOnly & section.status == "FULL") {
          return (
            <div></div>
          )
        }
        else if (section.sectionType === "Lec") {
          return (
          <div className="lecture">
            <div className="lecture-instructors">
              <p> {section.sectionType}: &nbsp;</p>
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
              <div className="lecture-instructors">
                <p> {section.sectionType}: &nbsp;</p>
                {section.instructors.map(i => <p>{i}</p>)}
              </div>
              <div className="section-info">
                <p className="section-code">   {section.sectionCode} </p>
                <p className="section-meeting"> {section.meetings[0].days} {section.meetings[0].time} </p>
                <p className="section-location"> {section.meetings[0].bldg} </p>
                <p className="section-capacity"> {section.numCurrentlyEnrolled.totalEnrolled}/{section.maxCapacity}</p>
              </div>
            </div>
          )
        }
      
    })
  }

  return (
    <div key="{post.courseNumber}" className="courseInfo">
        <p className= "courseTitle">{post.courseNumber} {post.courseTitle}</p>
        <p className="sections">{getSections(post.sections)}</p>
    </div>
  )
}

export default Course