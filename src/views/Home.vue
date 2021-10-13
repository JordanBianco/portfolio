<template>
  <div>
    <Navbar class="hidden md:flex" />

    <!-- Intro -->
    <Intro id="home"/>

    <!-- Scroll Down -->
    <section class="w-2/3 m-auto">
      <div class="flex items-center space-x-1">
        <svg class="text-indigo-500 w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,6a1,1,0,0,0-1,1V9a1,1,0,0,0,2,0V7A1,1,0,0,0,12,6Zm0-4A7,7,0,0,0,5,9v6a7,7,0,0,0,14,0V9A7,7,0,0,0,12,2Zm5,13A5,5,0,0,1,7,15V9A5,5,0,0,1,17,9Z"/></svg>
        <span class="text-gray-700 dark:text-gray-200">Scroll Down</span>
        <svg class="text-indigo-500 w-5 h-5 mt-2 animate-bounce" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="currentColor" d="M17.71,11.29a1,1,0,0,0-1.42,0L13,14.59V7a1,1,0,0,0-2,0v7.59l-3.29-3.3a1,1,0,0,0-1.42,1.42l5,5a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l5-5A1,1,0,0,0,17.71,11.29Z"/></svg>
      </div>
    </section>

    <!-- About Me -->
    <About id="about"/>

    <!-- Skills -->
    <Skills id="skills"/>

    <!-- Portfolio -->
    <Portfolio id="portfolio"/>

    <!-- Contacts -->
    <Contacts id="contacts"/>

    <!-- Scroll Up -->
    <div class="fixed shadow-lg bottom-20 right-10 bg-indigo-500 hover:bg-indigo-600 transition duration-200 p-1 rounded-lg cursor-pointer">
      <router-link to="/#home">
        <svg class="text-gray-100 w-6 h-6" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="currentColor" d="M17.71,11.29l-5-5a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-5,5a1,1,0,0,0,1.42,1.42L11,9.41V17a1,1,0,0,0,2,0V9.41l3.29,3.3a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,11.29Z"/></svg>
      </router-link>
    </div>

    <MobileNavbar class="md:hidden block" />

  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import MobileNavbar from '@/components/MobileNavbar'
import Intro from '@/components/Intro'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Portfolio from '@/components/Portfolio'
import Contacts from '@/components/Contacts'

export default {
  name: 'Home',
  components: {
    Navbar,
    MobileNavbar,
    Intro,
    About,
    Skills,
    Portfolio,
    Contacts
  }
}
</script>
