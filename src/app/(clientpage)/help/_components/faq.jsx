const { Accordion } = require("flowbite-react");

const FAQ = ({ payload }) => {
  return (
    <Accordion collapseAll>
      {payload.map((val, idx) => {
        console.log(val);
        return (
          <Accordion.Panel key={idx}>
            <Accordion.Title>
              <p className="text-[14px] md:text-[18px] lg:text-[16px] mb-2 text-gray-500 dark:text-gray-400 text-[#00305E]">
                {val.question}
              </p>
            </Accordion.Title>
            <Accordion.Content>
              <p className="text-[14px] md:text-[18px] lg:text-[16px] mb-2 text-gray-500 dark:text-gray-400 text-[#00305E] text-justify text-pretty">
                {val.answer}
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        );
      })}
    </Accordion>
  );
};

export default FAQ;
