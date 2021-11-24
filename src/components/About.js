import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Bio
                        <br className="hidden lg:inline-block" />
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I am an Indian American brought up in both Massachusetts and Maryland. 
                        I attended the University of Maryland, College Park and received a double degree in 
                        Mechanical Engineering and Computer Science. My interests lie in the realm of
                        Computer Science and Software Engineering. I love design and working in teams. 
                        My life to this date has been defined by both experiences and beliefs. 
                    </p>
                    <h1 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-white">
                        Education
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        University of Maryland, College Park
                        <br className="hidden lg:inline-block"/>
                        B.S. Computer Science (2018 - 2021)
                        <br className="hidden lg:inline-block"/>
                        B.S. Mechanical Engineering (2017 - 2021)
                    </p>

                    <h1 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-white">
                        Hobbies
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        My main interests include sports, fitness, travel, and reading. Regarding sports,
                        I am a soccer player at heart, but I also thoroughly enjoy playing basketball. I also 
                        am always up to play whatever, whether it be tennis, volleyball, football, etc.
                        Fitness wise, I have always been athletic, but for the past couple of years, I have spent more
                        time and effort weightlifitng, yoga, and calisthetics. 
                        An expensive hobby, I love traveling, seeing natural beauty around the world and 
                        enjoying different experiences including backpacking, sightseeing, and cultural immersion. 
                        Lastly, I enjoy a good book every once in a while. Currently, I am reading 
                        <i> Prisoners of Geography</i>
                        , a book about how history can be told by maps. 
                    </p>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./AboutPic1.jpg"
                    />
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./AboutPic2.jpg"
                    />
                </div>
            </div>
        </section>
    );
}