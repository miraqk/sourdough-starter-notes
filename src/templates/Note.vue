<template>
  <Layout>
  	<h2 v-html="$page.note.title" />
  	<div v-html="$page.note.content" />
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Note ($id: ID!) {
  note: note (id: $id) {
    order
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
  	return {
  	  title: this.$page.note.title
  	}
  }
}
</script>