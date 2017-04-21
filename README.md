Статья на тему https://css-tricks.com/svg-use-external-source/.

## Getting start

```
git clone <repo>
cd <directory>
npm install
npm run start
Переходим на https://localhost:8080/public_html
```

## Структура

Импортируем нужную иконку, к примеру:

```
import iconArrow from './icons/arrow.svg'
```

В `iconArrow` будет лежать объект. В ключе `symbol` хранится путь к спрайту и нужной иконке, соответсвенно.

Для использование иконки существует компонент `SvgIcon`, который принимает свойство `name` соотвествующий имени нужной иконки.

```
<SvgIcon name={iconArrow.symbol} />
```

Компонент возвращает svg вида:

```
<svg class="icon icon_<имя_иконки>">
    <use xlink:href="#<имя_иконки>" />
</svg>
```
