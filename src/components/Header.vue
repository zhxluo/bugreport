<template>
  <div class="row" id="header">
    <div class="col-md-1" id="logo">
      <img class="m-3 logo" style="width: 5.7rem; height: 3rem;" src="../assets/logo.png"> </div>
    <div class="col-md-11 bg-primary" style="height: 40px">
      <div clas="row">
        <div class="col-md-7 pull-left clearfix">
          <ul class="nav nav-pills pull-left">
            <li class="nav-item">
              <router-link to="orglist" class="active nav-link" id="navDashbord"><i class="fa fa-sitemap fa-sitemap"></i>&nbsp;机构管理</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="navPlanMng"><i class="fa fa-file fa-file"></i>&nbsp;计划管理</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="navPlanQuery"><i class="fa fa-pie-chart fa-pie-chart"></i>&nbsp;计划查询</a>
            </li>
          </ul>
        </div>
        <div class="col-md-3 pull-right">
          <ul class="nav nav-pills pull-right" draggable="true">
            <li class="nav-item">
              <a class="active nav-link small" style="height: 100%" href="#" id="userName">{{userName}}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link small" style="height: 100%" href="#">退出</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'admin-header',
  data () {
    return {
      userName: 'lxx'
    }
  }
}
</script>
