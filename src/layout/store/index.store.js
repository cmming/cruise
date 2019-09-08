const state = {
    menuCollapse: false,
    dynamicMenu: []
}

const getters = {
    menuCollapse: state => {
        return state.menuCollapse
    },
    dynamicMenu: state => {
        return state.dynamicMenu
    }
}

const mutations = {
    SET_MENU_COLLAPSE: (state, data) => {
        state.menuCollapse = data
    },
    SET_USER_MENU: (state, data) => {
        state.dynamicMenu = data
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
}

export default {
    layout: {
        state,
        getters,
        mutations,
        actions
    }
}