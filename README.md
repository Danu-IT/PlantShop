# PlantShop
- Создать небольшую **адаптивную** страницу (*Только компьютеры, без мобильных устройств*) с несколькими блоками по макету из Figma — [https://www.figma.com/file/SIRkcqtaKQoohnojXBXu7u/Plant-shop-(Copy)?node-id=0%3A1](https://www.figma.com/file/SIRkcqtaKQoohnojXBXu7u/Plant-shop-(Copy)?node-id=0%3A1)
- По нажатию на кнопку “Форма” должно открыться модальное окно с формой обратной связи
- Сделать простую валидацию формы (имя должно быть не менее 3-х символов, телефон должен начинаться с +7 или 8, за которыми следуют еще 10 цифр)
- При нажатии на “крестик” или на “отменить” модальное окно должно закрыться
- При нажатии на кнопку “отправить” должен отправиться GET запрос на данный адрес: [https://jsonplaceholder.typicode.com/todos](https://jsonplaceholder.typicode.com/todos) (модальное окно изменится на загрузочный спинер)
- Адрес вернет массив из 200 элементов. Необходимо заменить контент модального окна и отрисовать пришедшие данные в виде таблицы, который содержит в себе элементы только от пользователей с `userId = 5` и с `completed = false`. Пример данных:
