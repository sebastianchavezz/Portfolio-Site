<template>
  <div id="profile" class="profile-container">
    <div class="section__pic-container">
      <img src="@/assets/sebas.jpeg" alt="Sebas" class="profile-picture" />
    </div>
    <div class="section__text">
      <p class="section__text__p1">Hello, I'm</p>
      <h1 class="title">{{ name }}</h1>
      <p class="section__text__p2">{{ jobTitle }}</p>
      <div class="btn-container">
        <button
          class="btn btn-color-2"
          @click="downloadCV"
        >
          Download CV
        </button>
        <button class="btn btn-color-1" @click="redirectToContact">
          Contact Info
        </button>
      </div>
      <div id="socials-container">
        <img
          src="@/assets/linkedin.png"
          alt="My LinkedIn profile"
          class="icon"
          @click="redirectToLinkedIn"
        />
        <img
          src="@/assets/github.png"
          alt="My Github profile"
          class="icon"
          @click="redirectToGithub"
        />
      </div>
    </div>
  </div>
  <div id="about" class="about-container-div">
    <p class="section__text__p1">Get To Know More</p>
          <h1 class="title">About Me</h1>
          <div class="section-container">
            <div class="about-details-container">
              <div class="about-containers">
                <div class="details-container">
                  <h3>Experience</h3>
                  <p>2+ years <br />Frontend Development</p>
                </div>
                <div class="details-container">
                  <h3>Bullship</h3>
                  <p>Bullshit</p>
                </div>
              </div>
              <div class="text-container">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
                  reprehenderit et laborum, rem, dolore eum quod voluptate
                  exercitationem nobis, nihil esse debitis maxime facere minus sint
                  delectus velit in eos quo officiis explicabo deleniti dignissimos.
                  Eligendi illum libero dolorum cum laboriosam corrupti quidem,
                  reiciendis ea magnam? Nulla, impedit fuga!
                </p>
              </div>
            </div>
          </div>
  </div>
</template>
<script>
export default {
props: {
  name: String,
  jobTitle: String,
},
};
</script>
