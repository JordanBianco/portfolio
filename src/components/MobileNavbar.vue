<template>
    <section class="p-4 px-8 bg-gray-50 dark:bg-gray-800 w-full fixed bottom-0 left-0 right-0 border-t border-gray-300 dark:border-gray-700 transition duration-200">
        
        <div class="flex items-center justify-between">
            <!-- Left Side -->
            <h1 class="font-semibold dark:text-gray-200 text-lg">Jordan</h1>

            <div class="flex items-center space-x-3">
                <!-- Cambia Tema in Scuro -->
                <svg
                    v-if="theme == 'light'"
                    @click="changeTheme('dark')"
                    class="text-gray-500 hover:text-indigo-500 transition duration-150 w-6 h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
            
                <!-- Cambia Tema in Chiaro -->
                <svg
                    v-if="theme == 'dark'"
                    @click="changeTheme('light')"
                    class="text-gray-200 hover:text-indigo-500 transition duration-150 w-6 h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>

                <!-- Open Menu -->
                <svg
                    @click="openMenu"
                    class="cursor-pointer text-gray-500 dark:text-gray-200 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10,13H3a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V14A1,1,0,0,0,10,13ZM9,20H4V15H9ZM21,2H14a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,9H15V4h5Zm1,4H14a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V14A1,1,0,0,0,21,13Zm-1,7H15V15h5ZM10,2H3A1,1,0,0,0,2,3v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V3A1,1,0,0,0,10,2ZM9,9H4V4H9Z"/></svg>

            </div>
        </div>

        <div :class="{ 'translate-y-full' : !isOpen }" class="transform transition duration-200 dark:bg-gray-800 bg-gray-50 fixed bottom-0 left-0 right-0 py-6 px-8 border-t border-gray-300 dark:border-gray-700">
            <div class="flex justify-between pb-10">

                <router-link to="/#home" class="flex flex-col text-center dark:text-gray-400 text-gray-500">
                    <div class="flex justify-center mb-0.5">
                        <svg class="text-indigo-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20,8h0L14,2.74a3,3,0,0,0-4,0L4,8a3,3,0,0,0-1,2.26V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V10.25A3,3,0,0,0,20,8ZM14,20H10V15a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Zm5-1a1,1,0,0,1-1,1H16V15a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v5H6a1,1,0,0,1-1-1V10.25a1,1,0,0,1,.34-.75l6-5.25a1,1,0,0,1,1.32,0l6,5.25a1,1,0,0,1,.34.75Z"/></svg>
                    </div>
                    <span>Home</span>
                </router-link>

                <router-link to="/#about" class="flex flex-col text-center">
                    <div class="flex justify-center">
                        <svg class="text-indigo-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"/></svg>
                    </div>
                    <span class="dark:text-gray-400 text-gray-500">About</span>
                </router-link>

                <router-link to="/#skills" class="flex flex-col text-center">
                    <div class="flex justify-center mb-0.5">
                        <svg class="text-indigo-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71,15.58l-4.52-4.51a6.85,6.85,0,0,0,.14-1.4A7.67,7.67,0,0,0,6.42,2.72a1,1,0,0,0-.57.74,1,1,0,0,0,.28.88l4.35,4.34-1.8,1.8L4.34,6.13a1,1,0,0,0-.88-.27,1,1,0,0,0-.74.56,7.67,7.67,0,0,0,7,10.91,6.85,6.85,0,0,0,1.4-.14l4.51,4.52a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-4.9-4.9a1,1,0,0,0-.95-.26,5.88,5.88,0,0,1-1.48.2A5.67,5.67,0,0,1,4,9.67a6,6,0,0,1,.08-1L8,12.6a1,1,0,0,0,1.42,0L12.6,9.39A1,1,0,0,0,12.6,8L8.71,4.08a6.12,6.12,0,0,1,1-.08,5.67,5.67,0,0,1,5.66,5.67,5.88,5.88,0,0,1-.2,1.48,1,1,0,0,0,.26.95l4.9,4.9a1,1,0,0,0,1.42-1.42Z"/></svg>
                    </div>
                    <span class="dark:text-gray-400 text-gray-500">Skills</span>
                </router-link>

                <router-link to="/#portfolio" class="flex flex-col text-center">
                    <div class="flex justify-center mb-0.5">
                        <svg class="text-indigo-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19,6H16V5a2,2,0,0,0-2-2H10A2,2,0,0,0,8,5V6H5A3,3,0,0,0,2,9v9a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V9A3,3,0,0,0,19,6ZM10,5h4V6H10ZM20,18a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12.39L8.68,14A1.19,1.19,0,0,0,9,14h6a1.19,1.19,0,0,0,.32-.05L20,12.39Zm0-7.72L14.84,12H9.16L4,10.28V9A1,1,0,0,1,5,8H19a1,1,0,0,1,1,1Z"/></svg>
                    </div>
                    <span class="dark:text-gray-400 text-gray-500">Portfolio</span>
                </router-link>

                <router-link to="/#contacts" class="flex flex-col text-center">
                    <div class="flex justify-center mb-0.5">
                        <svg class="text-indigo-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20.34,9.32l-14-7a3,3,0,0,0-4.08,3.9l2.4,5.37h0a1.06,1.06,0,0,1,0,.82l-2.4,5.37A3,3,0,0,0,5,22a3.14,3.14,0,0,0,1.35-.32l14-7a3,3,0,0,0,0-5.36Zm-.89,3.57-14,7a1,1,0,0,1-1.35-1.3l2.39-5.37A2,2,0,0,0,6.57,13h6.89a1,1,0,0,0,0-2H6.57a2,2,0,0,0-.08-.22L4.1,5.41a1,1,0,0,1,1.35-1.3l14,7a1,1,0,0,1,0,1.78Z"/></svg>
                    </div>
                    <span class="dark:text-gray-400 text-gray-500">Contatti</span>
                </router-link>
            </div>

            <svg
                @click="closeMenu"
                class="text-indigo-500 w-8 h-8 absolute bottom-4 right-7 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/></svg>

        </div>

    </section>
</template>

<script>
export default {
    name: 'MobileNavbar',
    data() {
        return {
            isOpen: false
        }
    },
    computed: {
        theme() {
            return this.$store.state.theme
        }
    },
    methods: {
        changeTheme(value) {
            this.$store.dispatch('changeTheme', value)
        },
        openMenu() {
            this.isOpen = true
        },
        closeMenu() {
            this.isOpen = false
        }
    }
}
</script>