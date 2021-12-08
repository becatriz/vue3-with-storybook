<template>
  <article>
    <my-header
      :user="user"
      @login="$emit('login')"
      @logout="$emit('logout')"
      @createAccount="$emit('createAccount')"
    />

    <section>
      <h2>Pagina de exibição com Header</h2>
      <p>
        Esta é uma pagina de exemplificação do componente Header
      </p>
    </section>
  </article>
</template>

<script>
import '../pages/page.css';
import MyHeader from '../../components/VHeader/Header.vue';

export default {
  name: 'my-page',

  components: { MyHeader },

  props: {
      /**
     * Define user in logout
     */
    user: {
      type: Object,
    },
  },

  emits: ['login', 'logout', 'createAccount'],
};
</script>
