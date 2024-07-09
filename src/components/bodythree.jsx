import man from "../assets/Bodythree/man.png";

const Bodythree = () => {
  return (
    <div class=" py-[4rem] px-[10.2rem] absolute flex justify-center">
      <div>
        <p>They thoroughly analyze our industry and target audience, allowing them to develop customized 
        campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge 
        techniques have helped us stay ahead of the competition.</p>
      </div>
        <div>
            <img src={man} width={70} height={70} alt="man"/>
            <h1 class="text-black text-xl font-bold font-plus-jakarta-sans leading-9">
            Michael Kaizer
            </h1>
            <h2 class="text-neutral-400 text-base font-medium font-['Plus Jakarta Sans'] leading-7">
            CEO of Basecamp Corp
            </h2>
        </div>
    </div>
  );
};

export default Bodythree;
