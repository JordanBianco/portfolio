<template>
    <div class="py-24 md:w-2/3 md:mx-auto">
        <h3 class="text-center font-bold text-xl text-gray-900 dark:text-indigo-500 tracking-tight mb-8">Contatti</h3>

        <section class="flex flex-col space-y-4">
            <!-- Cellulare -->
            <div class="flex items-center space-x-2">
                <svg class="text-indigo-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19.44,13c-.22,0-.45-.07-.67-.12a9.44,9.44,0,0,1-1.31-.39,2,2,0,0,0-2.48,1l-.22.45a12.18,12.18,0,0,1-2.66-2,12.18,12.18,0,0,1-2-2.66L10.52,9a2,2,0,0,0,1-2.48,10.33,10.33,0,0,1-.39-1.31c-.05-.22-.09-.45-.12-.68a3,3,0,0,0-3-2.49h-3a3,3,0,0,0-3,3.41A19,19,0,0,0,18.53,21.91l.38,0a3,3,0,0,0,2-.76,3,3,0,0,0,1-2.25v-3A3,3,0,0,0,19.44,13Zm.5,6a1,1,0,0,1-.34.75,1.05,1.05,0,0,1-.82.25A17,17,0,0,1,4.07,5.22a1.09,1.09,0,0,1,.25-.82,1,1,0,0,1,.75-.34h3a1,1,0,0,1,1,.79q.06.41.15.81a11.12,11.12,0,0,0,.46,1.55l-1.4.65a1,1,0,0,0-.49,1.33,14.49,14.49,0,0,0,7,7,1,1,0,0,0,.76,0,1,1,0,0,0,.57-.52l.62-1.4a13.69,13.69,0,0,0,1.58.46q.4.09.81.15a1,1,0,0,1,.79,1Z"/></svg>
                <div>
                    <span class="block font-semibold dark:text-gray-200 text-lg text-gray-900">Cellulare</span>
                    <span class="block text-sm text-gray-500 dark:text-gray-400">339 46 17 508</span>
                </div>
            </div>

            <!-- Email -->
            <div class="flex items-center space-x-2">
                <svg class="text-indigo-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.41,2-5.88,5.88a1,1,0,0,1-1.42,0L5.41,6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V7.41l5.88,5.88a3,3,0,0,0,4.24,0L20,7.41Z"/></svg>
                <div>
                    <span class="block font-semibold dark:text-gray-200 text-gray-900 text-lg">Email</span>
                    <span class="block text-sm text-gray-500 dark:text-gray-400">jordan.bianco@outlook.it</span>
                </div>
            </div>

            <!-- Location -->
            <div class="flex items-center space-x-2">
                <svg class="text-indigo-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,2a8,8,0,0,0-8,8c0,5.4,7.05,11.5,7.35,11.76a1,1,0,0,0,1.3,0C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,17.65c-2.13-2-6-6.31-6-9.65a6,6,0,0,1,12,0C18,13.34,14.13,17.66,12,19.65ZM12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z"/></svg>
                <div>
                    <span class="block font-semibold dark:text-gray-200 text-lg text-gray-900">Dove sono</span>
                    <span class="block text-sm text-gray-500 dark:text-gray-400">Roma</span>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
export default {
    name: 'Contacts'
}
</script>