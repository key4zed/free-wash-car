<template>
  <div class='index-page' :style="{ 'padding-top': topPadding + 'px' }">
    <div class='datas-wrap'>
      <div :class="['coupon-wrap', showMore ? 'show-more' : '']">
        <div :class="['coupon-items-wrap', !showMore ? 'show-more-wrap' : '']">
          <div class='coupon-item' v-for='(coupon, index) in couponList' :key='index'>
            <div class='type'>{{coupon.type}}</div>
            <div class='info'>
              <span class='info-shopname'>{{coupon.shopName}}</span>
              <span class='info-address'>{{coupon.address}}</span>
              <span class='btn-get' @click='getCoupon(coupon)'>免费领取</span>
            </div>
          </div>
          <div class='show-more' v-if='!showMore' @click='showMoreCoupon'></div>
        </div>
      </div>
      <span class='more-sale-title' v-if='upkeepList.length > 0'>来DC商城APP享更多超值优惠</span>
      <div class='upkeep-wrap' v-if='upkeepList.length > 0'>
        <div class='upkeep-item' v-for='(upkeep, index) in upkeepList' :key='index'>
          <span class='car-mark' :style="{ 'background-image': 'url(' + upkeep.carMark + ')' }"></span>
          <div class='upkeep-data-wrap'>
            <span class='upkeep-title'>{{upkeep.title}}</span>
            <span class='upkeep-title-min' v-if='upkeep.titleMin'>{{upkeep.titleMin}}</span>
            <span class='upkeep-title-detail' v-if='upkeep.titleDetail'>{{upkeep.titleDetail}}</span>
            <span class='upkeep-content' v-if='upkeep.content'>{{upkeep.content}}</span>
            <span class='upkeep-content-img' v-if='upkeep.contentImg' :style="{ 'background-image': 'url(' + upkeep.contentImg + ')' }"></span>
            <div class='price-btn-get'>
              <span>618活动价：</span>
              <span v-html='activePrice(upkeep.activePrice, upkeep.activePriceUnit)'></span>
              <span @click='orderUpkeep(upkeep)'>立即预约</span>
            </div>
            <span class='upkeep-tip'>{{upkeep.tip}}</span>
            <div class='upkeep-big-img' :style="{ 'background-image': 'url(' + upkeep.bigImg + ')' }"></div>
          </div>
        </div>
      </div>
      <div class='download-tip-wrap'>
        <span class='tip-1'>重要的事情再说一遍</span>
        <span class='tip-2'>一定要下载APP才能享受更多超值优惠</span>
        <span class='icon-finger'></span>
        <img src='../assets/ma.png'>
        <span class='tip-3'>长按识别二维码，点击普通下载，进行安装</span>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  data () {
    return {
      topPadding: 1.115625 * document.body.clientWidth,
      showMore: false,
      couponList: [],
      upkeepList: []
    }
  },
  mounted () {
    this.couponList = [
      {
        id: 'coupon-1',
        type: '洗车券',
        shopName: '一汽大众4S店',
        address: '平阳南路88号'
      },
      {
        id: 'coupon-2',
        type: '洗车券',
        shopName: '福特4S店',
        address: '新晋祠路109号'
      },
      {
        id: 'coupon-3',
        type: '洗车券',
        shopName: '一汽丰田4S店',
        address: '太榆路88号'
      },
      {
        id: 'coupon-4',
        type: '洗车券',
        shopName: '广汽丰田4S店',
        address: '平阳南路88号'
      },
      {
        id: 'coupon-5',
        type: '洗车券',
        shopName: '东风日产4S店',
        address: '平阳南路88号'
      },
      {
        id: 'coupon-6',
        type: '洗车券',
        shopName: '福特4S店',
        address: '平阳南路88号'
      },
      {
        id: 'coupon-7',
        type: '洗车券',
        shopName: '斯柯达4S店',
        address: '平阳南路88号'
      },
      {
        id: 'coupon-8',
        type: '洗车券',
        shopName: '起亚4S店',
        address: '平阳南路88号'
      },
      {
        id: 'coupon-9',
        type: '洗车券',
        shopName: '奥迪4S店',
        address: '太榆路88号'
      },
      {
        id: 'coupon-10',
        type: '洗车券',
        shopName: '雷克萨斯4S店',
        address: '平阳南路88号'
      },
      {
        id: 'coupon-11',
        type: '洗车券',
        shopName: '一汽大众4S店',
        address: '太榆路88号'
      },
      {
        id: 'coupon-12',
        type: '洗车券',
        shopName: 'JEEP 4S店',
        address: '平阳南路88号'
      },
      {
        id: 'coupon-13',
        type: '洗车券',
        shopName: '雷诺4S店',
        address: '平阳南路88号'
      },
      {
        id: 'coupon-14',
        type: '洗车券',
        shopName: '奥迪4S店',
        address: '龙城大街北端'
      }
    ]
    this.upkeepList = [
      {
        id: 'upkeep-1',
        carMark: require('@/assets/car-mark-ft.png'),
        title: '安全回馈 四轮大保养',
        content: '四轮平衡 160 + 刹车养护 388 + 球头养护 198 = 746 元',
        activePrice: '566.0',
        tip: '通过APP下单，到店享受价值80元的体验设备换油！',
        bigImg: require('@/assets/upkeep-1.png'),
        contact: '15034015723'
      },
      {
        id: 'upkeep-2',
        carMark: require('@/assets/car-mark-jp.png'),
        title: '自由光/大切汽车保养',
        activePrice: '900.0',
        activePriceUnit: '次',
        tip: '通过APP下单，到店赠送3张300元代金券',
        bigImg: require('@/assets/upkeep-2.png'),
        contact: '15034015723'
      },
      {
        id: 'upkeep-3',
        carMark: require('@/assets/car-mark-ft.png'),
        title: '机油要的就是原配',
        titleMin: '丰田纯牌机油0W20 4L，买四送一',
        contentImg: require('@/assets/upkeep-4.png'),
        activePrice: '398.0',
        tip: '通过APP下单，到店赠送价值50元的临时停车牌 + 玻璃水',
        bigImg: require('@/assets/upkeep-3.png'),
        contact: '15034015723'
      },
      {
        id: 'upkeep-4',
        carMark: require('@/assets/car-mark-ric.png'),
        title: '每天限量秒杀保养2套',
        titleMin: '年期3次基础保养（天籁/蓝鸟除外）',
        content: '含4L合成机油1桶 + 机滤1个 + 5000公里保养工时费 = 1296 元',
        activePrice: '1036.8',
        tip: '通过APP下单，到店赠送价值182元的送节气门清洗1次',
        bigImg: require('@/assets/upkeep-6.png'),
        contact: '15034015723'
      },
      {
        id: 'upkeep-5',
        carMark: require('@/assets/car-mark-skd.png'),
        title: '斯柯达保养精选',
        titleMin: '原厂SL 5W-40机油 + 原厂机滤',
        titleDetail: '新明锐/昕锐/昕动/新晶锐特价套餐',
        activePrice: '1221.0',
        tip: '通过APP下单，到店赠送价值80元的原产燃油添加剂一瓶',
        bigImg: require('@/assets/upkeep-5.png'),
        contact: '15034015723'
      }
    ]
  },
  methods: {
    showMoreCoupon () {
      this.showMore = !this.showMore
    },
    activePrice (price, unit) {
      var priceArr = price.split('.')
      var returnPriceHtml = `&#xa5<span style='font-size: 1.1rem'>${
        priceArr[0]
      }</span>.<span style='font-size: 0.9rem'>${priceArr[1]}</span>`
      if (unit) {
        returnPriceHtml += `<span style='font-size: 0.9rem'> / ${unit}</span>`
      }
      return returnPriceHtml
    },
    getCoupon (coupon) {
      this.showGetPop(coupon)
      // this.showOrderPop(coupon)
    },
    orderUpkeep (upkeep) {
      window.location.href = 'tel:' + upkeep.contact
    },
    showGetPop (coupon) {
      var that = this
      this.$addTouchPreventDomId(this.$appConfig.getTemplate_id)
      this.$tip(
        Vue.extend({
          template: this.$appConfig.getTemplate,
          data () {
            return {
              userNameInput: '',
              userPhoneInput: '',
              userCarPlateInput: '',
              showUserNameTip: false,
              showUserPhoneTip: false,
              showUserCarPlateTip: false
            }
          },
          methods: {
            popClose () {
              this.$tip_close()
            },
            toGet () {
              this.showUserNameTip = false
              this.showUserPhoneTip = false
              this.showUserCarPlateTip = false
              if (this.userNameInput.trim() === '') {
                this.showUserNameTip = true
                return false
              }
              if (this.userPhoneInput.trim() === '') {
                this.showUserPhoneTip = true
                return false
              }
              if (this.userCarPlateInput.trim() === '') {
                this.showUserCarPlateTip = true
                return false
              }
              this.$loading('洗车券领取中...')
              this.$comfun
                .http_post(this, 'a=addclearncars', {
                  l_name: this.userNameInput.trim(),
                  l_phone: this.userPhoneInput.trim(),
                  l_car: this.userCarPlateInput.trim(),
                  l_dname: coupon
                })
                .then(
                  response => {
                    if (response.body === '1') {
                      this.$toast('洗车券领取成功')
                      this.$tip_close().then(() => {
                        that.showGetSuccessPop(coupon)
                      })
                    } else {
                      this.$toast('洗车券领取失败')
                    }
                  },
                  response => {
                    this.$toast('洗车券领取失败')
                  }
                )
            }
          }
        })
      )
    },
    showOrderPop (upkeep) {
      var that = this
      this.$addTouchPreventDomId(this.$appConfig.orderTemplate_id)
      this.$tip(
        Vue.extend({
          template: this.$appConfig.orderTemplate,
          data () {
            return {
              orderTimePicker: null,
              userNameInput: '',
              userPhoneInput: '',
              userCarPlateInput: '',
              userOrderTimeInput: '',
              showUserNameTip: false,
              showUserPhoneTip: false,
              showUserCarPlateTip: false,
              showUserOrderTimeTip: false
            }
          },
          mounted () {
            setTimeout(() => {
              this.orderTimePicker = this.$picker(this, {
                wheelHeight: '100px',
                gradualHeight: '68px',
                root: this.$refs.order_time_picker_wrap,
                type: 'yyyy-mm-dd',
                value: [ this.$comfun.formatDate(new Date(), 'yyyy'), this.$comfun.formatDate(new Date(), 'M'), this.$comfun.formatDate(new Date(), 'dd') ],
                valRange: [ '~' ],
                selectedFn: (selected, arg) => {
                  this.userOrderTimeInput = selected[0].val + '-' + selected[1].val + '-' + selected[2].val
                }
              })
            }, 10)
          },
          methods: {
            popClose () {
              this.$tip_close()
            },
            showOrderTimePicker (flag) {
              if (flag) {
                this.$refs.order_time_picker_wrap.style.opacity = 1
                this.$refs.order_time_picker_wrap.style.height = '100px'
                if (this.orderTimePicker) {
                  this.orderTimePicker.initVal()
                }
              } else {
                this.$refs.order_time_picker_wrap.style.opacity = 0
                this.$refs.order_time_picker_wrap.style.height = '0px'
              }
            },
            toGet () {
              this.showUserNameTip = false
              this.showUserPhoneTip = false
              this.showUserCarPlateTip = false
              this.showUserOrderTimeTip = false
              if (this.userNameInput.trim() === '') {
                this.showUserNameTip = true
                return false
              }
              if (this.userPhoneInput.trim() === '') {
                this.showUserPhoneTip = true
                return false
              }
              if (this.userCarPlateInput === '') {
                this.showUserCarPlateTip = true
                return false
              }
              if (this.userOrderTimeInput === '') {
                this.showUserOrderTimeTip = true
                return false
              }
              this.$loading('预约中...')
              this.$comfun
                .http_post(this, 'a=addcleancar', {
                  l_name: this.userNameInput.trim(),
                  l_phone: this.userPhoneInput.trim(),
                  l_car: this.userCarPlateInput.trim(),
                  l_time: this.userOrderTimeInput.trim(),
                  l_dname: upkeep
                })
                .then(
                  response => {
                    if (response.body === '1') {
                      this.$toast('预约成功')
                      this.$tip_close().then(() => {
                        that.showOrderSuccessPop(upkeep)
                      })
                    } else {
                      this.$toast('预约失败')
                      this.$tip_close().then(() => {
                        that.showOrderSuccessPop(upkeep)
                      })
                    }
                  },
                  response => {
                    this.$toast('预约失败')
                    this.$tip_close().then(() => {
                      that.showOrderSuccessPop(upkeep)
                    })
                  }
                )
            }
          }
        })
      )
    },
    showGetSuccessPop (coupon) {
      var that = this
      this.$addTouchPreventDomId(this.$appConfig.getSuccessTemplate_id)
      this.$tip(
        Vue.extend({
          template: this.$appConfig.getSuccessTemplate,
          data () {
            return {
              couponType: coupon.type,
              couponShopName: coupon.shopName,
              couponAddress: coupon.address,
              userCarPlateInput: '',
              userOrderTimeInput: '',
              showUserCarPlateTip: false,
              showUserOrderTimeTip: false
            }
          },
          methods: {
            popClose () {
              this.$tip_close()
            },
            toOrder () {
              this.$tip_close().then(() => {
                // that.showOrderPop(coupon)
                that.$loading('正在跳转到App下载链接')
                window.location.href = 'http://android.myapp.com/myapp/detail.htm?apkName=com.dc.customer&ADTAG=mobile'
              })
            }
          }
        })
      )
    },
    showOrderSuccessPop (upkeep) {
      this.$addTouchPreventDomId(this.$appConfig.orderSuccessTemplate_id)
      this.$tip(
        Vue.extend({
          template: this.$appConfig.orderSuccessTemplate,
          data () {
            return {
              userCarPlateInput: '',
              userOrderTimeInput: '',
              showUserCarPlateTip: false,
              showUserOrderTimeTip: false
            }
          },
          methods: {
            popClose () {
              this.$tip_close()
            },
            orderSuccessSure () {
              this.$tip_close()
            }
          }
        })
      )
    }
  }
}
</script>

<style scoped>
.index-page {
  background-image: url('../assets/page-top.png');
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100% auto;
}

.datas-wrap {
  position: relative;
  background: linear-gradient(#2d68f2, #343eee);
}

/* 领取洗车卡券 */
.datas-wrap > .coupon-wrap {
  position: relative;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 96%;
  height: 24rem;
  border: 1px dashed #4783ff;
  border-radius: 6px;
  padding: 0.8rem 0;
  margin-bottom: 1rem;
}

.datas-wrap > .show-more {
  height: auto;
}

.datas-wrap > .coupon-wrap::before {
  content: '';
  position: absolute;
  top: -1.7rem;
  left: 0;
  width: 3rem;
  height: 6rem;
  background-image: url('../assets/guide.png');
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100% auto;
}

.datas-wrap > .coupon-wrap > .coupon-items-wrap {
  position: relative;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.datas-wrap > .coupon-wrap > .show-more-wrap::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 0;
  width: 90%;
  height: 4rem;
  background: linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0),
    rgb(255, 255, 255)
  );
  z-index: 9;
  pointer-events: none;
}

.datas-wrap > .coupon-wrap > .show-more-wrap::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 0.4rem;
  width: 90%;
  height: 1.1rem;
  background-image: url('../assets/more.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto 75%;
  z-index: 99;
  pointer-events: none;
}

.datas-wrap > .coupon-wrap > .coupon-items-wrap > .coupon-item {
  position: relative;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 90%;
  height: 4rem;
  border-radius: 4px;
  background: #ffffff;
  font-family: '微软雅黑';
  overflow: hidden;
}

.datas-wrap
  > .coupon-wrap
  > .coupon-items-wrap
  > .coupon-item:nth-of-type(n + 2) {
  margin-top: 0.4rem;
}

.datas-wrap > .coupon-wrap > .coupon-items-wrap > .coupon-item > .type {
  position: absolute;
  top: 0;
  left: 0;
  width: 28%;
  height: 4rem;
  line-height: 4rem;
  background: #ff6253;
  color: #ffffff;
  font-weight: bold;
  font-size: 1.1rem;
}

.datas-wrap > .coupon-wrap > .coupon-items-wrap > .coupon-item > .type::after {
  content: '';
  position: absolute;
  top: 0;
  right: -0.5rem;
  width: 2rem;
  height: 4rem;
  background-image: url('../assets/coupon-split.png');
  background-repeat: no-repeat;
  background-position: right top;
  background-size: auto 100%;
  pointer-events: none;
}

.datas-wrap > .coupon-wrap > .coupon-items-wrap > .coupon-item > .info {
  position: absolute;
  top: 0;
  right: 0;
  width: 72%;
  height: 4rem;
  line-height: 4rem;
  color: #414141;
  font-size: 0.8rem;
}

.datas-wrap
  > .coupon-wrap
  > .coupon-items-wrap
  > .coupon-item
  > .info
  > .info-shopname {
  position: absolute;
  display: inline-block;
  line-height: normal;
  top: 0.8rem;
  left: 1rem;
  color: #414141;
  font-weight: bold;
  font-size: 0.9rem;
}

.datas-wrap
  > .coupon-wrap
  > .coupon-items-wrap
  > .coupon-item
  > .info
  > .info-address {
  position: absolute;
  display: inline-block;
  line-height: normal;
  top: 2.2rem;
  left: 1rem;
  color: #414141;
  font-size: 0.6rem;
}

.datas-wrap
  > .coupon-wrap
  > .coupon-items-wrap
  > .coupon-item
  > .info
  > .btn-get {
  position: absolute;
  display: inline-block;
  line-height: normal;
  top: 1.3rem;
  right: 0.6rem;
  color: #414141;
  font-size: 0.6rem;
  background: #ffec33;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-weight: bold;
}

.datas-wrap > .coupon-wrap > .coupon-items-wrap > .show-more {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 4rem;
  overflow: hidden;
  z-index: 999;
}

/* 来商城app享受更多优惠 */
.datas-wrap > .more-sale-title {
  position: relative;
  display: inline-block;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 18rem;
  border: 1px solid #234eeb;
  border-radius: 10px;
  padding: 0.8rem 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #f9eb0b;
  font-weight: bold;
  font-size: 1.2rem;
  box-shadow: inset 0 0 13px rgba(255, 255, 255, 0.59);
}

.datas-wrap > .more-sale-title::after {
  content: '';
  position: absolute;
  display: block;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 10px;
  box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.2);
}

.datas-wrap > .upkeep-wrap {
  position: relative;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 96%;
  border: 1px dashed #4783ff;
  border-radius: 6px;
  padding: 0.8rem 0;
  margin-bottom: 1rem;
  margin-top: 1.2rem;
}

.datas-wrap > .upkeep-wrap::before {
  content: '品牌五点 保养正当时';
  position: absolute;
  display: inline-block;
  top: -0.9rem;
  left: 0;
  right: 0;
  width: 12rem;
  margin: 0 auto;
  background: linear-gradient(to right, #57bdb0, #26afed);
  border-radius: 10rem;
  padding: 0.2rem 0.4rem;
  box-shadow: 0 0 10px 10px #3150ef;
  font-size: 1rem;
}

.datas-wrap > .upkeep-wrap > .upkeep-item {
  position: relative;
  width: calc(100% - 3.4rem);
  margin-left: 2.4rem;
  background: #ffffff;
  border-radius: 3px;
  padding: 0.8rem 0;
  margin-bottom: 1rem;
  margin-top: 2.3rem;
  padding-bottom: 2.2rem;
}

.datas-wrap > .upkeep-wrap > .upkeep-item > .car-mark {
  position: absolute;
  display: inline-block;
  top: -1.9rem;
  left: -1.9rem;
  width: 3.8rem;
  height: 3.8rem;
  background-repeat: no-repeat;
  background-position: right top;
  background-size: 100% auto;
  pointer-events: none;
}

.datas-wrap > .upkeep-wrap > .upkeep-item > .upkeep-data-wrap {
  position: relative;
  display: block;
  top: 0.6rem;
  left: 1rem;
  width: calc(100% - 2rem);
  background-repeat: no-repeat;
  background-position: right top;
  background-size: 100% auto;
}

.datas-wrap > .upkeep-wrap > .upkeep-item > .upkeep-data-wrap > .upkeep-title {
  position: relative;
  display: block;
  color: #f95a45;
  font-size: 1.4rem;
  font-weight: bold;
  text-align: left;
  z-index: 2;
}

.datas-wrap
  > .upkeep-wrap
  > .upkeep-item
  > .upkeep-data-wrap
  > .upkeep-title-min {
  position: relative;
  display: block;
  color: #f95a45;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 0.2rem;
  text-align: left;
  z-index: 2;
}

.datas-wrap
  > .upkeep-wrap
  > .upkeep-item
  > .upkeep-data-wrap
  > .upkeep-title-detail {
  position: relative;
  display: block;
  color: #f95a45;
  font-size: 0.8rem;
  font-weight: bold;
  margin-top: 0.2rem;
  text-align: left;
  z-index: 2;
}

.datas-wrap
  > .upkeep-wrap
  > .upkeep-item
  > .upkeep-data-wrap
  > .upkeep-content {
  position: relative;
  display: block;
  width: 60%;
  color: rgb(73, 73, 73);
  font-size: 0.9rem;
  text-align: left;
  margin-top: 0.6rem;
  font-weight: bold;
  z-index: 2;
}

.datas-wrap
  > .upkeep-wrap
  > .upkeep-item
  > .upkeep-data-wrap
  > .upkeep-content-img {
  position: relative;
  display: block;
  width: 50%;
  height: 4rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% auto;
  margin-top: 2rem;
  z-index: 2;
}

.datas-wrap > .upkeep-wrap > .upkeep-item > .upkeep-data-wrap > .price-btn-get {
  position: relative;
  display: block;
  width: calc(58% - 1.6rem);
  padding: 0.3rem 0.8rem;
  background: linear-gradient(#4074fb, #3644ef);
  margin-top: 2.4rem;
  border-radius: 8px;
  box-shadow: 0 0 10px #8c9ec3;
  z-index: 2;
}

.datas-wrap
  > .upkeep-wrap
  > .upkeep-item
  > .upkeep-data-wrap
  > .price-btn-get
  > span:nth-of-type(1) {
  position: relative;
  display: block;
  text-align: left;
  font-size: 0.6rem;
}

.datas-wrap
  > .upkeep-wrap
  > .upkeep-item
  > .upkeep-data-wrap
  > .price-btn-get
  > span:nth-of-type(2) {
  position: relative;
  display: block;
  text-align: left;
  font-size: 1.2rem;
}

.datas-wrap
  > .upkeep-wrap
  > .upkeep-item
  > .upkeep-data-wrap
  > .price-btn-get
  > span:nth-of-type(3) {
  position: absolute;
  display: inline-block;
  bottom: 0.7rem;
  right: 0.6rem;
  font-size: 0.8rem;
  background: #ffec33;
  color: #2b0c57;
  font-weight: bold;
  padding: 0.2rem 0.4rem;
}

.datas-wrap > .upkeep-wrap > .upkeep-item > .upkeep-data-wrap > .upkeep-tip {
  position: relative;
  display: block;
  color: #f95a45;
  font-size: 0.8rem;
  font-weight: bold;
  margin-top: 0.8rem;
  text-align: left;
  z-index: 2;
}

.datas-wrap
  > .upkeep-wrap
  > .upkeep-item
  > .upkeep-data-wrap
  > .upkeep-big-img {
  position: absolute;
  display: block;
  bottom: calc((100% - 20rem) / 2);
  right: -0.6rem;
  width: 40%;
  height: 20rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% auto;
  pointer-events: none;
  z-index: 1;
}

.datas-wrap > .download-tip-wrap {
  position: relative;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;
  padding: 0.8rem 0;
  margin-bottom: 1rem;
  margin-top: 1.8rem;
}

.datas-wrap > .download-tip-wrap > .tip-1 {
  position: relative;
  display: block;
  width: 100%;
  text-align: center;
  color: #f9e102;
  font-size: 1.2rem;
  font-weight: bold;
}

.datas-wrap > .download-tip-wrap > .tip-2 {
  position: relative;
  display: block;
  width: 100%;
  text-align: center;
  color: #f9e102;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 0.4rem;
}

.datas-wrap > .download-tip-wrap > .icon-finger {
  position: relative;
  display: block;
  width: 100%;
  height: 2.2rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto 100%;
  background-image: url(../assets/finger.png);
  margin-top: 0.8rem;
}

.datas-wrap > .download-tip-wrap > img {
  position: relative;
  display: block;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 12rem;
  height: 12rem;
  margin-top: 1.4rem;
}

.datas-wrap > .download-tip-wrap > .tip-3 {
  position: relative;
  display: block;
  width: 100%;
  text-align: center;
  color: #f9e102;
  font-size: 0.96rem;
  font-weight: bold;
  margin-top: 1.4rem;
}
</style>
