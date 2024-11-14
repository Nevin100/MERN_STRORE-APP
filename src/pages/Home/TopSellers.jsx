import { useEffect, useState } from "react";

const categories = [
  "Choose a genre",
  "Business",
  "Fiction",
  "Articles",
  "Horror",
  "Adventures",
];

const TopSellers = () => {
  const [books, setbooks] = useState([]);
  const [selectedCategory, setselectedCategory] = useState("Choose a genre");

  useEffect(() => {
    fetch("books.json")
      .then((response) => response.json())
      .then((data) => setbooks(data));
  }, []);

  const filteredBooks =
    selectedCategory === "Choose a genre"
      ? books
      : books.filter(
          (book) =>
            book.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Top Selling Books</h2>
      {/*Category Filtering*/}
      <div className="mb-8 flex items-center">
        <select
          onChange={(e) => setselectedCategory(e.target.value)}
          name="category"
          id="category"
          className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      {filteredBooks.map((book, index) => (
        <div key={index}>{book.title}</div>
      ))}
    </div>
  );
};

export default TopSellers;
