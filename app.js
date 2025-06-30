Vue.component('comment-box', {
  props: ['author', 'date', 'text'],
  template: `
    <div class="comment-box">
      <span class="author">{{ author }}</span> —
      <span class="date">{{ date }}</span>
      <span class="reply">REPLY</span>
      <p>{{ text }}</p>
    </div>
  `
});

Vue.component('food-image', {
  template: `
    <div class="text-center">
      <img src="https://cdn.pixabay.com/photo/2016/03/05/19/02/hot-chili-1238302_960_720.jpg" 
           alt="White Chicken Chili" class="img-fluid rounded shadow">
    </div>
  `
});

Vue.component('nav-bar', {
  template: `
    <ul class="nav">
      <li class="nav-item" v-for="link in links" :key="link">
        <a class="nav-link text-dark" href="#">{{ link }}</a>
      </li>
    </ul>
  `,
  data() {
    return {
      links: ['Home', 'Recipes', 'Lifestyles', 'Videos', 'About']
    };
  }
});

new Vue({
  el: '#app',
  data: {
    comments: [
      {
        author: 'Brianna',
        date: 'Feb 18, 2021 @ 3:30 pm',
        text: "Was amazing! I used serrano instead of jalapeño. Just like my favorite tortilla soup!"
      },
      {
        author: 'LINH',
        date: 'Feb 15, 2021 @ 9:46 am',
        text: "So tasty! My dad can’t eat beef — this white chicken chili is perfect for him!"
      },
      {
        author: 'CATHERINE LEONARDO',
        date: 'Feb 13, 2021 @ 12:58 pm',
        text: "I LOVE this White Chicken Chili! Refreshingly different taste, freezes very well."
      },
      {
        author: 'KALI',
        date: 'Feb 13, 2021 @ 11:31 am',
        text: "This recipe is dynamite! Even my partner who won’t eat beans loved it."
      }
    ]
  }
});
