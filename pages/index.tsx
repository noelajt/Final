
import styled from 'styled-components'
import Head from 'next/head'
import StartScreen from "../components/StartScreen"
import useSWR, { SWRConfig } from "swr"
import { createClient } from '@supabase/supabase-js'



const fetcher = url => fetch(url).then(r => r.json())

export default function Home({ fallback }) {
  const { data, error, mutate } = useSWR(`/api`, fetcher);
  console.log("Data in Home:", data)

  return <SWRConfig value={{ fallback }} >
    <Head>
      <title> Roommate </title>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet"/>
    </Head>
    <StartScreen info = {data}/>
  </SWRConfig>
}