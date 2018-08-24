import Vue from 'vue';
import AppComponent from './app/app.component.vue';

class AppCore {
  private instance: Vue;

  private init() {
    this.instance = new Vue({
      el: '#app',
      render: h => h(AppComponent),
    })
  }

  constructor() {
    this.init();
  }
}

new AppCore();