import { CollectionCard } from "../components/CollectionCard";
import { CollectionResponse } from "../types/collections";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

export const Collection: React.FC = () => {
  const data = useLoaderData();
  const collections = data as CollectionResponse[];
  return (
    <>
      <Helmet>
        <title>Collection</title>
      </Helmet>
      <header></header>
      <main>
        <h1 className="text-4xl">Collection Title</h1>

        <ul>
          {collections.map((collection) => (
            <li key={collection.id}>
              <CollectionCard
                title={collection.title}
                volume={collection.volume}
                description={collection.description}
              />
            </li>
          ))}
        </ul>
      </main>
      <footer></footer>
    </>
  );
};
