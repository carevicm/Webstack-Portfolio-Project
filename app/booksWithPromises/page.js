"use client";
import React, { useState, useEffect } from "react";
import { getSampleToDoList } from "../../api/send/apiService";

import HeaderSection from "./HeaderSection";
import SampleTodoList from "./SampleTodoList";

function BooksWithPromisesPage() {
  const [sampleTodoList, setSampleTodoList] = useState([]);
  const [displayedTodoList, setDisplayedTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [allPages, setAllPages] = useState(0);
  const [showPagination, setShowPagination] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null);
  const [sampleText, setSampleText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("Task complete after 2 sec");
      }, 2000);
    }).then((result) => {
      setSampleText(result);
    });
  }, []);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchSampleToDoList = async () => {
      const list = await getSampleToDoList();
      setSampleTodoList(list);
      setAllPages(Math.ceil(list.length / 10));
    };

    fetchSampleToDoList();
  }, []);

  const fetchSampleData = () => {
    setIsLoading(true);
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(getSampleToDoList());
      }, 2000);
    })
      .then((list) => {
        setSampleTodoList(list);
        setAllPages(Math.ceil(list.length / itemsPerPage));
        setDisplayedTodoList(list.slice(0, itemsPerPage));
        setShowPagination(true);
        setCurrentPage(1);
      })
      .catch((error) => {
        console.error("Error fetching sample data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleTodoPageChange = (newPage) => {
    setCurrentPage(newPage);
    const start = (newPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setDisplayedTodoList(sampleTodoList.slice(start, end));
  };

  return (
    <section
      className="w-full bg-[#121212] p-5 mb-4 pt-20 text-white"
      id="booksWithPromisse"
    >
      <HeaderSection sampleText={sampleText} />
      <SampleTodoList
        fetchSampleData={fetchSampleData}
        displayedTodoList={displayedTodoList}
        showPagination={showPagination}
        currentPage={currentPage}
        itemsPerPage={10}
        allPages={allPages}
        handleTodoPageChange={handleTodoPageChange}
        isLoading={isLoading}
      />
    </section>
  );
}

export default BooksWithPromisesPage;
