exports.createSchemaCustomization = ({ actions, schema }) => {
  actions.createTypes([
    schema.buildObjectType({
      name: 'ContentfulGigs',
      interfaces: ['Node'],
      fields: {
        isFuture: {
          type: 'Boolean',
          resolve: (source) => new Date(source.date) >= new Date(),
        },
      },
    }),
  ]);
};
