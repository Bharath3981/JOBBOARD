import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient("http://localhost:9000/graphql");

export async function getJobs() {
  const query = gql`
    query {
      jobs {
        description
        id
        title
        date
        company {
          id
          description
          name
        }
      }
    }
  `;
  const data = await client.request(query);
  return data.jobs;
}

export async function getJob(jobId) {
  const query = gql`
    query ($jobId: ID!) {
      job(id: $jobId) {
        id
        title
        company {
          description
          id
          name
        }
        companyId
        date
        description
      }
    }
  `;
  const data = await client.request(query, { jobId });
  return data.job;
}

export async function getCompany(companyId) {
  const query = gql`
    query Query($companyId: ID!) {
      company(id: $companyId) {
        description
        id
        name
      }
    }
  `;

  const data = await client.request(query, { companyId });
  return data.company;
}
