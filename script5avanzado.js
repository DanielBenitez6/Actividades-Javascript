    const words = ['爱', '和平', '力量', '智慧']; // Love, Peace, Strength, Wisdom
    let cards = [...words, ...words];
    let flippedCards = [];
    let matched = 0;
    let startTime = Date.now();

    // Shuffle the cards
    cards.sort(() => 0.5 - Math.random());

    const game = document.getElementById('game');

    // Render the cards
    cards.forEach((word, index) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.dataset.word = word;
      card.innerHTML = `
        <div class="inner">
          <div class="front">${word}</div>
          <div class="back"></div>
        </div>
      `;
      game.appendChild(card);

      card.addEventListener('click', () => {
        if (
          card.classList.contains('matched') ||
          card.classList.contains('flipped') ||
          flippedCards.length === 2
        ) return;

        card.classList.add('flipped');
        flippedCards.push(card);

        if (flippedCards.length === 2) {
          const [first, second] = flippedCards;
          if (first.dataset.word === second.dataset.word) {
            first.classList.add('matched');
            second.classList.add('matched');
            flippedCards = [];
            matched += 2;

            if (matched === cards.length) {
              const totalTime = Math.floor((Date.now() - startTime) / 1000);
              setTimeout(() => {
                alert(`🎉 Congratulations! You finished in ${totalTime} seconds.`);
              }, 500);
            }

          } else {
            setTimeout(() => {
              first.classList.remove('flipped');
              second.classList.remove('flipped');
              flippedCards = [];
            }, 3000);
          }
        }
      });
    });

    // Timer
    setInterval(() => {
      const time = Math.floor((Date.now() - startTime) / 1000);
      document.getElementById('timer').textContent = `Time: ${time}s`;
    }, 1000);