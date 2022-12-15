import React, {useState, useEffect} from 'react'
import axios from 'axios'

function GetClassSchedule() {
 const [posts,setPosts] = useState([])
 const [dept, setDept] = useState('COMPSCI')
 const [deptFromButtonClick, setDeptFromButtonClick] = useState(1)

 useEffect (() => {
  axios 
   .get(`https://api.peterportal.org/rest/v0/schedule/soc?term=2018%20Fall&department=${dept}`)
   .then(res => {
    console.log(res.data.schools[0].departments[0].courses)
    setPosts(res.data.schools[0].departments[0].courses)
   })
   .catch(err => {
    console.log(err)
   })
 },[deptFromButtonClick])
 
 // function convertClassName(id) {
 //  let text = id; 
 //  let result = text.replace("&", "%26");
 //  return result.replace("/", "%2F") ;
 // }

 const handleClick = () => {
		setDeptFromButtonClick(dept)
	}

 return (
  <div>
   <label for="dept_input" > Department: </label>
   <input id="dept_input" type="text" value={dept} onChange={e => setDept(e.target.value)}/>
   <button type="button" onClick={handleClick}> Fetch </button>
   <div>
    <ul>
     {posts.map(post => (
      <li>Course #/Title: {post.courseNumber}/{post.courseTitle}</li>
     ))}
     
    </ul>
   </div>
   <div> hello </div>
  </div>
 )
}

export default GetClassSchedule