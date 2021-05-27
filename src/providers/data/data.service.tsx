import React from 'react';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

import {ApolloProvider} from '@apollo/react-hooks';


const client = new ApolloClient({
   uri: 'http://localhost:3000/shop-api/?languageCode=ru',
   name: 'react-web-client',
   cache: new InMemoryCache(),
});

interface IPropsApolloProvider {
    children: React.ReactNode;
}

export function ApolloProviderService (props: IPropsApolloProvider) {
    return (
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider> 
    )
}
