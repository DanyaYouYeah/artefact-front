export default{
    drawer: null,
        items: [
          { title: 'Новости проекта', icon: 'dashboard' , href: 'vk.com'},
          { title: 'Памятники', icon: 'question_answer', href: "/" },
        ],
        catalogue: [
          {
            action: 'local_activity',
            title: 'Палеолит',
            items: [
              { title: 'Все' },
              { title: 'Нижний' },
              { title: 'Средний' },
              { title: 'Верхний' }
            ]
          },
          {
            action: 'restaurant',
            title: 'Мезолит',
            items: [
              { title: 'Все' },
              { title: 'Нижний' },
              { title: 'Средний' },
              { title: 'Верхний' }
            ]
          },
          {
            action: 'school',
            title: 'Нэолит',
            items: [
              { title: 'Все' },
              { title: 'Нижний' },
              { title: 'Средний' },
              { title: 'Верхний' }
            ]
          },
          {
            action: 'directions_run',
            title: 'Энеолит',
            items: [
              { title: 'Все' },
              { title: 'Нижний' },
              { title: 'Средний' },
              { title: 'Верхний' }
            ]
          },
          {
            action: 'healing',
            title: 'Бронзовый век',
            items: [
              { title: 'Все' },
              { title: 'Нижний' },
              { title: 'Средний' },
              { title: 'Верхний' }
            ]
          },
          {
            action: 'content_cut',
            title: 'Железный век',
            items: [
              { title: 'Все' },
              { title: 'Нижний' },
              { title: 'Средний' },
              { title: 'Верхний' }
            ]
          }
        ],
        mini: false,
        right: null,
      message: '',
      e1: '',
      e2: '',
      e3: '',
      e4: '',
      textSearchParam: '',
      periods: ['Все', 'Палеолит', 'Мезолит', 'Нэолит', 'Энеолит', 'Бронзовый век', 'Железный век'],
      states: ['Все', 'Нижний', 'Средний', 'Верхний'],
      cultures: ['Все', 'Галечная', 'Осиновская', 'Устиновская', 'Руднинская', 'Бойсманская', 'Зайсановская', 'Синегайская', 'Лидовская', 'Маргаритовская', 'Янковская', 'Кроуновская', 'Ольгинская', 'Мохэ', 'Государство Бохай', 'Чжурджени'],
      types: ['Все', 'Орудия труда', 'Боевые орудия', 'Бытовые предметы', 'Обрядные предметы']
    }
  