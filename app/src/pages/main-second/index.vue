<template>
  <q-page class="main-page">
    <heading-section />
    <icons-info-section />
    <how-works-section />
    <filter-section />
    <we-help-section />
    <trust-section />
    <helpful-info />
  </q-page>
</template>

<script>
import HeadingSection from 'pages/main-second/components/heading-section/heading-section';
import HowWorksSection from 'pages/main-second/components/how-works-section/how-works-section';
import FilterSection from 'pages/main-second/components/filter-section/filter-section';
import HelpfulInfo from 'pages/main-second/components/helpful-info/helpful-info';
import TrustSection from 'pages/main-second/components/trust-section/trust-section';
import IconsInfoSection from 'pages/main-second/components/icons-info-section/icons-info-section';
import WeHelpSection from 'pages/main-second/components/we-help';

export default {
  name: 'MainPageSecond',
  components: {
    WeHelpSection,
    TrustSection,
    HelpfulInfo,
    FilterSection,
    HowWorksSection,
    HeadingSection,
    IconsInfoSection,
  },
};
</script>
