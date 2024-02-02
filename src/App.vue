<script setup>
import { RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

const name = "Sebastian Chavez";
const jobTitle = "Frontend Developer";
const email ="sebastianchavez940@gmail.com";
</script>

<template>
    <Navbar :name="name" :jobTitle="jobTitle"/>
    <RouterView :email="email" />
    <Footer />
</template>
