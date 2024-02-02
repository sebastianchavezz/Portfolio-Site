<template>
    <nav id="desktop-nav">
      <div class="logo">{{ name }}</div>
      <div>
        <ul class="nav-links">
          <router-link to="/about" tag="li"><a>About</a></router-link>
          <li><a href="#experience">Experience</a></li>
          <router-link to="/projects" tag="li"><a>Projects</a></router-link>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
    <nav id="hamburger-nav">
      <div class="logo">{{ name }}</div>
      <div class="hamburger-menu">
        <div class="hamburger-icon" onclick="toggleMenu()">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="menu-links">
          <li><a href="#about" onclick="toggleMenu()">About</a></li>
          <li><a href="#experience" onclick="toggleMenu()">Experience</a></li>
          <li><a href="#projects" onclick="toggleMenu()">Projects</a></li>
          <li><a href="#contact" onclick="toggleMenu()">Contact</a></li>
        </div>
      </div>
    </nav>
</template>

  
<script>
export default {
  props: {
    name: String,
    jobTitle: String,
  },
};
</script>