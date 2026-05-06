export default {
  name: "attraction",
  title: "Attraction",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "description", title: "Description", type: "text" },
    { name: "category", title: "Category", type: "string" },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: ["draft", "ready_for_review", "approved", "published"]
      }
    }
  ]
};
