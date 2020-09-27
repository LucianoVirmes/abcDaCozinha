import { Button, Card, Divider, List } from 'antd';
import { PlusOutlined, } from '@ant-design/icons';
import React from 'react';
import './styles.css';
import AbcBreadCrumb from '../../components/AbcBreadCrumb';
import { routesList } from '../../routes';

interface ReceipeListProps {
    title: string
}

const RecipeList = (props: ReceipeListProps) => {
    const listData = [];
    for (let i = 0; i < 5; i++) {
        listData.push({
            href: 'https://ant.design',
            title: `Bife a milanesa ${i}`,
        });
    }

    return (
        <div>
            <AbcBreadCrumb routes={routesList} />
            <Button type="primary" shape="round" icon={<PlusOutlined />}>
                Nova receita
             </Button>
            <Divider>{props.title}</Divider>
            <div className="recipe-content">
                <List
                    grid={{ column:4, xs: 2, gutter: 20}}
                    dataSource={listData}
                    renderItem={item => (
                        <List.Item>
                            <Card
                                size="small"
                                className="card"
                                hoverable
                                cover={<img alt="alt" src="https://image.freepik.com/free-photo/breaded-chicken_1157-14.jpg" />}
                            >
                                {item.title}
                            </Card>
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}

export default RecipeList;