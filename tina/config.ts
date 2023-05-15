import { defineConfig } from "tinacms";


interface SelectField {
  name: string
  component: 'select'
  label?: string
  description?: string
  options: (Option | string)[]
}

type Option = {
  value: string
  label: string
}



// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "9ac8f91b-39b3-4b04-bcef-d6e772027e57",
  token: "d85280148d3b40dffe1b23e63b8092ce54deaf3e",

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "blog",
        label: "Blogs",
        path: "content/blog",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          },
          {
            type: "image",
            name: "image",
            label: "Image"
          },
          {
            type: "string",
            name: "description",
            label: "Meta Description"
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
            description: "Check to save as a draft"
          },
          {
            type: 'string',
            name: "type",
            label: "Post Type",
            description: "Select the type of post",
            options: ['featured', 'post']
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            description: 'Tags for this post',
            list: true,
            ui: {
              component: 'tags',
            }
          },
          {
            type: 'string',
            name: 'categories',
            label: 'Categories',
            description: 'Categories for this post',
            list: true,
            ui: {
              component: 'tags',
            }
          },
          {
            type: 'string',
            name: 'date',
            label: 'Date',
            description: 'Date for this post',
            ui: {
              component: 'date',
            }
          }
        ]
      }
      
    ],
  },
});


// ---
// title: "How To Use Checklists To Improve Your UX"
// date: 2019-10-29T10:07:47+06:00
// draft: false

// # post thumb
// image: "images/featured-post/post-1.jpg"

// # meta description
// description: "this is meta description"

// # taxonomies
// categories:
//   - "Android And Gaming"
// tags:
//   - "Photos"
//   - "Game"
//   - "React"
//   - "Python"
//   - "New"

// # post type
// type: "featured"