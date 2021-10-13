<template>
    <nav class="items-baseline justify-between z-50 pb-8 pt-4 dark:text-gray-200 sticky top-0 md:w-11/12 md:mx-auto border-b border-gray-200 dark:border-gray-700 bg-opacity-80 bg-clip-padding blur-backdrop-filter transition duration-200">
        <!-- Left Side -->
        <h1 class="font-semibold text-2xl">Jordan</h1>

        <!-- Right Side -->
        <div>
            <ul class="flex items-center space-x-6">
                <!-- Home -->
                <router-link
                    to="/#home"
                    exact-active-class="text-indigo-500"
                    :class="[ $route.hash == '#home' ? 'text-indigo-500' : '' ]"
                    class="hover:text-indigo-500">
                        Home
                </router-link>
                 
                <!-- About -->
                <router-link
                    to="/#about"
                    class="hover:text-indigo-500"
                    :class="[ $route.hash == '#about' ? 'text-indigo-500' : '' ]">
                        About
                </router-link>

                <!-- Skills -->
                <router-link
                    to="/#skills"
                    class="hover:text-indigo-500"
                    :class="[ $route.hash == '#skills' ? 'text-indigo-500' : '' ]">
                        Skills
                </router-link>
                
                <!-- Portfolio -->
                <router-link
                    to="/#portfolio"
                    class="hover:text-indigo-500"
                    :class="[ $route.hash === '#portfolio' ? 'text-indigo-500' : '' ]">
                        Portfolio
                </router-link>

                <!-- Contatti -->
                <router-link
                    to="/#contacts"
                    class="hover:text-indigo-500"
                    :class="[ $route.hash === '#contacts' ? 'text-indigo-500' : '' ]">
                        Contatti
                </router-link>
                
                <svg
                    v-if="theme == 'light'"
                    @click="changeTheme('dark')"
                    class="text-gray-500 hover:text-indigo-500 transition duration-150 w-5 h-5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
            
                <svg
                    v-if="theme == 'dark'"
                    @click="changeTheme('light')"
                    class="text-gray-200 hover:text-indigo-500 transition duration-150 w-5 h-5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    computed: {
        theme() {
            return this.$store.state.theme
        }
    },
    methods: {
        changeTheme(value) {
            this.$store.dispatch('changeTheme', value)
        }
    }
}
</script>

<style>
    .backdrop-filter {
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
    }
    .blur-backdrop-filter {
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
    }
</style>