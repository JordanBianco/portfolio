<template>
    <div class="px-8 py-32 bg-gray-100 dark:bg-c-dark-gray transition duration-200 text-c-light-gray dark:text-gray-200">
        <div class="md:w-4/5 md:mx-auto">
            <h3 class="font-bold uppercase text-2xl text-c-gray dark:text-indigo-500 tracking-tight mb-3">About Me</h3>
            <p class="leading-tight">
                Realizzazione API Laravel con test, consumate da Vue js... DB relazionali MYSQL
                Lorem ipsum dolr sit, amet cr sit, amer sit, amet consectetur adipisicing elit. Lorem ipsum dot consectetur adipisicing elit. Lorem ipsum doonsectetur adipisicing elit. Lorem ipsum door sit, amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi pariatur error porro omnis aliquam? Tempora dolor consequuntur, repellat laboriosam optio, quidem rem, 
            </p>
        
            <div class="flex justify-center mt-6">
                <div class="py-4 flex items-center space-x-8">
                    <div class="text-center">
                        <span class="mb-1 block font-bold text-2xl md:text-3xl text-indigo-500">00</span>
                        <p class="text-xs md:text-sm leading-tight">Anni di esperienza</p>
                    </div>
                    <div class="text-center">
                        <span class="mb-1 block font-bold text-2xl md:text-3xl text-indigo-500">00</span>
                        <p class="text-xs md:text-sm leading-tight">Progetti completati</p>
                    </div>
                    <div class="text-center">
                        <span class="mb-1 block font-bold text-2xl md:text-3xl text-indigo-500">00</span>
                        <p class="text-xs md:text-sm leading-tight">Lavori Precedenti</p>
                    </div>
                </div>
            </div>
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