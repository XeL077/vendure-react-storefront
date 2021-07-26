import React from 'react';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from "@apollo/client";

import introspectionResult  from '../../generated/introspection-results';

const client = new ApolloClient({
   uri: 'http://localhost:3000/shop-api/?languageCode=ru',
   name: 'react-web-client',
   cache: new InMemoryCache({
       possibleTypes: introspectionResult.possibleTypes,
   }),
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
