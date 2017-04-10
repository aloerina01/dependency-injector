'use strict'

class DependenciesMap {
    constructor() {
        console.log(process.env.DI_CONTAINER);
        if (process.env.DI_CONTAINER) {
            this._map = process.env.DI_CONTAINER;
            // this._map = {};
        } else {
            this._map = {};
        }
    }
    put(containerKey, dependencies) {
        this._map[containerKey] = dependencies;
    }
    get(containerKey) {
        return this._map[containerKey];
    }
}

const map = new DependenciesMap();
module.exports = map;

// const proxy = new Proxy(new DependenciesMap(), {

// });
// export default proxy;