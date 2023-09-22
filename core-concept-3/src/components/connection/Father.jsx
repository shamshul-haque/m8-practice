import Brother from "./Brother";
import Myself from "./Myself";

const Father = () => {
  return (
    <div>
      <h2>Father</h2>
      <section className="flex">
        <Myself />
        <Brother />
      </section>
    </div>
  );
};

export default Father;
