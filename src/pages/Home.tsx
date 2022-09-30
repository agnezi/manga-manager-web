import { CollectionActionCard } from "../components/CollectionActionCard";
import { Helmet } from "react-helmet";
import React from "react";

export const Home: React.FC = () => {
  const collections = [
    {
      name: "Naruto",
      details: "A crazy boy",
    },
    {
      name: "Rourouni Kenshin",
      details: "The samurai with an X on his face",
    },
    {
      name: "20th Century Boys",
      details: "The crazy friends",
    },
  ];

  return (
    <>
      <Helmet>Home</Helmet>
      <header></header>
      <main>
        {collections.map((collection) => (
          <React.Fragment key={collection.name + collection.details}>
            <CollectionActionCard
              name={collection.name}
              details={collection.details}
            />
          </React.Fragment>
        ))}
      </main>
      <footer></footer>
    </>
  );
};
