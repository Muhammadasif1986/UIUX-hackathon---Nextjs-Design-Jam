import { FaPlus } from "react-icons/fa6";
const FAQ = () => {

  const questions = [
    "How we serve food?",
    "How is our food quality?",
    "How do we give home delivery?",
    "How can we get in touch with you?",
    "What will be delivered? And When?",
    "Is this restaurant 24 hours open?"
  ];

  return (
    <div className="p-8 font-sans flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4 text-center">Questions Looks Here</h1>
      <p className="mb-6 text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:w-10/12">
        {questions.map((question, index) => (
          <div key={index} className="border border-gray-300 bg-[#faf7f2] rounded-xl p-4 flex-wrap">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">{question}</h3>
              <button className="text-xl"><FaPlus /></button>
            </div>
              <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
