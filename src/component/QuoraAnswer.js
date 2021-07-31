

import { useState } from "react";



export default function QuoraAnswer() {
  let [list, setList] = useState([]);

  // 1.
  let [thought, setThought] = useState("");

  const postYourAnswer = () => {
    // const newlist = ["New Thought", ...list];
    const newlist = [thought, ...list];
    setList(newlist);

    // clear the input:thougth
    setThought("");
  };

  // 4
  const handleInputChange = (e) => {
    // console.log(e.target.value);

    const newthought = e.target.value;
    setThought(newthought);
  };

  // ENTER-2
  const handleKeyEvent = (e) => {
    // console.log(e.key, e.keyCode);
    if (e.keyCode == 13) {
      // console.log("User Has Pressed Entered....");
      postYourAnswer();
    }
  };

  return (
    <div className="m-2">
      <h1 className="bg-primary text-light p-4 rounded sticky-top">
        Write Your Answer
      </h1>

      <input
        type="text"
        className="form-control form-control-lg my-2"
        style={{ height: 100 }}

        placeholder="Post your Answer"
        value={thought} // 2.
        onChange={handleInputChange} // 3
        onKeyDown={handleKeyEvent} // ENTER-1
      />
      <br></br> <br></br>
      <input
        type="button"
        className="btn  btn-outline-primary w-100"
        value="POST YOUR Answer"
        onClick={postYourAnswer}
      />

      

      {list.map((item) => {
        return <div className="alert alert-primary mt-1">{item}</div>;
      })}
    </div>
  );
}