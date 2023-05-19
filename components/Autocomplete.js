import {useState} from "react"
import styled from "styled-components"
import { useRouter } from "next/router"


export default function Autocomplete({id, columnData, label }) {
    const [value, setValue] = useState("");
    const [suggestion, setSuggestions] = useState([]);
    const router = useRouter();

    function handleSubmit(e) {
        e.preventDefault();
        method(value);
        router.push(`/${value}`);
        setValue("");
    }

    console.log("Column Data: ", columnData)

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setValue(inputValue);
        console.log("Value: ", value)
    
        // const filteredSuggestions = columnData.filter(function({suggestion}){
        //   if (suggestion.school){
        //     return suggestion.school.toLowerCase().indexOf(props.filterText.toLowerCase())> -1;
        //   }
        //   else{
        //     return '';
        //   }
        // });

      //   .filter(function(episode){
      //     if(episode.title) {
      //         return episode.title.toLowerCase().indexOf(props.filterText.toLowerCase()) > -1;
      //     } else {
      //         return '';
      //     }
      // })

        setSuggestions(filteredSuggestions);
        // console.log("SugList", suggestions);
      };

      const handleSuggestionClick = (suggestion) => {
        setValue(suggestion);
        setSuggestions([]);
      };
      


    return (
        <div>
        <Form>
            {/* <label htmlFor={id}>{label}</label> */}
            <input id={id} type="text" value={value} onChange={handleInputChange} placeholder={label}/>
        </Form>
        {suggestion.length > 0 && (
            <ul>
              {suggestion.map((suggestion) => (
                <li key={suggestion} onClick={() => handleSuggestionClick(suggestion)}>
                  {suggestion}
                </li>
              ))}
            </ul>
          )
        }
        </div>
    )
}

const Form = styled.form`
    font-size: 1.4rem;
    text-align: left;
    display: flex;
    flex-direction: column;

    label {
        font-size: 1rem;
        padding: 5px;
    }

    input {
        background: transparent;
        font-size: inherit;
        padding: 10px;
        border: 3px solid #FAF0CA;
        border-radius: 30px;
        width: 500px;
    }

    #location{
        border: 2px solid #7ea3cc;
        border-radius: 5px;
        width: 200px;
        height: 20px;
    }
`
