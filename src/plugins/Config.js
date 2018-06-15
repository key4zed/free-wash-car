export default {
  install: function (Vue, options) {
    var AppConfig = {
      server: 'http://l.dachangjr.com/index.php?m=content&c=index&',
      downloadTemplate_id: 'download-app-pop-wrap',
      downloadTemplate: `<div id="download-app-pop-wrap" class="download-app-pop-wrap">
        <div class="download-app-pop">
            <div class="header"></div>
            <div class="content">
            <span class="tip-1">下载APP免费预约</span>
            <img src="${require('@/assets/ma.png')}">
            <span class="tip-2">长按识别二维码，点击普通下载，进行安装</span>
            </div>
        </div>
        </div>`,
      getTemplate_id: 'get-pop-wrap',
      getTemplate: `<div id="get-pop-wrap" class="pop-form-wrap get-pop-wrap">
          <span class="pop-form-close" @click="popClose"></span>
          <div class="pop-form-item user-name">
            <span></span>
            <input type="text" placeholder="请填写您的姓名" v-model="userNameInput"/>
            <span v-show="showUserNameTip">请填写您的姓名</span>
          </div>
          <div class="pop-form-item user-phone">
            <span></span>
            <input type="text" placeholder="请填写您的联系方式" v-model="userPhoneInput"/>
            <span v-show="showUserPhoneTip">请填写您的联系方式</span>
          </div>
          <div class="pop-form-item user-car-plate">
            <span></span>
            <input type="text" placeholder="请填写您的车牌号" v-model="userCarPlateInput"/>
            <span v-show="showUserCarPlateTip">请填写您的车牌号</span>
          </div>
          <div class="form-btn-wrap">
            <span @click="toGet">立即领取</span>
          </div>
        </div>`,
      orderTemplate_id: 'order-pop-wrap',
      orderTemplate: `<div id="order-pop-wrap" class="pop-form-wrap order-pop-wrap">
        <span class="pop-form-close" @click="popClose"></span>
        <div class="pop-form-item user-name">
          <span></span>
          <input type="text" placeholder="请填写您的姓名" v-model="userNameInput"/>
          <span v-show="showUserNameTip">请填写您的姓名</span>
        </div>
        <div class="pop-form-item user-phone">
          <span></span>
          <input type="text" placeholder="请填写您的联系方式" v-model="userPhoneInput"/>
          <span v-show="showUserPhoneTip">请填写您的联系方式</span>
        </div>
        <div class="pop-form-item user-car-plate">
          <span></span>
          <input type="text" placeholder="请填写您的车牌号" v-model="userCarPlateInput"/>
          <span v-show="showUserCarPlateTip">请填写您的车牌号</span>
        </div>
        <div class="pop-form-item user-order-time">
          <span></span>
          <input type="text" placeholder="预约时间" v-model="userOrderTimeInput"/>
          <!-- <input type="text" readonly placeholder="预约时间" v-model="userOrderTimeInput" @focus="showOrderTimePicker(true)" @blur="showOrderTimePicker(false)"/> -->
          <div class="picker-pop" ref="order_time_picker_wrap"></div>
          <span v-show="showUserOrderTimeTip">请选择预约时间</span>
        </div>
        <div class="form-btn-wrap">
          <span @click="toGet">立即预约</span>
        </div>
      </div>`,
      getSuccessTemplate_id: 'get-success-pop-wrap',
      getSuccessTemplate: `<div id="get-success-pop-wrap" class="pop-form-wrap get-success-pop-wrap">
        <span class="pop-form-close" @click="popClose"></span>
        <div class="title">领取成功</div>
        <span class="success-tip"></span>
        <div class="coupon-item">
          <div class="type">{{couponType}}</div>
          <div class="info">
            <span class="info-shopname">{{couponShopName}}</span>
            <span class="info-address">{{couponAddress}}</span>
          </div>
        </div>
        <div class="form-btn-wrap">
          <span @click="toOrder">立即预约</span>
        </div>
      </div>`,
      orderSuccessTemplate_id: 'order-success-pop-wrap',
      orderSuccessTemplate: `<div id="order-success-pop-wrap" class="pop-form-wrap order-success-pop-wrap">
        <span class="pop-form-close" @click="popClose"></span>
        <div class="title">预约成功</div>
        <span class="success-tip"></span>
        <div class="tip-wrap">
          <span>请在预约时间内</span>
          <span>到指定4S店报手机号即可免费洗车</span>
        </div>
        <div class="form-btn-wrap">
          <span @click="orderSuccessSure">确定</span>
        </div>
      </div>`
    }
    Object.defineProperty(Vue.prototype, '$appConfig', { value: AppConfig })
  }
}
