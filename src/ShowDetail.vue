<template>
  <div class="columns">
    <div class="column is-8">
      <router-link to="/">back</router-link>

      <section class="content">
        <h1 class="title is-2">{{details.title}}</h1>
        <div v-html="details.overview"></div>
      </section>
    </div>
    <div class="column is-4">
      <img :src="imgUrl + details.poster_path" alt="">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const api_key = "f296bad51dc51f2364f5a770e8baeb70"
export default {
  data () {
    return {
      details: {},
      imgUrl: "https://image.tmdb.org/t/p/w300_and_h450_bestv2/"
    }
  },
  created () {
    axios.get('movie/' + this.$route.params.id + '?api_key=' + api_key)
    .then(response => {
      this.details = response.data
    })
  }
}
</script>

<style>

</style>