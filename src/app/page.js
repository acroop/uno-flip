// pages/index.js
import {
  Red0,
  Red1,
  Red2,
  Red3,
  Red4,
  Red5,
  Red6,
  Red7,
  Red8,
  Red9,
  Blue0,
  Blue1,
  Blue2,
  Blue3,
  Blue4,
  Blue5,
  Blue6,
  Blue7,
  Blue8,
  Blue9,
  Yellow0,
  Yellow1,
  Yellow2,
  Yellow3,
  Yellow4,
  Yellow5,
  Yellow6,
  Yellow7,
  Yellow8,
  Yellow9,
  Green0,
  Green1,
  Green2,
  Green3,
  Green4,
  Green5,
  Green6,
  Green7,
  Green8,
  Green9,
  WildCard,
  RedSkip,
  AllSkipOrange,
  AllSkipBlue,
  AllSkipPurple,
  AllSkipPink
} from "./components/DarkCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">UNO Cards</h1>

      {/* Wild Card */}
      <h2 className="text-2xl font-semibold mt-6 mb-4">Wild Card</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <WildCard />
      </div>

      {/* Red Cards */}
      <h2 className="text-2xl font-semibold mt-6 mb-4">Red Cards</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <Red0 />
        <Red1 />
        <Red2 />
        <Red3 />
        <Red4 />
        <Red5 />
        <Red6 />
        <Red7 />
        <Red8 />
        <Red9 />
        <RedSkip/>
        <AllSkipOrange/>

      </div>

      {/* Blue Cards */}
      <h2 className="text-2xl font-semibold mt-6 mb-4">Blue Cards</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <Blue0 />
        <Blue1 />
        <Blue2 />
        <Blue3 />
        <Blue4 />
        <Blue5 />
        <Blue6 />
        <Blue7 />
        <Blue8 />
        <Blue9 />
        <AllSkipBlue/>
      </div>

      {/* Yellow Cards */}
      <h2 className="text-2xl font-semibold mt-6 mb-4">Yellow Cards</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <Yellow0 />
        <Yellow1 />
        <Yellow2 />
        <Yellow3 />
        <Yellow4 />
        <Yellow5 />
        <Yellow6 />
        <Yellow7 />
        <Yellow8 />
        <Yellow9 />
      </div>

      {/* Green Cards */}
      <h2 className="text-2xl font-semibold mt-6 mb-4">Green Cards</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <Green0 />
        <Green1 />
        <Green2 />
        <Green3 />
        <Green4 />
        <Green5 />
        <Green6 />
        <Green7 />
        <Green8 />
        <Green9 />
      </div>
    </div>
  );
}