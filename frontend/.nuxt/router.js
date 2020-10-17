import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _da1a2480 = () => interopDefault(import('../pages/consultation/index.vue' /* webpackChunkName: "pages/consultation/index" */))
const _4aceab89 = () => interopDefault(import('../pages/ecole/index.vue' /* webpackChunkName: "pages/ecole/index" */))
const _376cf6cc = () => interopDefault(import('../pages/eleve/index.vue' /* webpackChunkName: "pages/eleve/index" */))
const _571f28ab = () => interopDefault(import('../pages/consultation/_id/index.vue' /* webpackChunkName: "pages/consultation/_id/index" */))
const _0f9fd18e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _da1a2480,
    name: "consultation"
  }, {
    path: "/ecole",
    component: _4aceab89,
    name: "ecole"
  }, {
    path: "/eleve",
    component: _376cf6cc,
    name: "eleve"
  }, {
    path: "/consultation/:id",
    component: _571f28ab,
    name: "consultation-id"
  }, {
    path: "/",
    component: _0f9fd18e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
