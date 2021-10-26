<template>
    <div class="px-8 py-32 bg-gray-100 dark:bg-c-dark-gray transition duration-200 text-c-light-gray dark:text-gray-200">
        <div class="md:w-4/5 md:mx-auto">
            <h3 class="font-bold uppercase text-2xl text-c-gray dark:text-indigo-500 tracking-tight mb-3">Portfolio</h3>

            <div class="flex space-x-4">
                <img src="../assets/admin-panel.png" alt="" class="rounded-t-lg object-cover w-96 h-96">
            </div>

            <!-- <carousel
                :perPage="1"
                :paginationSize="9"
                :paginationPadding="6"
                paginationColor="#9ca3af"
                paginationActiveColor="#6366f1">
                <slide class="p-10">
                    <div class="rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:shadow-lg transition duration-200">
                        <img src="../assets/admin-panel.png" alt="" class="rounded-t-lg object-cover">

                        <section class="p-4">
                            <div class="leading-tight text-gray-700 dark:text-gray-200 mb-4">
                                Admin Panel realizzato con Laravel, Vue, Vuex e Vue Router e Axios per le chiamate all'API.
                                L'Autenticazione è stata sanctum, l'API è testata.
                            </div>

                            <button class="flex items-center space-x-1 bg-indigo-500 hover:bg-indigo-600 text-gray-100 px-4 py-2 text-sm transition duration-200 rounded-lg">
                                Demo
                            </button>  
                        </section>
                    </div>
                </slide>
                <slide class="p-10">
                    <div class="rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:shadow-lg transition duration-200">
                        <img src="../assets/admin-panel.png" alt="" class="rounded-t-lg object-cover">

                        <section class="p-4">
                            <div class="leading-tight text-gray-700 dark:text-gray-200 mb-4">
                                Admin Panel realizzato con Laravel, Vue, Vuex e Vue Router e Axios per le chiamate all'API.
                                L'Autenticazione è stata sanctum, l'API è testata.
                            </div>

                            <button class="flex items-center space-x-1 bg-indigo-500 hover:bg-indigo-600 text-gray-100 px-4 py-2 text-sm transition duration-200 rounded-lg">
                                Demo
                            </button>  
                        </section>
                    </div>
                </slide>
            </carousel> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'Portfolio'
}
</script>