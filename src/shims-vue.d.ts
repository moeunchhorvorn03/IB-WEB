import type { Router } from 'vue-router';
import { Store } from 'vuex';

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@vue/runtime-core' {
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>,
    $router: Router,
    $bizMOB: Record<any, any>; // bizMOB Global 변수 선언
  }
}
