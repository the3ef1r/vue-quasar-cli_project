<template>
  <q-page>
    <heading-section />
    <how-works-section />
    <filter-section />
    <companies-section />
    <query-section />
    <about-us-section />
    <trust-section />
    <helpful-info />
  </q-page>
</template>

<script>
import HeadingSection from 'pages/main/components/heading-section/heading-section';
import HowWorksSection from 'pages/main/components/how-works-section/how-works-section';
import FilterSection from 'pages/main/components/filter-section/filter-section';
import CompaniesSection from 'pages/main/components/companies-section/companies-section';
import HelpfulInfo from 'pages/main/components/helpful-info/helpful-info';
import TrustSection from 'pages/main/components/trust-section/trust-section';
import QuerySection from 'pages/main/components/query-section/query-section';
import AboutUsSection from 'pages/main/components/about-us-section/about-us-section';

export default {
  name: 'MainPage',
  components: {
    AboutUsSection,
    QuerySection,
    TrustSection,
    HelpfulInfo,
    CompaniesSection,
    FilterSection,
    HowWorksSection,
    HeadingSection,
  },

};
</script>
<style lang="scss">

</style>
