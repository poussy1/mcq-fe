import React,{useState} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { useHistory } from 'react-router-dom';
import styled from "styled-components";
import { useDispatch } from 'react-redux'
import { setName } from '../store/nameSlice'

const EnrollmentContainer =styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center; 
    align-items: center; 
    height: 60vh;
`
export default function EnrollementPage(){
   const dispatch = useDispatch()  
   let history = useHistory();
   function handleButtonClick(){
      history.push('/questions')
   }
   return(<EnrollmentContainer>
       <Card style={{padding:"10px"}}>
            <CardContent>
                <TextField 
                 required 
                 onChange={(e)=>{
                    dispatch(setName(e.target.value))
                 }} 
                 id="standard-basic" 
                 label="Full Name" 
                />
            </CardContent>
            <CardActions  style={{justifyContent: 'flex-end'}}>
                <Button onClick={handleButtonClick} size="small">Submit</Button>
            </CardActions>
       </Card>
   </EnrollmentContainer>)
}