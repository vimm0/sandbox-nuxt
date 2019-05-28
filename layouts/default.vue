<template>
  <div>
    <nav class="Header__Menu">
      <NuxtLink :to="$i18n.path('')" class="Header__Link" exact>
        {{ $t('links.home') }}
      </NuxtLink>
      <NuxtLink :to="$i18n.path('about')" class="Header__Link" exact>
        {{ $t('links.about') }}
      </NuxtLink>
      <NuxtLink v-if="$i18n.locale === 'en'" :to="`/fr` + $route.fullPath" class="Header__Link" active-class="none"
                exact>
        {{ $t('links.french') }}
      </NuxtLink>
      <NuxtLink v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" class="Header__Link" active-class="none" exact>
        {{ $t('links.english') }}
      </NuxtLink>
    </nav>
    <nuxt/>
  </div>
</template>
