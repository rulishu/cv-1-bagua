
let html = document.querySelector("#html"); //通过css选择器找到这个元素
let style = document.querySelector("#style");

let string = `  
/*你好，我叫小淑
*我是一名前端工程师
*接下来我要展示我的前端功底了
*首先我要准备一个div
*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*接下来我要把div变成八卦图了
*注意看好了
*首先，把div变成一个圆
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦是阴阳形成的
*一黑一白
*/
#div1{
background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加2个神秘的小球*/
#div1::before{
    width:100px;
    height:100px;
    // border:1px solid red;
    top:0;
    left;50%;
    transform:translateX(50%);
    border-radius:50%;
    background:#000;
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    // border:1px solid red;
    bottom:0;
    left;50%;
    transform:translateX(50%);
    border-radius:50%;
    background:#fff;
    background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
`;//用string来保存展示的结果的

let string2='' //用''表示换行
let n = 0; 


let step= ()=>{
    setTimeout(() => {
      //setTimeout后面不要加等于号
      if (string[n] === "\n") {
        //取一下string的第n个字符
        string2 += "<br>"; //如果是回车就换成换行
      } else if (string[n] === " ") {
        //else if要分开写,' '中间要加空格
        string2 += "&nbsp;";
      } else {
        string2 += string[n]; //如果不是回车就照搬
      }

      html.innerHTML = string2;
      style.innerHTML = string.substring(0,n);
      window.scrollTo(0,9999);
      html.scrollTo(0, 9999);
      if (n < string.length - 1) {
        //length55//n不是最后一个//n53
        n += 1; //54
        step();
      }
    }, 0);
}

step();




