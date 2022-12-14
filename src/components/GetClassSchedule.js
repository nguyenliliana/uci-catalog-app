import React, {useState, useEffect} from 'react'
import axios from 'axios'

function GetClassSchedule() {
 const [post,setPost] = useState({})
 const [id, setId] = useState('DES&ANALYS OF ALGOR')
 const [idFromButtonClick, setIdFromButtonClick] = useState(1)

 useEffect (() => {
  axios 
   .get(`https://api.peterportal.org/rest/v0/schedule/soc?term=2018%20Fall&department=COMPSCI`)
   .then(res => {
    console.log(res)
    setPost(res.data)
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
		setIdFromButtonClick("DES&ANALYS OF ALGOR")
	}

 return (
  <div>
   <input type="text" value={id} onChange={e => setId(e.target.value)}/>
   <button type="button" onClick={handleClick}> Fetch </button>
   <div>
    <ul>
     <li>{JSON.stringify(post.schools[0].departments[0].courses[0].courseNumber)}</li>
    </ul>
   </div>
   <div> hello </div>
  </div>
 )
}

export default GetClassSchedule