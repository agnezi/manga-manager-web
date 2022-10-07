import { CollectionActionCard } from "../components/CollectionActionCard";
import { Helmet } from "react-helmet";
import React from "react";

export const Home: React.FC = () => {
  const collections = [
    {
      name: "Naruto",
      details: "A crazy boy",
      route: "/collection/naruto",
    },
    {
      name: "Rourouni Kenshin",
      details: "The samurai with an X on his face",
      route: "/collection/samuraiX",
    },
    {
      name: "20th Century Boys",
      details: "The crazy friends",
      route: "/collection/centuryBoys",
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
              route={collection.route}
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
