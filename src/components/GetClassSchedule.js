import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Course from "./Course"
import Depts from "./Depts"


function GetClassSchedule() {
 const [posts,setPosts] = useState([])
 const [dept, setDept] = useState("COMPSCI")
 const [deptFromButtonClick, setDeptFromButtonClick] = useState(1)
 const [courseNum, setCourseNum] = useState("")
 const [courseNumFromButtonClick, setCourseNumFromButtonClick] = useState(1)
 const [term, setTerm] = useState("")
 const [termFromButtonClick, setTermFromButtonClick] = useState(1)
 const [checked,setChecked] = useState(false)
 const [errorFound, setError] = useState(false)
//  const [link, setLink] = useState(`https://api.peterportal.org/rest/v0/schedule/soc`)
//  const [linkFromButtonClick, setCourseNumFromButtonClick] = useState(1)

 useEffect (() => {
  axios 
   .get(`https://api.peterportal.org/rest/v0/schedule/soc?term=${term}&department=${dept}&courseNumber=${courseNum}`)
   .then(res => {
    console.log(res.data.schools[0].departments[0].courses)
    setPosts(res.data.schools[0].departments[0].courses)
    setError(false)
   })
   .catch(err => {
    setError(true)
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

const handleChange = () => {
  setChecked(!checked); 
};

function getCourses () {
  if (errorFound) {
    return (<p className="error-message">Enter valid filters.</p>)
  }
  else {
    return (
      posts.map(post => (
        <li>
          <Course post={post} checked ={checked}/>
        </li>
       ))
    )
  }
}

 return (
  <div>
    <div id="form">
      <label for="term_input" > Term (e.g. 2018 Fall): </label>
      <input id="term_input" type="text" value={term} onChange={e => setTerm(e.target.value)}/>
      <label for="dept_input" > Department: </label>
      <select id="dept_input" type="text" value={dept} onChange={e => setDept(e.target.value)}>
        <option value="AC ENG">AC ENG</option>
        <option value="AFAM">AFAM</option>
        <option value="ANATOMY">ANATOMY</option>
        <option value="ANESTH">ANESTH</option>
        <option value="ANTHRO">ANTHRO</option>
        <option value="ARABIC">ARABIC</option>
        <option value="ARMIN">ARMIN</option>
        <option value="ART">ART</option>
        <option value="ART HIS">ART HIS</option>
        <option value="ARTS">ARTS</option>
        <option value="ARTSHUM">ARTSHUM</option>
        <option value="ASIANAM">ASIANAM</option>
        <option value="BANA">BANA</option>
        <option value="BATS">BATS</option>
        <option value="BIO SCI">BIO SCI</option>
        <option value="BIOCHEM">BIOCHEM</option>
        <option value="BME">BME</option>
        <option value="CAMPREC">CAMPREC</option>
        <option value="CBE">CBE</option>
        <option value="CBEMS">CBEMS</option>
        <option value="CEM">CEM</option>
        <option value="CHC/LAT">CHC/LAT</option>
        <option value="CHEM">CHEM</option>
        <option value="CHINESE">CHINESE</option>
        <option value="CLASSIC">CLASSIC</option>
        <option value="CLT%26THY">CLT&THY</option>
        <option value="COGS">COGS</option>
        <option value="COM LIT">COM LIT</option>
        <option value="COMPSCI">COMPSCI</option>
        <option value="CRITISM">CRITISM</option>
        <option value="CRM/LAW">CRM/LAW</option>
        <option value="CSE">CSE</option>
        <option value="DANCE">DANCE</option>
        <option value="DATA">DATA</option>
        <option value="DERM">DERM</option>
        <option value="DEV BIO">DEV BIO</option>
        <option value="DRAMA">DRAMA</option>
        <option value="E ASIAN">E ASIAN</option>
        <option value="EARTHSS">EARTHSS</option>
        <option value="EAS">EAS</option>
        <option value="ECO EVO">ECO EVO</option>
        <option value="ECON">ECON</option>
        <option value="ECPS">ECPS</option>
        <option value="ED AFF">ED AFF</option>
        <option value="EDUC">EDUC</option>
        <option value="EECS">EECS</option>
        <option value="EHS">EHS</option>
        <option value="ENGLISH">ENGLISH</option>
        <option value="ENGR">ENGR</option>
        <option value="ENGRCEE">ENGRCEE</option>
        <option value="ENGRMAE">ENGRMAE</option>
        <option value="ENGRMSE">ENGRMSE</option>
        <option value="EPIDEM">EPIDEM</option>
        <option value="ER MED">ER MED</option>
        <option value="EURO ST">EURO ST</option>
        <option value="FAM MED">FAM MED</option>
        <option value="FIN">FIN</option>
        <option value="FLM%26MDA">FLM&MDA</option>
        <option value="FRENCH">FRENCH</option>
        <option value="GDIM">GDIM</option>
        <option value="GEN%26SEX">GEN&SEX</option>
        <option value="GERMAN">GERMAN</option>
        <option value="GLBL ME">GLBL ME</option>
        <option value="GLBLCLT">GLBLCLT</option>
        <option value="GREEK">GREEK</option>
        <option value="HEBREW">HEBREW</option>
        <option value="HINDI">HINDI</option>
        <option value="HISTORY">HISTORY</option>
        <option value="HUMAN">HUMAN</option>
        <option value="HUMARTS">HUMARTS</option>
        <option value="I%26C SCI">I&C SCI</option>
        <option value="IN4MATX">IN4MATX</option>
        <option value="INNO">INNO</option>
        <option value="INT MED">INT MED</option>
        <option value="INTL ST">INTL ST</option>
        <option value="IRAN">IRAN</option>
        <option value="ITALIAN">ITALIAN</option>
        <option value="JAPANSE">JAPANSE</option>
        <option value="KOREAN">KOREAN</option>
        <option value="LATIN">LATIN</option>
        <option value="LAW">LAW</option>
        <option value="LINGUIS">LINGUIS</option>
        <option value="LIT JRN">LIT JRN</option>
        <option value="LPS">LPS</option>
        <option value="LSCI">LSCI</option>
        <option value="M%26MG">M&MG</option>
        <option value="MATH">MATH</option>
        <option value="MED">MED</option>
        <option value="MED ED">MED ED</option>
        <option value="MED HUM">MED HUM</option>
        <option value="MGMT">MGMT</option>
        <option value="MGMT EP">MGMT EP</option>
        <option value="MGMT FE">MGMT FE</option>
        <option value="MGMT HC">MGMT HC</option>
        <option value="MGMTMBA">MGMTMBA</option>
        <option value="MGMTPHD">MGMTPHD</option>
        <option value="MIC BIO">MIC BIO</option>
        <option value="MOL BIO">MOL BIO</option>
        <option value="MPAC">MPAC</option>
        <option value="MSE">MSE</option>
        <option value="MUSIC">MUSIC</option>
        <option value="NET SYS">NET SYS</option>
        <option value="NEURBIO">NEURBIO</option>
        <option value="NEUROL">NEUROL</option>
        <option value="NUR SCI">NUR SCI</option>
        <option value="OB/GYN">OB/GYN</option>
        <option value="OPHTHAL">OPHTHAL</option>
        <option value="PATH">PATH</option>
        <option value="PED GEN">PED GEN</option>
        <option value="PEDS">PEDS</option>
        <option value="PERSIAN">PERSIAN</option>
        <option value="PHARM">PHARM</option>
        <option value="PHILOS">PHILOS</option>
        <option value="PHMD">PHMD</option>
        <option value="PHRMSCI">PHRMSCI</option>
        <option value="PHY SCI">PHY SCI</option>
        <option value="PHYSICS">PHYSICS</option>
        <option value="PHYSIO">PHYSIO</option>
        <option value="PLASTIC">PLASTIC</option>
        <option value="PM%26R">PM&R</option>
        <option value="POL SCI">POL SCI</option>
        <option value="PORTUG">PORTUG</option>
        <option value="PP%26D">PP&D</option>
        <option value="PSCI">PSCI</option>
        <option value="PSY BEH">PSY BEH</option>
        <option value="PSYCH">PSYCH</option>
        <option value="PUB POL">PUB POL</option>
        <option value="PUBHLTH">PUBHLTH</option>
        <option value="RADIO">RADIO</option>
        <option value="REL STD">REL STD</option>
        <option value="ROTC">ROTC</option>
        <option value="RUSSIAN">RUSSIAN</option>
        <option value="SOC SCI">SOC SCI</option>
        <option value="SOCECOL">SOCECOL</option>
        <option value="SOCIOL">SOCIOL</option>
        <option value="SPANISH">SPANISH</option>
        <option value="SPPS">SPPS</option>
        <option value="STATS">STATS</option>
        <option value="SURGERY">SURGERY</option>
        <option value="SWE">SWE</option>
        <option value="TAGALOG">TAGALOG</option>
        <option value="TOX">TOX</option>
        <option value="UCDC">UCDC</option>
        <option value="UNI AFF">UNI AFF</option>
        <option value="UNI STU">UNI STU</option>
        <option value="UPPP">UPPP</option>
        <option value="VIETMSE">VIETMSE</option>
        <option value="VIS STD">VIS STD</option>
        <option value="WRITING">WRITING</option>
      </select>
      <label for="courseNum_input" > Course Number: </label>
      <input id="courseNum_input" type="text" value={courseNum} onChange={e => setCourseNum(e.target.value)}/>
      <div id="open-input">
        <input id="checkbox" for="open_input" type="checkbox" checked={checked} onChange={handleChange}/>
        <label for="open_input" > Show Only Open </label>
      </div>
      <button type="button" onClick={handleClick}> Search </button>
    </div>
   <div className="results">
    {/* <p> Checked? {checked.toString()}</p> */}
    <ul>
      {getCourses()}
      
     
    </ul>
   </div>
  </div>
 )
}

export default GetClassSchedule