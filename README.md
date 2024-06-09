# NewsApp
A React Native application to display news articles using custom components and FlatList.

## Description
NewsApp is a simple application that showcases news articles using custom components and the FlatList component in React Native. It also features a horizontal scrolling banner for highlighting news.

## Features
- Display news articles with a title, description, and author.
- Horizontal scrolling banner for featured news.
- Uses custom components for better code organization and reusability.

   import {Image, ScrollView} from 'react-native';
   import React from 'react';
   import styles from './styles';
   import news_banner_data from '../../../news_banner_data.json';
   
   const HorizontalNewsCard = () => {
     return (
       <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
         {news_banner_data.map(bannerNews => (
           <Image
             key={bannerNews.id}
             style={styles.banner_image}
             source={{uri: bannerNews.imageUrl}}
           />
         ))}
       </ScrollView>
     );
   };
   
   export default HorizontalNewsCard;


import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const NewsCard = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.news.imageUrl}} />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{props.news.title}</Text>
        <Text style={styles.description}>{props.news.description}</Text>
        <Text style={styles.author}>{props.news.author}</Text>
      </View>
    </View>
  );
};

export default NewsCard;


import {
  SafeAreaView,
  Text,
  FlatList,
} from 'react-native';
import React from 'react';
import styles from './styles';
import news_data from '../../../news_data.json';
import {NewsCard, HorizontalNewsCard} from '../../components/index';

const App = () => {
  const renderNews = ({item}) => <NewsCard news={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>News</Text>
      <FlatList
        ListHeaderComponent={() => <HorizontalNewsCard />}
        keyExtractor={item => item.u_id.toString()}
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
};

export default App;




This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
