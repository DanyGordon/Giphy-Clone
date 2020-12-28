<template>
  <div id="app">
    <div class="title"><a href="/">Giphy</a></div>
    <div class="header">
      <Search />
    </div>
    <Gifs />
    <Footer />
  </div>
</template>

<script>
import Search from './components/Search'
import Gifs from './components/Gifs'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Search,
    Gifs,
    Footer,
  }
}
</script>

<style>

* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  min-height: calc(100vh - 70px);
  display: grid;
  grid-template-rows: auto auto 1fr auto;
}

body:not(.mobile)::-webkit-scrollbar {
  width: 6px;
}

body:not(.mobile)::-webkit-scrollbar-track {
  background: rgba(192, 192, 192, .7); 
  width: 3px;
}

body:not(.mobile)::-webkit-scrollbar-thumb {
  background: #0080ff;
  width: 3px;
}

button, img {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.title {
  width: 250px;
}

.title a {
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: .15em;
  color: #0080ff;
  text-decoration: none;
}

.header, .content {
  width: 100%;
  margin: 10px auto;
}

.header {
  max-width: 735px;
}

.header form {
  display: flex;
  align-items: baseline;
}

@media screen and (max-width: 760px){
  #app {
    min-height: 100vh;
  }
  
  .header form {
    flex-wrap: wrap;
  }
}

</style>
