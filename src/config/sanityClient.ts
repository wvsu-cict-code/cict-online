import sanityClient from "@sanity/client";
export default sanityClient({
    projectId: "fn97ikmo",
    dataset: "production",
    useCdn: false
  });