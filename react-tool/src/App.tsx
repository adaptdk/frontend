import { useEffect, useState } from "react";

import "./App.css";

import { Animal, User } from "sanity/schema";
import imageUrlBuilder from "@sanity/image-url";

const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: "mhxmk8sp",
  dataset: "production",
  // apiVersion: "2021-03-25", // use current UTC date - see "specifying API version"!
  token:
    "skdR7CciwtBUGU1lvdlrw9wmW8LLtOintRxN7l0ysARqvVvEXwEmPWL4p3JRfwk8jDTaC1Fhc1Itx7Up8BBbSRjbcnzd4Z8Guw3A4SSLIbyao9yGUgfjBYyWLDssanD7byd9tbNsNmqxdSFCmHHawb6X6ain9TOkVVl5EMVLekANNz6LUepP", // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
const urlFor = (source: User["profileimage"]) => {
  if (!source) return "";
  return builder.image(source);
};

const getAllAnimals = async () => {
  // const response = await sanity.getAll("animal");

  // const query = '*[_type == "bike" && seats >= $minSeats] {name, seats}';
  // const params = { minSeats: 2 };
  const query = '*[_type == "animal"]';
  const params = { minSeats: 2 };

  const animals = await client.fetch(query, params);

  return animals;
};

const getUsers = async () => {
  const query = `*[_type == "user"]{
  name,
    "favoriteanimal": *[_type=='animal' && references(^._id)]{ 
  	name,
  	email,
  	password,
    profileimage
	}`;

  const users = await client.fetch(query);

  console.log(users);

  return users;
};

function App() {
  const [animals, setAnimals] = useState<Animal[] | null>(null);
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const animalsData = await getAllAnimals();
      const users = await getUsers();
      if (animalsData) setAnimals(animalsData);
      if (users) setUsers(users);
    };

    fetch();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {users?.map((user) => {
          return (
            <div key={user._id}>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.password}</p>
              {user.profileimage && (
                <img
                  alt={user.profileimage.caption}
                  src={urlFor(user.profileimage)
                    // @ts-ignore
                    .width(300)
                    .url()}
                />
              )}
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;
