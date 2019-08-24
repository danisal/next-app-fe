import styled from '@emotion/styled';

import { Header, Card, CardMedia, CardHeader, CardContent, CardActions } from '../components';

const Wrapper = styled.div`
    flex: 1 1 auto;
    height: 100%;
    background-color: ${props => props.theme.colors.ghostWhite};
    display: flex;
    flex-direction: column;
`;

const Content = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    padding: 16px 24px;
    overflow-y: auto;
`;

function MainPage() {
    return (
        <Wrapper>
            <Header />
            <Content>
                <Card>
                    <CardHeader>title</CardHeader>
                    <CardMedia src="https://source.unsplash.com/random" />
                    <CardContent>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sit exercitationem omnis quae
                        adipisci minus laborum magnam. Laudantium veniam doloribus aperiam quidem repudiandae modi
                        autem, eos perferendis nobis? Officiis, quasi.
                    </CardContent>
                    <CardActions>actions</CardActions>
                </Card>
                <Card>
                    <CardHeader>title</CardHeader>
                    <CardMedia src="https://source.unsplash.com/random" />
                    <CardContent>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sit exercitationem omnis quae
                        adipisci minus laborum magnam. Laudantium veniam doloribus aperiam quidem repudiandae modi
                        autem, eos perferendis nobis? Officiis, quasi.
                    </CardContent>
                    <CardActions>actions</CardActions>
                </Card>
                <Card>
                    <CardHeader>title</CardHeader>
                    <CardMedia src="https://source.unsplash.com/random" />
                    <CardContent>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sit exercitationem omnis quae
                        adipisci minus laborum magnam. Laudantium veniam doloribus aperiam quidem repudiandae modi
                        autem, eos perferendis nobis? Officiis, quasi.
                    </CardContent>
                    <CardActions>actions</CardActions>
                </Card>
            </Content>
        </Wrapper>
    );
}

export default MainPage;
