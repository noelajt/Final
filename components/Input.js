import {useState} from "react"
import styled from "styled-components"
import { useRouter } from "next/router";


export default function Input({ method, label, type, id }) {
    const [value, setValue] = useState("");
    const router = useRouter();

    function handleSubmit(e) {
        e.preventDefault();
        method(value);
        router.push(`/${value}`);
        setValue("");
    }

    function handleSubmitLocation(e){
        e.preventDefault();
        method(value);
        setValue("");
    }

    if (id === "location"){
        return <Form onSubmit={handleSubmitLocation}>
            <input id={id} type={type} value={value} onChange={(e) => setValue(e.target.value)} placeholder={label}/>
        </Form>

    }

    return (


        <Form onSubmit={handleSubmit}>
            <input id={id} type={type} value={value} onChange={(e) => setValue(e.target.value)} placeholder={label}/>
        </Form>
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
        width: 50vw;
    }

    #location{
        border: 2px solid #faa4bd;
        border-radius: 5px;
        width: 70vw;
        max-width: 400px;
        height: 20px;
    }
`