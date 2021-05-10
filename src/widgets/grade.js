import React,{useState} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useSelector } from 'react-redux'
import styled from "styled-components";
const GradeContainer =styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center; 
    align-items: center; 
    height: 60vh;
`
export default function GradePage({setName}){
    const name = useSelector(state=>state.name.name)
    const score = useSelector(state=>state.score.score)
  
    return(<GradeContainer>
            <Card style={{padding:"10px"}}>
                    <CardContent>
                       HEY {name} YOUR SCORE : {score}/5!
                    </CardContent>
            </Card>
        </GradeContainer>
    )
}