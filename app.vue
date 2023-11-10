<template>
  <div>
    <main>
      <section class="result">
        <h1 class="result__title">Your result</h1>
        <div class="result__circle">
          <div class="result__number">76</div>
          <div class="result__total">of 100</div>
        </div>
        <p class="result__congrats">Great</p>
        <p class="result__text">You scored higher than 65% of the people who have taken these test.</p>
      </section>
      <section class="summary">
        <h2 class="summary__title">Summary</h2>
        <ul class="summary__list-container">
          <li :class="`summary__list-item summary--${result.category}`" v-for="result in data">
            <picture class="summary__icon-container">
              <img class="summary__icon" :src="result.icon" :alt="`${result.category} icon`">
            </picture>
            <span :class="`summary__list-text summary--text-${result.category} list-text--bold`">{{ result.category
            }}</span>
            <div class="summary__result">
              <span class="summary__result-text text--dark text--bold">{{ result.score }}</span>
              <span class="summary__result-text text-dark--opacity">/</span>
              <span class="summary__result-text text-dark--opacity">100</span>
            </div>
          </li>
        </ul>
        <a href="#" class="summary__button">Continue</a>
      </section>
    </main>
  </div>
</template>

<script lang="ts" setup>
import data from './data/data.json'
</script>
