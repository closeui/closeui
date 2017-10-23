import { mount } from 'avoriaz'
import Button from 'src/button'

describe('Button', () => {
  let wrapper
  it('create a simple button', () => {
    wrapper = mount(Button)
    expect(wrapper.hasClass('cl-button')).to.be.true
  })
})
