import {
  Module,
  VuexModule,
  Mutation,
  getModule,
} from 'vuex-module-decorators';
import {
  ILoadingState,
  ILoaderState,
} from '@/store/types';
import store from '@/store';

@Module({
  name: 'Loader',
  namespaced: true,
  dynamic: true,
  store,
})
class Loader extends VuexModule implements ILoaderState {
  status: ILoadingState = {
    timer: true,
    reports: true,
    loadingBar: false,
  };

  @Mutation
  public activate(name: string) {
    this.status[name] = true;
  }

  @Mutation
  public deactivate(name: string) {
    this.status[name] = false;
  }

  get isLoading() {
    return (name: string) => this.status[name];
  }
}

const loader = getModule(Loader);

export default loader;
