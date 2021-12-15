const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/'

Vue.component('search', {
  template: `
    <div class="search">
      <input type="text" v-model="searchString" class="goods-search" />
      <button class="search-button" type="button" v-on:click="onClick">Искать</button>
    </div>
  `,
  data() {
    return {
      searchString: ''
    }
  },  
  methods: {
    onClick(){
      this.$emit('search', this.searchString)
    }
  }
})
Vue.component('cart', {
  template: `
    <div class="modal">
      <cart-item 
          v-for="good of list" 
          v-bind:key="good.id_product"
          v-bind:data="good"
          v-on:delete="onDelete"
        ></cart-item>
        <button v-on:click="onClose">Закрыть</button>
    </div>
  `,
  props: ['list'],
  methods: {
    onDelete(good) {
      this.$emit('delete', good)
    },
    onClose(){
      this.$emit('close')
    }
  }
})
new Vue({
  el: "#app",
  data: {
    goods: [],
    filteredGoods: [],
    cart: [],
    searchLine: '',
    isVisibleCart: false
  },
  methods: {
    loadGoods(){
      fetch(`${API_URL}catalogData.json`)
        .then((request) => request.json())
        .then((data) => {
          this.goods = data;
          this.filteredGoods = data;
        })
    },
    loadCart(){
      fetch(`${API_URL}getBasket.json`)
        .then((request) => request.json())
        .then((data) => {
          this.cart = data.contents;
        })
    },
    addToCart(good){
      fetch(`${API_URL}addToBasket.json`)
        .then(() => {
          this.cart.push(good)
        })
    },
    onDelete(good){
      const idx = this.cart.findIndex((item) => item.id === good.id)
      if(idx >= 0) {
        this.cart = [...this.cart.slice(0, idx), ...this.cart.slice(idx + 1)]
      }
    },
    removeFromCart(good){
      fetch(`${API_URL}deleteFromBasket.json`)
        .then(() => {
          const index = this.cart.findIndex((item) => item.id_product == good.id_product)
          this.cart.splice(index - 1, 1)
        })
    },
    onSearch(searchString){
      const regex = new RegExp(searchString, 'i');
      console.log(this.goods)
      this.filteredGoods = this.goods.filter((good) => regex.test(good.product_name))
      
    },
    onToggleCart() {
      this.isVisibleCart = !this.isVisibleCart
    }
  },
  mounted() {
    this.loadGoods();
    this.loadCart();
  }
})