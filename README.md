#### Задача

Создать небольшое SPA-приложение на Vue, которое:

- Загружает список задач из JSON-файла
- Позволяет отмечать задачи как выполненные (чекбоксы)

#### Требования к функциональности

- При первом запуске данные подгружаются асинхронно из файла tasks.json
- При перезагрузке страницы, состояние списка задач сохраняется

#### Структура JSON

Пример файла tasks.json:

```
[
  { "id": 1, "title": "Задача 1", "done": false },
  { "id": 2, "title": "Задача 2", "done": false },
  { "id": 3, "title": "Задача 3", "done": false },
  { "id": 4, "title": "Задача 4", "done": false },
  { "id": 5, "title": "Задача 5", "done": false }
]
```

---

#### Реализация

1. Архитектура проекта Composition API с применением принципов FSD
2. Redux для хранения состояния проекта, localStore для хранения состояния при перезагрузке страницы
3. При первом запуске, если в состоянии отсутствуют задачи, осуществляется асинхронная загрузка из файла `tasks.json`.
4. Vuetify и TailwindCss для стилизации

##### Дополнительные замечания

- **Redux в Vue:** Несмотря на то, что Redux чаще используется с React, в данном примере он подключается напрямую через пакет `redux`. Для более удобной интеграции можно рассмотреть использование специализированных обёрток, если проект будет масштабироваться.

#### Структура проекта

```
.
├── index.html
├── public               // публичные файлы (favicon, tasks.json)
├── src
│   ├── App.vue          // "главный" файл
│   ├── api              // api для получения задач
│   ├── assets           // глобальные стили
│   ├── configs          // конфигурация (в частности для vuetify)
│   ├── features         // используемые фичи
│   ├── main.ts          // инициализация приложения
│   ├── shared
│   │   ├── components   // переиспользуемые компоненты
│   │   └── composables  // хуки
│   ├── store            // подключение и логика Redux Toolkit
│   ├── types            // общая типизация
│   └── views            // главная страница
```

---

#### Запуск проект

```
// клонирование репозитория
git clone git@github.com:MiggRabbid/test-task-Tapigo.git

// установка зависимостей
make i

// режим разработчика
make d

// сборка проекта
make b

// структура проекта
make rt
```

---

#### Стэк проекта

<a title="TypeScript" href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" height="40" alt="TypeScript"/></a> <a title="VUE3" href="https://ru.vuejs.org/" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg" height="40" alt="VUE3"/></a> <a title="Vuetify" href="https://vuetifyjs.com/" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuetify/vuetify-original.svg" height="40" alt="Vuetify"/></a> <a title="TailwindCss" href="https://tailwindcss.com/" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" height="40" alt="TailwindCss"/></a> <a title="Redux Toolkit" href="https://redux-toolkit.js.org/" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" height="40" alt="Redux Toolkit"/></a>
