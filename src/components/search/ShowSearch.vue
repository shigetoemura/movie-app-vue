<template>
  <div>
    <form id="search" @submit.prevent="search">
      <div class="field has-addons">
        <p class="control is-expanded has-icon has-icon-left">
          <input type="text" class="input" placeholder="Search for shows ..." v-model="searchInput" />

          <span class="icon is-small"></span>
        </p>
        <p class="control"><button type="submit" class="button is-success">探す</button></p>
      </div>
    </form>

    <a @click="clear_search" v-if="searchResult.total_results > 0" class="pull-left">Clear search </a>

    <p v-if="searchError">No results found.</p>

    <div class="columns is-multiline">
      <div class="column is-2" v-for="movie in searchResult" :key="movie.id">
        <div class="card">
          <div class="card-image">
            <router-link :to="'/shows/' + movie.id"><img v-if="movie.poster_path" :src="imgUrl + movie.poster_path" :alt="movie.original_title"></router-link>
          </div>
          <div class="card-content">
            <p class="title is-4"><router-link :to="'/shows/' + movie.id">{{ movie.original_title}}</router-link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const api_key = "f296bad51dc51f2364f5a770e8baeb70"
export default {
  data () {
    return {
      searchInput: '',
      searchResult: [],
      searchError: false,
      imgUrl: "https://image.tmdb.org/t/p/w300_and_h450_bestv2/"
    }
  },
  methods: {
    search () {
      this.searchResult = []
      this.searchError = false
      axios.get('search/movie?api_key=' + api_key + '&query=' + this.searchInput)
      .then(res => {
        console.log(res)
        this.searchResult = res.data.results
      })
    },
    clear_search () {
      this.searchInput  = ''
      this.searchError  = false
      this.searchResult = []
    }
  }
}
</script>

<style>
#search {
  padding: 1em 0;
}
</style>