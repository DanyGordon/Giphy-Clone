<template>
  <form v-on:keyup.enter="searchGifs(query, limit)">
    <label class="input-field">
      <input 
       type="text" 
       name="search" 
       id="search" 
       class="search"
       v-model="query"
      >
      <div class="label-text">Search</div>
    </label>
    <button
     type="submit" 
     class="btn" 
     v-on:click.prevent="searchGifs(query, limit)"
    >
    Search
    </button>
  </form>
</template>

<script>
/* import store from '../store/index' */
import API_KEY from '../config'

export default {
  name: 'Search',
  props: [],
  data: function () {
    return {
      query: '',
      limit: 21,
    }
  },
  methods: {
    searchGifs: function (query, limit) {
      let url = 
      `https://api.giphy.com/v1/gifs/search?&api_key=${API_KEY}&q=${query}&limit=${limit}`;

      this.$store.dispatch('GET_GIFS_FROM_API', url);
      this.$store.commit('SET_QUERY', query);
    }
  },
}

</script>

<style lang="scss" scoped>
  .search {
    width: 375px;
    height: 30px;
    // border: none;
    border: 1.5px solid #03030375;
    border-radius: 13px;
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
    padding: 0px 0px 0px 8px;
    font-size: 1.1em;
    transition: border-color .4s ease-in;
    
    &:focus {
      outline: none;
      border: 1.5px solid #47a6ff;
    }
  }

  .input-field {
    display: block;
    padding-top: 30px;
    width: 400px;
    margin: 0;
    overflow: hidden;
    margin-left: auto;

    .label-text {
      text-align: left;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      padding-left: 8px;
      font-size: 1.1em;
      letter-spacing: .12em;
      transition: all 0.2s ease-out;
    }
    .search:focus + .label-text,
    .search:not([value='']) + .label-text {
      padding-left: 0px;
      transform: (translateY(-60px));
      color: #0080ff;
      
      @media screen and (max-width: 760px) {
        padding-left: 20px;
      }
    }

  }

  .btn {
    width: 125px;
    margin: 0 25px;
    margin-right: auto;
    padding: 5px 2px;
    border: 1px solid #0080ff;
    background: #0080ff;
    border-radius: 15px;
    color: #fff;
    font-size: .8em;
    letter-spacing: .12em;
    cursor: pointer;

    &:hover {
      background: #fff;
      color: #0080ff;
    }

    &:focus {
      outline: none;
    }

    @media screen and (max-width: 760px) {
      margin: 0 25px 0 auto;
    }
  }
</style>