<template>
    <DashboardLayout>
        <div class="card">
            <Menubar :model="items">
                <template #start>
                    <div class="flex justify-center items-center">
                        <img src="../../assets/logo.svg" alt="Logo" class="h-8 w-auto" />
                    </div>
                </template>

                <template #end>
                    <div class="flex justify-center items-center">
                        <Avatar
                            image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                            shape="circle"
                        />
                    </div>
                </template>
            </Menubar>
        </div>

        <Panel header="Header">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>

    </DashboardLayout>
</template>

<script setup>
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import Menubar from 'primevue/menubar'
import Avatar from 'primevue/avatar'
import Panel from 'primevue/panel'
import { ref } from 'vue'

const items = ref([
    {
        label: 'Dashboard',
        icon: 'pi pi-warehouse',
    },
    {
        label: 'Genres',
        icon: 'pi pi-question',
    },
    {
        label: 'Persons',
        icon: 'pi pi-question',
    },
    {
        label: 'Users',
        icon: 'pi pi-question',
    },
    {
        label: 'Platforms',
        icon: 'pi pi-question',
    },
    {
        label: 'Movies',
        icon: 'pi pi-question',
    },
    {
        label: 'Series',
        icon: 'pi pi-question',
    },
    {
        label: 'Settings',
        icon: 'pi pi-question',
    },
])
</script>

<style>

.p-menubar {
    padding: 0.75rem 0.75rem !important;
    justify-content: space-between !important;
}

.p-menubar-end {
    margin: 1px !important;
}

</style>
