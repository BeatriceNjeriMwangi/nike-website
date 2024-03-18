import Button from '../components/Button';
import { offer } from '../assets/images';
import { arrowRight } from '../assets/icons';

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full"/>
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          We provide you
          <span className="text-coral-red"> Special</span>
          offer
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>Discover stylish Nike Arrivals.</p>
        <div className='mt-11'>
          <div className='flex flex-wrap gap-4'>
            <Button label="Shop Now" iconURL={arrowRight}></Button>
            <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"></Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialOffer;
