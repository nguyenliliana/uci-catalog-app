import React, {useState, useEffect} from 'react'
import axios from 'axios'

function GetClassSchedule() {
 const [posts,setPosts] = useState([])
 const [id, setId] = useState('')
 const [idFromButtonClick, setIdFromButtonClick] = useState(1)

 useEffect (() => {
  axios 
   .get(`https://api.peterportal.org/rest/v0/schedule/soc?term=2018%20Fall&department=COMPSCI`)
   .then(res => {
    console.log(res.data.schools[0].departments[0].courses)
    setPosts(res.data.schools[0].departments[0].courses)
   })
   .catch(err => {
    console.log(err)
   })
 },[idFromButtonClick])
 
 // function convertClassName(id) {
 //  let text = id; 
 //  let result = text.replace("&", "%26");
 //  return result.replace("/", "%2F") ;
 // }

 const handleClick = () => {
		setIdFromButtonClick(id)
	}

 return (
  <div>
   <input type="text" value={id} onChange={e => setId(e.target.value)}/>
   <button type="button" onClick={handleClick}> Fetch </button>
   <div>
    <ul>
     {posts.map(post => (
      <li>{JSON.stringify(post.courseNumber)}</li>
     ))}
     
    </ul>
   </div>
   <div> hello </div>
  </div>
 )
}

export default GetClassSchedule