import {
    Header,
    Card,
    CardMedia,
    CardHeader,
    CardContent,
    CardActions,
    Container,
    Content,
} from '../components';

function MainPage() {
    return (
        <Container>
            <Header />
            <Content>
                <Card>
                    <CardHeader>title</CardHeader>
                    <CardMedia src="https://source.unsplash.com/random" />
                    <CardContent>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Libero sit exercitationem omnis quae adipisci minus
                        laborum magnam. Laudantium veniam doloribus aperiam
                        quidem repudiandae modi autem, eos perferendis nobis?
                        Officiis, quasi.
                    </CardContent>
                    <CardActions>actions</CardActions>
                </Card>
                <Card>
                    <CardHeader>title</CardHeader>
                    <CardMedia src="https://source.unsplash.com/random" />
                    <CardContent>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Libero sit exercitationem omnis quae adipisci minus
                        laborum magnam. Laudantium veniam doloribus aperiam
                        quidem repudiandae modi autem, eos perferendis nobis?
                        Officiis, quasi.
                    </CardContent>
                    <CardActions>actions</CardActions>
                </Card>
                <Card>
                    <CardHeader>title</CardHeader>
                    <CardMedia src="https://source.unsplash.com/random" />
                    <CardContent>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Libero sit exercitationem omnis quae adipisci minus
                        laborum magnam. Laudantium veniam doloribus aperiam
                        quidem repudiandae modi autem, eos perferendis nobis?
                        Officiis, quasi.
                    </CardContent>
                    <CardActions>actions</CardActions>
                </Card>
            </Content>
        </Container>
    );
}

export default MainPage;
