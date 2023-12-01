import styled from "styled-components"
import { useEffect, useState } from "react";
import axios from "axios";
import LastNews from "./Blog/LastNews";

export default function Notices(){

    const [lastPosts, setLastPosts] = useState([]);

    useEffect(() => {
        const URL = "http://localhost:5000/posts";

        const fetchData = async () => {
            try {
                const response = await axios.get(URL);
                setLastPosts(response.data);
            } catch (err) {
                console.log(err.response.data);
            }
        };

        fetchData();
    }, []);

    const lastFourPosts = lastPosts.slice(-4);

    return(
        <>
        <Container id="team">
           <Title>Últimas Notícias |<span>#voenotícias</span></Title>
           <LastNotices>
            {lastFourPosts.map((p, index) => <LastNews p={p} key={index}/>)}
           </LastNotices>
           <Separation></Separation>
        </Container>
        </>
    )
}

const Container = styled.div`
height: 525px;
width: 100%;
background-color: #D5D0CA;
`
const Separation = styled.div`
width: 100%;
height: 50px;
background-color: black;
margin-top: 20px;
`
const LastNotices = styled.div`
display:flex;
align-items: center;
justify-content: space-evenly;
margin-top: 20px;
flex-wrap: wrap;
`

const Title = styled.h1`
display: flex;
margin-top: 40px;
margin-left: 80px;
font-size: 50px;
color: #013881;
span{
    margin-left: 10px;
}
`
