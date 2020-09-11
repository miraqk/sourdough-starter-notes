<template>
  <div class="layout">
    <header class="header">
      {{ $static.metadata.siteName }}
    </header>
    <slot/>
    <footer class="footer">
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>