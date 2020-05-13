import * as sdk from '~~/sdk'
import Vue from 'vue'

Vue.prototype.$sdk = sdk
Vue.prototype.$api = sdk.api

export default function ({ app }) {
  app.$sdk = sdk
  app.$api = sdk.api
}
