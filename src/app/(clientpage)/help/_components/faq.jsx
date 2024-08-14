const { Accordion } = require("flowbite-react");

const FAQ = ({ payload }) => {
  return (
    <Accordion>
      {payload.map((val, idx) => {
        console.log(val);
        return (
          <Accordion.Panel key={idx}>
            <Accordion.Title>
              <p className="mb-2 text-gray-500 dark:text-gray-400 text-[#00305E]">
                {val.question}
              </p>
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400 text-[#00305E]">
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
