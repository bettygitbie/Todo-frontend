
import TodoMain from "./components/TodoMain/TodoMain";
import Heading from "./components/Heading/Heading";


export default function Home() {

  
  return (
    <div className="min-h-screen min-w-400 font-[family-name:var(--font-geist-sans)]">
      <Heading />
      <TodoMain />
     
    </div>
  );
}
