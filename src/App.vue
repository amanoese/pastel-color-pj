<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Pastel-Colors</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <div class="container list-group">
      <div v-for="task in tasks"
        type="button" class="float-left align-middle list-group-item list-group-item-action">
        <div class="row">
          <span class="col-sm-1 col-3 t-center">
            <toggle-button class="toggle-button" :labels="{checked: 'on', unchecked: 'off'}"/>
          </span>
          <span class="mr-auto col-auto t-start" v-text="task"></span>
          <span class="col-auto  t-start">
            <a class="btn btn-primary" href="#" role="button">Map</a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { alert } from 'vue-strap'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tasks : [
        '浅草寺',
        '浅草神社',
        '本龍院',
        '今戸神社',
        '不動院',
        '石浜神社',
        '吉原神社',
        '鷲神社',
        '矢先稲荷神社'
      ]
    }
  },
  components: {
    alert
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.t-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.t-start {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.toggle-button {
  margin-bottom: 0;
}
</style>
