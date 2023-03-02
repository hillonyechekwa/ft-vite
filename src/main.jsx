import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import{ApolloClient, ApolloProvider, createHttpLink, gql} from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'
import {setContext} from '@apollo/client/link/context'
import { cache } from '../cache'
import {BrowserRouter} from 'react-router-dom'
import Layout from './components/Layout'
import './styles/globals.scss'
export const typeDefs = gql`
  extend type Query{
    isSignedIn: Boolean!
  }`



const uploadLink = createUploadLink()
const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql'
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? token : "",
    }
  }
});


const client = new ApolloClient({
  cache: cache,
  link: authLink.concat(httpLink, uploadLink),
  typeDefs,
  connectToDevTools: true
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
  <React.StrictMode>
  <BrowserRouter>
  <Layout>
    <App />
  </Layout>
  </BrowserRouter>
  </React.StrictMode>
  </ApolloProvider>,
)
