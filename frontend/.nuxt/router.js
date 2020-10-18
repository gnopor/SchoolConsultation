import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c334027a = () => interopDefault(import('../pages/consultation/index.vue' /* webpackChunkName: "pages/consultation/index" */))
const _05453034 = () => interopDefault(import('../pages/ecole/index.vue' /* webpackChunkName: "pages/ecole/index" */))
const _2c0899ae = () => interopDefault(import('../pages/eleve/index.vue' /* webpackChunkName: "pages/eleve/index" */))
const _60cc002e = () => interopDefault(import('../pages/consultation/_id/index.vue' /* webpackChunkName: "pages/consultation/_id/index" */))
const _119657ab = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/consultation",
    component: _c334027a,
    name: "consultation"
  }, {
    path: "/ecole",
    component: _05453034,
    name: "ecole"
  }, {
    path: "/eleve",
    component: _2c0899ae,
    name: "eleve"
  }, {
    path: "/consultation/:id",
    component: _60cc002e,
    name: "consultation-id"
  }, {
    path: "/",
    component: _119657ab,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
