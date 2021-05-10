import React,{useState} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import styled from "styled-components";
const GradeContainer =styled.div`
    display: flex;
    flex-direction:column;
   
    justify-content: center; 
    align-items: center; 
    height: 60vh;
`
export default function GradePage({setName}){
    const [score,setScore] = useState(3)
    return(<GradeContainer>
            <Card style={{padding:"10px"}}>
                    <CardContent>
                       YOUR SCORE:{score}/3!
                    </CardContent>
            </Card>
        </GradeContainer>
    )
}