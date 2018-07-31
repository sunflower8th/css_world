/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

class Login {

  //构造器
  constructor() {
    this.init();
  }

  //初始化方法
  init() {
    //新建div
    let mask = document.createElement('div');
    //添加样式
    mask.classList.add('mask-layer');
    //添加模板字符串
    mask.innerHTML = 
    `
    <div class="login-wrapper">
      <div class="login-title">
        <div class="title-text">登录框</div>
        <div class="close-btn">×</div>
      </div>
      <div class="username-input user-input">
        <span class="login-text">用户名:</span>
        <input type="text">
      </div>
      <div class="pwd-input user-input">
        <span class="login-text">密码:</span>
        <input type="password">
      </div>
      <div class="btn-wrapper">
        <button class="confrim-btn">确定</button>
        <button class="clear-btn">清空</button>
      </div>
    </div>
    `;
    //插入元素
    document.body.insertBefore(mask, document.body.childNodes[0]);

    //添加关闭登录框事件
    Login.addCloseLoginEvent();
    
    
  }

  //静态方法: 获取元素
  static getLoginDom(cls) {
    return  document.querySelector(cls);
  }

  //静态方法: 添加关闭登录框事件
  static addCloseLoginEvent() {
    this.getLoginDom('.close-btn').addEventListener('click', () => {
      //给遮罩层添加style, 用于隐藏遮罩层
      this.getLoginDom('.mask-layer').style = "display: none";
    })
  }

  //静态方法: 获取实例(单例)
  static getInstance() {
    if(!this.instance) {
      this.instance = new Login();
    } else {
      //移除遮罩层style, 用于显示遮罩层
      this.getLoginDom('.mask-layer').removeAttribute('style');
    }
    return this.instance;
  }
}

//添加事件
Login.getLoginDom('.login-btn').addEventListener('click', () => {
  Login.getInstance();
})
