import Vue from 'vue';
import Component from 'vue-class-component';
import HelloComponent from './shared/components/hello/hello.component.vue';

@Component({
  components: {
    hello: HelloComponent
  }
})
export default class AppComponent extends Vue {
  public message = 'Hello there, it this message from app component'
}