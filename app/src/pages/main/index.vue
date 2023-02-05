<template>
  <q-page>
    <heading-section />
    <icons-info-section />
    <how-works-section />
    <one-request-section />
    <filter-section />
    <trust-section />
    <helpful-info />
  </q-page>
</template>

<script>
import HeadingSection from 'pages/main/components/heading-section/heading-section';
import HowWorksSection from 'pages/main/components/how-works-section/how-works-section';
import FilterSection from 'pages/main/components/filter-section/filter-section';
// import CompaniesSection from 'pages/main/components/companies-section/companies-section';
import HelpfulInfo from 'pages/main/components/helpful-info/helpful-info';
import TrustSection from 'pages/main/components/trust-section/trust-section';
// import QuerySection from 'pages/main/components/query-section/query-section';
// import AboutUsSection from 'pages/main/components/about-us-section/about-us-section';
import IconsInfoSection from 'pages/main/components/icons-info-section/icons-info-section';
import OneRequestSection from 'pages/main/components/one-request-section/one-request-section';

export default {
  name: 'MainPage',
  components: {
    OneRequestSection,
    // AboutUsSection,
    // QuerySection,
    TrustSection,
    HelpfulInfo,
    // CompaniesSection,
    FilterSection,
    HowWorksSection,
    HeadingSection,
    IconsInfoSection,
  },
};
</script>
<style lang="scss">

</style>
