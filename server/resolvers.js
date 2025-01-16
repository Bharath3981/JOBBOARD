import { getJobs, getJob } from "./db/jobs.js";
import { getCompany } from "./db/companies.js";

export const resolvers = {
  Query: {
    jobs: async () => {
      return getJobs();
    },
    job: (_, arg) => getJob(arg.id),
    company: (_, arg) => getCompany(arg.id),
  },
  Job: {
    date: (parent) => {
      return parent.createdAt;
    },
    company: async (parent) => {
      const comp = await getCompany(parent.companyId);
      return comp;
    },
  },
};
