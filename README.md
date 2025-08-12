# Super Date Picker

Сложный инструмент выбора даты, который поддерживает абсолютные даты. Он предлагает удобное меню быстрого выбора, которое включает в себя часто используемые даты.

## Поддерживаемый функционал:
- Выбор диапазона дат между `start` и `end` с последующим отображением
- Валидация диапазона дат
- Поддержка абсолютных дат
- Поддержка временных промежутков
- Набор готовых пресетов

## Стек используемых технологий:

- React
- TypeScript
- CSS Modules
- Vite
- ESLint + Prettier
- Stylelint
- Husky
- date-fns

## Установка и настройка

### Предварительные условия

- [Node.js](https://nodejs.org/) (версия 18.x или выше)
- `npm`

### Installing dependencies

Клонирование репозитория и установка всех зависимостей:

```bash
git clone https://github.com/cherkasovaa/super-date-picker.git
```

```bash
cd super-date-picker
```

```bash
npm install
```

#### Запуск в режиме разработки:

```bash
npm run dev
```

Приложение будет доступно по адресу `http://localhost:5173`.

#### Продакшн сборка:

```bash
npm run build
```

Файлы для деплоя размещаются в директории `dist`.

#### Предпросмотр сборки для продакшена:

```bash
npm run preview
```

#### Проверка кода:

```bash
# Запуск ESLint для поиска ошибок
npm run lint
```

```bash
# Запуск stylelint для коррекции стилей
npm run stylelint
```

```bash
# Автоматическое исправление с помощью Prettier
npm run format:fix
```
