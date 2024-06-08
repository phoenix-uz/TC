
import React from "react";
import BIM from "@/components/BIM";
import ContactsForm from "@/components/ContactsForm";
import MainSolvingBlock from "@/components/MainSolvingBlock";
import Products from "@/components/Products";
import ServicesBlock from "@/components/ServicesBlock";
import IntroBlock from "@/components/intro";
import OurClients from "@/components/OurClients";

const Home = () => {
  return (
    <main>
      <IntroBlock/>
      <OurClients/>
      <MainSolvingBlock/>
      <Products/>
      <ServicesBlock/>
      <BIM/>
      <ContactsForm/>
    </main>
  );
}
export default Home
