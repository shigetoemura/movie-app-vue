<template>
  <div id="app">
    <header class="header">
      <template>
        <div class="content-wrapper header-nav">
          <h1><router-link to="/">Movies App</router-link></h1>
          <nav>
            <ul>
              <li>
                <router-link to="/now_playing">公開中の映画</router-link>
              </li>
              <li>
                <router-link to="/popular">人気の映画</router-link>
              </li>
              <li>
                <router-link to="/top">高評価の映画</router-link>
              </li>
              <li>
                <router-link to="/upcoming">近日公開の映画</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </template>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.content-wrapper {
   width: 1400px;
   margin: 0 auto;
 }

.header {
  width: 100%;
}

.header-nav {
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header nav ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header nav ul li {
  margin-right: 50px
}

ul,li {
  margin:0;
  padding:0;
  list-style: none;
}

a {
  text-decoration: none;
  color: #000;
  cursor: pointer;
}

a:hover {
  transition: .3s;
  opacity: 0.6;
}
</style>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: "Yu Gothic", "游ゴシック", YuGothic, "游ゴシック体", sans-serif;
  font-weight: 500;
  color: #333;
  line-height: 2.0;
  margin-top: 60px;
  text-align: center;
}

</style>
