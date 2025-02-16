import React from "react";

const UnoCard = ({ number, color, isWild = false, isSkip = false }) => {
  const gradients = {
    red: "from-red-500 to-red-600",
    blue: "from-blue-500 to-blue-600",
    yellow: "from-yellow-400 to-yellow-500",
    green: "from-green-500 to-green-600",
    black: "from-gray-900 to-black",
  };

  return (
    <div
      className={`flex items-center justify-center h-64 w-48 bg-gradient-to-br ${gradients[color]} rounded-2xl shadow-2xl relative overflow-hidden`}
    >
      <div className="absolute inset-0 border-4 border-white/20 rounded-2xl"></div>
      {!isWild && !isSkip && (
        <div className="absolute w-32 h-32 bg-white/10 rounded-full"></div>
      )}

      {!isWild && !isSkip ? (
        <>
          <div className="absolute top-4 left-4 text-white text-2xl font-bold drop-shadow">
            {number}
          </div>
          <div className="absolute bottom-4 right-4 text-white text-2xl font-bold drop-shadow rotate-180">
            {number}
          </div>
          <div className="text-white text-9xl font-bold drop-shadow-lg z-10">
            {number}
          </div>
        </>
      ) : isSkip ? (
        <>
          <div className="absolute top-4 left-4 text-white text-2xl font-bold drop-shadow">
            ⛔
          </div>
          <div className="absolute bottom-4 right-4 text-white text-2xl font-bold drop-shadow rotate-180">
            ⛔
          </div>
          <div className="text-white text-8xl font-bold drop-shadow-lg z-10">
            ⛔
          </div>
        </>
      ) : (
        <div className="flex flex-wrap justify-center items-center gap-2">
          <div className="w-16 h-16 bg-red-500 rounded-full"></div>
          <div className="w-16 h-16 bg-blue-500 rounded-full"></div>
          <div className="w-16 h-16 bg-yellow-400 rounded-full"></div>
          <div className="w-16 h-16 bg-green-500 rounded-full"></div>
        </div>
      )}
    </div>
  );
};

export const RedSkip = () => <UnoCard color="red" isSkip={true} />;
export const BlueSkip = () => <UnoCard color="blue" isSkip={true} />;
export const YellowSkip = () => <UnoCard color="yellow" isSkip={true} />;
export const GreenSkip = () => <UnoCard color="green" isSkip={true} />;

// Predefined red UNO cards
export const Red0 = () => <UnoCard number={0} color="red" />;
export const Red1 = () => <UnoCard number={1} color="red" />;
export const Red2 = () => <UnoCard number={2} color="red" />;
export const Red3 = () => <UnoCard number={3} color="red" />;
export const Red4 = () => <UnoCard number={4} color="red" />;
export const Red5 = () => <UnoCard number={5} color="red" />;
export const Red6 = () => <UnoCard number={6} color="red" />;
export const Red7 = () => <UnoCard number={7} color="red" />;
export const Red8 = () => <UnoCard number={8} color="red" />;
export const Red9 = () => <UnoCard number={9} color="red" />;

// Predefined blue UNO cards
export const Blue0 = () => <UnoCard number={0} color="blue" />;
export const Blue1 = () => <UnoCard number={1} color="blue" />;
export const Blue2 = () => <UnoCard number={2} color="blue" />;
export const Blue3 = () => <UnoCard number={3} color="blue" />;
export const Blue4 = () => <UnoCard number={4} color="blue" />;
export const Blue5 = () => <UnoCard number={5} color="blue" />;
export const Blue6 = () => <UnoCard number={6} color="blue" />;
export const Blue7 = () => <UnoCard number={7} color="blue" />;
export const Blue8 = () => <UnoCard number={8} color="blue" />;
export const Blue9 = () => <UnoCard number={9} color="blue" />;

// Predefined yellow UNO cards
export const Yellow0 = () => <UnoCard number={0} color="yellow" />;
export const Yellow1 = () => <UnoCard number={1} color="yellow" />;
export const Yellow2 = () => <UnoCard number={2} color="yellow" />;
export const Yellow3 = () => <UnoCard number={3} color="yellow" />;
export const Yellow4 = () => <UnoCard number={4} color="yellow" />;
export const Yellow5 = () => <UnoCard number={5} color="yellow" />;
export const Yellow6 = () => <UnoCard number={6} color="yellow" />;
export const Yellow7 = () => <UnoCard number={7} color="yellow" />;
export const Yellow8 = () => <UnoCard number={8} color="yellow" />;
export const Yellow9 = () => <UnoCard number={9} color="yellow" />;

// Predefined green UNO cards
export const Green0 = () => <UnoCard number={0} color="green" />;
export const Green1 = () => <UnoCard number={1} color="green" />;
export const Green2 = () => <UnoCard number={2} color="green" />;
export const Green3 = () => <UnoCard number={3} color="green" />;
export const Green4 = () => <UnoCard number={4} color="green" />;
export const Green5 = () => <UnoCard number={5} color="green" />;
export const Green6 = () => <UnoCard number={6} color="green" />;
export const Green7 = () => <UnoCard number={7} color="green" />;
export const Green8 = () => <UnoCard number={8} color="green" />;
export const Green9 = () => <UnoCard number={9} color="green" />;

// Wild Card
export const WildCard = () => <UnoCard color="black" isWild={true} />;