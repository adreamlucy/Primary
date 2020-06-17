// 这是浏览器内置的一个API，实现了监听window的scroll事件、判断是否在视口中以及节流三大功能。
let img = document.document.getElementsByTagName("img");

const observer = new IntersectionObserver(changes => {
  //changes 是被观察的元素集合
  for(let i = 0, len = changes.length; i < len; i++) {
    let change = changes[i];
    // 通过这个属性判断是否在视口中
    if(change.isIntersecting) {
      const imgElement = change.target;
      imgElement.src = imgElement.getAttribute("data-src");
      observer.unobserve(imgElement);
    }
  }
})
observer.observe(img);






// 2 现在我们用另外一种方式来判断图片是否出现在了当前视口, 即 DOM 元素的 getBoundingClientRect API。
function lazyload() {
    for(let i = count; i <num; i++) {
      // 元素现在已经出现在视口中
      if(img[i].getBoundingClientRect().top < document.documentElement.clientHeight) {
        if(img[i].getAttribute("src") !== "default.jpg") continue;
        img[i].src = img[i].getAttribute("data-src");
        count ++;
      }
    }
  }