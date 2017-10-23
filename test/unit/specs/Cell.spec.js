import { mount } from 'avoriaz'
import CellGroup from 'src/cell-group'
import Cell from 'src/cell'

describe('CellGroup', () => {
  let wrapper
  afterEach(() => {
    wrapper && wrapper.destroy()
  })
  it('create a cell-group', () => {
    wrapper = mount(CellGroup, {
      propsData: {}
    })
    expect(wrapper.hasClass('cl-cell-group')).to.be.true
  })
})
describe('Cell', () => {
  let wrapper
  afterEach(() => {
    wrapper && wrapper.destroy()
  })
  it('create a cell', () => {
    wrapper = mount(Cell)
    expect(wrapper.hasClass('cl-cell')).to.be.true
  })
})
