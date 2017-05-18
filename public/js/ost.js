(function($) {
  // 解决 a标签 不能跳转页面问题[监听tap事件]
  mui("nav").on("tap", "a", function() {
    document.location.href = this.href;
  });
  // 轮播
  var gallery = mui('.mui-slider');
  gallery.slider({
    interval: 5000
  });
  // 课堂页面选项卡a标签修改
  mui("#ost_classTab").on("tap", "a", function() {
    document.location.href = this.href;
  });
})(mui)
