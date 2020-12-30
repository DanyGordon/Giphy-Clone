<template>
  <div class="gif-container">
    <picture v-lazyload>
      <source type="image/webp" srcset="">
      <img 
        class="giphy-gif-img"
        v-bind:id="gif.id"
        :data-url="gif.images.original.url" 
        v-bind:alt="gif.title"
        v-on:click.prevent="callingModal()"
      >
    </picture>
    <a class="user-container" v-if="gif.user" v-bind:href="gif.user.profile_url">
      <img v-bind:src="gif.user.avatar_url" class="user__avatar">
      <div class="user__info">
        <span>{{ gif.user.display_name }}</span>
        <span>{{ '@' + gif.user.username }}</span>
        <div class="verified" v-if="gif.user.is_verified && gif.user.username">
          <svg height="14" title="Verified" version="1.1" viewBox="-1 0 18 18" width="14">
            <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
              <g fill="#15CDFF" transform="translate(-324.000000, -132.000000)">
                <g id="Group-3" transform="translate(323.000000, 132.000000)">
                  <polygon points="8.95093746 16.1755971 6.18494567 16.8455287 4.34519872 14.6949378 1.70947694 13.628319 1.49869564 10.8185214 2.85993451e-13 8.42276436 1.49869564 6.02700728 1.70947694 3.21720971 4.34519872 2.1505909 6.18494567 4.92383911e-14 8.95093746 0.669931593 11.7169293 4.82947016e-14 13.5566762 2.1505909 16.192398 3.21720971 16.4031793 6.02700728 17.9018749 8.42276436 16.4031793 10.8185214 16.192398 13.628319 13.5566762 14.6949378 11.7169293 16.8455287"></polygon>
                  <path d="M9.32727273,9.44126709 L9.32727273,3.03016561 L6.55027155,3.03016561 L6.55027155,10.8150746 L6.55027155,12.188882 L12.1042739,12.188882 L12.1042739,9.44126709 L9.32727273,9.44126709 Z" fill="#121212" transform="translate(9.327273, 7.609524) scale(-1, 1) rotate(-45.000000) translate(-9.327273, -7.609524) "></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import lazyLoadDirective from '../directives/lazyLoad.directive'

export default {
  name: 'Gif',
  props: ['gif'],
  methods: {
    callingModal: function () {
      this.$emit('callModal');
    }
  },
  directives: {
    lazyload: lazyLoadDirective,
  },
}
</script>

<style lang="scss">
.gif-container, .giphy-gif-img {
  position: relative;
  width: 100%;
  height: 250px;
  background: #549de6 url(../assets/loader.gif) no-repeat 50% / 10%;
  cursor: pointer;
}

.user-container {
  position: absolute;
  left: 5px;
  bottom: 5px;
  height: 45px;
  width: calc(100% - 5px);
  display: flex;
  align-items: flex-end;
  text-decoration: none;
  color: #fff;
  background-color: #3b3b3b52;
}

.user__avatar {
  height: 45px;
  width: 40px;
}

.user__info {
  height: 80%;
  display: flex;
  flex-wrap: wrap;
  padding: 0 0 0 5px;
  text-align: left;

  span {
    overflow: hidden;
    text-overflow: ellipsis;
  } 
  
  span:nth-of-type(1) {
    width: 100%;
    height: 45%;
    font-size: 1em;
    letter-spacing: .05em;
  }

  span:nth-of-type(2) {
    max-width: calc(100% - 16px);
    font-size: .8em;
    letter-spacing: .03em;
  }

}

.verified {
  height: 14px;
  margin-left: 2px;
}
</style>