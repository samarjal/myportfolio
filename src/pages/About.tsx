import './Home.css';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center mx-auto custom-bg px-12 py-20">
      <h1 className="text-5xl font-bold text-white mb-8">about me:</h1>
      <p className="text-gray-300 mb-6 text-left text-lg px-12">
        hi. i am samar. daylight coder midnight designer.<br />
        <br />i’m a full time college student who’s constantly exploring the vast realms of tech, juggling between frames and code.
        <br /><br />like andrew in "whiplash", i strive for perfection, pushing boundaries and embracing the pain that comes with growth.
        <br /><br />“the first rule of fight club is: you do not talk about fight club,” <br /> but let me tell you, my mind is a bit of a chaotic fight club right now, filled with self-doubt and endless questions.
        still, i take a page from hiccup in "how to train your dragon": “i’m not like the rest of you,” and that’s okay.
        <br />my journey is unique, and every dragon i face, every piece of tech i tackle, adds to my story.
        <br /><br />like po in "kung fu panda," i may not fit the traditional mold, but i know i have the potential to achieve greatness.
        “you have to believe,” as po’s wise master once said. and believe i do, that i’ll make it through this fog, emerging stronger and more skilled.
        <br /><br />my story is still unfolding, one frame, one line of code at a time.
        <br />[thankyou for reading about me.]
      </p>

      <p className="text-gray-300 mb-6 text-left text-2xl text-center">
        wanna know more?
         <a
          href="https://www.linkedin.com/in/kumarsamarjal/"
          className="text-blue-500 hover:text-blue-800 transition-colors duration-300 font-semibold"
        >
            - linkedin
         </a>
      </p>
    </div>
  );
}