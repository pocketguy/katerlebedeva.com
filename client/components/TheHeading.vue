<template>
  <header class="header">
    <ul
      v-if="overlayHidden"
      class="nav"
    >
      <li class="nav-item subheader">
        <h1
          v-if="$route.path === localePath('index')"
          class="h3"
        >
          <span class="brand">
            {{ $t('katya lebedeva') }}
          </span>
        </h1>
        <div
          v-else
          class="h3"
        >
          <NuxtLink
            :to="localePath('index')"
            class="brand"
          >
            {{ $t('katya lebedeva') }}
          </NuxtLink>
        </div>
      </li>
      <li class="spacer" />
      <li class="nav-item mr-1 tablet-landscape-up">
        <span v-if="$route.path === localePath('index')">
          {{ $t('projects') }}
        </span>
        <NuxtLink
          v-else
          :to="localePath('index')"
        >
          {{ $t('projects') }}
        </NuxtLink>
      </li>
      <li class="nav-item mr-1 tablet-landscape-up">
        <NuxtLink :to="localePath('about-me')">
          {{ $t('about me') }}
        </NuxtLink>
      </li>
      <li class="nav-item mr-1 tablet-landscape-up">
        <NuxtLink :to="localePath('contacts')">
          {{ $t('contacts') }}
        </NuxtLink>
      </li>
      <li class="nav-item tablet-landscape-up">
        <span
          v-for="locale in $i18n.locales"
          :key="locale.code"
          class="circled-wrapper"
        >
          <NuxtLink
            v-if="locale.code !== $i18n.locale"
            :to="switchLocalePath(locale.code)"
            class="circled"
          >
            <span class="circled-inner">
              {{ locale.code }}
            </span>
          </NuxtLink>
        </span>
      </li>
      <li class="nav-item tablet-portrait-down">
        <MyHamburger
          class="ham"
          @click="toggleOverlay"
        />
      </li>
    </ul>
  </header>
</template>

<script>
import { mapMutations } from 'vuex';
import MyHamburger from '~/components/MyHamburger.vue'

export default {
  components: {
    MyHamburger
  },
  data() {
    return {
      overlayHidden: true
    }
  },
  methods: {
    ...mapMutations({
      toggleOverlay: 'layout/toggleOverlay'
    })
  }
}
</script>



<style scoped lang="scss">
@import "~/assets/scss/_imports.scss";
.mr-1 {
  @include for-size($tablet-landscape-up) {
    margin-right: 4rem;
  }
}
.brand {
  text-decoration: underline;
  display: block;
}
.nav {
  display: flex;
  align-items: center;
  list-style: none;
  margin-top: 0;
  @include for-size($tablet-landscape-up) {
    margin-right: 1rem;
  }
  .nav-item {
    margin-left: 0;
  }
  .spacer {
    margin-right: auto;
  }
  &.col {
    flex-direction: column;
  }
}
.circled-wrapper {
  display: block;
  .circled {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border: 2px solid;
    border-radius: 50%;
    .circled-inner {
      position: relative;
      top: -2px;
    }
  }
}

.tablet-portrait-down {
  @include for-size($tablet-landscape-up) {
    display: none;
  }
}

.tablet-landscape-up {
  display: none;
  @include for-size($tablet-landscape-up) {
    display: list-item;
  }
}

.overlay {
  position: fixed;
  z-index: 1;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);

  li {
    margin-bottom: 1rem
  }
}

.ham {
  height: 20px
}
</style>
