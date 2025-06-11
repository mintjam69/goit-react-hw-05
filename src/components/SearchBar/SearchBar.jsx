import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Field, Form, Formik } from "formik";
import { FiSearch, FiX } from "react-icons/fi";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <header className={css.searchbar}>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          if (values.query.trim() === "") {
            toast.error("Please enter a keyword of search!");
            return;
          }
          onSearch(values.query);
          actions.resetForm();
          setInputValue("");
        }}
      >
        {({ setFieldValue }) => (
          <Form className={css.search_panel}>
            <div className={css.search_wrapper}>
              <input
                className={css.search_field}
                type="text"
                name="query"
                autoComplete="off"
                autoFocus
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                  setFieldValue("query", e.target.value);
                }}
              />
              {inputValue && (
                <button
                  type="button"
                  className={css.clear_icon}
                  onClick={() => {
                    setInputValue("");
                    setFieldValue("query", "");
                  }}
                >
                  <FiX />
                </button>
              )}
              <FiSearch className={css.search_icon} />
            </div>
            <button className={css.searchBtn} type="submit">
              Search
            </button>
            <Toaster position="top-right" reverseOrder={false} />
          </Form>
        )}
      </Formik>
    </header>
  );
};

export default SearchBar;
