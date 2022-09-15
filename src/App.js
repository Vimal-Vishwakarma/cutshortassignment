import React from "react";
import logo from './logo.png';
import './App.css';
import check from './check-solid.svg';
import usersolid from './usersolid.svg';
import userssolid from './users-solid.svg';

import  { useState } from 'react';

const App = () => {
  const [fullname , setfullname] = useState("");
  const [displayname , setdisplayname] = useState("");
  const [workspace , setworkspace] = useState("");
  const [onevalue , setonevalue] = useState("");
  const [onevalue1 , setonevalue1] = useState("");
   
  const [sec1, setSec1] = useState(true);
  const [sec2, setSec2] = useState(false);
  const [sec3, setSec3] = useState(false);
  const [sec4, setSec4] = useState(false);
  
  const [colortxt1, setColortxt1] = useState('#fff');
  const [color1, setColor1] = useState('#664de5');
  const [colortxt2, setColortxt2] = useState('');
  const [color2, setColor2] = useState('');
  const [colortxt3, setColortxt3] = useState('');
  const [color3, setColor3] = useState('');
  const [colortxt4, setColortxt4] = useState('');
  const [color4, setColor4] = useState('');
 
  const gotosec1 = () =>{
    setSec1(true);
    setSec2(false);
    setSec3(false);
    setSec4(false);
    setColortxt2('');
    setColor2('');
    setColortxt3('');
    setColor3('');
    setColortxt4('');
    setColor4('');
    }
  const gotosec2 = (e) =>{
    e.preventDefault();
    if(fullname==''||displayname==""){
      alert('fill all fields');
      return false;
    }
    setSec1(false);
    setSec2(true);
    setSec3(false);
    setSec4(false);
    setColortxt2('#fff');
    setColor2('#664de5');
    setColortxt3('');
    setColor3('');
    setColortxt4('');
    setColor4('');
    }

  const gotosec3 = () =>{
    if(workspace==''){
      alert('fill workspace fields');
      return false;
    }
      setSec1(false);
      setSec2(false);
      setSec3(true);
      setSec4(false);
      setColortxt2('#fff');
      setColor2('#664de5');
      setColortxt3('#fff');
      setColor3('#664de5');
      setColortxt4('');
      setColor4('');
      }
  const gotosec4 = (e) =>{
    e.preventDefault();
    if(onevalue==''){
      alert('select planning  fields');
      return false;
    }
        setSec1(false);
        setSec2(false);
        setSec3(false);
        setSec4(true);
        setColortxt1('#fff');
        setColor1('#664de5');
        setColortxt2('#fff');
        setColor2('#664de5');
        setColortxt3('#fff');
        setColor3('#664de5');
        setColortxt4('#fff');
        setColor4('#664de5');
        }
  const done = () =>{
    alert("Congratulations!" + fullname );
  }
  return (
    <div className="App">
      <div className='card'>
        <div className='cardbody'>
        <img src={logo}/>
          <div className='progressbar'>
            <div className='bar1' style={{background:color1}}  onClick={gotosec1} >
            <div className='bar11' style={{background:color1,color:colortxt1}}><span className='text'>1</span></div>
            </div>
            <div className='bar12' style={{background:color2}} onClick={gotosec2}>
            <div className='bar22' style={{background:color2,color:colortxt2}}><span className='text'>2</span></div>
            </div>
            <div className='bar13' style={{background:color3}} onClick={gotosec3}>
            <div className='bar22' style={{background:color3,color:colortxt3}}><span className='text'>3</span></div>
            </div>
            <div className='bar14' style={{background:color4}} onClick={gotosec4}>
            <div className='bar33' style={{background:color4,color:colortxt4}}><span className='text'>4</span></div>
            </div>
          </div>
          <div className='form'>

<div>
{sec1? <>
    
    <h1>Welcome! First things first...</h1>
    <p>You can always change them later</p>
    <div className='sec1'>
    <div className='form-span'>Full Name</div>
    <input type="text" className='form-control' onChange={(e)=>setfullname(e.target.value)} placeholder='Steve Jobs' name="fullname" value={fullname}/>
    <div className='form-span'>Display Name</div>
    <input type="text" className='form-control' onChange={(e)=>setdisplayname(e.target.value)}  placeholder='Steve' name="displayname" value={displayname}/>
    <button className='btn btn1' onClick={gotosec2} >Create Workspace</button>
    </div>
    </>:''}
{sec2?<>
    <h1>Let's set up a home for all your work</h1>
    <p>You can always create another workspace later.</p>
    <div className='sec2'>
    <div className='form-span'>Workspace Name</div>
    <input type="text" className='form-control' placeholder='Eden'onChange={(e)=>setworkspace(e.target.value)}  name="workspace" value={workspace}/>

    <div className='form-span'>Workspace URL (Optional)</div>
    <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">www.eden.com/</div>
        </div>
        <input type="text"  placeholder="Example" className='form-control form11'/>
      </div>

    <button className='btn btn1' onClick={gotosec3}>Create Workspace</button>
    </div>
    </>:''}
{sec3?  <>
    <h1>How are you planning to use Eden</h1>
    <p>We'll streamline your setup experience accordingly</p>
    <div className='sec3'>
    <div className='flexx'>
    <div className='w-50'>
    <label class="labl">
    <input type="radio" name="onevalue" onChange={(e)=>setonevalue(e.target.value)} value='MySelf'/>
    <div className='card1 mr-5'>
      <div className="card-vody1">
      <div><img src={usersolid} width="20px"/></div>
      <h3><b>For myself</b></h3>
      <p className='text-left'>Write better, Think more clearly, Stay organized.</p>
      </div>
    </div>
</label>
   
    </div>
    <div className='w-50'>
    <label class="labl">
    <input type="radio" name="onevalue" onChange={(e)=>setonevalue(e.target.value)} value='WithTeam'/>
    <div className='card1 ml-5'>
    <div className="card-vody1">
      <div><img src={userssolid} width="20px"/></div>
      <h3><b>With my team</b></h3>
      <p className='text-left'>Wikis, docs, tasks & projects, all in one place.</p>
      </div>
    </div>
</label>

    </div>
   </div>
    <button className='btn btn1' onClick={gotosec4}>Create Workspace</button>
    </div>
    </>:''}
{sec4?<>  <div className='sec4'>
    <div className='div4circle'><span><img src={check}  className='logo-img'width="25px"/></span></div>
  <h1>Congratulations, {fullname}...</h1>
  <p>You have completed onboarding, you can start using the Eden!</p>
  <button className='btn btn1' onClick={done}>Launch Eden</button>
  </div></>:''} 
</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
