import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import withData from '../config/withData';

import { Layout } from '../components';

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        // this exposes the query to the user
        pageProps.query = ctx.query;

        return { pageProps };
    }

    render() {
        const { apollo, Component, pageProps } = this.props;

        return (
            <Container>
                <ApolloProvider client={apollo}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ApolloProvider>
            </Container>
        );
    }
}

export default withData(MyApp);
