export default {
  name: "villaInfo",
  title: "Villa Info",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "description", title: "Description", type: "text" },
    { name: "amenities", title: "Amenities", type: "array", of: [{ type: "string" }] },
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
