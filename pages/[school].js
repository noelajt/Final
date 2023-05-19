

import Head from "next/head";
import styled from "styled-components";
import Filter from "../components/Filter";
import { useRouter } from "next/router";
import { useState } from "react";
import ProfileList from "../components/ProfileList";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function SchoolPage() {
  const router = useRouter();
  const { school } = router.query;
  const { data, error, mutate } = useSWR(`/api/${school}`, fetcher);
  const [filters, setFilters] = useState([]);

  const handleFilterChange = (filters) => {
    setFilters(filters);
    setFilters([]);
  };


  return (
    <PageWrapper>
      <Head>
        <title>School</title>
        <meta name="description" content="Individual school data" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossorigin
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@700&family=Open+Sans:wght@300&family=Playfair+Display&display=swap"
          rel="stylesheet"
        />
      </Head>
      <SchoolName>{school}</SchoolName>
      <Filter info={data} onFilterChange={handleFilterChange} />
      <ProfileList profiles={data} filters={filters} />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  background-color: #fff7fe;
  height: 100vh;
`;

const SchoolName = styled.div`
  text-align: center;
  font-size: 4rem;
  padding: 20px 0px 10px 0px;
  font-family: "Courier Prime", monospace;
`;
