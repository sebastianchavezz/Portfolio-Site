<template>
    <div id="profile" class="profile-container">
      <div class="section__pic-container">
        <img src="@/assets/sebas.jpeg" alt="Sebas" class="profile-picture" />
      </div>
      <div class="section__text">
        <p class="section__text__p1">Hello, I'm</p>
        <h1 class="title">Sebastian Chavez</h1>
        <p class="section__text__p2">Software Developer</p>
        <div class="btn-container">
          <button class="btn btn-color-2" @click="downloadCV">Download CV</button>
          <button class="btn btn-color-1" @click="redirectToContact">Contact Info</button>
        </div>
        <div id="socials-container">
          <img src="@/assets/linkedin.png" alt="My LinkedIn profile" class="icon" @click="redirectToLinkedIn" />
          <img src="@/assets/github.png" alt="My Github profile" class="icon" @click="redirectToGithub" />
        </div>
      </div>
    </div>
    <div id="about" class="about-container-div">
      <p class="section__text__p1">Get To Know More</p>
      <h1 class="title">About Me</h1>
      <div class="text-container">
        <p class="about-me-p">
            I am a software developer with a passion for creating and improving applications. I am
            experienced in building Backend applications, and I am always looking for new
            opportunities to learn and grow.
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: String,
      jobTitle: String,
    },
    methods: {
      downloadCV() {
        window.open('../assets/sebas.jpeg', '_blank');
      },
      redirectToContact() {
        window.location.href = '/contact';
      },
      redirectToLinkedIn() {
        window.open('https://www.linkedin.com/in/sebastian-chavez-bracamonte', '_blank');
      },
      redirectToGithub() {
        window.open('https://github.com/sebastianchavezz', '_blank');
      },
    },
  };
  </script>
  
