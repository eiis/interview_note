// 导入应用配置
import appConfig from './../appConfig.js';

// 从应用配置中获取API基础URL
const { apiUrl: baseurl } = appConfig;

// 定义拦截器对象，包含请求拦截器和响应拦截器
const interceptors = {
  request: (url, config, otherConfig) => {
    // 请求拦截器
    console.log('请求拦截器:', url, config);
    // 设置默认header
    config.header = Object.assign({}, {
      'Content-Type': 'application/json',
      'a-wx-session-id': wx.getStorageSync('a-wx-session-id'),
      'a-client-type': 'wx_min',
      'a-client-class': 'customer'
    }, config.header);
    if (otherConfig && otherConfig.loading) {
      wx.showLoading({ title: '加载中' });
    }
    return config;
  },
  response: (response) => {
    // 响应拦截器
    console.log('响应拦截器:', response);
    if (response.code === 401) {
      wx.removeStorageSync('Login');
    }
    if (response.code === '50001') {
      wx.showToast({ title: response.message, icon: 'error' });
    }
    if (response.code === '0') {
      wx.hideLoading({});
    }
    if (response.message === '商品不存在或已下架！') {
      wx.showToast({
        title: "商品不存在或已下架！",
        duration: 2000,
        icon: 'none'
      });
    }
    return response;
  }
};

// 定义原始的request函数
const request = (url, config) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${baseurl}${url}`, // 域名接口地址
      method: config.method, // 配置method方法
      data: config.method === 'GET' ? config.data : JSON.stringify(config.data), // 如果是GET, GET自动让数据成为query String, 其他方法需要让options.data转化为字符串
      header: config.header,
      success(res) {
        if (res.statusCode === 200) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      },
      fail(error) {
        reject(error.data);
        console.log('[xhr err]', url, 'err:', error.data);
      }
    });
  });
};

// 定义新的request函数，用于应用拦截器
const newRequest = (url, config, otherConfig) => {
  // 应用请求拦截器
  const modifiedConfig = interceptors.request(url, config, otherConfig);

  // 发起请求
  return request(url, modifiedConfig)
    .then(response => {
      // 应用响应拦截器
      return interceptors.response(response);
    })
    .catch(error => {
      // 错误处理
      console.error('Request Error:', error);
      throw error;
    });
};

// 定义封装好的post方法
const post = (url, data, otherConfig) => {
  return newRequest(url, { method: 'POST', data }, otherConfig);
};

// 定义封装好的get方法
const get = (url, params, otherConfig) => {
  return newRequest(url, { method: 'GET', data: params }, otherConfig);
};

// 导出post和get方法
export { post, get };

// // 导出新的request函数
// export { newRequest };
