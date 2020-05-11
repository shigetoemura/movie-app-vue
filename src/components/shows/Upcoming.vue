<template>
  <div class="columns is-multiline">
      <div class="column is-2" v-for="movie in movies" :key="movie.id">
          <div class="card">
            <div class="card-image">
              <img :src="imgUrl + movie.poster_path" :alt="movie.original_title">
            </div>
            <div class="card-content">
              <p class="title"><router-link :to="'/shows/' + movie.id">{{movie.title}}</router-link></p>
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
      movies: [],
      imgUrl: "https://image.tmdb.org/t/p/w300_and_h450_bestv2/"
    }
  },
  mounted () {
    this.fetchMovies()
  },
  methods: {
    fetchMovies() {
      axios.get('/movie/upcoming' + '?api_key=' + api_key)
      .then(res => {
        console.log(res)
        this.movies = res.data.results
      })
    }
  }
}
</script>

<style>

</style>