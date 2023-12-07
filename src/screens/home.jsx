import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import Card from "../components/Card";
import axios from "axios";

export default function Home() {
  const [articles, setArticles] = useState([]);

  const getNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=e7248f0092684951ac94e8f972d19958",
        {
          params: {
            category: "technology",
          },
        }
      )
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <View>
      <FlatList
        data={articles}
        keyExtractor={(item) => item.url} 
        renderItem={({ item }) => (
          <Card
            urlToImage={item.urlToImage}
            title={item.title}
            description={item.description}
            author={item.author}
            publishedAt={item.publishedAt}
            sourceName={item.source.name}
            url={item.url}
            keyExtractor={(item)=>item.title}

          />
        )}
      />
    </View>
  );
}
