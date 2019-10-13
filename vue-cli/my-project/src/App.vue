<template>
  <div>
    <nav class="nav-tableBar">
    <div class="container">
    <a class="navbar-brand" href="/">课程管理系统</a>
    <div class="collapse">
    <ul class="nav-item">
    <li class="item1">主页</li>
    <li class="item2">关于项目</li>
    <li class="item3">登录</li>
    <li class="item4">注册</li>
    </ul>
    </div>
    </div>
    </nav>
    <div class="content">
        <h1 class="welcome">欢迎进入课程管理系统</h1>
        <p class="lead">学无止境，就从这里开始，管理你想学的课程吧~</p>
        <a class="class-btn">进入系统</a>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
 *{
   margin:0;
   padding:0;
 } 
 .nav-tableBar{
   width:100%;
   height:50px;   
   background-color: #007bff!important;
   position:relative;
 }
 .navbar-brand{
   display: inline-block;
   color:white;
   padding-top: 10px;
   padding-bottom: .3125rem;
   margin-left: 160px;
   font-size: 1.25rem;
   line-height: inherit;
   white-space: nowrap;
 }
 .container a {
  text-decoration: none;
  background-color: transparent;
}
li{
  list-style:none;
}
.nav-item li{
  display:inline-block;
}
.item1{
  position:absolute;
  top:25%;
  left:20%;
  color: rgba(255,255,255,.5);
  cursor:pointer;
}
.item1:hover{
  color: rgba(255,255,255,.75)
}
.item2{
  position:absolute;
  top:25%;
  left:23%;
  color: rgba(255,255,255,.5);
  cursor:pointer;
}
.item2:hover{
  color: rgba(255,255,255,.75);
}
.item3{
  position:absolute;
  top:25%;
  left:80%;
  color: rgba(255,255,255,.5);
  cursor:pointer;
}
.item3:hover{
  color: rgba(255,255,255,.75);
}
.item4{
  position:absolute;
  top:25%;
  left:83%;
  color: rgba(255,255,255,.5);
  cursor:pointer;
}
.item4:hover{
  color: rgba(255,255,255,.75);
}
.content{
  width:1110px;
  height:315px;
  margin:15px auto;
  background-color: #e9ecef;
  border-radius: .3rem;
  position:relative;
}

.welcome{
  font-size: 4.5rem;
  font-weight: 300;
  line-height: 1.2;
  margin-bottom: .5rem;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  position:absolute;
  top:20%;
  left:18%;
}
.lead{
  font-size: 1.25rem;
  font-weight: 300;
  position:absolute;
  top:51%;
  left:30%;
}
.class-btn{
  display:inline-block;
  width:134px;
  height:47px;
  background:#1d2124;
  border-color: #171a1d;
  color:white;
  position:absolute;
  top:65%;
  left:50%;
  transform:translateX(-50%);
  border-radius:0.3rem;
  text-align:center;
  line-height:47px;
  font-size:20px;
  cursor:pointer;

}
.class-btn:hover{
  color: #fff;
  background-color: #23272b;
  border-color: #1d2124;
}
</style>