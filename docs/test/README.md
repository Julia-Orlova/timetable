# Тестування працездатності системи

* [Перевірка працездатності сервісу з використанням Tabbed Postman - REST Client](#1)
* [Перевірка працездатності сервісу з використанням тестового фреймвору jest та бібліотеки axios](#2)

## <a name="1">Перевірка працездатності сервісу з використанням Tabbed Postman - REST Client
Для перевірки працездатності сервісу було використано [Tabbed Postman - REST Client](https://chrome.google.com/webstore/detail/tabbed-postman-rest-clien/coohjcphdfgbiolnekdpbcijmhambjff).

За допомогою команди ```npm start``` було здійснено запуск сервісу.

* **```options``` відсутні - зчитуємо всю колекцію**

![image](https://user-images.githubusercontent.com/66700142/171197990-8fc994c4-bb12-4b84-8d67-4a875e69507d.png)
![image](https://user-images.githubusercontent.com/66700142/171198120-b7cff373-c0a6-4c6f-b024-e927178c938e.png)

* **```options``` присутні у query**

![image](https://user-images.githubusercontent.com/66700142/171198628-ac21d581-79c3-4bdd-b47e-d6149f32de13.png)
![image](https://user-images.githubusercontent.com/66700142/171198702-22eac566-1210-4115-9b52-b81b9dfa6c80.png)

* **примірник не знайдений**

![image](https://user-images.githubusercontent.com/66700142/171198886-d42ce5a8-f9f5-4208-b9d8-363bd7ccf439.png)
![image](https://user-images.githubusercontent.com/66700142/171198814-f0cf16a8-e289-42c0-b315-900f7588d779.png)

## <a name="2">Перевірка працездатності сервісу з використанням тестового фреймвору jest та бібліотеки axios
  
Для тестування API сервісу скористаємося тестовим фреймворком [jest](https://www.npmjs.com/package/jest) та бібліотекою [axios](https://www.npmjs.com/package/axios), яка дозволяє програмно ініціювать HTTP-запити.

Встановити необхідні залежності можна за допомогою команди:

    npm i --save-dev jest axios

В файлі package.json додамо скрипт для тестування:
  
![image](https://user-images.githubusercontent.com/66700142/171204508-1537769a-1479-46f7-af30-23e76309ec92.png)

Тепер за допомогою команди **```npm test```** jest знайде всі файли, що в назві містять ***.test*** та запустить тестування.
  
**Результати тестування:**

![image](https://user-images.githubusercontent.com/66700142/171203830-cff62dc6-64a5-44e7-8f28-ad230f4b2cac.png)
![image](https://user-images.githubusercontent.com/66700142/171203894-802f80e4-1993-4d87-afc1-7fd8098c6c81.png)

