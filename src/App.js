import CreateCampaign from "./component/CreateCampaign";
import Header from "./component/Header";
import useCampaign from "./hooks/usecampaign";

function App() {
  const count = useCampaign();
  console.log(count);

  return (
    <div className="App">
      <Header />
      <main className="mt-10">
        <CreateCampaign />
      </main>
    </div>
  );
}

export default App;
