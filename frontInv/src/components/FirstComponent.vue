<template>
  <div class="container">
    <div>
      <iframe
        src="https://www.widgets.investing.com/live-currency-cross-rates?theme=lightTheme&pairs=2186"
        width="100%"
        height="100%"
        frameborder="0"
        allowtransparency="true"
        marginwidth="0"
        marginheight="0"
        ref="investingCurrency"
      ></iframe>
      <div class="poweredBy" style="font-family: Arial, Helvetica, sans-serif">
        Powered by
        <a
          href="https://www.investing.com?utm_source=WMT&amp;utm_medium=referral&amp;utm_campaign=LIVE_CURRENCY_X_RATES&amp;utm_content=Footer%20Link"
          target="_blank"
          rel="nofollow"
          >Investing.com</a
        >
      </div>
      <div>
        <button class="btn btn-primary mt-5" @click="interval()">
          get last currency
        </button>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "FirstComponent",
  data() {
    return {
      iframeData: {},
    };
  },
  mounted() {},
  methods: {
    readFrame() {},
    async getData() {
      const response = await fetch("http://localhost:3000", {
        method: "GET",
      });
      const data = await response.json();

      if (data === this.iframeData) {
        console.log("same " + data);
      } else {
        this.iframeData = data;
        console.log("Currency USD/RUB =" + data);
      }
    },

    interval() {
      setInterval(() => {
        this.getData();
      }, 5000);
    },
  },
};
</script>

<style scoped>
</style>




На данный момент, Investing.com не предоставляет котировки через API.

Однако большая часть данных доступна разработчикам через наши информеры, которые можно найти по ссылке: https://ru.investing.com/webmaster-tools/.

Все наши информеры в ближайшее время будут поддерживать адаптивные экраны, и вы сможете установить их в собственном мобильном приложении. Пожалуйста, обратите внимание, что все наши информеры бесплатны для использования только в оригинальном виде, который включает в себя наш логотип, ссылки, рекламные кнопки и т.п. Пожалуйста, внимательно ознакомьтесь с нашими условиями использования перед установкой информера на свой сайт.

По вопросам коммерческого использования информеров или с любыми дополнительными вопросами, пожалуйста, обращайтесь по адресу tools@investing.com .
