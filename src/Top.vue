<template>
  <div id="top">
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
        class="float-left align-middle list-group-item list-group-item-action">
        <div class="row">
          <span class="col-md-1 col-sm-2 col-3 t-start">
            <toggle-button class="toggle-button"
              :width="50"
              :height="22"
              :labels="{checked: 'on', unchecked: 'off'}"/>
          </span>
          <span class="mr-auto col-auto t-start tasks" v-text="task.text"></span>
          <span class="col-auto t-start">
            <a class="btn btn-primary map" href="#" role="button" @click="showModal( task )">Map</a>
          </span>
        </div>
      </div>
    </div>
    <modal :show.sync="modalFlag" large width="400">
      <div slot="modal-header" class="modal-header">
        <h4 class="modal-title">
          Map of {{ mapTitle }}
        </h4>
        <button type="button" class="btn btn-default" @click.prevent="closeModal">Exit</button>
      </div>
      <div slot="modal-body" class="modal-body">
        <gmap-map :style="{width: '100%', height: mapHeight + 'px'}"
          :center="center"
          :zoom="14">
          <gmap-marker
            :position="center"
            :clickable="true"
            :draggable="true">
          </gmap-marker>
        </gmap-map>
      </div>
      <div slot="modal-footer" class="modal-footer"></div>
    </modal>
  </div>
</template>

<script>
import { alert, modal } from 'vue-strap'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      modalFlag: false,
      mapTitle: 'any map.',
      mapHeight : 400,
      tasks : [{
          text: '浅草寺',
          geo: {lat: 35.714722, lng: 139.79675}
        },{
          text: '浅草神社',
          geo: {lat: 35.715139, lng: 139.797444}
        },{
          text: '本龍院',
          geo: {lat: 35.717055, lng: 139.803018}
        },{
          text: '今戸神社',
          geo: {lat: 35.719306, lng: 139.803528}
        },{
          text: '不動院',
          geo: {lat: 35.727054, lng: 139.807861}
        },{
          text: '石浜神社',
          geo: {lat: 35.729789, lng: 139.806988 }
        },{
          text: '吉原神社',
          geo: {lat: 35.7228664, lng: 139.7911195}
        },{
          text: '鷲神社',
          geo: {lat: 35.7225053, lng: 139.789767}
        },{
          text: '矢先稲荷神社',
          geo: {lat: 35.7135866, lng: 139.7855482}
        }
      ],
      center: { lat: 35.714722, lng: 139.79675 }
    }
  },
  created () { // would work in 'ready', 'attached', etc.
    let _this = this;
    window.addEventListener('load', () => {
      _this.mapHeight = this.$el.clientHeight * 0.9
      console.log(this.$el.clientHeight, _this.mapHeight)
    })
  },
  methods: {
    showModal( { text , geo = { lat: 35.714722, lng: 139.79675 } } ) {
      this.mapTitle = text
      this.modalFlag = true
      console.log(this.modalFlag, text, geo.lat, geo.lng )

      if (text && geo ) {
        this.center = geo
        this.$gmapDefaultResizeBus.$emit('resize')
        console.log({ mapHeight: this.mapHeight })
      }
    },
    closeModal(){
      this.modalFlag = false
    }
  },
  components: {
    alert,
    modal
  }
}
</script>

<style lang="scss">

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
.modal-dialog {
  max-width: none;
  margin: 30px;
}
</style>
