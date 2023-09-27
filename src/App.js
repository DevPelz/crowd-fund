import CreateCampaign from "./component/CreateCampaign";
import Header from "./component/Header";
import ViewCampaigns from "./component/campaigns";
import useCampaign from "./hooks/usecampaign";

function App() {
  const count = useCampaign();
  console.log(count);

  return (
    <div className="App">
      <Header />
      <main className="mt-10">
        <CreateCampaign />
        <ViewCampaigns />
      </main>
    </div>
  );
}

export default App;
