import { Routes, Route } from 'react-router-dom';

import Home from './views/Home';
import Contact from './views/Contact';
import { AllProducts } from './components/products';
import Detail from './views/Detail';
import Cart from './components/cart';

import Login from './views/Login';
import Register from './views/Register';
import { Layout } from './components/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/products" exact element={<AllProducts />}></Route>

        <Route
          path="/products/women"
          exact
          element={<AllProducts key="women" category="women" />}
        ></Route>
        <Route
          path="/products/men"
          exact
          element={<AllProducts key="men" category="men" />}
        ></Route>
        <Route
          path="/products/accessories"
          exact
          element={<AllProducts key="accessories" category="accessories" />}
        ></Route>
        <Route path="/products/contact" element={<Contact />}></Route>
        <Route path="/products/:name/:id" exact element={<Detail />}></Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="*"
          element={
            <div>
              <h2>404 Page not found</h2>
            </div>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
