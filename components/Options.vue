<script setup lang="ts">
import { GENDER, POPULARITY, LENGTH, names } from "@/data";

interface OptionsProps{
// define each item the shape of optionArray
option:{
  title: string;
  category:string;
  buttons: GENDER[]| POPULARITY[]| LENGTH[];
};
// option shape below correspond which option state in App.vue ?
// const options = reactive<OptionsState>({
//   gender: GENDER.SHE,
//   popularity: POPULARITY.UNIQUE,
//   length: LENGTH.SHORT,
// });
options:{
  gender: GENDER;
  popularity: POPULARITY;
  length: LENGTH;
}
}


const props = defineProps<OptionsProps>()

console.log(props);

</script>

<template>
  <div class="option-container">
    <h4>
      {{option.title}}
    </h4>
    <div class="option-buttons">
      <button
        class="option option-left"
        v-for = "value in option.buttons"
        v-bind:key="value"
        v-bind:class="options[option.category] === value && 'option-active'"
        @click="options[option.category] === value"
      >
        He/him
      </button>
      <button
        class="option"
        v-bind:class="options.gender === GENDER.THEY && 'option-active'"
        @click="options.gender = GENDER.THEY"
      >
        They
      </button>
      <button
        class="option option-right"
        v-bind:class="options.gender === GENDER.SHE && 'option-active'"
        @click="options.gender = GENDER.SHE"
      >
        She/her
      </button>
    </div>
    <div class="option-container">
        <h4>2) Choose the name's popularity</h4>
        <div class="option-buttons">
          <button
            class="option option-left"
            v-bind:class="
              options.popularity === POPULARITY.TRENDY && 'option-active'
            "
            @click="options.popularity = POPULARITY.TRENDY"
          >
            Trendy
          </button>
          <button
            class="option option-right"
            v-bind:class="
              options.popularity === POPULARITY.UNIQUE && 'option-active'
            "
            @click="options.popularity = POPULARITY.UNIQUE"
          >
            Unique
          </button>
        </div>
      </div>
      <div class="option-container">
        <h4>3) Choose name's length</h4>
        <div class="option-buttons">
          <button
            class="option option-left"
            :class="options.length === LENGTH.LONG && 'option-active'"
            @click="options.length = LENGTH.LONG"
          >
            Long
          </button>
          <button
            class="option"
            :class="options.length === LENGTH.ALL && 'option-active'"
            @click="options.length = LENGTH.ALL"
          >
            All
          </button>
          <button
            class="option option-right"
            :class="options.length === LENGTH.SHORT && 'option-active'"
            @click="options.length = LENGTH.SHORT"
          >
            Short
          </button>
        </div>
      </div>
    </div>
</template>