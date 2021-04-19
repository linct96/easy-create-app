
interface AppProps {
  name?: string;
}
const App: React.FC<AppProps> = (props) => {
  const { name = "zhans" } = props;
  return (
    <div className="">
      <div className="grid grid-flow-row grid-rows-3 grid-cols-3 gap-0">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
    </div>
  );
};

export default App;
