import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Course from "./Course"


function GetClassSchedule() {
 const [posts,setPosts] = useState([])
 const [dept, setDept] = useState("")
 const [deptFromButtonClick, setDeptFromButtonClick] = useState(1)
 const [courseNum, setCourseNum] = useState("")
 const [courseNumFromButtonClick, setCourseNumFromButtonClick] = useState(1)
 const [term, setTerm] = useState("")
 const [termFromButtonClick, setTermFromButtonClick] = useState(1)
//  const [link, setLink] = useState(`https://api.peterportal.org/rest/v0/schedule/soc`)
//  const [linkFromButtonClick, setCourseNumFromButtonClick] = useState(1)

 useEffect (() => {
  axios 
   .get(`https://api.peterportal.org/rest/v0/schedule/soc?term=${term}&department=${dept}&courseNumber=${courseNum}`)
   .then(res => {
    console.log(res.data.schools[0].departments[0].courses)
    setPosts(res.data.schools[0].departments[0].courses)
   })
   .catch(err => {
    console.log(err)
   })
 },[deptFromButtonClick,courseNumFromButtonClick, termFromButtonClick])
 
 // function convertClassName(id) {
 //  let text = id; 
 //  let result = text.replace("&", "%26");
 //  return result.replace("/", "%2F") ;
 // }

 function urlconfig (input) {
  let text = input; 
  let result = text.replace(" ", "%20");
  console.log(result)
  return result
 }

 const handleClick = () => {
		setDeptFromButtonClick(dept)
    setCourseNumFromButtonClick(courseNum)
    setTermFromButtonClick(urlconfig(term))
 }




 return (
  <div>
    <div id="form">
      <label for="term_input" > Term (e.g. 2018 Fall): </label>
      <input id="term_input" type="text" value={term} onChange={e => setTerm(e.target.value)}/>
      <label for="dept_input" > Department: </label>
      <select id="dept_input" type="text" value={dept} onChange={e => setDept(e.target.value)}>
        <option value="COMPSCI">COMPSCI</option>
        <option value="MGMT">MGMT</option>
        <option value="I%26C SCI">I&C SCI</option>
      </select>
      <label for="courseNum_input" > Course Number: </label>
      <input id="courseNum_input" type="text" value={courseNum} onChange={e => setCourseNum(e.target.value)}/>
      <button type="button" onClick={handleClick}> Fetch </button>
    </div>
   <div>
    <ul>
     {posts.map(post => (
      <li>
        <Course post={post}/>
      </li>
     ))}
     
    </ul>
   </div>
  </div>
 )
}

export default GetClassSchedule