<template>
  <section>
    <div class="news">
      <article v-for="item in dataNews" class="news-item">
        <h3 class="news-item__title">{{item.headline}}</h3>
        <p class="news-item__copy">{{item.summary}}</p>
        <!-- <img class="news-item__image" :src="item.image" /> -->
        <a class="news-item__link" :href="item.url" target="_blank">Read more</a>
      </article>
    </div>
  </section>
</template>

<script>

  export default {
    name: 'stockpagenews',
    props:  {
       dataNews: ''
    },
    data: function() {
      return {
        news: this.dataNews
      }
    },

  }

</script>
