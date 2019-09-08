const state = {
    menuCollapse: false,
    dynamicMenu: [],
    axiosPromiseArr: [],
}

const getters = {
    menuCollapse: state => {
        return state.menuCollapse
    },
    dynamicMenu: state => {
        return state.dynamicMenu
    },
    axiosPromiseArr: state => {
        return state.axiosPromiseArr
    },
}

const mutations = {
    SET_MENU_COLLAPSE: (state, data) => {
        state.menuCollapse = data
    },
    SET_USER_MENU: (state, data) => {
        state.dynamicMenu = data
    },
    ADD_AXIOS: (state, data) => {
        state.axiosPromiseArr.push(data)
    },
    DELETE_AXIOS: (state, index) => {
        delete state.axiosPromiseArr[index]
    },
    INIT_AXIOS: (state) => {
        state.axiosPromiseArr = []
    },
}

const actions = {
    setMenuCollapse({ commit }, data) {
        commit('SET_MENU_COLLAPSE', data)
    },
    setUserMenu({
        commit
    }, params) {
        commit('SET_USER_MENU', params);
    },
    storeAxios({ commit }, params) {
        commit('ADD_AXIOS', params)
    },
    deleteAxios({ commit }, params) {
        commit('DELETE_AXIOS', params)
    },
    initAxios({ commit }, params) {
        commit('INIT_AXIOS', params)
    },
}

export default {
    layout: {
        state,
        getters,
        mutations,
        actions
    }
}