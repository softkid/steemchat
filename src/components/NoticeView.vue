<template> 
<div class="demo-card-wide mdl-card mdl-shadow--2dp">
  <div class="mdl-card__title">
    <h2 class="mdl-card__title-text">Welcome</h2>
  </div>
  <div class="mdl-card__supporting-text">
    NOTICE:Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Mauris sagittis pellentesque lacus eleifend lacinia...
  </div>
  <div class="mdl-card__actions mdl-card--border">
    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
      Get Started
    </a>
  </div>
  <div class="mdl-card__menu">
    <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
      <i class="material-icons">share</i>
    </button>
  </div>
</div>
</template>
<script>
  export default {
    methods: {
      displayDetails (id) {
        this.$router.push({name: 'detail', params: { id: id }})
      },
      getCats () {
        if (navigator.onLine) {
          this.saveCatsToCache()
          return this.$root.cat
        } else {
          return JSON.parse(localStorage.getItem('cats'))
        }
      },
      saveCatsToCache () {
        this.$root.$firebaseRefs.cat.orderByChild('created_at').once('value', (snapchot) => {
          let cachedCats = []
          snapchot.forEach((catSnapchot) => {
            let cachedCat = catSnapchot.val()
            cachedCat['.key'] = catSnapchot.key
            cachedCats.push(cachedCat)
          })
          localStorage.setItem('cats', JSON.stringify(cachedCats))
        })
      }
    },
    mounted () {
      this.saveCatsToCache()
    }
  }
</script>
 <style>
.demo-card-wide.mdl-card {
  width: 512px;
}
.demo-card-wide > .mdl-card__title {
  color: #fff;
  height: 176px;
  background: url('../assets/logo.png') center / cover;
}
.demo-card-wide > .mdl-card__menu {
  color: #fff;
}
</style>  
