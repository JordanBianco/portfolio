<template>
    <div class="py-24 md:w-2/3 md:mx-auto">
        <h3 class="text-center font-bold text-xl text-gray-900 dark:text-indigo-500 tracking-tight mb-8">Portfolio</h3>

        <carousel
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
        </carousel>
    </div>
</template>

<script>
export default {
    name: 'Portfolio'
}
</script>