import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  documentId,
  addDoc,
  setDoc,
  updateDoc,
  getDoc,
  query,
  where,
  getDocs,
  deleteField,
  deleteDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { CUSTOMERS_COLLECTION } from "./config/databaseConfig";
import useAuth from "./useAuth";

const useCreateCustomer = () => {
  const [database, setDatabase] = useState();
  const { app } = useAuth();

  useEffect(() => {
    const database = getFirestore(app);
    setDatabase(database);
  }, [app]);

  const createCustomer = async (newCustomer) => {
    if (database) {
      const customersRef = collection(database, CUSTOMERS_COLLECTION);
      const docRef = doc(customersRef);
      const result = await setDoc(docRef, {
        customerName: newCustomer.customerName,
        customerID: docRef.id,
        city: newCustomer.city,
        state: newCustomer.state,
        streetAddress: newCustomer.streetAddress,
        zipCode: Number(newCustomer.zipCode),
      });
      return result;
    }
    return null;
  };

  return { createCustomer };
};

export default useCreateCustomer;
