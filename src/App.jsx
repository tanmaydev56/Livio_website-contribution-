import "./App.css";
import Main from "./pages/Main.jsx";
import FounderPage from "./pages/FoundersPage.jsx";
import ResultPage from "./pages/ResultPage.jsx";
import Bathroom from "./pages/bathroom.jsx";
import Bedroom from "./pages/bedroom.jsx";
import LivingRoom from "./pages/livingRoom.jsx";
import Kitchen from "./pages/kitchen.jsx";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Categories from "./pages/Categories.jsx";
import User from "./pages/userDetails.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import ProductPage2 from "./pages/ProductPage2.jsx";
import ProductPage3 from "./pages/ProductPage3.jsx";
import ProductPage4 from "./pages/ProductPage4.jsx";
import ProductPage5 from "./pages/ProductPage5.jsx";
import ProductPage6 from "./pages/ProductPage6.jsx";
import ProductPage7 from "./pages/ProductPage7.jsx";
import ProductPage8 from "./pages/ProductPage8.jsx";
import AccountUser from "./pages/AccountPageUser.jsx";
import AccountSeller from "./pages/AccountPageSeller.jsx";
import SearchPage from "./pages/Terms.jsx";
import ContactPage from "./pages/ContactUs";
import Loginn from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import ComparisonPage from "./pages/comparisonpage.jsx";
import CheckOutLogin from "./pages/CheckOutLogin.jsx";
import CheckoutAddress from "./pages/CheckoutAddress.jsx";
import CheckoutPayment from "./pages/CheckoutPayment.jsx";
import CheckoutOrder from "./pages/CheckoutOrder.jsx";
import CheckoutDone from "./pages/CheckoutDone.jsx";
import Cart from "./pages/cart.jsx";
import Privacy from "./pages/Privacy.jsx";
import FaqSeciton from "./pages/FaqSection.jsx";
import Faq from "./pages/Faq.jsx";
import Wishlist from './pages/wishlist.jsx';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import TheDashboard from "./pages/TheDashboard.jsx";
import AnalyticsPage from "./pages/AnalyticsPage.jsx";
import Terms from "./pages/Terms.jsx";
import Profile from "./pages/Profilepage.jsx";
import Customer from "./pages/Customer.jsx";
import Products from "./pages/Products.jsx";
import ProductsPage1 from "./pages/ProductsPage1.jsx";
import Product from "./components/popularProduct.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import AddAddress from "./pages/AddAddress.jsx";
import Footer from "./pages/Language.jsx";
import Help from "./pages/Help.jsx";
import NotificationSettings from "./components/NotificationSettings.jsx";
import AddressPage from './pages/AddressPage';
import CustomerPage from './pages/CustomerPage'; 
import ProductsPagee from './pages/ProductsPagee'; 


function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      scroll.scrollToTop({ duration: 500 });
    }, [pathname]);

    return null;
  };

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route
           path="/"
           element={<Navigate replace to="/login" />}
           />
          <Route
            path="/home"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/bedroom"
            element={
              <Layout>
                <Bedroom />
              </Layout>
            }
          />
          <Route
            path="/privacy"
            element={
              <Layout>
                <Privacy />
              </Layout>
            }
          />
          <Route
            path="/faq"
            element={
              <Layout>
                <Faq />
              </Layout>
            }
          />
          <Route
            path="/terms"
            element={
              <Layout>
                <Terms />
              </Layout>
            }
          />
          <Route
            path="/bathroom"
            element={
              <Layout>
                <Bathroom />
              </Layout>
            }
          />
          <Route
            path="/living"
            element={
              <Layout>
                <LivingRoom />
              </Layout>
            }
          />
          <Route
            path="/kitchen"
            element={
              <Layout>
                <Kitchen />
              </Layout>
            }
          />
          <Route
            path="/categories"
            element={
              <Layout>
                <Categories />
              </Layout>
            }
          />
          <Route
            path="/productspage"
            element={
              <Layout>
                <ProductPage />
              </Layout>
            }
          />
          <Route
            path="/productThree"
            element={
              <Layout>
                <Products />
              </Layout>
            }
          />
          <Route
            path="/product1"
            element={
              <Layout>
                <ProductPage />
              </Layout>
            }
          />
          <Route
            path="/product2"
            element={
              <Layout>
                <ProductPage2 />
              </Layout>
            }
          />
          <Route
            path="/product3"
            element={
              <Layout>
                <ProductPage3 />
              </Layout>
            }
          />
          <Route
            path="/product4"
            element={
              <Layout>
                <ProductPage4 />
              </Layout>
            }
          />
          <Route
            path="/product5"
            element={
              <Layout>
                <ProductPage5 />
              </Layout>
            }
          />
          <Route
            path="/product6"
            element={
              <Layout>
                <ProductPage6 />
              </Layout>
            }
          />
          <Route
            path="/product7"
            element={
              <Layout>
                <ProductPage7 />
              </Layout>
            }
          />
          <Route
            path="/product8"
            element={
              <Layout>
                <ProductPage8 />
              </Layout>
            }
          />
          <Route
            path="/result"
            element={
              <Layout>
                <ResultPage />
              </Layout>
            }
          />
          <Route
            path="/AccountUser"
            element={
              <Layout>
                <AccountUser />
              </Layout>
            }
          />
          <Route
            path="/AccountSeller"
            element={
              <Layout>
                <AccountSeller />
              </Layout>
            }
          />
          <Route
            path="/comparison"
            element={
              <Layout>
                <ComparisonPage />
              </Layout>
            }
          />
          <Route
            path="/aboutUs"
            element={
              <Layout>
                <FounderPage />
              </Layout>
            }
          />
          <Route
            path="/search"
            element={
              <Layout>
                <SearchPage />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <ContactPage />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <Layout>
                <Loginn />
              </Layout>
            }
          />
          <Route
            path="/cart"
            element={
              <Layout>
                <Cart />
              </Layout>
            }
          />
          <Route
            path="/checkoutlogin"
            element={
              <Layout>
                <CheckOutLogin />
              </Layout>
            }
          />
          <Route
            path="/checkoutorder"
            element={
              <Layout>
                <CheckoutOrder />
              </Layout>
            }
          />
          <Route
            path="/checkoutaddress"
            element={
              <Layout>
                <CheckoutAddress />
              </Layout>
            }
          />
          <Route
            path="/checkoutpayment"
            element={
              <Layout>
                <CheckoutPayment />
              </Layout>
            }
          />
          <Route
            path="/checkoutdone"
            element={
              <Layout>
                <CheckoutDone />
              </Layout>
            }
          />
          <Route
            path="/Signup"
            element={
              <Layout>
                <Signup />
              </Layout>
            }
          />
          <Route
            path="/faq"
            element={
              <Layout>
                <Faq />
              </Layout>
            }
          />
          <Route
            path="/faqsection"
            element={
              <Layout>
                <FaqSeciton />
              </Layout>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Layout>
                <TheDashboard />
              </Layout>
            }
          />
          <Route
          path="/analytics"
          element={
            <Layout>
              <AnalyticsPage />
            </Layout>
            }
          />
          <Route
            path="/profile"
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />
          <Route
            path="/customers"
            element={
              <Layout>
                <Customer />
              </Layout>
            }
          />
          <Route
            path="/productTwo"
            element={
              <Layout>
                <Product />
              </Layout>
            }
          />
          <Route
            path="/products"
            element={
              <Layout>
                <ProductsPage1 />
              </Layout>
            }
          />
          <Route
            path="*"
            element={
              <Layout>
                <ErrorPage />
              </Layout>
            }
          />
          <Route
            path="/addAddress"
            element={
              <Layout>
                <AddAddress />
              </Layout>
            }
          />
          <Route
            path="/settings"
            element={
              <Layout>
                <User />
              </Layout>
            }
          />
           <Route
            path="/editProfile"
            element={
              <Layout>
                <Main />
              </Layout>
            }
          />
          <Route
            path="/help"
            element={
              <Layout>
                <Help />
              </Layout>
            }
          />
          <Route
            path="/language"
            element={
              <Layout>
                <Footer />
              </Layout>
            }
          />
          <Route
            path="/wishlist"
            element={
              <Layout>
                <Wishlist />
              </Layout>
            }
          />
          <Route
            path="/main"
            element={
              <Layout>
                <Main />
              </Layout>
            }
          />
          <Route
            path="/notifications"
            element={
              <Layout>
                <NotificationSettings />
              </Layout>
            }
          />

         <Route 
          path="/address" 
          element={
            <Layout>
              <AddressPage />
            </Layout>
          } 
        />

          <Route 
          path="/customerpage" 
          element={
          <Layout>
            <CustomerPage />
            </Layout>
          } 
          />

          <Route 
          path="/productspagee" 
          element={
          <Layout>
            <ProductsPagee />
            </Layout>
          } 
          />

            
         

          



        </Routes>
      </Router>
    </div>
  );
}

export default App;
