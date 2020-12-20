import { INIT_LOADER,HALT_LOADER} from '../types';

const loaderStatus = {isLoading:null}

export const initLoader= (state = loaderStatus, { type }) => {
    switch (type){
       case INIT_LOADER:
           state.isLoading = true;
           return {
               ...state
           }
           case HALT_LOADER:
           state.isLoading = false;
           return {
               ...state
           }
       default:
        return state;
    }
}