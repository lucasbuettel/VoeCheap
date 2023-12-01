import styled from "styled-components";


export default function Posts({p}){
    console.log(p);

    return (
        <>
        
        <Contender>
        <Img src={p.image} alt="pass" />
        <Column>
            <Text>
                {p.text} 
            </Text>
            <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color:"white" }}>
          <Info>Ler Mais</Info>
        </a>
        </Column>
    </Contender>
    </>
    )
};


const Contender = styled.div`
 display: flex;
  align-items: center;
  width: 600px; /* Ajuste conforme necessário */
  height: 400px;
  padding: 10px;
  margin-top: 50px;
`;

const Img = styled.img`
 width: 300px;
        height: 100%;
        object-fit: cover; 
  margin-right: 10px;
`
const Text = styled.p`
margin-top: 180px;
font-size: 30px;
  word-wrap: break-word;
`;

const Info = styled.div`
font-size: 25px;
margin-top: 20px;
width: 100px;
padding: 5px;
text-align: center;
background-color: blue;
`
const Column = styled.div`
display: flex;
flex-direction: column;
`