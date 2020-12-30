<template>
  <div class="wrapper">
    <div class="banner" v-if="currentGifs == 0">
      <h1>Search gifs here...</h1>
    </div>
    <article class="content" v-if="currentGifs.length != 0">
      <gif-item v-for="gif in currentGifs" :key="gif"
        v-bind:gif='gif'
        v-on:callModal="displayModal(gif.id)"
      />
    </article>
    <div 
     class="btn-container" 
     v-if="currentGifs.length != 0 && 
      !isCurrentEqualTotalCountOfGifs">
      <button 
       class="btn lg" 
       type="submit"
       v-on:click.prevent="uploadNewGifs()"
      >
      Upload more gifs
      </button>
    </div>
    <transition name="fade">
      <div class="modal__wrapper" v-show="isModal" v-on:click.self="closeModal()">
        <div class="modal__close" v-on:click.prevent="closeModal()"></div>
        <transition name="fadeModal">
          <div class="modal__content" id="modal" v-if="isModal">
            <img v-bind:src="modalImage" v-bind:alt="modalAlt" class="modal__image">
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
import lazyLoadDirective from '../directives/lazyLoad.directive'
import Gif from './GifItem'

export default {
  name: 'gifs',
  data: function () {
    return {
      isModal: false,
      modalImage: '',
      modalAlt: '',
    }
  },
  methods: {

    uploadNewGifs: async function () {
      this.$store.dispatch('GET_GIFS_TO_UPDATE');
    },

    displayModal: function (id) {
      this.isModal = true;
      let image = document.getElementById(id);
      this.setParams(image);
    },

    closeModal: function () {
      this.isModal = false;
    },

    setParams: function (image) {
      if (image != null) {
        this.modalImage = image.getAttribute('src');
        this.modalAlt = image.getAttribute('alt');
      }
    }
  },
  computed: {
    currentGifs: function () {
      return this.$store.getters.GIFS;
    },
    isCurrentEqualTotalCountOfGifs: function () {
      return this.currentGifs == this.$store.getters.TOTAL_COUNT;
    }
  },
  components: {
    'gif-item': Gif
  },
  directives: {
    lazyload: lazyLoadDirective,
  }
}
</script>

<style lang="scss">

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.banner {
  h1 {
    color: #cacaca;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }
}

.content {
  max-width: 850px;
  padding: 15px 20px;
  display: grid;
  grid-template-columns: repeat(3, 33.3%);
  animation: fadeIn .7s forwards ease-in-out;

  @media screen and (max-width: 760px){
    grid-template-columns: repeat(2, 50%);
  }
}

.btn {
  margin: 25px auto;
  padding: 10px 2px;
  border: 1px solid #0080ff;
  background: #0080ff;
  border-radius: 15px;
  color: #fff;
  font-size: .9em;
  letter-spacing: .12em;
  cursor: pointer;

  &:hover {
    background: #fff;
    color: #0080ff;
  }

  &:focus {
    outline: none;
  }

}

.lg {
  width: 250px;
}

.modal__wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #00000052;
}

.modal__close {
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 0.3;

  &:hover {
    opacity: 1;
  }
  
  &:before, &:after {
    position: absolute;
    left: 15px;
    content: '';
    height: 33px;
    width: 2px;
    background-color: #333;
  }
  
  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
}

.modal__content {
  position: relative;
  width: 450px;
  margin: 0 auto;

  @media screen and (max-width: 450px){
    width: 95%;
  }
}

.modal__image {
  width: 100%;
  @media screen and (max-width: 450px){
    width: 100%;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .7s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fadeModal-enter-active {
  animation: fadeIn .5s forwards ease-in-out;
}
.fadeModal-leave-active {
  animation: fadeOut .5s forwards ease-in-out;
} 

@keyframes fadeIn {
  0% { transform: scale(0.1); }
  100% { transform: scale(1); }
}

@keyframes fadeOut {
  0% { transform: scale(1); }
  100% { transform: scale(0.1); }
}

</style>