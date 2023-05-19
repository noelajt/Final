
import React, { useState } from "react"
import styled from "styled-components"
import Head from 'next/head'

export default function DropdownMenu({id, label, choices}) {
  const [isOpen, setIsOpen] = useState(false);
  const [choice, setChoice] = useState("");
  const [selected, setSelected] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };


  const handleChoiceNormal = (choice) => {
    setChoice(choice.label);
    console.log(choice.label, selected);
  };

  const handleChoiceMultiple = (choice) => {
    const selected = [...selectedItems];

    if (selected.includes(choice.label)) {
      const index = selected.indexOf(choice.label);
      selected.splice(index, 1);
    } else {
      selected.push(choice.label);
    }

    setSelectedItems(selected);
  };

  if (id === "selection"){
    return (
      <Wrapper>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Almarai&display=swap" rel="stylesheet"/>
      </Head>
        <ToggleButton onClick={handleToggle}>{label}</ToggleButton>
        {isOpen && (
          <Menu>
            {choices.map((option) => (
              <li key={option.key}>
              <Item key = {option.key} onClick={() => handleChoiceMultiple(option)} selected={selectedItems.includes(option.label)}>
              {console.log(option.label, selectedItems.includes(option.label))}
                {option.label}
              </Item>
              </li>
            ))}
          </Menu>
        )}
      </Wrapper>
    );
  }
  else if (id === "budget"){
    return (
    <Wrapper>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Almarai&display=swap" rel="stylesheet"/>
    </Head>
    <ToggleButton onClick={handleToggle}>{label}</ToggleButton>
        {isOpen && (
          <Square>
          <Menu>
            {choices.map((option) => (
              <li key={option.key}>
              <Item key = {option.key} onClick={() => handleChoiceMultiple(option)} selected={selectedItems.includes(option.label)}>
              {console.log(option.label, selectedItems.includes(option.label))}
                {option.label}
              </Item>
              </li>
            ))}
          </Menu>
          </Square>
        )}
    </Wrapper>
    )
  }
  return ( //REGULAR DROPDOWN 1 SELECTION
    <Wrapper>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Almarai&display=swap" rel="stylesheet"/>
      </Head>
      <ToggleButton onClick={handleToggle}>{label}</ToggleButton>
      {isOpen && (
        <Menu>
            {choices.map((option) => (
              <li key={option.key}>
              <Item key = {option.key} onClick={() => handleChoiceNormal(option)} selected={option.label === choice}>
                {console.log(option.label, option.label === choice)}
                {option.label}
              </Item>
              </li>
            ))}
        </Menu>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Square = styled.div`
  height: 100px;
  width: 200px;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: green;

`

const Menu = styled.ul`
position: absolute;
top: 100%;
left: 0;
background-color: white;
padding: 0;
margin: 0;
list-style: none;
width: 100%;
`


const Item = styled.button`
  list-style: none;
  text-align: left;
  padding: 5px;
  border: none;
  background-color: ${({ selected }) => (selected ? "pink" : "white")};
  height: 100%;
  width: 100%;

  &:hover {
    background-color: #ffe6f5;
  }

  ${({ selected }) =>
    selected &&
    `
    border: solid;
    border-color: black;
    background-color: white;
  `}
`;

const ToggleButton= styled.button`
max-height: 45px;
max-width: 75px;
padding: 5px 10px 5px 10px;
font-family: 'Almarai', sans-serif;
font-size: 1em;
border-color:#FAA4BD;
border-radius: 5px;
background-color: white;
box-shadow: none;
`