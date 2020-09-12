<template>
  <header class="header">
    {{ $static.metadata.siteName }}
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>