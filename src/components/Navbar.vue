<template>
  <nav id="desktop-nav">
    <div class="logo">{{name}}</div>
    <div>
      <ul class="nav-links">
        <router-link to="/" tag="li"><a>Home</a></router-link>
        <router-link to="/blog" tag="li"><a>Blog</a></router-link>
        <router-link to="/projects" tag="li"><a>Projects</a></router-link>
        <router-link to="/contact" tag="li"><a>Contact</a></router-link>
      </ul>
    </div>
  </nav>
  <nav id="hamburger-nav">
    <div class="logo">{{name}}</div>
    <div class="hamburger-menu">
      <div class="hamburger-icon" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="menu-links" :class="{ 'open': isMenuOpen }">
        <router-link to="/" tag="li"><a>Home</a></router-link>
        <router-link to="/blog" tag="li"><a>Blog</a></router-link>
        <router-link to="/projects" tag="li"><a>Projects</a></router-link>
        <router-link to="/contact" tag="li"><a>Contact</a></router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  props: {
    name: String,
    jobTitle: String,
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>
