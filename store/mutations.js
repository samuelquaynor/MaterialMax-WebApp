import { vuexfireMutations } from 'vuexfire'

import initialState from './state'
import * as firebase from '@nuxtjs/firebase'

export default {
  ...vuexfireMutations,
  RESET_STORE: (state) => {
    Object.assign(state, initialState())
  },

  SET_AUTH_USER: (state, { authUser }) => {
    state.authUser = {
      uid: authUser.uid,
      email: authUser.email,
    }
  },
}
