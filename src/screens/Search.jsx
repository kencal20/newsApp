import React, { useState } from "react";
import { View, FlatList } from "react-native";
import SearchBar from "../components/searchBar"
import Card from "../components/Card"
import axios from "axios";

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const [articles, setArticles] = useState([]);

  const searchArticles = () => {
    axios
      .get("https://newsapi.org/v2/top-headlines?country=us&apiKey=e7248f0092684951ac94e8f972d19958", {
        params: {
          category: "general",
          q: searchText,
        },
      })
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View>
      <SearchBar searchText={searchText} setSearchText={setSearchText}  onSubmit={searchArticles}/>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <Card
            urlToImage={item.urlToImage}
            title={item.title}
            description={item.description}
            author={item.author}
            publishedAt={item.publishedAt}
            sourceName={item.source.name}
          />
        )}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
}
