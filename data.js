// data.js
const SSS_DATA = {
  // Перелік категорій, які будуть відображатися на сайті
  categories: {
    news: "Новини",
    events: "Реєстрація",
    materials: "Корисні матеріали", // Додали нову категорію
    archive: "Архів"               // Сюди автоматично потраплятимуть застарілі заходи
  },

  // Список усіх карток
  items: [
    {
      title: "Допомога для Бериславської громади, яка живе під обстрілами",
      category: "news",
      url: "https://sss-ua.org/news/dopomoha-dlia-beryslavskoi-hromady-iaka-zhyve-pid-obstrilamy/",
      image: "https://sss-ua.org/wp-content/uploads/2026/05/Bereslaska-hromada.jpg",
      tag: "Допомога",
      tagColor: "blue" // Доступні кольори: blue, yellow, green, purple, red, gray
    },
    {
      title: "Послуги з шиття: як хаб у Миколаєві допомагає постраждалому населенню",
      category: "news",
      url: "https://sss-ua.org/news/posluhy-z-shyttia-yak-khab-u-myколаievi-dopomahaie-postrazhdalomu-naselenniu/",
      image: "https://sss-ua.org/wp-content/uploads/2026/05/pani-larisa-768x1024.jpg",
      tag: "Хаби",
      tagColor: "yellow"
    },
    {
      title: "Провели тренінг з протидії професійному вигоранню для фахівчинь системи соціального захисту Запорізької області",
      category: "news",
      url: "https://sss-ua.org/news/provely-treninh-z-protydii-profesiynomu-vyhoranniu-dlia-fakhivchyn-systemy-sotsialnoho-zakhystu-zaporizkoi-oblasti/",
      image: "https://sss-ua.org/wp-content/uploads/2026/05/856x450.png",
      tag: "Тренінги",
      tagColor: "green"
    },
    {
      title: "Навчальний відеокурс «Ради ВПО: від адаптації до впливу»: головне з шостої серії",
      category: "news",
      url: "https://sss-ua.org/news/navchalnyy-videokurs-rady-vpo-vid-adaptatsii-do-vplyvu-holovne-z-shostoi-serii/",
      image: "https://sss-ua.org/wp-content/uploads/2026/04/seriia-6_ua_856x450-1024x538.png",
      tag: "Відеокурс",
      tagColor: "purple"
    },
    {
      title: "Як взяти участь у форумі Рад ВПО?",
      category: "events",
      url: "https://sss-ua.org/yak-vziaty-uchast-u-forumi-rad-vpo/",
      regUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfwA3l1T40rU98abvij3HM8A-cFobo4mhfAeZnio-vxS-vMMQ/viewform", // Посилання на реєстрацію (робить картку двокнопковою)
      image: "https://sss-ua.org/wp-content/uploads/2025/04/YAk-vziaty-uchast_rozdil_Forum_Rad_VPO_1200x630_eng-copy-6-1.png",
      tag: "Форум",
      tagColor: "red",
      expireDate: "2026-06-15" // Формат: РРРР-ММ-ДД. Якщо дата мине, захід автоматично піде в архів.
    },
    {
      title: "Приклад старого заходу (вже в архіві)",
      category: "events",
      url: "https://sss-ua.org/",
      regUrl: "https://docs.google.com/forms/",
      image: "https://sss-ua.org/wp-content/uploads/2025/04/YAk-vziaty-uchast_rozdil_Forum_Rad_VPO_1200x630_eng-copy-6-1.png",
      tag: "Семінар",
      tagColor: "gray",
      expireDate: "2026-06-01" // Ця дата вже минула (відносно поточного червня 2026), тому картка буде в Архіві
    },
    {
      title: "Посібник з інтеграції внутрішньо переміщених осіб",
      category: "materials", // Категорія "Корисні матеріали"
      url: "https://sss-ua.org/",
      image: "https://sss-ua.org/wp-content/uploads/2026/04/seriia-6_ua_856x450-1024x538.png",
      tag: "Аналітика",
      tagColor: "blue"
    }
  ]
};
