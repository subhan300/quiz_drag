import React, { useState, useEffect } from 'react';
import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import firebase ,{auth}from '../services/firebase';
import allData from './allData';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      padding: theme.spacing(1),
    },
  },
  quiz_title:{
    paddingTop:"10px",
  //  fontSize:"68px",
   color:"orange"
  },
  orange: {
    backgroundColor: 'orange',
    color: '#fff',
    marginTop: theme.spacing(1),
    padding:"15px 80px",
    '&:hover': {
      backgroundColor: 'skyblue',
    },},

    blueviolet: {
      padding:"15px 80px",
      backgroundColor: 'blueviolet',
      color: '#fff',
      marginTop: theme.spacing(1),
      '&:hover': {
        backgroundColor: 'skyblue',
      }
  },
   
  countTime: {
    fontSize: '22px'
  },
  gridheader: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  gridoption: {
    margin: '50px 0px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  option: {
    backgroundColor: 'lightgreen',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '16px',
    // height:"100px",
    height: '100px',
  
    '&:hover': {
      cursor: 'pointer'
    },
  },
  answer: {
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '16px',
    height: '100px',
    borderStyle: 'dotted'
  }
}));


const Quiz = ({ user }) => {

  const signout=()=>{
    auth.signOut();
  
  //   setUser(null)
}
  const classes = useStyles();
  const [step, setStep] = useState(0);
  const [seconds, setSeconds] = useState(45);
  const [score, setScore] = useState(10000);
  const [quizData, setQuizData] = useState(allData);
  const [activatedDrag, setActivatedDrag] = useState(null);
  const [activatedDrop, setActivatedDrop] = useState(null);
  const [countRightAns, setRightAns] = useState(0);

  useEffect(()=> {
    setQuizData(allData)
  }, [])

  useEffect(() =>{
    if (seconds > 0) {
      console.log("call")
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {

    }
  
  })


  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  }

  const getQuestion = () => {
    return `${quizData[step].question}`;
  }

  const onDragStart = (ev, state) => {
    setActivatedDrag(state)
    console.log(state)
  }

  const onDragOver = (e) => {
    e.preventDefault();
  }

  const onDrop = (ev, cat) => { 
    ev.stopPropagation()
    setActivatedDrop({
      ...cat,
      droppedItem: activatedDrag
    });



    if (activatedDrop){
      const id = activatedDrop?.id
      const answers = quizData[step].answers;
      const keys = quizData[step].keys;
      keys[activatedDrop.droppedItem.id]['status']  = 'in-active';
      console.log(keys)
      const updatedAnswers = {...answers, [id]: activatedDrop};
      const updatedQuestion = {...quizData[step], answers: updatedAnswers};
      const currentList = quizData;
      currentList[step] = updatedQuestion;
      setQuizData(currentList);      
    }else{
      setActivatedDrag(null);
      setActivatedDrag(null);
    }
    
  }; 


  const checkAnswer = () => {
    Object.keys(quizData[step].answers).map((keyName, i) => {
      const getAnswers = quizData[step].answers;

      if (getAnswers[keyName].id === getAnswers[keyName].droppedItem.correctAnswer) {
          setRightAns(countRightAns + 1);
      }
    });
    const newScore = (score + (1000 * countRightAns));
    console.log(newScore)
    setScore(newScore);
    setRightAns(0);


  }


  return (
    <React.Fragment>
      <div className={classes.root}>
     
        <div class="animate four   quiz_title">
      <span>Q</span><span>U</span><span>I</span><span>Z</span>
     
    
    </div>
        <Grid container className={classes.gridheader}>
          <Grid item md={2}>
            <div className={classes.countTime}>Remaning Time: <span style={{ color: seconds > 10 ? 'green' : 'red' }}> {seconds} </span> </div>
          </Grid>
          <Grid item md={2}>
            <div className={classes.countTime}>Your Score: <span> {score} </span> </div>
          </Grid>
        </Grid>

        <Grid container spacing={1} className={classes.gridoption}>
          {
            Object.keys(quizData[step].keys).map((keyName, i) => {
              const getKeys = quizData[step].keys;
              const activeStatus = getKeys[keyName].status === "active";
              return (
                activeStatus && 
                <Grid key={i} item xs={12} md={3} className={classes.option} draggable onDragStart={(e) => onDragStart(e, getKeys[keyName])}>
                  <img className={classes.optionimage} src={getKeys[keyName].image} />
                  <span>{getKeys[keyName].name}</span>
                </Grid>
              )
            })
            // getQuestion()
          }
        </Grid>

        <Grid container spacing={1} className={classes.gridoption}>
          {
            Object.keys(quizData[step].answers).map((keyName, i) => {
              const getAnswers = quizData[step].answers;
              return (
                <Grid key={i} item xs={12} md={3} className={classes.answer} onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDrop(e, getAnswers[keyName])}>
                  {
                    getAnswers[keyName].droppedItem && <span>{getAnswers[keyName].droppedItem.name}</span>
                  }
                  <span>{getAnswers[keyName].name}</span>


                </Grid>
              )
            })
            // getQuestion()
          }
        </Grid>

        <Button variant="contained" className={classes.blueviolet}  onClick={checkAnswer}>Check Answer</Button>
        <br />      <br />
        <Button variant="contained" className={classes.orange} >Submit Answer</Button>

        <div style={{marginTop:"50px"}}>
               <button className="button signout" onClick={() =>signout()}>Sign out</button>
            </div>
            

      </div>
    </React.Fragment>
  )
}



export default Quiz