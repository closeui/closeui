import { mount } from 'avoriaz'
import Button from 'src/button/button'

describe('Button', () => {
  let wrapper
  it('create a simple button', () => {
    wrapper = mount(Button)
    expect(wrapper.hasClass('bz-button')).to.be.true
  })
})
