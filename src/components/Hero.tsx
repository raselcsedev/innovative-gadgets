
const Hero = () => {
  return (
    <div className='bg-[#E3EDF6] mt-4  '>
        <div className='container grid md:grid-cols-2 py-8'>
            <div className=" flex items-center">
                <div className= "max-w-[450px] space-y-4">

                
                <p className='text-topHeadingSecondary'>Starting At <span>$999.00</span></p>
                <h2>The best note book collection 2024</h2>
                <h3 className="text-2xl font-['Orgeno, cursive']">
                    Exclusive offer <span className='text-red-600'>-10%</span> off this week
                </h3>
                <a className='inline-block bg-white rounded-md px-6 py-3  hover:bg-accent hover:text-white ' href="">Shop Now</a>
                </div>

            </div>

            <div>
              <img className="ml-auto " src="/hero.png" alt="hero_image"/>
            </div>

        </div>
    </div>
  )
}

export default Hero