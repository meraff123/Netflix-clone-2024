import React from 'react';
import Row from '../Row/Row';
import requests from '../../../utils/requests';

const RowList = () => {
    return (
        <>
            <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
            />
            <Row
                title="Trending Now"
                fetchUrl={requests.fetchTrending}
            />

            <Row 
            title="Top Rated" 
            fetchUrl={requests.fetchTopRatedMovies} 
                  />

<Row 
            title="Action Movies" 
            fetchUrl={requests.fetchActionMovies} 
                  />

<Row 
            title="Comedy Movies" 
            fetchUrl={requests.fetchComedyMovies} 
                  />

<Row 
            title="Horro Movies" 
            fetchUrl={requests.fetchHorrorMovies} 
                  />


<Row 
            title="Documantaries" 
            fetchUrl={requests.fetchDocumentaries} 
                  />
            
        </>
    );
};

export default RowList;
