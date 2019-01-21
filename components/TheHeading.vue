<template>
  <header class="header">
    <ul class="nav">
      <li class="nav-item mr-1 subheader">
        <h1
          v-if="$route.path === localePath('index')"
          class="h3"
        >
          <span
            class="brand"
          >
            {{ $t('katya lebedeva') }}
          </span>
        </h1>
        <div
          v-else
          class="h3"
        >
          <nuxt-link
            :to="localePath('index')"
            class="brand"
          >
            {{ $t('katya lebedeva') }}
          </nuxt-link>
        </div>

      </li>
      <li class="spacer" />
      <li class="nav-item mr-1">
        <span
          v-if="$route.path === localePath('index')"
        >
          {{ $t('projects') }}
        </span>
        <nuxt-link
          v-else
          :to="localePath('index')"
        >
          {{ $t('projects') }}
        </nuxt-link>
      </li>
      <li class="nav-item mr-1">
        <nuxt-link
          :to="localePath('about-me')"
        >
          {{ $t('about me') }}
        </nuxt-link>
      </li>
      <li class="nav-item mr-1">
        <nuxt-link
          :to="localePath('contacts')"
        >
          {{ $t('contacts') }}
        </nuxt-link>
      </li>
      <li class="nav-item">
        <span
          v-for="locale in $i18n.locales"
          :key="locale.code"
          class="circled-wrapper"
        >
          <nuxt-link
            v-if="locale.code !== $i18n.locale"
            :to="switchLocalePath(locale.code)"
            class="circled"
          >
            <span class="circled-inner">
              {{ locale.code }}
            </span>
          </nuxt-link>
        </span>


      </li>
    </ul>
  </header>
</template>


<style scoped lang="scss">
  @import '~/assets/scss/imports.scss';
  .mr-1 {
    margin-right: 4rem;
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
    .nav-item {
      margin-left: 0;

    }
    .spacer {
      margin-right: auto;
    }
    margin-right: 1rem;
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
</style>
