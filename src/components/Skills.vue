<template>
    <div class="px-8 py-32">
        <div class="md:w-4/5 md:mx-auto">
            <h3 class="font-bold uppercase text-2xl text-c-gray dark:text-indigo-500 tracking-tight mb-3">Skills</h3>
            <section class="flex flex-col space-y-6">
                <!-- Frontend -->
                <section>
                    <div @click="openSkill('frontend')" class="flex items-center justify-between cursor-pointer">
                        <div class="flex items-center space-x-2">
                            <svg class="text-indigo-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="currentColor" d="M6,6A2,2,0,0,1,8,4,1,1,0,0,0,8,2,4,4,0,0,0,4,6V9a2,2,0,0,1-2,2,1,1,0,0,0,0,2,2,2,0,0,1,2,2v3a4,4,0,0,0,4,4,1,1,0,0,0,0-2,2,2,0,0,1-2-2V15a4,4,0,0,0-1.38-3A4,4,0,0,0,6,9Zm16,5a2,2,0,0,1-2-2V6a4,4,0,0,0-4-4,1,1,0,0,0,0,2,2,2,0,0,1,2,2V9a4,4,0,0,0,1.38,3A4,4,0,0,0,18,15v3a2,2,0,0,1-2,2,1,1,0,0,0,0,2,4,4,0,0,0,4-4V15a2,2,0,0,1,2-2,1,1,0,0,0,0-2Z"/></svg>
                            <h4 class="font-semibold text-lg dark:text-gray-200">Frontend developer</h4>
                        </div>

                        <svg :class="{ 'rotate-180' : open == 'frontend' }" class="text-indigo-500 w-7 h-7 transition duration-200 cursor-pointer transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg>
                    </div>

                    <div v-if="open == 'frontend'" class="my-8 flex flex-col space-y-4">
                        <!-- HTML -->
                        <div>
                            <div class="flex items-center justify-between text-sm">
                                <span class="font-semibold dark:text-gray-200">HTML</span>
                                <span class="text-gray-700 dark:text-gray-400">90%</span>
                            </div>
                            <div class="flex items-center mt-1">
                                <div class="h-1.2 rounded-l-full w-11/12 bg-indigo-400 transition duration-150"></div>
                                <div class="h-1.2 rounded-r-full bg-gray-300 w-1/12"></div>
                            </div>
                        </div>

                        <!-- CSS -->
                        <div>
                            <div class="flex items-center justify-between text-sm">
                                <span class="font-semibold dark:text-gray-200">CSS</span>
                                <span class="text-gray-700 dark:text-gray-400">90%</span>
                            </div>
                            <div class="flex items-center mt-1">
                                <div class="h-1.2 rounded-l-full w-11/12 bg-indigo-400"></div>
                                <div class="h-1.2 rounded-r-full bg-gray-300 w-1/12"></div>
                            </div>
                        </div>

                        <!-- Javascript -->
                        <div>
                            <div class="flex items-center justify-between text-sm">
                                <span class="font-semibold dark:text-gray-200">Javascript</span>
                                <span class="text-gray-700 dark:text-gray-400">60%</span>
                            </div>
                            <div class="flex items-center mt-1">
                                <div class="h-1.2 rounded-l-full w-3/5 bg-indigo-400"></div>
                                <div class="h-1.2 rounded-r-full bg-gray-300 w-2/5"></div>
                            </div>
                        </div>

                        <!-- Vue.js -->
                        <div>
                            <div class="flex items-center justify-between text-sm">
                                <span class="font-semibold dark:text-gray-200">Vue.js</span>
                                <span class="text-gray-700 dark:text-gray-400">80%</span>
                            </div>
                            <div class="flex items-center mt-1">
                                <div class="h-1.2 rounded-l-full w-4/5 bg-indigo-400"></div>
                                <div class="h-1.2 rounded-r-full bg-gray-300 w-1/5"></div>
                            </div>
                        </div>

                    </div>
                </section> <!-- Fine Frontend -->

                <!-- Backend -->
                <section>
                    <div @click="openSkill('backend')" class="flex items-center justify-between cursor-pointer">
                        <div class="flex items-center space-x-2">
                            <div class="flex items-center space-x-2">
                                <svg class="text-indigo-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8,17a1,1,0,1,0,1,1A1,1,0,0,0,8,17Zm0-6a1,1,0,1,0,1,1A1,1,0,0,0,8,11ZM8,5A1,1,0,1,0,9,6,1,1,0,0,0,8,5ZM20,5a3,3,0,0,0-3-3H7A3,3,0,0,0,4,5V7a3,3,0,0,0,.78,2A3,3,0,0,0,4,11v2a3,3,0,0,0,.78,2A3,3,0,0,0,4,17v2a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V17a3,3,0,0,0-.78-2A3,3,0,0,0,20,13V11a3,3,0,0,0-.78-2A3,3,0,0,0,20,7ZM18,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V17a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Zm0-6a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V11a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Zm0-6a1,1,0,0,1-1,1H7A1,1,0,0,1,6,7V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1Z"/></svg>
                                <h4 class="font-semibold text-lg dark:text-gray-200">Backend developer</h4>
                            </div>
                        </div>

                        <svg :class="{ 'rotate-180' : open == 'backend' }" class="text-indigo-500 w-7 h-7 transition duration-200 cursor-pointer transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg>
                    </div>

                    <div v-if="open == 'backend'" class="my-8 flex flex-col space-y-4">
                        <!-- PHP -->
                        <div>
                            <div class="flex items-center justify-between text-sm">
                                <span class="font-semibold dark:text-gray-200">PHP</span>
                                <span class="text-gray-700 dark:text-gray-400">60%</span>
                            </div>
                            <div class="flex items-center mt-1">
                                <div class="h-1.2 rounded-l-full w-3/5 bg-indigo-400"></div>
                                <div class="h-1.2 rounded-r-full bg-gray-300 w-2/5"></div>
                            </div>
                        </div>

                        <!-- Laravel -->
                        <div>
                            <div class="flex items-center justify-between text-sm">
                                <span class="font-semibold dark:text-gray-200">Laravel</span>
                                <span class="text-gray-700 dark:text-gray-400">80%</span>
                            </div>
                            <div class="flex items-center mt-1">
                                <div class="h-1.2 rounded-l-full w-4/5 bg-indigo-400"></div>
                                <div class="h-1.2 rounded-r-full bg-gray-300 w-1/5"></div>
                            </div>
                        </div>

                        <!-- SQL -->
                        <div>
                            <div class="flex items-center justify-between text-sm">
                                <span class="font-semibold dark:text-gray-200">SQL</span>
                                <span class="text-gray-700 dark:text-gray-400">80%</span>
                            </div>
                            <div class="flex items-center mt-1">
                                <div class="h-1.2 rounded-l-full w-4/5 bg-indigo-400"></div>
                                <div class="h-1.2 rounded-r-full bg-gray-300 w-1/5"></div>
                            </div>
                        </div>
                    </div>
                </section> <!-- Fine Backend -->

                <!-- Design -->
                <section>
                    <div @click="openSkill('design')" class="flex items-center justify-between cursor-pointer">
                        <div class="flex items-center space-x-2">
                            <div class="flex items-center space-x-2">
                                <svg class="text-indigo-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="currentColor " d="M7.42,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.41A1,1,0,0,0,7.42,15.54Zm0-8.49a1,1,0,0,0,0,1.41,1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.41A1,1,0,0,0,7.42,7.05Zm4.95,10a1,1,0,1,0,1,1A1,1,0,0,0,12.37,17Zm-6-6a1,1,0,1,0,1,1A1,1,0,0,0,6.37,11Zm6-6a1,1,0,1,0,1,1A1,1,0,0,0,12.37,5Zm3.54,2.05a1,1,0,1,0,1.41,0A1,1,0,0,0,15.91,7.05Zm6.3,0a11,11,0,1,0-7.85,15.74,3.87,3.87,0,0,0,2.5-1.65A4.2,4.2,0,0,0,17.47,18a5.65,5.65,0,0,1-.1-1,5,5,0,0,1,3-4.56,3.84,3.84,0,0,0,2.06-2.25A4,4,0,0,0,22.21,7.08Zm-1.7,2.44a1.9,1.9,0,0,1-1,1.09A7,7,0,0,0,15.37,17a7.3,7.3,0,0,0,.14,1.4,2.16,2.16,0,0,1-.31,1.65,1.79,1.79,0,0,1-1.21.8,8.72,8.72,0,0,1-1.62.15,9,9,0,0,1-9-9.28A9.05,9.05,0,0,1,11.85,3h.51a9,9,0,0,1,8.06,5A2,2,0,0,1,20.51,9.52ZM12.37,11a1,1,0,1,0,1,1A1,1,0,0,0,12.37,11Z"/></svg>
                                <h4 class="font-semibold dark:text-gray-200 text-lg">Design</h4>
                            </div>
                        </div>

                        <svg :class="{ 'rotate-180' : open == 'design' }" class="text-indigo-500 w-7 h-7 transition duration-200 cursor-pointer transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg>
                    </div>

                    <div v-if="open == 'design'" class="my-8 flex flex-col space-y-4">
                        <!-- Tailwind -->
                        <div>
                            <div class="flex items-center justify-between text-sm">
                                <span class="font-semibold dark:text-gray-200">Tailwind</span>
                                <span class="text-gray-700 dark:text-gray-400">90%</span>
                            </div>
                            <div class="flex items-center mt-1">
                                <div class="h-1.2 rounded-l-full w-11/12 bg-indigo-400"></div>
                                <div class="h-1.2 rounded-r-full bg-gray-300 w-1/12"></div>
                            </div>
                        </div>
                    </div>
                </section> <!-- Fine Design -->
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Skills',
    data() {
        return {
            open: ''
        }
    },
    methods: {
        openSkill(value) {
            if (value === this.open) {
                this.open = ''
            } else {
                this.open = value
            }
        }
    }
}
</script>