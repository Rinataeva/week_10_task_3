      //Создаю переменные для хранения путей к изображениям
      const image2 = "./images/image2.JPG";
      const image3 = "./images/image3.JPG";
      // Использую id для получения элементов дерева
      const galleryImage = document.getElementById("galleryImage");
      const backwardButton = document.getElementById("backwardButton");
      const forwardButton = document.getElementById("forwardButton");
      // Объявляю текущую картинку
      let currentImage = image2;
      //Объявляю функцию для смены картинки
      function shiftImage() {
        galleryImage.src = currentImage;
      }
      //Объявляю функцию нажатия на кнопку вперед и вызываю ее с помощью слушателя события .addEventListener
      forwardButton.addEventListener("click", () => {
        currentImage = image3;
        shiftImage();
      });
      //Объявляю функцию нажатия на кнопку назад и вызываю ее аналогичным образом (не работает)
      backwardButton.addEventListener("click", () => {
        currentImage = image2;
        shiftImage();
      });