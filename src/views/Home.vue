<template>
  <div>
    <Navbar class="hidden md:flex" />

    <!-- Intro -->
    <Intro id="home"/>

    <!-- About Me -->
    <About id="about"/>

    <!-- Skills -->
    <Skills id="skills"/>

    <div class="flex justify-center mt-8 bg-indigo-500 py-16">
        <!-- Mettere CV LOL -->
        <a :href="`${publicPath}statuto.pdf`" download class="dark:text-gray-200 dark:hover:text-indigo-500 text-gray-200 hover:text-indigo-600 text-lg flex items-center space-x-2 max-w-max transition duration-200">
            <span>Downlaod CV</span>
            <svg class="w-6 h-6 mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8.29,13.29a1,1,0,0,0,0,1.42l3,3a1,1,0,0,0,1.42,0l3-3a1,1,0,0,0-1.42-1.42L13,14.59V3a1,1,0,0,0-2,0V14.59l-1.29-1.3A1,1,0,0,0,8.29,13.29ZM18,9H16a1,1,0,0,0,0,2h2a1,1,0,0,1,1,1v7a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H8A1,1,0,0,0,8,9H6a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V12A3,3,0,0,0,18,9Z"/></svg>
        </a>
    </div>

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
