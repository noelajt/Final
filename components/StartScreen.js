import { useState } from "react"
import Input from "./Input";
import styled from "styled-components"
import Autocomplete from "../components/Autocomplete"


export default function StartScreen({info}) {   
    const [data, setData] = useState([]);
    
    const getSchool = (school) => {
        setData([...data, school])
    }
    console.log("Info: ", info);

    return <Wrapper>
            <DecorativeArc>
                <Title>Find a Roommate</Title>
                {
                    data.length === 0 &&
                    <>
                    <ImageWrapper>
                    <img src="https://i.pinimg.com/originals/77/d0/a7/77d0a7c454e658833800528e748edbe9.png" alt="Illustration of woman meditating" />
                    </ImageWrapper>
                    <Spacer height={20} />
                    </>
                }
                <Input method={getSchool} label="Enter Your School to Begin"/>
                {/* <Autocomplete id= "Autocomplete" columnData={info} label="Enter Your School to Begin" /> */}
            </DecorativeArc>
    </Wrapper>
}

const Spacer = styled.div`
    height: ${(p) => p.height}px;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 30px max(10px, 10%);
    background-color: #FAA4BD;
    min-height: 100vh;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
`

const DecorativeArc = styled.div`
    background-color: white;
    width: min(100%, 800px);
    border-radius: 180px 180px 50px 50px;
    padding: 20px 10%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
    font-size: 4rem;
    text-transform: none;
    letter-spacing: 0px;
    line-height: 1;
    font-family: 'Lalezar', serif;
    text-align: center;
`

const ImageWrapper = styled.div`
    width: 100%;
    /* cut off the extra whitespace within image  */
    margin-top: -90px;
    margin-bottom: -40px;
    img {
        width: 100%;
        object-fit: cover;
        display: block;
    }
`
