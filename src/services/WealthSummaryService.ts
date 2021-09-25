import {
  ApolloClient, createHttpLink, gql, InMemoryCache
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { GraphQLError } from "graphql";
import IWealthSummaryLoadAllResponse from "../interfaces/IWealthSummaryLoadAllResponse";

const httpLink = createHttpLink({
  uri: 'https://harura-fliper-test.herokuapp.com/v1/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'content-type': 'application/json',
      'x-hasura-admin-secret': process.env.REACT_APP_API_KEY,
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const wealthSummaryServiceLoadAll = (
  onLoading: (loading: boolean) => void,
  onSuccess: (response: IWealthSummaryLoadAllResponse) => void,
  onError: (errors: readonly GraphQLError[]) => void,
) => {
  onLoading(true);
  client
    .query<IWealthSummaryLoadAllResponse>({
      query: gql`
        query MyQuery {
          wealthSummary {
            id
            profitability
            total
            cdi
            gain
            hasHistory
          }
        }
      `
    })
    .then(
      result => {
        if (!!result.errors) {
          onError(result.errors);
        } else {
          onSuccess(result.data);
        }
      },
    ).finally(
      () => onLoading(false)
    );
}