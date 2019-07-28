
<template>
  <div>
    <section ref="print" style="text-align:center">
      <p>锄禾日当午</p>
      　　　　　<p>汗滴禾下土 </p>
      　　　　　<p>谁知盘中餐</p>
      　　　　　<p>粒粒皆辛苦</p>
      <div class="no-print">不要打印我</div>
      <button @click="dayin">print</button>
    </section>
    <Slider v-model="value1"></Slider>

    <build ref="build" :data="data2" :value="value" :label-width="labelWidth"></build>
    <Grid ref="grid" :data="table"></Grid>
  </div>
</template>
<script>
export default {
  name: 'jingyesi',
  data() {
    let self = this
    let data1 = [
      {
        name: 'basic1',
        title: '申请人信息',
        fields: [
          {
            name: 'xm',
            label: '姓名：',
            static: true
          },
          {
            name: 'idno',
            label: '身份证：',
            static: true
          }
        ],
        layout: [['xm'], ['idno']],
        boxOptions: {
          withBorder: true,
          withFooterBorder: false,
          footerAlign: 'center'
        },
        buttons: {
          items: [
            [
              {
                label: '查询',
                type: 'primary',
                onClick: function(target, data) {
                  console.log('11')
                }
              }
            ]
          ]
        }
      }
    ]
    let table = {
      nowrap: true,
      draggable: true,
      indexCol: true,
      indexColTitle: '序号',
      checkCol: false,
      multiSelect: false,
      theme: 'simple',
      pagination: true,
      total: 6,
      data: [
        { loginNo: '111' },
        { staffName: '111' },
        { staffMobile: '111' },
        { regionName: '111' },
        { orgName: '111' }
      ],
      userDetail: {},
      columns: [
        { name: 'loginNo', title: '题名' },
        { name: 'staffName', title: '著者' },
        { name: 'staffMobile', title: '馆藏地点' },
        { name: 'regionName', title: '借阅时间' },
        { name: 'orgName', title: '还书时间' }
      ],
      onLoadData: function(url, param, callback) {
        callback([
          {
            loginNo: '三国演义',
            staffName: '罗贯中',
            staffMobile: '国家图书馆',
            regionName: '2018年10月1日',
            orgName: '2018年10月20日'
          }
        ])
      }
    }
    return {
      value: 'false',
      value1: 25,
      data2: data1,
      table: table,
      value: {
        xm: 'suki',
        idno: '130926198711132236'
      },
      labelWidth: 200
    }
  },
  methods: {
    dayin() {
      this.$print(this.$refs.print)
    }
  }
}
</script>
