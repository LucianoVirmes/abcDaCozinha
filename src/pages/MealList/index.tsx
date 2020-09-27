import React from 'react';
import { Card, Col, Row } from 'antd';
import dinner from './dinner.jpeg';
import breakfast from './breakfast.jpeg';
import lunch from './lunch.jpeg';
import snack from './snack.jpg';
import {useHistory} from 'react-router-dom';


export default function MealList() {
    const history = useHistory();
    return (
        <div className="card-content">
            <Row>
                <Col md={8} xs={24} className="card">
                    <Card
                        size="small"
                        hoverable
                        onClick={() => history.push("./recipe")}
                        cover={<img alt="example" src={dinner} />}
                    >
                        Jantar
          </Card>
                </Col>
                <Col md={8} xs={24} className="card">
                    <Card
                        size="small"
                        hoverable
                        cover={<img alt="example" src={breakfast} />}
                    >   
                        Café da manhã
          </Card>
                </Col>
                <Col md={8} xs={24} className="card">
                    <Card
                        size="small"
                        hoverable
                        cover={<img alt="example" src={lunch} />}
                    >
                        Almoço
          </Card>
                </Col>
            </Row>
            <Row justify="center">
                <Col md={8} xs={24} className="card">
                    <Card
                        size="small"
                        hoverable
                        cover={<img alt="example" src={snack} />}
                    >
                        Lanche
          </Card>
                </Col>
            </Row>
        </div>
    )
}
