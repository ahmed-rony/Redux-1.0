import ReducerCount from './Component/ReducerCount/ReducerCount';
import PatientManagement from './Component/PatientManagement/PatientManagement';
import Shop from './Components/Shop/Shop';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <>
      <div style={{textAlign:'center',background:'#3D5B59',color:'#fff'}}>
        <Cart></Cart>
        <Shop></Shop>
        
      </div>



    {/* ================================================================= */}

    {/* <div style={{textAlign:'center',background:'#3D5B59',color:'#fff'}}>
      <h1>Home Page</h1>
      <ReducerCount></ReducerCount>
      <PatientManagement></PatientManagement>
    </div> */}
    </>
  );
}

export default App;
