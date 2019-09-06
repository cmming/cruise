import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import SvgIcon from '@/components/SvgIcon/index.vue'

describe('SvgIcon.vue', () => {
    it('renders props.msg when passed', () => {
        const props = { iconClass: "dashboard", className: "custom-class" }
        const wrapper = shallowMount(SvgIcon, {
            propsData: props
        })
        expect(wrapper.classes()).to.include('custom-class')
        expect(wrapper.contains('use[xlink:href="#icon-' + props.iconClass + '"]')).to.be.true
    })
})