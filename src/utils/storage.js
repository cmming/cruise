var engine = require('store/src/store-engine')
var storages = [
    require('store/storages/localStorage'),
]
var plugins = [
    require('store/plugins/defaults'),
    require('store/plugins/expire')
]
var storage = engine.createStore(storages, plugins)
// storage.set('foo', 'bar', new Date().getTime() + 3000)
// storage.get('foo)
export default storage;