export default {
  install: function (Vue, options) {
    var ComFun = {
      http_get: function (context, url) {
        if (context && url) {
          var http = new Promise((resolve, reject) => {
            var callUrl = context.$appConfig.server + url
            if (url.indexOf('http://') === 0 || url.indexOf('https://') === 0) {
              callUrl = url
            }
            context.$http.get(callUrl, {
              'headers': {
                'Content-Type': 'application/json;charset=utf-8',
                'Access-Control-Allow-Origin': '*'
              }
            }).then(response => {
              context.$comfun.consoleBeautiful(context, '接口访问完成：url【' + url + '】', '#0FB0BF', 'https://img.zcool.cn/community/01db9f579571700000012e7e9da0fb.gif', {
                '链接': callUrl,
                '请求返回': response
              })
              context.$loading_close()
              resolve(response)
            }, response => {
              context.$comfun.consoleBeautiful(context, '接口访问出错：url【' + url + '】', '#BF0F3D', 'https://img.zcool.cn/community/014db6579571700000012e7e602493.gif', {
                '链接': callUrl,
                '请求返回': response
              })
              context.$loading_close()
              reject(response)
            })
          })
          return http
        } else {
          console.error('上下文对象或请求地址不能为空', 'http_get(context, url)')
        }
      },
      http_post: function (context, url, params) {
        if (context && url) {
          var paramsData = params || {}
          var http = new Promise((resolve, reject) => {
            var callUrl = context.$appConfig.server + url
            if (url.indexOf('http://') === 0 || url.indexOf('https://') === 0) {
              callUrl = url
            }
            context.$http.post(callUrl, JSON.stringify(paramsData), {
              'headers': {
                'Content-Type': 'application/json;charset=utf-8',
                'Access-Control-Allow-Origin': '*'
              }
            }).then(response => {
              context.$comfun.consoleBeautiful(context, '接口访问完成：url【' + url + '】', '#0FB0BF', 'https://img.zcool.cn/community/01db9f579571700000012e7e9da0fb.gif', {
                '链接': callUrl,
                '请求返回': response,
                '相关参数': paramsData
              })
              context.$loading_close()
              resolve(response)
            }, response => {
              context.$comfun.consoleBeautiful(context, '接口访问出错：url【' + url + '】', '#BF0F3D', 'https://img.zcool.cn/community/014db6579571700000012e7e602493.gif', {
                '链接': callUrl,
                '请求返回': response,
                '相关参数': paramsData
              })
              context.$loading_close()
              reject(response)
            })
          })
          return http
        } else {
          console.error('上下文对象或请求地址不能为空', 'http_post(context, url)')
        }
      },
      http_file: function (context, url, aboutKey, file, progressFn) {
        if (context && url && file) {
          context.$comfun.console(context, '要上传的视频对象', file)
          const formData = new FormData()
          formData.append(aboutKey, file)
          var http = new Promise((resolve, reject) => {
            var callUrl = context.$appConfig.server + url
            if (url.indexOf('http://') === 0 || url.indexOf('https://') === 0) {
              callUrl = url
            }
            context.$http.post(callUrl, formData, {
              'headers': {
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': '*'
              },
              progress (event) {
                context.$comfun.console(context, '视频上传进度', parseFloat(event.loaded / event.total * 100))
                if (progressFn && typeof progressFn === 'function' && Object.prototype.toString.call(progressFn).toLowerCase() === '[object function]') {
                  progressFn(parseFloat(event.loaded / event.total))
                }
              }
            }).then(response => {
              context.$comfun.consoleBeautiful(context, '接口访问完成：url【' + url + '】', '#0FB0BF', 'https://img.zcool.cn/community/01db9f579571700000012e7e9da0fb.gif', {
                '链接': callUrl,
                '请求返回': response,
                '要上传的视频对象': file
              })
              context.$loading_close()
              resolve(response)
            }, response => {
              context.$comfun.consoleBeautiful(context, '接口访问出错：url【' + url + '】', '#BF0F3D', 'https://img.zcool.cn/community/014db6579571700000012e7e602493.gif', {
                '链接': callUrl,
                '请求返回': response,
                '要上传的视频对象': file
              })
              context.$loading_close()
              reject(response)
            })
          })
          return http
        } else {
          console.error('上下文对象或请求地址不能为空', 'http_file(context, url)')
        }
      },
      console: function (context, tip, data, type) {
        context.$comfun.consoleBeautiful(context, tip, null, null, data, type)
      },
      consoleBeautiful: function (context, tip, tipColor, tipPic, consoleData, type) {
        if (!tipColor) {
          tipColor = '#0FB0BF'
        }
        if (!tipPic) {
          tipPic = 'https://img.zcool.cn/community/01c3365795716f0000012e7ef2e489.gif'
        }
        if (type) {
          if (type === 'error') {
            tipColor = '#BF0F3D'
            tipPic = 'https://img.zcool.cn/community/014db6579571700000012e7e602493.gif'
          } else if (type === 'warn') {
            tipColor = '#BF720F'
            tipPic = 'https://img.zcool.cn/community/01db9f579571700000012e7e9da0fb.gif'
          } else if (type === 'info') {
            tipColor = '#0FB0BF'
            tipPic = 'https://img.zcool.cn/community/01c3365795716f0000012e7ef2e489.gif'
          }
        }
        if (consoleData) {
          console.log(`%c ${tip}`, `height: 40px; padding-left: 60px; line-height: 56px; color: ${tipColor}; background-repeat: no-repeat; background-size: auto 100%; background-image: url(${tipPic});`, consoleData)
        } else {
          console.log(`%c ${tip}`, `height: 40px; padding-left: 60px; line-height: 56px; color: ${tipColor}; background-repeat: no-repeat; background-size: auto 100%; background-image: url(${tipPic});`)
        }
        context.$writeToConsolePanl(`<div>
        <span style="display: inline-block; width: 40px; height: 36px; vertical-align: middle; 
        background-repeat: no-repeat; background-size: auto 100%; background-image: url(${tipPic});"></span>
        <span style="vertical-align: middle;">${tip}</span></div>`, consoleData, context)
      },
      // 判断字符串是否为空
      isNotNull: function (str) {
        if (!str || str === '' || str === null || str.toLowerCase() === 'null' || typeof str === 'undefined') {
          return false
        }
        return true
      },
      // 日期格式转字符串，指定格式
      // 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符
      // 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
      // 例子：
      // (new Date()).format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
      // (new Date()).format("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
      formatDate: function (date, fmt) {
        var o = {
          'M+': date.getMonth() + 1, // 月份
          'd+': date.getDate(), // 日
          'h+': date.getHours(), // 小时
          'm+': date.getMinutes(), // 分
          's+': date.getSeconds(), // 秒
          'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
          'S': date.getMilliseconds() // 毫秒
        }
        if (/(y+)/.test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
        }
        for (var k in o) {
          if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
          }
        }
        return fmt
      }
    }

    Object.defineProperty(Vue.prototype, '$comfun', { value: ComFun })
  }
}
