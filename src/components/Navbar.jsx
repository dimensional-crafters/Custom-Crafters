import React from 'react'

const Navbar = () => {
  function handleScroll() {
    const content = document.querySelector('#content');
    const login = document.querySelector('#login');
    const contentPosition = content.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    // Calculate the distance between the current position of #login and the target position
    const distanceToTarget = contentPosition - screenPosition;

    // Calculate the target position based on the height of the screen
    const targetPosition = (window.innerHeight / 2) - (login.offsetHeight / 2);

    // Calculate the animation step based on the distance and a factor
    const animationStep = distanceToTarget / 10;

    // Update the position of #login on each frame
    function updatePosition() {
      const currentPosition = login.getBoundingClientRect().top;
      const newPosition = currentPosition - animationStep;

      // Stop the animation if #login has reached the target position
      if (newPosition <= targetPosition) {
        login.style.transform = `translateY(${targetPosition}px)`;
        login.style.transition = 'transform 0.5s ease-in-out';
        return;
      }

      login.style.transform = `translateY(${newPosition}px)`;
      window.requestAnimationFrame(updatePosition);
    }

    // Start the animation
    window.requestAnimationFrame(updatePosition);
  }

  return (
    <section id="nav">
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center">
          <img src="/images/logo.svg" alt="logo" className="w-8 h-8" />
        </div>
        <div className="flex items-center">
          <button className="text-white text-fira-medium py-2 px-4 font-bold text-m border-b border-transparent hover:border-white" onClick={handleScroll}>
            Login
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-coda text-white">Custom</h1>
        <h1 className="text-4xl font-coda text-white">Crafters</h1>
        <div id = "image" className="flex items-center">
          <img src="/custom-crafters.png" alt="cc" />
        </div>
      </div>
    </section>
  )
}

export default Navbar