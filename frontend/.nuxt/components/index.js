export { default as FormEcole } from '../../components/FormEcole.vue'
export { default as ListEleve } from '../../components/ListEleve.vue'
export { default as Map } from '../../components/Map.vue'

export const LazyFormEcole = import('../../components/FormEcole.vue' /* webpackChunkName: "components/FormEcole" */).then(c => c.default || c)
export const LazyListEleve = import('../../components/ListEleve.vue' /* webpackChunkName: "components/ListEleve" */).then(c => c.default || c)
export const LazyMap = import('../../components/Map.vue' /* webpackChunkName: "components/Map" */).then(c => c.default || c)
