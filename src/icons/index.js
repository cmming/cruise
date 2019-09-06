import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon' // svg component
import generateIconsView from '@/components/SvgIcon/generateIconsView'

// register globally
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
const iconMap = requireAll(req)
generateIconsView.generate(iconMap)