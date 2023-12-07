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
            category: "general",
          },
        }
      )
      .then((response) => {
        setArticles(response.data.articles);
        console.log(response.data);
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
       keyExtractor={(item) => `${item.url}-${item.publishedAt}-${item.source.name}-${item.author}`}
        renderItem={({ item }) => (
          <Card
            urlToImage={item.urlToImage}
            title={item.title}
            description={item.description}
            author={item.author}
            publishedAt={item.publishedAt}
            sourceName={item.source.name}
            url={item.url}
          />
        )}
      />

    </View>
  );
}
