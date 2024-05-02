import sanityClient, { createClient } from "@sanity/client";
export const client = createClient({
    projectId: "eiuetlyo",
    dataset: "production",
    useCdn: process.env.NODE_ENV === "production",
})

