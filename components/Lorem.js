import "./scss/Lorem.scss";

const Lorem = ({ paragraph = 1 }) => {
  let paragraphArray = [];

  for (let index = 0; index < paragraph; index++) {
    paragraphArray.push(
      <p key={index}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ducimus
        animi autem et! Sequi perferendis maiores totam accusantium consequatur
        amet! Totam possimus qui, ab dignissimos asperiores harum eaque soluta
        quo!
      </p>
    );
  }
  return paragraphArray;
};

export default Lorem;
