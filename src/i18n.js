import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ru: {
    translation: {
      songImageAlt: "Обложка трека",
      "Blinding Lights": "Ослепительные огни",
      "By The Weeknd": "От The Weeknd",
      menu: "Меню",
      home: "Главная",
      search: "Поиск",
      yourLibrary: "Ваша библиотека",
      createPlaylistTitle: "Создайте свой первый плейлист",
      createPlaylistDesc: "Это просто, мы поможем вам",
      createPlaylistBtn: "Создать плейлист",
      findPodcastsTitle: "Найдите интересные подкасты",
      findPodcastsDesc: "Мы будем сообщать о новых эпизодах",
      findPodcastsBtn: "Найти подкасты",
      trackImage: "Изображение трека",
      shuffle: "Перемешать",
      prev: "Назад",
      play: "Играть",
      pause: "Пауза",
      next: "Вперёд",
      loop: "Повтор",
      plays: "Прослушивания",
      mic: "Микрофон",
      queue: "Очередь",
      speaker: "Динамик",
      volume: "Громкость",
      miniPlayer: "Мини-плеер",
      zoom: "Полный экран",
      back: "Назад",
      forward: "Вперед",
      explorePremium: "Изучить Premium",
      installApp: "Установить приложение",
      profile: "П",
      all: "Все",
      music: "Музыка",
      podcasts: "Подкасты",
      featuredCharts: "Рейтинги",  
      todaysBiggestHits: "Самые большие хиты дня",
      albumNotFound: "Альбом не найден",
      playlist: "Плейлист", 
      title: "Название", 
      album: "Альбом", 
      dateAdded: "Дата добавления",
      daysAgo: "дней назад", 
      albumDescription: "Это пример описания альбома",  
    }
  },
  en: {
    translation: {
      songImageAlt: "Song cover",
      "Blinding Lights": "Blinding Lights",
      "By The Weeknd": "By The Weeknd",
      menu: "Menu",
      home: "Home",
      search: "Search",
      yourLibrary: "Your Library",
      createPlaylistTitle: "Create your first playlist",
      createPlaylistDesc: "It's easy; we will help you",
      createPlaylistBtn: "Create Playlist",
      findPodcastsTitle: "Let's find some podcasts to follow",
      findPodcastsDesc: "We'll keep you updated on new episodes",
      findPodcastsBtn: "Browse Podcasts",
      trackImage: "Track Image",
      shuffle: "Shuffle",
      prev: "Previous",
      play: "Play",
      pause: "Pause",
      next: "Next",
      loop: "Loop",
      plays: "Plays",
      mic: "Mic",
      queue: "Queue",
      speaker: "Speaker",
      volume: "Volume",
      miniPlayer: "Mini Player",
      zoom: "Zoom",
      back: "Back",
      forward: "Forward",
      explorePremium: "Explore Premium",
      installApp: "Install App",
      profile: "P",
      all: "All",
      music: "Music",
      podcasts: "Podcasts",
      featuredCharts: "Featured Charts",  
      todaysBiggestHits: "Today's Biggest Hits", 
      albumNotFound: "Album not found",
      playlist: "Playlist",
      title: "Title", 
      album: "Album", 
      dateAdded: "Date Added", 
      daysAgo: "days ago",
      albumDescription: "This is a sample album description",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ru",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
