<script setup lang="ts">
import { GENDER, POPULARITY, LENGTH, names } from "@/data";

// interface defines the shape of object
interface OptionsState {
  gender: GENDER;
  popularity: POPULARITY;
  length: LENGTH;
}

// value from Enum imported from data file
const options = reactive<OptionsState>({
  gender: GENDER.SHE,
  popularity: POPULARITY.UNIQUE,
  length: LENGTH.SHORT,
});

const computerSelectedName = () => {
  // console.log("name", names);

  const filterName = names
    .filter((name) => {
      return name.GENDER === options.gender;
    })
    .filter((name) => {
      return name.POPULARITY === options.popularity;
    })
    .filter((name) => {
      if (options.length === LENGTH.ALL) {
        console.log(LENGTH.ALL);
        return true;
      } else {
        return name.LENGTH === options.length;
      }
    });

  console.log(filterName);

  selectedName.value = filterName.map((name) => {
    return name.name;
  });
};

const selectedName = ref<string[]>([]);

const optionArray = [
  {
    title: "gender option",
    category: "gender",
    button: [GENDER.SHE, GENDER.HE, GENDER.THEY],
  },
  {
    title: "popularity option",
    category: "popularity",
    button: [POPULARITY.UNIQUE, POPULARITY.TRENDY],
  },
  {
    title: "length option",
    category: "length",
    button: [LENGTH.SHORT, LENGTH.ALL, LENGTH.LONG],
  },
];
</script>

<template>
  <div class="container">
    <h1>Thug Name Generator</h1>
    <img src="./THUGLIFE.png" width="150" />
    <p>Choose your options and click the "Find Names" buttom below</p>
    <div class="options-container">
      <Options
        v-for="option in optionArray"
        v-bind:key="option.title"
        v-bind:option="option"
        v-bind:options="options"
      />
      <button class="find-name-button" @click="computerSelectedName">Go</button>
    </div>
    <div class="cards-container">
      <div
        v-for="name in selectedName"
        v-bind:key="name"
        :class="
          (options.gender === GENDER.HE && 'card-he') ||
          (options.gender === GENDER.SHE && 'card-she') ||
          (options.gender === GENDER.THEY && 'card-they')
        "
      >
        <h4>{{ name }}</h4>
        <p>x</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(27, 60, 138);
  max-width: 50rem;
  margin: 0 auto;
  text-align: center;
}

h1 {
  font-size: 3rem;
}

.options-container {
  background-color: rgb(255, 238, 236);
  border-radius: 2rem;
  padding: 1rem;
  width: 95%;
  margin: 0 auto;
  margin-top: 4rem;
  position: relative;
}

.option-container {
  margin-bottom: 2rem;
}

.option {
  background: white;
  outline: 0.15rem solid rgb(249, 87, 89);
  border: none;
  padding: 0.75rem;
  width: 12rem;
  font-size: 1rem;
  color: rgb(27, 60, 138);
  cursor: pointer;
  font-weight: 200;
}

.option-left {
  border-radius: 1rem 0 0 1rem;
}

.option-right {
  border-radius: 0 1rem 1rem 0;
}

.option-active {
  background: rgb(249, 87, 89);
}

.find-name-button {
  background: rgb(249, 87, 89);
  border-radius: 2rem;
  padding: 1rem;
  color: white;
  font-size: 20px;
  cursor: pointer;
  font-weight: 400;
}

.cards-container {
  display: flex;
  margin-top: 3rem;
  flex-wrap: wrap;
}

.card-he {
  background-color: rgb(132, 167, 248);
  width: 28%;
  color: rgb(68, 66, 66);
  border-radius: 1rem;
  padding: 0.1rem;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  position: relative;
}
.card-she {
  background-color: rgb(132, 248, 144);
  width: 28%;
  color: rgb(68, 66, 66);
  border-radius: 1rem;
  padding: 0.1rem;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  position: relative;
}

.card-they {
  background-color: rgb(248, 238, 132);
  width: 28%;
  color: rgb(68, 66, 66);
  border-radius: 1rem;
  padding: 0.1rem;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  position: relative;
}

.card p {
  position: absolute;
  top: -29%;
  left: 92.5%;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.178);
}
</style>
