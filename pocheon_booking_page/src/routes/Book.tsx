import { SyntheticEvent } from "react";
import Title from "../component/title";

function Book() {

  function handleSubmit(event: SyntheticEvent){
    event.preventDefault();
    console.log(event);
  }


  return <div>
    <Title />
    <form action="" onSubmit={handleSubmit}>
      <input placeholder="1"></input>
      <input placeholder="2"></input>
      <input placeholder="3"></input>
      <button> submit</button>
    </form>
  </div>
}

export default Book;