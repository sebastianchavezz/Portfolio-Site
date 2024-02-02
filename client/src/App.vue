<template>
  <div id="app">
    <Navbar :name="name" :jobTitle="jobTitle" />
    <Profile :name="name" :jobTitle="jobTitle"/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Profile from "@/components/Profile.vue";
import Projects from "@/components/Projects.vue";

export default {
  components: {
    Navbar,
    Profile,
    Projects,
  },
  data() {
    return {
      name: "Sebastian Chavez",
      jobTitle: "Software Developer",
    };
  },
};
</script>

