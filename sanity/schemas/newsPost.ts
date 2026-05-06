export default {
  name: "newsPost",
  title: "News Post",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } },
    { name: "excerpt", title: "Excerpt", type: "text" },
    { name: "body", title: "Body", type: "text" },
    { name: "eventDate", title: "Event date", type: "date" },
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
