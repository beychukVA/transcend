import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  updateDoc,
  getDoc,
  query,
  where,
  getDocs,
  deleteField,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { CUSTOMERS_COLLECTION } from "./config/databaseConfig";
import useAuth from "./useAuth";

const useFetchCustomers = () => {
  const [database, setDatabase] = useState();
  const { app } = useAuth();
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const database = getFirestore(app);
    setDatabase(database);
  }, [app]);

  useEffect(() => {
    if (database) {
      onSnapshot(collection(database, CUSTOMERS_COLLECTION), (snapshot) => {
        snapshot.docChanges().forEach((doc) => {
          setCustomers((prev) => {
            return [...prev, doc.doc.data()];
          });
        });
      });
    }
  }, [database]);

  return { customers };
};

export default useFetchCustomers;
