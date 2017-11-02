<template>
  <div class="page-picker">
    <div class="page-title">Picker 选择器</div>
    <div class="page-body">
      <div class="container">
        <cl-picker :columns="pickerColumns" @change="handlePickerChange"></cl-picker>
      </div>
      <br>
      <div class="container-title">带toolbar的Picker</div>
      <cl-picker show-toolbar :title="title" :columns="pickerColumns" @change="handlePickerChange" @cancel="handlePickerCancel" @confirm="handlePickerConfirm"></cl-picker>
    </div>
  </div>
</template>
<script>
const citys = {
  '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州', '绍兴', '金华', '衢州', '舟山', '台州', '丽水'],
  '福建': ['福州', '厦门', '莆田', '三明', '泉州', '漳州', '南平', '龙岩', '宁德'],
  '湖南': ['长沙', '株洲', '湘潭', '衡阳', '邵阳', '岳阳', '常德', '张家界', '益阳', '郴州', '永州', '怀化', '娄底', '湘西土家族苗族自治州']
}
export default {
  name: '',
  data () {
    return {
      title: '地区选择',
      pickerColumns: [
        {
          values: Object.keys(citys),
          className: 'column1'
        },
        {
          values: ['杭州', '宁波', '温州', '嘉兴', '湖州', '绍兴', '金华', '衢州', '舟山', '台州', '丽水'],
          className: 'column2'
        }
      ]
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {},
  computed: {},
  methods: {
    handlePickerChange (picker, values) {
      picker.setColumnValues(1, citys[values[0]])
      console.log(values)
    },
    handlePickerCancel () {
      alert('picker cancel')
    },
    handlePickerConfirm () {
      alert('picker confirm')
    }
  },
  components: {}
}
</script>
<style lang="scss" scoped>
.container-title {
  padding-left: 15px;
}
</style>
