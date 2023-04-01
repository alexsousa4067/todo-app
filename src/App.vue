<template>
  <div class="container">
    <nav class="main-nav">
      <h1 class="site-title">#todo</h1>
      <div class="main-nav-links">
        <router-link to="/">
          <span class="text">All</span>
          <span class="border"></span>
        </router-link>
        <router-link to="/active">
          <span class="text">Active</span>
          <span class="border"></span>
        </router-link>
        <router-link to="/completed">
          <span class="text">Completed</span>
          <span class="border"></span>
        </router-link>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  color: #333333;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;
}

.container {
  width: 610px;
  margin: auto;
}

.main-nav {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.main-nav .site-title {
  font-size: 32px;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 60px;
}

.main-nav-links {
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  border-bottom: 1px solid #BDBDBD;
  margin-bottom: 18px;
}

.main-nav-links a {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 60px;
  text-align: center;
}

.main-nav-links .text {
  padding: 0 20px;
}
.main-nav-links .border {
  margin-top: 18px;
}

nav a.router-link-exact-active .border {
  border-bottom: 4px solid #2F80ED;
  border-radius: 4px 4px 0 0;
}
</style>
