import React, { useState, useEffect } from 'react';
// import pkg from 'react-router-dom';
// import { useHistory } from "react-router-dom";

function SearchBar() {

    const data = [
        {searchTerm: "Formation Video : Slow Way", title: "Formation Video : Slow Way", link: "/formation/4"},
        {searchTerm: "Formation Video : Rest", title: "Formation Video : Rest", link: "/formation/3"},
        {searchTerm: "Formation Video : Child of the Creator", title: "Formation Video : Child of the Creator", link: "/formation/2"},
        {searchTerm: "Formation Video : Colors of Fall", title: "Formation Video : Colors of Fall", link: "/formation/1"},
        {searchTerm: " Vocatio Reimagined : Episode 1 : Creating Space in a Distracted World", title: "Episode 1 : Creating Space in a Distracted World", link: "/podcasts/1"},
        {searchTerm: " Vocatio Reimagined : Episode 1 : Radical Hospitality", title: "Episode 2 : Radical Hospitality", link: "/podcasts/2"},
        {searchTerm: " Vocatio Reimagined : Episode 1 : Creating Space in a Distracted World", title: "Episode 3 : Creating Space in a Distracted World", link: "/podcasts/3"},
        {searchTerm: " Vocatio Reimagined : Episode 1 : When Your Calling and Career Don't Align", title: "Episode 4 : When Your Calling and Career Don't Align", link: "/podcasts/4"}
    ]
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
//   const navigate = useHistory();

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filteredSuggestions = data.filter(item =>
        item.searchTerm.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filteredSuggestions.slice(0, 10)); // Limit to 10 suggestions
    } else {
      setSuggestions([]);
    }
  }, [searchTerm, data]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.searchTerm);
    setSuggestions([]);
    window.location.href=suggestion.link;
    // navigate.push(suggestion.link)

  };

  return (
    <div class=" w-[300px] z-50 top-0 bottom-0 left-0 right-0 m-auto flex flex-col items-center">
        <input
            class="relative block text-gray-800 m-auto mb-1 z-50 border-0  w-[300px] h-[40px] bg-gray-200 focus:border-blue-600  rounded-full"
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search..."
        />
        
        {suggestions.length > 0 && (
            <ul class=" absolute top-[70px] my-4  w-[300px] h-auto z-50 bg-gray-800  mt-1 rounded-lg  overflow-y-auto  p-2">
                {suggestions.map((suggestion, index) => (
                    
                    <li class={index == suggestions.length - 1 ? " cursor-pointer bg-gray-800 border-gray-400  text-gray-200 flex flex-col items-start  p-4" : "cursor-pointer  mb-4 bg-gray-800 border-gray-400 border-b  text-gray-200 flex flex-col items-start  p-4"} key={index} onClick={() => handleSuggestionClick(suggestion)}>
                        <h3 class="text-left font-bold text-md">{suggestion.title}</h3>

                        <p class="text-left my-2 text-sm opacity-70">
                        {suggestion.searchTerm}
                        </p>
                    </li>
                ))}
            </ul>
        )}
    </div>
  );
}

export default SearchBar;