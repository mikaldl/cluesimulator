<template>
  <section>
    <div class="flex items-center justify-between w-full text-white my-2">
      <div class="flex justify-center items-center">
        <img :src="'/' + level + '-casket.png'" :alt="level + 'clue casket'" class="h-10"/>

        <span class="mx-4 text-2xl font-bebasneue">
                    {{ level }} clue simulator
                </span>
      </div>
      <div class="flex text-1xl">
        <button class="text-white py-2 mx-4 border-white hard outline-none focus:outline-none"
                :class="{active: level == 'hard', 'border-b': level == 'hard'}" @click="level = 'hard'">
          Hard
        </button>
        <button class="text-white py-2 mx-4 border-white elite outline-none focus:outline-none"
                :class="{active: level == 'elite',  'border-b': level == 'elite'}" @click="level = 'elite'">
          Elite
        </button>
        <button class="text-white py-2 mx-4 border-white master outline-none focus:outline-none"
                :class="{active: level == 'master', 'border-b': level == 'master'}" @click="level = 'master'">
          Master
        </button>
      </div>
    </div>

    <calculator :key="level" :level="level" v-if="loadCalculator"/>

    <div class="disclaimer mb-3 mt-8 text-center">
      Made by Mikal#7283 | Join Clue Chasers: <a href="https://discord.gg/C4d9uPu" class="text-white">https://discord.gg/C4d9uPu</a>
    </div>
  </section>
</template>

<script>
  import calculator from "./../components/calculator"

  export default {
    components: {
      calculator
    },

    data() {
      return {
        level: 'master',
        lastOpening: [],
        itemLog: {},
        opened: 0,
        enhancers: {
          ring: true,
          blm: true,
          osh: false
        },
        loadCalculator: true
      }
    },

    watch: {
      level() {
        this.loadCalculator = false;
        this.$nextTick(() => {
          this.loadCalculator = true;
        })
      }
    }
  }
</script>

<style lang="scss">
  @import '~pretty-checkbox/src/pretty-checkbox.scss';

  body {
    background: #222;
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #fff;
  }

  .disclaimer {
    font-size: 80%;
    color: #fff;
    opacity: 0.1;
  }

  .tooltip {
    display: block !important;
    z-index: 10000;

    .tooltip-inner {
      @apply bg-blue;
      color: white;
      border-radius: 16px;
      padding: 5px 10px 4px;
    }

    .tooltip-arrow {
      width: 0;
      height: 0;
      border-style: solid;
      position: absolute;
      margin: 5px;
      @apply border-blue;
      z-index: 1;
    }

    &[x-placement^="top"] {
      margin-bottom: 5px;

      .tooltip-arrow {
        border-width: 5px 5px 0 5px;
        border-left-color: transparent !important;
        border-right-color: transparent !important;
        border-bottom-color: transparent !important;
        bottom: -5px;
        left: calc(50% - 5px);
        margin-top: 0;
        margin-bottom: 0;
      }
    }

    &[x-placement^="bottom"] {
      margin-top: 5px;

      .tooltip-arrow {
        border-width: 0 5px 5px 5px;
        border-left-color: transparent !important;
        border-right-color: transparent !important;
        border-top-color: transparent !important;
        top: -5px;
        left: calc(50% - 5px);
        margin-top: 0;
        margin-bottom: 0;
      }
    }

    &[x-placement^="right"] {
      margin-left: 5px;

      .tooltip-arrow {
        border-width: 5px 5px 5px 0;
        border-left-color: transparent !important;
        border-top-color: transparent !important;
        border-bottom-color: transparent !important;
        left: -5px;
        top: calc(50% - 5px);
        margin-left: 0;
        margin-right: 0;
      }
    }

    &[x-placement^="left"] {
      margin-right: 5px;

      .tooltip-arrow {
        border-width: 5px 0 5px 5px;
        border-top-color: transparent !important;
        border-right-color: transparent !important;
        border-bottom-color: transparent !important;
        right: -5px;
        top: calc(50% - 5px);
        margin-left: 0;
        margin-right: 0;
      }
    }

    &[aria-hidden='true'] {
      visibility: hidden;
      opacity: 0;
      transition: opacity .15s, visibility .15s;
    }

    &[aria-hidden='false'] {
      visibility: visible;
      opacity: 1;
      transition: opacity .15s;
    }
  }

  .clue-modal {
    background: url("./../assets/images/modal.png");
    width: 403px;
    height: 223px;
    color: #fff;
    position: relative;

    .items {
      position: absolute;
      top: 22%;
      left: 6%;
      width: 80%;
      display: flex;

      > div {
        height: 40px;
        max-width: 40px;
        text-align: center;
      }
    }

    .rare-item {
      filter: drop-shadow(0 0 8px #fff);
    }

    .super-rare-item {
      filter: drop-shadow(0 0 4px #fff);
    }

    .ultra-rare-item {
      filter: drop-shadow(0 0 4px #FFA500);
    }

    .button {
      position: absolute;
      top: 60%;
      left: calc(50% - 98px);

      button {
        background: url("./../assets/images/button.png");
        background-size: cover;
        width: 196px;
        height: 25px;
        font-size: 14px;

        &:focus, &:active {
          outline: none;
        }
      }
    }
  }
</style>
