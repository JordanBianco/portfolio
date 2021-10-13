<template>
    <div class="py-24 md:w-2/3 md:mx-auto">
        <h3 class="text-center font-bold text-xl text-gray-900 dark:text-indigo-500 tracking-tight mb-8">About Me</h3>
        <p class="leading-tight text-gray-700 dark:text-gray-200 text-center">
            Realizzazione API Laravel con test, consumate da Vue js... DB relazionali MYSQL
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi pariatur error porro omnis aliquam? Tempora dolor consequuntur, repellat laboriosam optio, quidem rem, 
        </p>
    
        <div class="flex justify-center mt-8">
            <div class="py-4 flex items-center space-x-8">
                <div class="text-center">
                    <span class="mb-1 block font-bold text-3xl text-indigo-600">00</span>
                    <p class="text-sm text-gray-500 dark:text-gray-400 leading-tight">Anni di esperienza</p>
                </div>
                <div class="text-center">
                    <span class="mb-1 block font-bold text-3xl text-indigo-600">00</span>
                    <p class="text-sm text-gray-500 dark:text-gray-400 leading-tight">Progetti completati</p>
                </div>
                <div class="text-center">
                    <span class="mb-1 block font-bold text-3xl text-indigo-600">00</span>
                    <p class="text-sm text-gray-500 dark:text-gray-400 leading-tight">Lavori Precedenti</p>
                </div>
            </div>
        </div>

        <div class="flex justify-center mt-16">
            <!-- Mettere CV LOL -->
            <a :href="`${publicPath}statuto.pdf`" download class="font-semibold dark:text-gray-200 dark:hover:text-indigo-500 text-indigo-600 hover:text-indigo-700 text-lg flex items-center space-x-2 max-w-max transition duration-200">
                <span>Downlaod CV</span>
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8.29,13.29a1,1,0,0,0,0,1.42l3,3a1,1,0,0,0,1.42,0l3-3a1,1,0,0,0-1.42-1.42L13,14.59V3a1,1,0,0,0-2,0V14.59l-1.29-1.3A1,1,0,0,0,8.29,13.29ZM18,9H16a1,1,0,0,0,0,2h2a1,1,0,0,1,1,1v7a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H8A1,1,0,0,0,8,9H6a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V12A3,3,0,0,0,18,9Z"/></svg>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About',
    data () {
        return {
            publicPath: process.env.BASE_URL
        }
    }
}
</script>