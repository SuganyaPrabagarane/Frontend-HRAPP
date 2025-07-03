import React from 'react';

const AnimalEmoji = ({ animal}) => {

  const animalEmojis = [
    { name: 'Rabbit', emoji: '/icons/rabbit.png' },
    { name: 'Bee', emoji: '/icons/bee.png' },
    { name: 'Crab', emoji: '/icons/crab.png' },
    { name: 'Dog', emoji: '/icons/dog.png' },
    { name: 'Deer', emoji: '/icons/deer.png' },
    { name: 'Elephant', emoji: '/icons/elephant.png' },
    { name: 'JellyFish', emoji: '/icons/jellyfish.png' },
    { name: 'Koala', emoji: '/icons/koala.png' },
    { name: 'Lion', emoji: '/icons/lion.png' },
    { name: 'Owl', emoji: '/icons/owl.png' },
    { name: 'Panda', emoji: '/icons/panda.png' },
    { name: 'Squirrel', emoji: '/icons/squirrel.png' },
    { name: 'Turtle', emoji: '/icons/turtle.png' },
    { name: 'Whale', emoji: '/icons/whale.png' }
  ];

   const matchedEmoji = animalEmojis.find(a => a.name.toLowerCase() === animal.toLowerCase());


  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <strong style={{ minWidth: '70px' }}>Animal:</strong>{' '}
      {matchedEmoji ? (
        <img src={matchedEmoji.emoji} height={50} width={50} alt={`${animal}-emoji`} />
      ) : (
        'N/A'
      )}
    </div>
  );
};

export default AnimalEmoji;
