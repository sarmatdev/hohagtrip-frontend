<template>
  <Listbox as="div" v-model="selected">
    <ListboxLabel
      v-if="label"
      class="block text-sm font-medium text-gray-700 ml-2"
    >
      {{ label }}
    </ListboxLabel>
    <div class="mt-1 relative">
      <ListboxButton
        class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
      >
        <span class="flex items-center">
          <base-icon class="h-6 w-6" icon="location-marker"></base-icon>
          <span class="ml-3 block truncate">{{ selected.name }}</span>
        </span>
        <span
          class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
        >
          <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
        >
          <ListboxOption
            as="template"
            v-for="person in people"
            :key="person.id"
            :value="person"
            v-slot="{ active, selected }"
          >
            <li
              :class="[
                active ? 'text-white bg-green-400' : 'text-gray-900',
                'cursor-pointer select-none relative py-2 pl-3 pr-9',
              ]"
            >
              <div class="flex items-center">
                <base-icon class="h-6 w-6" icon="location-marker"></base-icon>
                <span
                  :class="[
                    selected ? 'font-semibold' : 'font-normal',
                    'ml-3 block truncate',
                  ]"
                >
                  {{ person.name }}
                </span>
              </div>

              <span
                v-if="selected"
                :class="[
                  active ? 'text-white' : 'text-green-600',
                  'absolute inset-y-0 right-0 flex items-center pr-4',
                ]"
              >
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script>
import { ref } from 'vue'
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'

const people = [
  {
    id: 1,
    name: 'Wade Cooper',
    icon: 'location-marker',
  },
  {
    id: 2,
    name: 'Arlene Mccoy',
    icon: 'location-marker',
  },
  {
    id: 3,
    name: 'Devon Webb',
    icon: 'location-marker',
  },
  {
    id: 4,
    name: 'Tom Cook',
    icon: 'location-marker',
  },
  {
    id: 5,
    name: 'Tanya Fox',
    icon: 'location-marker',
  },
  {
    id: 6,
    name: 'Hellen Schmidt',
    icon: 'location-marker',
  },
  {
    id: 7,
    name: 'Caroline Schultz',
    icon: 'location-marker',
  },
  {
    id: 8,
    name: 'Mason Heaney',
    icon: 'location-marker',
  },
  {
    id: 9,
    name: 'Claudie Smitham',
    icon: 'location-marker',
  },
  {
    id: 10,
    name: 'Emil Schaefer',
    icon: 'location-marker',
  },
]

export default {
  components: {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    CheckIcon,
    SelectorIcon,
  },
  props: {
    label: {
      type: String,
    },
  },
  setup() {
    const selected = ref(people[3])

    return {
      people,
      selected,
    }
  },
}
</script>
