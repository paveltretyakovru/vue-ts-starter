import Vue from 'vue';
import Component from 'vue-class-component';
import {Prop as prop, Watch as watch} from 'vue-property-decorator';

@Component
export default class HelloComponent extends Vue {
  @prop()
  private message: string;
}