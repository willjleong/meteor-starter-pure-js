/**
 * Created by williamleong on 4/20/15.
 */

var AdminConfig;

AdminConfig = {
  name: Config.name,
  collections: {
    Posts: {
      color: 'red',
      icon: 'pencil',
      auxCollections: ['Attachments'],
      tableColumns: [
        {
          label: 'Title',
          name: 'title'
        }, {
          label: 'User',
          name: 'owner',
          collection: 'Users'
        }
      ]
    },
    Comments: {
      color: 'green',
      icon: 'comments',
      auxCollections: ['Posts'],
      tableColumns: [
        {
          label: 'Content',
          name: 'content'
        }, {
          label: 'Post',
          name: 'doc',
          collection: 'Posts',
          collection_property: 'title'
        }, {
          label: 'User',
          name: 'owner',
          collection: 'Users'
        }
      ]
    }
  },
  dashboard: {
    homeUrl: '/dashboard'
  },
  autoForm: {
    omitFields: ['createdAt', 'updatedAt']
  }
};

if (Meteor.isClient) {
  window.AdminConfig = AdminConfig;
} else if (Meteor.isServer) {
  global.AdminConfig = AdminConfig;
}