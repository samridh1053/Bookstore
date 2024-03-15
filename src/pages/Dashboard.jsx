import React from "react";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { getBooks } from "../services/GetBooks";

const Dashboard = () => {
    async function getBookList() {
        const books = await getBooks();
        console.log(books)

      }
      useEffect(() => {
        getBookList();
      }, []);
    return (
        <div>

            <Navbar />
            
            <div style={{ height: "200vh", paddingTop: "60px" }}>dashboard</div>
        </div>
    );
};

export default Dashboard;
