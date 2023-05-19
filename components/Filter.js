import { useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import Head from "next/head";

export default function Filter({ onFilterChange }) {
  const [location, setLocation] = useState("");

    const getLocation = (value) => {
      setLocation(value);
  };


  const handleFilter = () => {
    onFilterChange(location); 
    setLocation("");
  };
  

  return (
    <Wrapper>
      <Input method={getLocation} type="text" label="Location" id="location" />
      <Button onClick={handleFilter}>Search</Button>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  padding: 10px 100px 10px 100px;
  border-bottom: solid 1px;
  border-top: solid 1px;
  border-color: grey;
`;

const Button = styled.button`
  max-height: 45px;
  max-width: 75px;
  padding: 5px 10px 5px 10px;
  font-family: "Almarai", sans-serif;
  font-size: 1em;
  border-color: #faa4bd;
  border-radius: 5px;
  background-color: #faa4bd;
  box-shadow: none;
`;
