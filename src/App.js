// import Counter from "./components/Reducer-Hook/Counter/Counter";
// import CompleCounter from "./components/Reducer-Hook/ComplexCounter/CompleCounter";
// import Counter from "./components/Reducer-Hook/Counter/Counter";
// import Counter from "./components/higher-order/Counter";
// import HoverCounter from "./components/higher-order/HoverCounter";
import Higher from "./components/higher-order/Higher";
import styled from 'styled-components';

const DIV = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

function App() {
  return (
    <DIV>
      {/* <Counter /> */}
      {/* <CompleCounter /> */}
      <Higher />
    </DIV>
  );
}

export default App;
