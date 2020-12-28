<template>
  <footer id="footer">
    <div class="container">
      <div class="copyright">
        Powered by <a href="https://giphy.com">Giphy</a>.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss">
  .container {
    max-width: 960px;
    margin: 10px auto 0;
    border-top: 1px solid #b4ddff;
    padding: 20px 0;

    .copyright {
      width: 200px;
      margin-right: auto;
      font-size: .8em;
      letter-spacing: .11em;

      a {
        text-decoration: none;
        color: #0080ff;
      }
    }
  }
</style>