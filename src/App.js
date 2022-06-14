import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/mainContent/Home/Home";
import Dashboard from "./components/mainContent/New Collection/CreateCollection";
import CollectionDetails from "./components/mainContent/Collection Details/CollectionDetails";
import Footer from "./components/footer/Footer";
import AllCollections from "./components/mainContent/All Collections/AllCollections";
import NotFound from "./components/404 Page/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/all-collections" element={<AllCollections />} />
        <Route path="/create-collection" element={<Dashboard />}></Route>
        <Route path="/collections/:slug" element={<CollectionDetails />} />
        <Route
          exact
          path="/multi-page-gallery"
          element={<Navigate to="/home" replace />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
