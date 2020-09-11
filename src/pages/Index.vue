<template>
  <Layout>
    <ul>
      <li v-for="note in $page.notes.edges">
        <h1 v-html="note.node.title" />
        <div v-html="note.node.content" />
      </li>
    </ul>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Source'
  }
};
</script>

<page-query>
query Notes {
  notes: allNote( sortBy: "order", order: ASC ) {
    edges{
      node {
        order
        title
        content
      }
    }
  }
}
</page-query>