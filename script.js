let phrases = [
    { text: 'Send a funny GIF to a friend', image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif' },
    { text: 'Check cheap aviatickets', image: 'https://code.s3.yandex.net/web-code/procrastinate/2.png' },
    { text: 'find a meaning in rap songs', image: 'https://code.s3.yandex.net/web-code/procrastinate/3.png' },
//     { text: 'Юрий Дудь', image: 'https://code.s3.yandex.net/web-code/procrastinate/4.png' },
    { text: 'put the books on the shell in alphabetical order', image: 'https://code.s3.yandex.net/web-code/procrastinate/5.png' },
    { text: 'read about salaries in San-Francisco', image: 'https://code.s3.yandex.net/web-code/procrastinate/6.png' },
    { text: 'read the news and get shocked in the comment section', image: 'https://code.s3.yandex.net/web-code/procrastinate/7.png' },
    { text: 'dive into stream of sad music and remember all the mistakes in life', image: 'https://code.s3.yandex.net/web-code/procrastinate/8.png' },
    { text: 'watch new series trailer and the whole first season aswell', image: 'https://code.s3.yandex.net/web-code/procrastinate/9.png' },
    { text: 'check unread messages', image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png' }
  ];
  
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  
  let button = document.querySelector('.button');
  let phrase = document.querySelector('.phrase');
  let advice = document.querySelector('.advice');
  let image = document.querySelector('.image');
  
  button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text);
    smoothly(image, 'src', randomElement.image);
  
    if (randomElement.text.length > 40) {
      advice.style.fontSize = '33px';
    } else {
      advice.style.fontSize = '42px';
    }
  });
  
  for(i = 0; i < 2; i++){
    smoothly(phrase, 'textContent', phrases[i].text);
    smoothly(image, 'src', phrases[i].image);
  }
