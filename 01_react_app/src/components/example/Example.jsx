import React, { useState } from "react";

const Example = () => {

  const[ratings,setRatings] = useState({
    "Miss Mary":null,
    "Vikram":null,
    "GS":null
  })
  const[results,setResults] = useState('');

  const handleChange=(teacher,val)=>{
    setRatings((prevRating)=>(
      {...prevRating,[teacher]:parseInt(val)}
    ))
  }

  console.log(ratings);
  const handleSubmit =(e)=>{
    e.preventDefault();
    if(Object.values(ratings).some((rating)=>rating === null)){
      setResults('Give ratings to all teacher')
      return;
    }
    const sortedTeacher = Object.entries(ratings).sort(([,a],[,b])=>b-a);
    console.log(sortedTeacher);
    setResults(`the teacher of the year is -${sortedTeacher[0][0]}`)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Teaches Review</h2>
        <label>names </label>
        <label> 1</label>
        <label> 2</label>
        <label> 3</label>
        <br />
        <label id="first">Miss Mary &nbsp;
            <input type="radio" value="1" name="Miss Mary" onChange={(e)=>handleChange('Miss Mary',e.target.value)}/>
            <input type="radio" value="2" name="Miss Mary" onChange={(e)=>handleChange('Miss Mary',e.target.value)}/>
            <input type="radio" value="3" name="Miss Mary" onChange={(e)=>handleChange('Miss Mary',e.target.value)}/>
        </label>{" "}
        <br />
        <label id="seconde">Vikram &nbsp;
            <input type="radio" value="1" name="Vikram" onChange={(e)=>handleChange('Vikram',e.target.value)}/>
            <input type="radio" value="2" name="Vikram" onChange={(e)=>handleChange('Vikram',e.target.value)}/>
            <input type="radio" value="3" name="Vikram" onChange={(e)=>handleChange('Vikram',e.target.value)}/>
        </label>{" "}
        <br />
        <label id="first">GS &nbsp;
            <input type="radio" value="1" name="GS" onChange={(e)=>handleChange('GS',e.target.value)}/>
            <input type="radio" value="2" name="GS" onChange={(e)=>handleChange('GS',e.target.value)}/>
            <input type="radio" value="3" name="GS" onChange={(e)=>handleChange('GS',e.target.value)}/>
        </label>{" "}
        <br />
        <input type="submit" value="submit"/>
      </form>
      <div>{results}</div>
    </div>
  );
};

export default Example;
