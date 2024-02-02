<template>
    <header>
      <h1>{{ name }}</h1>
      <p>{{ jobTitle }}</p>
    </header>
  </template>
  
  <script>
  export default {
    props: {
      name: String,
      jobTitle: String,
    },
  };
  </script>
  
  <style scoped>
  header {
    background-color: #007bff;
    color: white;
    padding: 10px;
  }
  </style>
  