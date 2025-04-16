import { useRef } from "react";

const GlowCard = ({ card, index, children }) => {
  // refs for all the cards
  const cardRefs = useRef([]);

  // when mouse moves over a card, rotate the glow effect
  const handleMouseMove = (index) => (e) => {
    // get the current card
    const card = cardRefs.current[index];
    if (!card) return;

    // get the mouse position relative to the card
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    // calculate the angle from the center of the card to the mouse
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

    // adjust the angle so that it's between 0 and 360
    angle = (angle + 360) % 360;

    // set the angle as a CSS variable
    card.style.setProperty("--start", angle + 60);
  };

  // return the card component with the mouse move event
  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
    >
      <div className="glow"></div>
      <div className="mb-5 text-center">
        <h2 className="text-3xl font-semibold">{card.company}</h2>
      </div>
      <div className="mb-3">
        <p className="text-white-50 text-xl font-medium flex items-center justify-center gap-1">
          <span className="flex gap-1">
            <img src="/images/star.png" alt="star" className="w-4 h-4" />
            <img src="/images/star.png" alt="star" className="w-4 h-4" />
            <img src="/images/star.png" alt="star" className="w-4 h-4" />
          </span>
          <span className="mx-2">Highlight</span>
          <span className="flex gap-1">
            <img src="/images/star.png" alt="star" className="w-4 h-4" />
            <img src="/images/star.png" alt="star" className="w-4 h-4" />
            <img src="/images/star.png" alt="star" className="w-4 h-4" />
          </span>
        </p>
      </div>
      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;