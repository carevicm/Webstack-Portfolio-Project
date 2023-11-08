"use client";
import React, { useState, useEffect } from "react";
import { getBook, getSampleToDoList } from "../../api/send/apiService";

import HeaderSection from "./HeaderSection";
import SampleTodoListSection from "./SampleTodoListSection";
import BookSearchSection from "./BookSearchSection";
import LoadingOverlay from "../utils/LoadingOverlay";

function BooksWithObservables() {
  const [queryField, setQueryField] = useState("");
  const [items, setItems] = useState([]);
  const [sampleTodoList, setSampleTodoList] = useState([]);
  const [displayedTodoList, setDisplayedTodoList] = useState([]);
  const [allPages, setAllPages] = useState(0);
  const [showPagination, setShowPagination] = useState(false);
  const [currentBookPage, setCurrentBookPage] = useState(1);
  const [displayedBooks, setDisplayedBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expandedBookId, setExpandedBookId] = useState(null);
  const [windowWidth, setWindowWidth] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

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

  const fetchSampleData = async () => {
    try {
      setLoading(true);
      const list = await getSampleToDoList();
      setSampleTodoList(list);
      setAllPages(Math.ceil(list.length / 10));
      setDisplayedTodoList(list.slice(0, 10));
      setShowPagination(true);
      setCurrentPage(1);
      setTimeout(() => {
        setLoading(false);
      }, 300);
    } catch (error) {
      console.error("Error fetching sample data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchSampleToDoList = async () => {
      const list = await getSampleToDoList();
      setSampleTodoList(list);
      setAllPages(Math.ceil(list.length / 10));
    };

    fetchSampleToDoList();
  }, []);

  const handleSearchChange = async (query) => {
    setLoading(true);
    const results = await getBook(query);
    setItems(results.items || []);
    setLoading(false);
  };

  const handleInputChange = (e) => {
    setQueryField(e.target.value);
    handleSearchChange(e.target.value);
    setCurrentBookPage(1);
  };

  const handleTodoPageChange = (newPage) => {
    setCurrentPage(newPage);
    const start = (newPage - 1) * 10;
    const end = start + 10;
    setDisplayedTodoList(sampleTodoList.slice(start, end));
  };

  useEffect(() => {
    const start = (currentBookPage - 1) * 12;
    const end = start + 12;
    setDisplayedBooks(items.slice(start, end));
  }, [items, currentBookPage]);

  const handleBookPageChange = (newPage) => {
    setLoading(true);

    setTimeout(() => {
      setCurrentBookPage(newPage);
      const start = (newPage - 1) * 12;
      const end = start + 12;
      setDisplayedBooks(items.slice(start, end));
      setLoading(false);
    }, 300);
  };

  const truncateText = (text, length = 50) => {
    if (text.length <= length) return text;
    return text.substring(0, length) + "...";
  };

  const handleReadMore = (bookId) => {
    if (expandedBookId === bookId) {
      setExpandedBookId(null);
    } else {
      setExpandedBookId(bookId);
    }
  };

  return (
    <section
      className="w-full bg-[#121212] p-5 mb-4 pt-20 text-white"
      id="books"
    >
      {loading && <LoadingOverlay />}
      <HeaderSection />
      <SampleTodoListSection
        fetchSampleData={fetchSampleData}
        displayedTodoList={displayedTodoList}
        showPagination={showPagination}
        currentPage={currentPage}
        handleTodoPageChange={handleTodoPageChange}
        allPages={allPages}
      />
      <BookSearchSection
        queryField={queryField}
        handleInputChange={handleInputChange}
        displayedBooks={displayedBooks}
        currentBookPage={currentBookPage}
        booksPerPage={12}
        handleBookPageChange={handleBookPageChange}
        items={items}
        itemsPerPage={10}
        windowWidth={windowWidth}
        expandedBookId={expandedBookId}
        handleReadMore={handleReadMore}
        truncateText={truncateText}
      />
    </section>
  );
}

export default BooksWithObservables;
