const app = new Vue({
  el: ".main",
  data: {
    query: "",
    results: []
  },
  methods: {
    sub: function(event) {
      this.results = [this.query, this.query, this.query, this.query];
      event.preventDefault();
    }
  },
  template: `
  <div class="main">
    <div class="search-form">
      <form action="#">
        <legend class="search-form__legend">Get carified!</legend>
        <input class="search-form__text" v-model="query" type="text" name="query" value="" placeholder="" disabled="disabled">
        <input class="search-form__button" v-on:click="sub" type="submit" value="Search" disabled="disabled" method="POST">
      </form>
    </div>
    <div class="search-results">
      <li v-for="result in results">{{result}}</li>
    </div>
  </div>
  `
})
