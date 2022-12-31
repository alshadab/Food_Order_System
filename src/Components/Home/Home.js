import React from 'react';
import CardBox from '../Card/Card';
import Data from "../Data";
import {Col, Container, Row} from "react-bootstrap";
const Home = () => {
    return (
        <div>
       <Container>
            <Row className="justify-content-center">
            {
                
                Data.map( burger => (<Col md={6} lg={4}><CardBox burger={burger} /></Col>) )
                
            }
            </Row>
       </Container>
       </div>
    );
};

export default Home;